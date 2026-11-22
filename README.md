# Molecular Biology Learning Lab — DNA & RNA

Ein **interaktives, eigenständiges Lernlabor** für Molekularbiologie: DNA, RNA, Replikation, Transkription, Translation, Mutationen und Zellbiologie.

Das Projekt entstand aus einer Schul-Lernhilfe und entwickelt sich zu einem frei erkundbaren Labor für Menschen mit und ohne biologisches Vorwissen. Sein Ziel ist **Verstehen durch Anschauen, Verändern und Experimentieren** — nicht eine kommerzielle Anwendung.

## Lernstationen

| Datei | Thema |
|---|---|
| [index.html](index.html) | Startseite und Kapitelübersicht |
| [00_glossar.html](00_glossar.html) | Durchsuchbares Fachbegriffs-Glossar |
| [01_dna_rna.html](01_dna_rna.html) | DNA/RNA und molekulare Unterschiede in 3D |
| [02_replikation.html](02_replikation.html) | DNA-Replikation |
| [03_transkription.html](03_transkription.html) | DNA → RNA |
| [04_translation.html](04_translation.html) | mRNA → Aminosäuresequenz |
| [05_mutationen.html](05_mutationen.html) | Veränderungen an Sequenzen und ihre Folgen |
| [06_zellkarte.html](06_zellkarte.html) | Molekulare Abläufe im Zellkontext |
| [07_rna_typen.html](07_rna_typen.html) | Verschiedene funktionelle RNA-Typen |

## Nutzung

`index.html` im Browser öffnen oder das Repository mit GitHub Pages als statische Website veröffentlichen. Jede Lernstation ist eine separate HTML-Datei und lässt sich direkt aufrufen.

Die 3D-Darstellung verwendet Three.js über ein CDN und braucht beim ersten Laden eine Internetverbindung. Andere Kapitel sind ohne Server oder Backend nutzbar. Die Molekülbilder und Ablaufmodelle sind **didaktische Vereinfachungen**, keine atomistisch vollständigen wissenschaftlichen Simulationen.

## Technik und Gestaltung

- HTML, CSS, JavaScript, SVG und Three.js.
- Keine Benutzerkonten, keine Datenbank und kein erforderlicher Build-Prozess.
- Gemeinsam verwendete Dateien: [lab-theme.css](lab-theme.css) und [lab-theme.js](lab-theme.js).
- Gestaltung nach *Modern Objectivity* / Apperception Machinery BrandBook (Arbeitsstand).

## Hintergrund und Ausblick

Das Labor ist ein Mitglied einer geplanten Sammlung **unabhängiger Learning Labs** für unterschiedliche Wissensgebiete. Die gelegentliche Bezeichnung „LAB 03“ meint nur einen möglichen Lernweg von der frühen Erde über die Entstehung und Entwicklung des Lebens bis zum Menschen — keine Softwareabhängigkeit.

Weitere geplante Schritte: Grundlagen für Einsteiger, miteinander verbundene Experimente und verschiedene Erklärungstiefen.

Dieses Repository ist jetzt der eigenständige Hauptstand des Labors. Der bisherige Prototyp bleibt unter [dnarna-learning-test](https://github.com/philippklinz/dnarna-learning-test) als historischer Ausgangspunkt erhalten.

## Entwicklung

Arbeitsregeln für Coding-Agenten: [AGENTS.md](AGENTS.md). Diese Datei hält Lernziel, Fachgenauigkeit, technische Leitplanken und gewünschte Tests fest.

## Lizenz

Dieses Repository steht unter der [GNU General Public License v2.0](LICENSE). Für eingebundene Bibliotheken gelten deren jeweilige Lizenzbedingungen.

## Modern Objectivity – praktisches Style-Kit

Die Lernstationen binden eine **lokale, unveränderte Kopie** des [Modern Objectivity Style Kit v0.1 (Draft)](https://philippklinz.github.io/modern-objectivity-style/) ein. Die Datei [modern-objectivity.css](modern-objectivity.css) entspricht dem [Referenz-Stylesheet](https://github.com/philippklinz/modern-objectivity-style/blob/main/styles/modern-objectivity.css), Quell-Blob `c6af71a8688b9001313d19a642e8f308fa463280` (GPL-2.0-only). `lab-theme.css` bildet die semantischen `--mo-*`-Tokens auf dieses Labor ab, einschließlich seines eigenen Hell-/Dunkelmodus. Die wissenschaftlichen Schaubilder behalten ihre fachspezifische Gestaltung. Für das Designsystem wird kein CDN benötigt.
