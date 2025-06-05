---
title: Tracking Technologien
topic: Projekte
subtopic: Projekte
image: ../../images/tracking.png
description: Verschiedene Optionen zur Ortung eines Fahrrads
---

# Gestohlene Fahrräder aufspüren: Die Macht des Fahrrad-Trackings

In einer Welt, die von ständigem technologischem Fortschritt geprägt ist, hat das Fahrradfahren längst den Status einer einfachen Freizeitaktivität überschritten. Es ist zu einem modernen, umweltfreundlichen Fortbewegungsmittel geworden, das sowohl unsere Städte als auch unser Leben verändert. 

Doch inmitten dieser positiven Veränderungen gibt es auch eine dunkle Seite: **Fahrraddiebstahl**. Leider sind gestohlene Fahrräder eine allzu häufige Realität, die sowohl finanziellen Schaden als auch den Verlust eines geliebten Fortbewegungsmittels mit sich bringt. Hier kommen Tracking-Technologien ins Spiel, die dazu beitragen können, Fahrräder vor Diebstahl zu schützen.

Die Bedrohung durch Fahrraddiebe ist allgegenwärtig, und es ist von entscheidender Bedeutung, innovative Lösungen zu finden, um dieses Problem in den Griff zu bekommen. Fahrrad-Tracking-Technologien bieten hier eine effektive Antwort. Sie ermöglichen es den Fahrradbesitzern, ihre geliebten Drahtesel in Echtzeit zu verfolgen, sollte ein Diebstahl auftreten. Dieser Schutzmechanismus ist von unschätzbarem Wert, da er nicht nur die Chancen erhöht, gestohlene Fahrräder wiederzuerlangen, sondern auch abschreckend auf potenzielle Diebe wirkt.

Allerdings sind nicht alle Tracking-Technologien gleich. Es gibt entscheidende Anforderungen, die erfüllt werden müssen, um effektiven Diebstahlschutz zu gewährleisten.

1. **Genauigkeit**: Ein effektives Tracking-System muss präzise Standortdaten liefern. Eine genaue Verfolgung ist entscheidend, um gestohlene Fahrräder wiederzufinden und den Ermittlungsbehörden bei ihrer Arbeit zu helfen.

2. **Energieverbrauch**: Das Tracking-Gerät sollte energieeffizient sein, um die Batterielebensdauer zu verlängern und sicherzustellen, dass es über einen längeren Zeitraum zuverlässig funktioniert.

3. **Verfügbarkeit**: Die Verfügbarkeit des Tracking-Systems sollte zuverlässig sein, unabhängig von Ort und Zeit. Es sollte rund um die Uhr erreichbar sein, um im Ernstfall sofort reagieren zu können.

4. **Größe des Tracking-Geräts**: Das Tracking-Gerät sollte kompakt und unauffällig sein, um es leicht am Fahrrad anzubringen, ohne die Ästhetik oder die Funktionalität des Fahrrads zu beeinträchtigen.

In einem Studierendenprojekt haben wir mehrere Strategien zur Ortung von Fahrrädern miteinander verglichen, dabei nutzten wir WiFi-Triangulation, GPS, Sigfox, GSM und Bluetooth Low Energy. Unser Hauptziel war es, die Technologien zu bewerten und festzustellen, welche die besten Ergebnisse in Bezug auf die vier Kriterien *Genauigkeit*, *Energieverbrauch*, *Verfügbarkeit* und *Größe* liefert.

Die **WiFi-Triangulation** nutzte die verfügbaren WiFi-Netzwerke, um die Position des Fahrrads zu bestimmen. Sie beruhte auf der Messung der Signalstärke verschiedener Netzwerke in der Umgebung des Fahrrads. Die Positionen der zugehörigen Access Points wurde über frei verfügbare Daten der [WiGLE API](https://api.wigle.net/) bestimmt. Die Genauigkeit war nicht besonders hoch, da die zugrundeliegenden Daten der Access Points nicht dem tatsächlichen Standort, sondern dem am häufigsten empfangenen Signal entsprach. Eine weitere Einschränkung ist die geringe Dichte an WLAN Access Points im ländlichen Raum, wodurch die Genauigkeit der Technologie erneut drastisch reduziert wird.

**GPS**, als bewährte Methode zur Ortung von Geräten, bot eine ausgezeichnete Genauigkeit und Verfügbarkeit, solange sich das Fahrrad im Freien befand. Allerdings verbrauchte GPS im Vergleich zu den anderen Technologien mehr Energie und erforderte eine freie Sicht zum Himmel, was in städtischen Umgebungen oder in Gebäuden zu Herausforderungen führen konnte.

**Bluetooth Low Energy** erwies sich als energieeffiziente Methode, wies jedoch geringere Reichweite und Genauigkeit auf als GPS und WiFi-Triangulation. Es eignete sich gut für den Einsatz in städtischen Gebieten und Gebäuden, erwies sich jedoch in ländlichen Gegenden als weniger zuverlässig. Bluetooth LE ist nicht per se als Tracking Technologie nutzbar, sondert erfordert proprietäre Protokolle, wie Find my Mobile, welches von Apple zur Verfügung gestellt wird.


Unser Projekt hatte nicht zum Ziel, eine verkaufsfertige Tracking-App oder ein kommerzielles Produkt zu entwickeln, sondern vielmehr, die Vor- und Nachteile dieser Ortungsmethoden in Bezug auf die Kriterien Genauigkeit, Energieverbrauch, Verfügbarkeit und Größe des Tracking-Geräts herauszustellen. Es zeigt, dass die Wahl der besten Ortungsmethode stark von den individuellen Anforderungen und den geografischen Bedingungen abhängt. Am Ende des Projektes optimierten wir die bis dahin beste Konfiguration auf Energieverbrauch.

Wenn diese grobe Übersicht dein Interesse geweckt hat, wirf doch einen Blick auf das GitHub Repository:

<a href="https://github.com/rohansaw/EOS-Tracking-Resources"><img src="../../images/github-mark.png"/></a>