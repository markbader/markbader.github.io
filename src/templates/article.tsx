import React from 'react';
import { graphql } from 'gatsby';
import { View, Header, Card, Footer, Text, Breadcrumbs } from '../components';
import * as presets from "../theme/index.module.scss";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { getImage, getSrc } from "gatsby-plugin-image";


const Article = ({ data }: any) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  deckDeckGoHighlightElement();

  return (
    <View className={presets.screen}>
      <main>
        <View className={presets.page}>
          <Header
            breadcrumb={
              <Breadcrumbs
                path={{
                  title: frontmatter.topic,
                  path: `/${frontmatter.topic}`
                }}
              />}
            title={frontmatter.title} />
          <Card image={getImage(frontmatter.image)!} expanded>
            <Text className={presets.article} text={html} />
          </Card>
        </View>
      </main>
      <Footer />
    </View>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        topic
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

export default Article;

export const Head = ({ data }: any) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <title>{`Marks ${frontmatter.topic}: ${frontmatter.title}`}</title>
      <meta name="description" content={frontmatter.description} />
      <meta charSet="utf-8" />
      <link rel="icon" href={getSrc(frontmatter.image)} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Marks ${frontmatter.topic}: ${frontmatter.title}`} />
      <meta name="twitter:description" content={frontmatter.description} />
      <meta name="twitter:image" content={getSrc(frontmatter.image)} />
      <meta property="og:site_name" content="Marks Website"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://www.markbader.de/"></meta>
      <meta property="og:image" content={getSrc(frontmatter.image)}></meta>
      <meta property="og:title" content={`Marks ${frontmatter.topic}: ${frontmatter.title}`}></meta>
    </>
  )
}
