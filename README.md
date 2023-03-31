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
| 11     | Muss      | Funktional                  | Das Image ist auf DockerHub herunterzulade                                |

### 1.4 Diagramme

Keine

## 2. Planen
