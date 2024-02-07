import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Card, Footer, Header, More, View, Text } from "../components";
import * as presets from "../theme/index.module.scss";
import { getImage, getSrc } from "gatsby-plugin-image";

export const IndexPage: React.FC<PageProps<any>> = ({ data }) => {
  const { group } = data.allMarkdownRemark;
  const info = data.markdownRemark;

  return (
    <View className={presets.screen}>
      <main>
        <View className={presets.landingpage}>
          <Header
            title={info.frontmatter.title} />
          <Card image={getImage(info.frontmatter.image)!} expanded>
            <Text className={presets.article} text={info.html} />
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
    allMarkdownRemark(filter: {frontmatter: {topic: {ne: "about_me"}}}) {
      group(field: {frontmatter: {topic: SELECT}}) {
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
    markdownRemark(frontmatter: { topic: { eq: "about_me" }}) {
      frontmatter {
        title
        image{
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
      html
    }
  }
`;


export default IndexPage

export const Head = ({ data }: any) => {
  return (
    <>
      <title>{`Mark Bader`}</title>
      <meta name="description" content="Mark Bader • IT-Systems Engineer • HPI Student" />
      <meta charSet="utf-8" />
      <link rel="icon" href={getSrc(data.markdownRemark.frontmatter.image)} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Mark Bader`} />
      <meta name="twitter:description" content={data.markdownRemark.frontmatter.description} />
      <meta name="twitter:image" content={getSrc(data.markdownRemark.frontmatter.image)} />
      <meta property="og:site_name" content="Marks Website"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://www.markbader.de/"></meta>
      <meta property="og:image" content={getSrc(data.markdownRemark.frontmatter.image)}></meta>
      <meta property="og:title" content={`Mark Bader`}></meta>
    </>
  )
}

