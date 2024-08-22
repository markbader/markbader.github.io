import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Card, Header, View, Text, Footer, Breadcrumbs } from "../components";
import * as presets from "../theme/index.module.scss";
import { getImage } from "gatsby-plugin-image";
import image from "../images/me.jpg";

export const About: React.FC<PageProps<any>> = ({ data }) => {

  React.useEffect(() => {
    document.querySelector(`body`)!.scrollTo(0, 0);
  }, []);

  return (
    <View className={presets.screen}>
      <main>
        <View className={presets.landingpage}>
          <Header
            breadcrumb={
              <Breadcrumbs
                path={{
                  title: "Impressum",
                  path: `/about/`
                }}
              />}
            title="Impressum"
          />
          <Card image={getImage(data.file)!} expanded>
            <Text preset="subheader" text="Kontakt" /><br /><br />
            <b>Mark Bader</b><br /><br />
            <i>
              Kiezstr. 24<br />
              14467 Potsdam<br />
              Deutschland
            </i><br /><br />
            Mail-Adresse:<br />
            <i>
              mark.bader [at] alice [dot] de
            </i>
            <br /><br />
            <Text preset="subheader" text="Rechtliches" /><br /><br />
            <b>Haftung für Inhalte</b><br /><br />

            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.<br /><br />

            <b>Haftung für Links</b><br /><br />

            Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br /><br />

            <b>Urheberrecht</b><br /><br />

            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.<br /><br />

            <b>Datenschutzerklärung</b><br /><br />

            <i>Wie werden Ihre Daten erfasst?</i><br /><br />

            Auf dieser Website werden keine Daten von Ihnen erfasst. Ich erfasse lediglich die Daten, die Sie mir gezielt zukommen lassen. Dies können zum Beispiel Daten sein, die Sie in einer E-Mail an mich senden.<br /><br />

            <i>Hosting mit GitHub Pages</i><br /><br />

            Mein Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:<br />
            IP-Adresse, die Adresse der vorher besuchten Website (Referer Anfrage-Header), Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website, von der die Anforderung kommt und Informationen zu Browser und Betriebssystem.<br /><br />

            Das ist erforderlich, um unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO.<br /><br />
            Es erfolgt kein Tracking und wir haben auf diese Daten keinen direkten Zugriff, sondern erhalten lediglich eine anonymisierte, statistische Zusammenfassung. Diese beinhaltet die Adresse der vorher besuchten Seite, die Häufigkeit der jeweils aufgerufenen Seiten und die Anzahl eindeutiger Besucher. Diese Daten führen wir nicht mit anderen Daten zusammen.",
            Ich setze für die Zurverfügungstellung meiner Website folgenden Hoster ein:<br /><br />
            <i>
              GitHub Inc.<br />
              88 Colin P Kelly Jr St<br />
              San Francisco, CA 94107<br />
              United States
            </i><br /><br />
            Dieser ist Empfänger Ihrer personenbezogenen Daten. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO, selbst keinen Server in unseren Räumlichkeiten vorhalten zu müssen. Serverstandort ist USA.<br /><br />
            Weitere Informationen zu Widerspruchs- und Beseitigungsmöglichkeiten gegenüber GitHub finden Sie unter: <a href='https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages'>https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages</a><br /><br />
            Sie haben das Recht der Verarbeitung zu widersprechen. Ob der Widerspruch erfolgreich ist, ist im Rahmen einer Interessenabwägung zu ermitteln.<br /><br />
            Die Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt.<br /><br />
            Die Verarbeitung der unter diesem Abschnitt angegebenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Die Funktionsfähigkeit der Website ist ohne die Verarbeitung nicht gewährleistet.<br /><br />
            GitHub hat Compliance-Maßnahmen für internationale Datenübermittlungen umgesetzt. Diese gelten für alle weltweiten Aktivitäten, bei denen GitHub personenbezogene Daten von natürlichen Personen in der EU verarbeitet. Diese Maßnahmen basieren auf den EU-Standardvertragsklauseln (SCCs). Weitere Informationen finden Sie unter: <a href='https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1–the-standard-contractual-clauses-processors'>https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1–the-standard-contractual-clauses-processors</a><br /><br />
            <i>Quellen: <a href='https://www.e-recht24.de/impressum-generator.html'>e-recht24.de</a> <a href='https://opr.vc/docs/hosting/github_pages/'>opr.vc</a></i>
          </Card>
        </View>
      </main >
      <Footer />
    </View >
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800)
      }
    }
  }
`;


export default About

export const Head = () => {
  return (
    <>
      <html lang="de" />
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

