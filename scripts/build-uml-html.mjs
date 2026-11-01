import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "docs", "UML.md");
const outputPath = path.join(root, "docs", "uml.html");

const markdown = fs.readFileSync(sourcePath, "utf8");

const blocks = [];
const pattern = /^##\s+(.+)$|```mermaid\r?\n([\s\S]*?)```/gm;
let match;

while ((match = pattern.exec(markdown)) !== null) {
  if (match[1]) {
    blocks.push({ type: "heading", text: match[1].trim() });
  } else {
    blocks.push({ type: "diagram", code: match[2].trim() });
  }
}

let diagramNumber = 0;
const sections = [];
let currentHeading = "Diagrammi";

for (const block of blocks) {
  if (block.type === "heading") {
    currentHeading = block.text;
    continue;
  }

  diagramNumber += 1;
  sections.push(`
    <section class="diagram-card">
      <div class="diagram-meta">
        <span class="badge">${String(diagramNumber).padStart(2, "0")}</span>
        <h2>${escapeHtml(currentHeading)}</h2>
      </div>
      <pre class="mermaid">${escapeHtml(block.code)}</pre>
    </section>`);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

const html = `<!doctype html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eduplays — Mappa UML</title>
    <style>
      :root {
        --bg: #f4fafd;
        --ink: #17222b;
        --muted: #52616d;
        --card: #ffffff;
        --line: #d7e2ea;
        --accent: #ffd200;
        --radius: 22px;
      }

      * { box-sizing: border-box; }

      body {
        margin: 0;
        background:
          radial-gradient(circle at 12% 0%, #fff6c2 0, transparent 34rem),
          radial-gradient(circle at 88% 8%, #dff0ff 0, transparent 30rem),
          var(--bg);
        color: var(--ink);
        font-family: "Atkinson Hyperlegible", "Segoe UI", Tahoma, sans-serif;
        line-height: 1.5;
      }

      header.page-head {
        max-width: 1280px;
        margin: 0 auto;
        padding: 48px 24px 16px;
      }

      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--accent);
        border: 3px solid var(--ink);
        border-radius: 999px;
        padding: 6px 14px;
        font-weight: 700;
        box-shadow: 3px 3px 0 var(--ink);
      }

      h1 {
        margin: 18px 0 8px;
        font-size: clamp(2rem, 5vw, 3.6rem);
        line-height: 1.05;
      }

      .lede {
        max-width: 780px;
        color: var(--muted);
        font-size: 1.05rem;
      }

      .toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 22px;
      }

      .toolbar a,
      .toolbar button {
        appearance: none;
        background: var(--card);
        border: 3px solid var(--ink);
        border-radius: 999px;
        color: var(--ink);
        cursor: pointer;
        font: inherit;
        font-weight: 700;
        padding: 8px 16px;
        text-decoration: none;
        box-shadow: 3px 3px 0 var(--ink);
      }

      .toolbar a:hover,
      .toolbar button:hover { transform: translate(1px, 1px); box-shadow: 2px 2px 0 var(--ink); }

      main {
        max-width: 1280px;
        margin: 0 auto;
        padding: 24px;
        display: grid;
        gap: 26px;
      }

      .diagram-card {
        background: var(--card);
        border: 3px solid var(--ink);
        border-radius: var(--radius);
        box-shadow: 6px 7px 0 var(--ink);
        padding: 22px;
        overflow: auto;
      }

      .diagram-meta {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
      }

      .diagram-meta h2 {
        margin: 0;
        font-size: clamp(1.1rem, 2.2vw, 1.5rem);
      }

      .badge {
        display: inline-grid;
        place-items: center;
        min-width: 42px;
        height: 42px;
        background: var(--accent);
        border: 3px solid var(--ink);
        border-radius: 12px;
        font-weight: 700;
      }

      pre.mermaid {
        margin: 0;
        padding: 18px;
        background: #fbfdff;
        border: 2px dashed var(--line);
        border-radius: 16px;
        overflow: auto;
        text-align: center;
      }

      .hint {
        margin: 0 0 18px;
        padding: 12px 16px;
        background: #fffbea;
        border: 2px solid #ead98a;
        border-radius: 14px;
        color: #5c4a00;
      }

      footer.page-foot {
        max-width: 1280px;
        margin: 0 auto;
        padding: 8px 24px 48px;
        color: var(--muted);
        font-size: 0.92rem;
      }

      @media print {
        body { background: #fff; }
        .toolbar, .hint { display: none; }
        .diagram-card { break-inside: avoid; box-shadow: none; }
      }
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header class="page-head">
      <span class="eyebrow">🧠 Eduplays · Architettura</span>
      <h1>Mappa UML del sistema</h1>
      <p class="lede">
        Vista visiva dei ${diagramNumber} diagrammi presenti in
        <code>docs/UML.md</code>. Il documento Markdown resta la fonte:
        modifica quello e rigenera questa pagina con
        <code>node scripts/build-uml-html.mjs</code>.
      </p>
      <div class="toolbar">
        <a href="./UML.md">📄 Apri il documento completo</a>
        <button type="button" onclick="window.print()">🖨️ Stampa / PDF</button>
      </div>
    </header>

    <main>
      <p class="hint">
        Suggerimento: i diagrammi sono Mermaid. Per modificarli, cambia i blocchi
        <code>mermaid</code> in <code>docs/UML.md</code> e rigenera l'HTML.
      </p>
      ${sections.join("\n")}
    </main>

    <footer class="page-foot">
      Eduplays v1.0.0 — documento allineato al codice di <code>src/</code>.
    </footer>

    <script type="module">
      import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

      mermaid.initialize({
        startOnLoad: true,
        securityLevel: "loose",
        theme: "base",
        themeVariables: {
          fontFamily: "Atkinson Hyperlegible, Segoe UI, Tahoma, sans-serif",
          primaryColor: "#fff6c2",
          primaryTextColor: "#17222b",
          primaryBorderColor: "#17222b",
          lineColor: "#17222b",
          secondaryColor: "#e8f3ff",
          tertiaryColor: "#f3e9ff",
          clusterBkg: "#fbfdff",
          clusterBorder: "#17222b",
          edgeLabelBackground: "#ffffff",
        },
        flowchart: { htmlLabels: true, curve: "basis" },
        class: { hideEmptyMembersBox: true },
      });
    </script>
  </body>
</html>
`;

fs.writeFileSync(outputPath, html, "utf8");
console.log(
  `Generata ${path.relative(root, outputPath)} con ${diagramNumber} diagrammi.`
);
