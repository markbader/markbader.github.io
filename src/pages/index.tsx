import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Card, Footer, Header, More, View } from "../components";
import * as presets from "../theme/index.module.scss";
import { getImage } from "gatsby-plugin-image";
import image from "../images/me.jpg";

export const IndexPage: React.FC<PageProps<any>> = ({ data }) => {
  const { group } = data.allMarkdownRemark;

  return (
    <View className={presets.screen}>
      <main>
        <View className={presets.landingpage}>
          <Header title="Über mich" />
          <Card image={getImage(data.file)!} expanded>
            <b>Hey, ich bin Mark!</b><br /><br />
            Ich bin Vater von zwei wundervollen Kindern, IT-System- und Software Entwickler und begeistere mich in meiner Freizeit fürs Kochen und Backen.<br /><br />
            Zurzeit studiere ich den Master Studiengang IT-Systems-Engineering am Hasso-Plattner-Institut.<br /><br />
            Ich interessiere mich vor allem für Robotik, Human-Computer-Interaction und die Entwicklung von eingebetteten Systemen. In Beruf und Studium habe ich jedoch schon vielfältige Erfahrungen rund um die Themen Anwendungsentwicklung, Netzwerktechnik, Cyber Security Management und Künstliche Intelligenz sammeln können.<br /><br />
          </Card>
        </View>
        {
          group.map((topic: any) => (
            <View key={topic.fieldValue} className={presets.page}>
              <Header title={topic.fieldValue} />
              {topic.edges.slice(0, 4).map(({ node }: any) => (
                <Card className={presets.card} key={node.fields.slug} image={getImage(node.frontmatter.image)!} onClickTo={node.fields.slug} title={node.frontmatter.title} description={node.frontmatter.description} />
              ))}
              <More to={`/${topic.fieldValue}`} />
            </View>
          ))
        }
      </main >
      <Footer />
    </View >
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              image{
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800)
      }
    }
  }
`;


export default IndexPage

export const Head = () => {
  return (
    <>
      <title>{`Mark Bader`}</title>
      <meta name="description" content="Mark Bader • IT-Systems Engineer • HPI Student" />
      <meta charSet="utf-8" />
      <link rel="icon" href={image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Mark Bader`} />
      <meta name="twitter:description" content="Mark Bader • IT-Systems Engineer • HPI Student" />
      <meta name="twitter:image" content={image} />
      <meta property="og:site_name" content="Marks Website"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://www.markbader.de/"></meta>
      <meta property="og:image" content={image}></meta>
      <meta property="og:title" content={`Mark Bader`}></meta>
    </>
  )
}

