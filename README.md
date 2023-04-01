# FRW-App

FRW-App ist eine App, mit standard HTML und mit vanilla JS, in der man für das Fach an der Kanti Finanzen und Rechnungswesen online Buchungssätze bilden kann. Wenn man sie nicht immer von Hand aufschreiben will, dann nehme man dieses Tool um die Buchungssätze zu bilden.

Bei diesem Projekt habe ich mich ein bisschen auf die App konzentriert, aber hauptsächlich war es meiin Ziel, mein erstes Docker Image mit [Apache httpd](https://hub.docker.com/_/httpd) zu erstellen und auf DockerHub zu posten.

## IPERKA

### Informieren

- [Einleitung](#frw-app)
- [Lokale Entwicklungsumgebung einrichten](#einrichten-der-entwicklungsumbgebung)

### Planen

- [Einleitung](#frw-app)
- [Zeitplan](#21-zeitplan)
- [Testfälle](#22-testfälle)

### Entscheiden

- [Einleitung](#frw-app)

### Realisieren

- [Realisierungsplan](#41-realisierungsplan)

### Kontrollieren

- [Testfälle](#22-testfälle)
- [Testprotokoll und Testfazit](#51-testprotokoll-und-testfazit)

### Auswerten

- [Testbericht / Fazit](#51-testprotokoll-und-testfazit)
- [Schlusswort / allg. Fazit](#61-bericht--fazit)

## Einrichten der Entwicklungsumbgebung

Hier gibt es grob 2 Einteilungen:

- Entwicklungsumbgebung einrichten für das eigene Entwickeln.
- Einrichten von dem fertigen Docker-Container auf dem Gerät.

### Entwicklungsumbgebung einrichten für das eigene Entwickeln

Dafür kann man dieses Repository einfach forken oder clonen.

Dafür einfach oben beim Repo auf "Fork" clicken und dann

```bash
// bei dem einfachen Clonen
git clone https://github.com/h0peRL/FRW-App
---
beim geforkten Repository
git clone <URL>



```

Jetzt nurnoch zum richtigen directory navigieren und dann das Ganze in VSCode öffnen:

```bash
cd gewünschtes/directory
```

```bash
code .
```

### Einrichten von dem fertigen Docker-Container auf dem Gerät

Voraussetzung dafür ist, dass man docker bereits heruntergeladen hat und das man docker mit der Commandozeile interagieren kann

Für das wird das Image, welches bereits auf Dockerhub ist, heruntergeladen:

```bash
docker pull h0perl/frw-app
```

Dann ist das Image heruntergeladen.

Nun muss man die ports zuweisen und dann das image runnen, damit ein container daraus gebildet wird. Der Container wird schlussendlich dann auf Port 8080:80 laufen.

```bash
docker run -d -p 8080:80 --name eigenerName h0perl/frw-app
```

# Dokumentation

# 1. Informieren

| Datum      | Version                   | Änderung                                     |
| :--------- | ------------------------- | -------------------------------------------- |
| 03.03.2023 | 0.0.1<br /> Erste Version | Informieren, Initialisierung                 |
| 24.02.2023 | 0.0.2                     | Erstellung der Dokumentation, Initialierung  |
| 03.03.2023 | 0.0.3                     | Erste Realisationsphase                      |
| 10.03.2023 | 0.0.4                     | Ins Detail gegangen mit Docker               |
| 17.03.2023 | 0.0.5                     | Versuch genratePDF function                  |
| 24.03.2023 | 0.0.6                     | Fertigstelllen der Dokumentation             |
| 31.02.2023 | 1.0.0<br />Finale Version | Finaler Schliff, letzte Änderungen vornehmen |

# 1.1 Ihr Projekt

FRW-App ist eine App, mit standard HTML und mit vanilla JS, in der man für das Fach an der Kanti Finanzen und Rechnungswesen online Buchungssätze bilden kann. Wenn man sie nicht immer von Hand aufschreiben will, dann nehme man dieses Tool um die Buchungssätze zu bilden.

# 1.2 Quellen

[Stackoverflow](https://stackoverflow.com)

[DockerHub HTTPD Dokumentation](https://hub.docker.com/_/httpd)

[jsPDF](https://artskydj.github.io/jsPDF/docs/jsPDF.html)

# 1.3 Anforderungen

| Nummer | Muss/Kann | Funktional? Qualität? Rand? | Beschreibung                                                              |
| ------ | --------- | :-------------------------- | :------------------------------------------------------------------------ |
| 1      | Muss      | Funktional                  | Ein Header ist vorhanden.                                                 |
| 2      | Muss      | Funktional                  | Ein footer ist vorhanden.                                                 |
| 3      | Muss      | Funktional                  | Dazwischen ist ein div mit der id app                                     |
| 4      | Muss      | Funktional                  | Mann Kann einen Text, ein Soll, ein Haben und einen Betrag angeben können |
| 5      | Muss      | Funktional                  | Es werden verschiedene Konten vorgeschlagen                               |
| 6      | Muss      | Funktional                  | Mann kann den Inhalt der Seite als PDF herunterladen                      |
| 7      | Muss      | Funktional                  | Es ist ein Dockerfile enthalten indem die Dependencies enthalten sind.    |
| 8      | Muss      | Funktional                  | Es wird ein Image für die App erstellt                                    |
| 9      | Muss      | Funktional                  | Das Apache httpd wird im Image verwendet                                  |
| 10     | Muss      | Funktional                  | Es wird ein Container mit dem Image erstellt.                             |
| 11     | Muss      | Funktional                  | Das Image ist auf DockerHub herunterzuladen                               |

# 1.4 Diagramme

Keine

# 2. Planen

# 2.1 Zeitplan

| **Nummer** | **Frist** | **Beschreibung**   | **Zeit (geplant)** |
| :--------- | --------- | :----------------- | ------------------ |
| 1          | 3.2.2023  | Anforderung Nr. 1  | 5 Min              |
| 2          | 3.2.2023  | Anforderung Nr. 2  | 5 Min              |
| 3          | 3.2.2023  | Anforderung Nr. 3  | 5 Min              |
| 4          | 3.2.2023  | Anforderung Nr. 4  | 60 Min             |
| 5          | 3.2.2023  | Anforderung Nr. 5  | 30 Min             |
| 6          | 3.2.2023  | Anforderung Nr. 6  | 160 Min            |
| 7          | 3.2.2023  | Anforderung Nr. 7  | 60 Min             |
| 8          | 3.2.2023  | Anforderung Nr. 8  | 60 Min             |
| 9          | 3.2.2023  | Anforderung Nr. 9  | 60 Min             |
| 10         | 3.2.2023  | Anforderung Nr. 10 | 90 Min             |
| 11         | 3.2.2023  | Anforderung Nr. 11 | 20 Min             |

# 2.2 Testfälle

| **Nummer** | **Datum**  | **Voraussetzungen**                                          | **Eingabe**                                                                     | **Erwartete Ausgabe**                                                             |
| :--------- | ---------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 1          | 24.03.2023 | VSCode offen, HTML geöffnet                                  | Anschauen des HTMLS, ist header vorhanden?                                      | Header ist vorhanden                                                              |
| 2          | 24.03.2023 | VSCode offen, HTML geöffnet                                  | Anschauen des HTMLS, footer vorhanden?                                          | Footer ist vorhanden                                                              |
| 3          | 24.03.2023 | VSCode offen, HTML geöffnet                                  | Anschauen des HTMLS, ist dieser div vorhanden?                                  | div mit id app ist vorhanden                                                      |
| 4.1        | 24.03.2023 | VSCode offen, Live Server gestartet oder Container ist offen | Text bei Text eingeben                                                          | individualisierter Text ist aufgetreten                                           |
| 4.2        | 24.03.2023 | VSCode offen, Live Server gestartet oder Container ist offen | Text bei Soll eingeben                                                          | individualisierter Text ist aufgetreten                                           |
| 4.3        | 24.03.2023 | VSCode offen, Live Server gestartet oder Container ist offen | Text bei Haben eingeben                                                         | individualisierter Text ist aufgetreten                                           |
| 4.4        | 24.03.2023 | VSCode offen, Live Server gestartet oder Container ist offen | Zahl bei Betrag eingeben                                                        | individualisierter Betrag ist aufgetreten                                         |
| 5          | 24.03.2023 | VSCode offen, Live Server gestartet oder Container ist offen | Auf Soll oder Haben clicken                                                     | Verschiedene Konten werden angezeigt.                                             |
| 6          | 24.03.2023 | VSCode offen, Live Server gestartet oder Container ist offen | Auf den generate PDF button clicken                                             | PDF von HTML Seite wird erstellt                                                  |
| 7          | 24.03.2023 | VSCode offen oder Explorer,                                  | Dockerfile öffnen                                                               | Inhalt ist erschienen                                                             |
| 8          | 24.03.2023 | Bash oder andere Shell offen                                 | Image Pullen oder image erstellen, dann docker images in shell eingeben         | Eigenes Image wurde erstellt                                                      |
|            | 24.03.2023 | -                                                            | -                                                                               | -                                                                                 |
|            | 24.03.2023 | Bash oder andere Shell offen                                 | Docker starten und docker run -d -p 8080:80 --name Name h0perl/frw-app eingeben | Docker Container wird gestartet                                                   |
|            | 24.03.2023 | DockerHUB ist Offen                                          | nach h0perl/frw-app suchen                                                      | Das Image sollte erscheinen und mann kan es pullen mit docker pull h0perl/frw-app |

# 3. Entscheiden

[Einleitung](#frw-app)

# 4. Realisieren

# 4.1 Realisierungsplan

| **Nummer** | **Datum** | **Beschreibung**                                                      | **Zeit (geplant)** | **Zeit (effektiv)** |
| ---------- | --------- | --------------------------------------------------------------------- | ------------------ | ------------------- |
| 1          | 13.1.2023 | Anforderung komplett implementiert(Nummer entspricht der Anforderung) | 5 Min              | 10 Min              |
| 2          | 13.1.2023 | Anforderung komplett implementiert                                    | 5 Min              | 5 Min               |
| 3          | 13.1.2023 | Anforderung komplett implementiert                                    | 5 Min              | 40 Min              |
| 4          | 13.1.2023 | Anforderung komplett implementiert                                    | 60 Min             | 50 Min              |
| 5          | 20.1.2023 | Anforderung komplett implementiert                                    | 30 Min             | 15 Min              |
| 6          | 20.1.2023 | Anforderung komplett implementiert                                    | 160 Min            | 15 Min              |
| 7          | 20.1.2023 | Anforderung komplett implementiert                                    | 60 Min             | 15 Min              |
| 8          | 20.1.2023 | Anforderung komplett implementiert                                    | 60 Min             | 20 Min              |
| 9          | 20.1.2023 | Anforderung komplett implementiert                                    | 60 Min             | 15 Min              |
| 10         | 27.1.2023 | Anforderung komplett implementiert                                    | 90 Min             | 120 Min             |
| 11         | 27.1.2023 | Anforderung komplett implementiert                                    | 20 Min             | 90 Min              |

Verlinkung zu den Dateien

- [Dateien ](./frw)

# 5. Kontrollieren

# 5.1 Testprotokoll und Testfazit

| **Nummer** | **Datum** | **Resultat**                   | **Durchgeführt** |
| :--------- | --------- | ------------------------------ | ---------------- |
| 1          | 24.3.2023 | OK                             | Nico Delvecchio  |
| 2          | 24.3.2023 | OK                             | Nico Delvecchio  |
| 3          | 24.3.2023 | OK                             | Nico Delvecchio  |
| 4.1        | 24.3.2023 | OK                             | Nico Delvecchio  |
| 4.2        | 24.3.2023 | OK                             | Nico Delvecchio  |
| 4.3        | 24.3.2023 | OK                             | Nico Delvecchio  |
| 4.4        | 24.3.2023 | OK                             | Nico Delvecchio  |
| 5          | 24.3.2023 | OK                             | Nico Delvecchio  |
| 6          | 24.3.2023 | NOK, wurde nicht implementiert | Nico Delvecchio  |
| 7          | 24.3.2023 | OK                             | Nico Delvecchio  |
| 8          | 24.3.2023 | OK                             | Nico Delvecchio  |
| 9          | 24.3.2023 | OK                             | Nico Delvecchio  |
| 10         | 24.3.2023 | OK                             | Nico Delvecchio  |
| 11         | 24.3.2023 | OK                             | Nico Delvecchio  |

## Testfazit

Es sind alle Testfälle in Ordnung. Es gibt keine grossen Veränderungen oder Abweichungen in den Resultaten. Ausser bei dem 6. Testfall oder bei der 6. Anforderung war das Testergebnis nicht in Ordnung, weil dieses Feature nicht ein gebaut wurde.

# 6. Auswerten

# 6.1 Bericht / Fazit

Das Projekt LA1304 im Lernatteilier des 2. Jahres hat eigentlich im Grund und Ganzen gut funktioniert. Ich habe zuerst begonnen die Dokumentation ein bisschen zu erarbeiten, damit ich mich danach wirklich umd die Realisierung kümmern kann. Bei der Realisation gab es dann einen kleinen Haken, das genrate PDF Feature. Ich hatte zuerst gedacht ews sei einfach dieses zu implementieren, doch ich hatte viele Schwierigkeiten dabei. Irgendwie wollte die Library einfach nicht bei mir funktionieren.
