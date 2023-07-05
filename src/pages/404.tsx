import * as React from "react";
import { Link, HeadFC, PageProps, useStaticQuery, graphql } from "gatsby";
import * as presets from "../theme/index.module.scss";
import { Card, Header, View } from "../components";
import { getImage } from "gatsby-plugin-image";


const NotFoundPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "./me.jpg" }) {
     childImageSharp {
       fluid {
         ...GatsbyImageSharpFluid
       }
     }
    }
  }
`);

  const image = getImage(data)
  return (
    <View className={presets.screen}>
      <main>
        <View className={presets.landingpage}>
          <Header title="404: Seite nicht gefunden" />

          <Card expanded image={image!}>
            <b>Entschuldigung 😔, die Seite nach der du suchst konnte nicht gefunden werden.</b><br /><br />
            <Link to="/">Go home</Link>
          </Card>
        </ View>
      </main>
    </ View>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
