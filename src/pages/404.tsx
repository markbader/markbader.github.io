import * as React from "react";
import { Link, HeadFC, PageProps, useStaticQuery, graphql } from "gatsby";
import * as presets from "../theme/index.module.scss";
import { Card, Header, View } from "../components";
import { getImage } from "gatsby-plugin-image";


const NotFoundPage: React.FC<PageProps> = ({ data }: any) => {

  return (
    <View className={presets.screen}>
      <main>
        <View className={presets.landingpage}>
          <Header title="Seite nicht gefunden" />

          <Card expanded image={getImage(data.file)!}>
            <b>Es tut mir leid, aber die Seite konnte nicht gefunden werden. Vielleicht werden Sie hier fündig: </b><br /><br />
            <Link to="/">Zurück zur Startseite</Link>
          </Card>
        </ View>
      </main>
    </ View>
  )
}

export default NotFoundPage

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800)
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Not found</title>
