# AGENTS.md — Molecular Biology Learning Lab

## Purpose
This repository is an independent, public, static learning lab for exploring DNA, RNA, and molecular biology. Its main purpose is **personal learning and scientific understanding**, not commercial distribution, production-scale robustness, or a general-purpose app platform. The lab is also suitable for school learners and curious visitors without prior biology training.

This lab is part of a broader collection of **independent Learning Labs**. The numbering "LAB 03" represents one optional route through the origin and evolution of life; it is **not** a dependency, loading order, API contract, or fixed taxonomy.

## Mission
Help learners understand and experiment with:
- Cells, chromosomes, genes, nucleotides, DNA, and RNA.
- DNA replication, transcription, and translation.
- RNA varieties and molecular roles (mRNA, rRNA, tRNA, miRNA, siRNA; clarify ambiguous abbreviations such as cRNA and aRNA).
- Mutations, variation, and their consequences.
- Connections to evolution, early life, and possible RNA-world scenarios, without presenting hypotheses as established facts.

## Current entry points
- `index.html` — chapter overview.
- `00_glossar.html` — searchable glossary.
- `01_dna_rna.html` — Three.js DNA/RNA explorer.
- `02_replikation.html` — DNA replication.
- `03_transkription.html` — transcription.
- `04_translation.html` — translation.
- `05_mutationen.html` — mutations.
- `06_zellkarte.html` — cellular context.
- `07_rna_typen.html` — RNA types.
- `lab-theme.css`, `lab-theme.js` — shared presentation and navigation.
- `LICENSE` — GNU General Public License version 2.0.

Keep all chapter-to-chapter navigation working when editing files or moving their locations. The current, working files are in the repository root.

## Design language
Follow the supplied *Apperception Machinery / Modern Objectivity* working design direction:
- Graphite / warm off-white as the calm UI stage, with signal turquoise `#009E98` for emphasis.
- Liberation Sans / Serif / Mono (with browser fallbacks).
- Meaningful scientific colors, clear legends, and visual hierarchy rather than decorative uniformity.
- Responsive controls, keyboard focus states, reduced-motion support where practical.
- Each chapter may use a dark scientific visualization area while retaining the shared visual language.
Do not treat a provisional BrandBook as a permanently finalized corporate identity.

## Learning design
1. **Start without assumed biology knowledge.** Introduce objects before abbreviations.
2. Move from familiar scale to molecular scale: person → cell → nucleus → chromosome → DNA → nucleotide.
3. Prefer observe → predict → experiment → explain, with immediate, informative feedback.
4. Keep an optional **beginner / school / deep dive** explanation tier when implementing new material.
5. When feasible, use a small, consistent DNA example across transcription, translation, and mutations, so consequences are traceable.
6. Add local, contextual glossary explanations instead of forcing learners to memorize vocabulary first.
7. Keep animations pauseable and stepwise; label strand direction and distinguish coding from template strands.
8. State where a diagram or simulation is schematic, simplified, not to scale, or only one possible mechanism.

## Scientific standards
- Distinguish observation, model, hypothesis, and consensus; present scientific uncertainty clearly.
- Never invent citations, measurements, dates, molecular mechanisms, or claims of experimental validation.
- Check complementarity, strand polarity (5′/3′), codon frames, genetic code, stop codons, and mutation consequences.
- Avoid misleading statements such as "DNA always forms a double helix" or "all RNA is single-stranded".
- When external factual claims need verification, provide traceable sources or mark them as unverified.
- Do not use scientific visualizations to suggest unjustified precision.

## Technical scope
- **Standalone static website:** HTML, CSS, plain JavaScript, SVG, Canvas, and Three.js where useful.
- Deployable on GitHub Pages; no required backend, database, account, paid service, or build pipeline.
- Do not introduce a common cross-lab runtime or dependency on another repository.
- Shared patterns may be copied between labs; explicit duplication is acceptable.
- Introduce frameworks, bundlers, tests or network services only when they materially improve learning or correctness.
- Version external JavaScript dependencies and document their source. Preserve third-party license notices.
- Keep functionality usable without network access when reasonably possible; state any CDN requirements.

## Working protocol
- Before modifying a chapter, inspect it and preserve existing working experiments.
- Make focused, incremental changes. Keep source understandable and easy to edit.
- Before claiming success, validate JavaScript syntax, internal links, relevant controls, and the page rendering to the extent the environment permits.
- Report precisely which files changed, what was checked, and what remains unverified.
- Never claim GitHub Pages deployment, browser QA, or scientific review without evidence.
- Do not remove older content or repositories during a migration until the new destination is verified.

## Next steps (not yet implemented)
- A beginner foundations chapter.
- One reusable teaching example connecting transcription, translation and mutations.
- Explanation-depth controls and prediction-first exercises.
- Continue development directly in **`lab-molecular-biology`**. The original prototype remains in **`dnarna-learning-test`** and must not be deleted without an explicit request.

The overall Learning Labs coordination Space documents conceptual connections, but this repository must remain fully understandable and functional without access to that Space.
