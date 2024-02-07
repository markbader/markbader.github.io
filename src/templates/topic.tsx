import React from 'react';
import { graphql } from 'gatsby';
import { View, Header, Card, Footer, Breadcrumbs } from '../components';
import * as presets from "../theme/index.module.scss";
import { getImage } from "gatsby-plugin-image";

const Topic = ({ data }: any) => {
  const { group } = data.allMarkdownRemark;

  return (
    <View className={presets.screen}>
      <main>
        {group.map((subtopic: any, index: number) => (

          <View key={subtopic.fieldValue} className={presets.page}>
            {index == 0 ?
              <Header breadcrumb={<Breadcrumbs path={{ title: group[0].edges[0].node.frontmatter.topic, path: `/${group[0].edges[0].node.frontmatter.topic}` }} />} title={subtopic.fieldValue} /> :
              <Header title={subtopic.fieldValue} />
            }
            {subtopic.edges.map(({ node }: any) => (
              <Card
                key={node.id}
                image={getImage(node.frontmatter.image)!}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                onClickTo={node.fields.slug}
              />
            ))}
          </View>
        ))}
      </main>
      <Footer />
    </View>
  );
};

export const query = graphql`
query($topic: String!) {
  allMarkdownRemark(filter: {frontmatter: {topic: {eq: $topic } } }) {
    group(field: {frontmatter: {subtopic: SELECT}}) {
      fieldValue
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            topic
            description
            image{
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
}`

export default Topic;

export const Head = ({ data }: any) => {
  const topic = data.allMarkdownRemark.group[0].edges[0].node.frontmatter.topic

  return (
    <>
      <title>{`Marks ${topic}`}</title>
      <meta name="description" content={`Ein Überblick über Marks ${topic}`} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Marks Website"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://www.markbader.de/"></meta>
    </>
  )
}