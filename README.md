# dFRW-App

FRW-App ist eine App, mit standard HTML und mit vanilla JS, in der man für das Fach an der Kanti Finanzen und Rechnungswesen online Buchungssätze bilden kann. Wenn man sie nicht immer von Hand aufschreiben will, dann nehme man dieses Tool um die Buchungssätze zu Bilden.

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

Jetzt nurnoch zum richtigen directory navigieren und dann das ganze in VSCode öffnen:

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

## Dokumentation

| Datum      | Version | Änderung |
| :--------- | ------- | -------- |
| 03.03.2023 |         |          |
| 24.02.2023 |         |          |
| 03.03.2023 |         |          |
| 10.03.2023 |         |          |
| 17.03.2023 |         |          |
