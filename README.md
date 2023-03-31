# FRW-App

FRW-App ist eine App, mit standard HTML und mit vanilla JS, in der man für das Fach an der Kanti Finanzen und Rechnungswesen online Buchungssätze bilden kann. Wenn man sie nicht immer von Hand aufschreiben will, dann nehme man dieses Tool um die Buchungssätze zu bilden.

Bei diesem Projekt habe ich mich ein bisschen auf die App konzentriert, aber hauptsächlich war es meiin Ziel, mein erstes Docker Image mit [Apache httpd](https://hub.docker.com/_/httpd) zu erstellen und auf DockerHub zu posten.

### Einrichten der Entwicklungsumbgebung

Hier gibt es grob 2 Einteilungen:

- Entwicklungsumbgebung einrichten für das eigene Entwickeln.
- Einrichten von dem fertigen Docker-Container auf dem Gerät.

#### Entwicklungsumbgebung einrichten für das eigene Entwickeln

Dafür kann man dieses Repository einfach forken oder clonen.

Dafür einfach oben beim Repo auf "Fork" clicken und dann

```bash
// bei dem einfachen Clonen
git clone https://github.com/h0peRL/FRW-App
---
beim geforten Repository
git clone <URL>



```

Jetzt nurnoch zum richtigen directory navigieren und dann das Ganze in VSCode öffnen:

```bash
cd gewünschtes/directory
```

```bash
code .
```

#### Einrichten von dem fertigen Docker-Container auf dem Gerät

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

## 1. Informieren

| Datum      | Version                   | Änderung                                     |
| :--------- | ------------------------- | -------------------------------------------- |
| 03.03.2023 | 0.0.1<br /> Erste Version | Informieren, Initialisierung                 |
| 24.02.2023 | 0.0.2                     | Erstellung der Dokumentation, Initialierung  |
| 03.03.2023 | 0.0.3                     | Erste Realisationsphase                      |
| 10.03.2023 | 0.0.4                     | Ins Detail gegangen mit Docker               |
| 17.03.2023 | 0.0.5                     | Versuch genratePDF function                  |
| 24.03.2023 | 0.0.6                     | Fertigstelllen der Dokumentation             |
| 31.02.2023 | 1.0.0<br />Finale Version | Finaler Schliff, letzte Änderungen vornehmen |

### 1.1 Ihr Projekt

FRW-App ist eine App, mit standard HTML und mit vanilla JS, in der man für das Fach an der Kanti Finanzen und Rechnungswesen online Buchungssätze bilden kann. Wenn man sie nicht immer von Hand aufschreiben will, dann nehme man dieses Tool um die Buchungssätze zu bilden.

### 1.2 Quellen

[Stackoverflow](https://stackoverflow.com)

[DockerHub HTTPD Dokumentation](https://hub.docker.com/_/httpd)

[jsPDF](https://artskydj.github.io/jsPDF/docs/jsPDF.html)

### 1.3 Anforderungen

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

### 1.4 Diagramme

Keine

## 2. Planen

### 2.1 Zeitplan

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

### 2.2 Testfälle

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
