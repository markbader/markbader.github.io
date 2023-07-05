import React from 'react';
import { graphql } from 'gatsby';
import { View, Header, Card, Footer, Text } from '../components';
import * as presets from "../theme/index.module.scss";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { getImage } from "gatsby-plugin-image";


const Article = ({ data }: any) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  deckDeckGoHighlightElement();

  return (
    <View className={presets.screen}>
      <main>
        <View className={presets.page}>
          <Header title={frontmatter.title} />
          <Card image={getImage(frontmatter.image)!} expanded>
            <Text preset="subheader" text={frontmatter.description} /><br />
            <Text text={html} />
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
      <link rel="icon" href={frontmatter.image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Marks ${frontmatter.topic}: ${frontmatter.title}`} />
      <meta name="twitter:description" content={frontmatter.description} />
      <meta name="twitter:image" content={frontmatter.image} />
      <meta property="og:site_name" content="Marks Website"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://www.markbader.de/"></meta>
      <meta property="og:image" content={frontmatter.image}></meta>
      <meta property="og:title" content={`Marks ${frontmatter.topic}: ${frontmatter.title}`}></meta>
    </>
  )
}
