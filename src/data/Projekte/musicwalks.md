---
title: Music Walks
topic: Projekte
subtopic: Uni Projekte
image: ../../images/music_walks.jpg
description: Ein musikalischer Rundgang durchs Barberini
---

In einem vierköpfigen Masterprojekt Team arbeiteten wir gemeinsam mit dem Museum Barberini in Potsdam, sowie dem Künstler Henrik Schwartz, an einem musikalisch begleitetem Rundgang durch die Impressionismus-Ausstellung des Museum Barberini.


Dabei beschäftigte sich unser Team vor allem mit der Forschung zur synthetischen Übergangsgenerierung zwischen zwei MIDI Dateien. Meine Aufgabe bestand darin, ein bestehendes KI-Modell auf unseren Servern mit unseren Daten zu trainieren, dabei verwendete ich das [Variable Length Infilling](https://arxiv.org/abs/2108.05064) Modell. Eine große Herausforderung in dem Projekt war die Beschaffung von Daten, mit denen das KI-Modell trainiert werden kann. Um solche Daten zu generieren, entwickelte ich einen neuen Ansatz, um simple synthetische Übergänge zwischen zwei Stücken zu generieren ([MIDI Spline Interpolation](https://github.com/markbader/midi-spline-interpolation): Dafür stellte ich die Melodie des Anfangs- und des Endparts als kubische Spline Kurve dar und überführte die musikalischen Charakteristika des ersten Stückes zu den Charakteristika des zweiten Stückes. Um die generierten Übergänge in ein Format zu überführen, dass von den App-Entwicklern des Museum Barberini verwendet werden kann, baute ich eine Production Pipeline. Diese nahm die ursprünglichen MIDI Dateien als Eingabe, stößt die Inference des KI-Modells an und ordnet die erzeugten MIDI Dateien in einer gewünschten Ordnerstruktur an.

