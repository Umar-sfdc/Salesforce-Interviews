// scripts/generateIndex.js

const fs = require("fs");
const path = require("path");

const TAGS_PATH = path.join(__dirname, "..", "tags.json");
const OUTPUT_PATH = path.join(__dirname, "..", "index.md");

const TYPE_ICONS = {
  Theory: "🧠",
  Scenario: "🧪",
  Code: "💻",
};

const DIFFICULTY_STARS = {
  Easy: "⭐",
  Intermediate: "⭐⭐",
  Advanced: "⭐⭐⭐",
};

function loadTags() {
  const raw = fs.readFileSync(TAGS_PATH, "utf8");
  const data = JSON.parse(raw);

  if (!Array.isArray(data)) {
    throw new Error("tags.json must contain an array of question objects.");
  }
  return data;
}

function groupByTopic(tags) {
  const map = {};
  tags.forEach((tag) => {
    if (!map[tag.topic]) {
      map[tag.topic] = [];
    }
    map[tag.topic].push(tag);
  });
  return map;
}

function sortQuestions(questions) {
  return questions.slice().sort((a, b) => {
    // Sort by id first (Q001, Q010, Q101, etc.)
    return a.id.localeCompare(b.id, undefined, { numeric: true });
  });
}

function buildIndex(tags) {
  const grouped = groupByTopic(tags);
  const topics = Object.keys(grouped).sort();

  let out = "# Salesforce Interview Q&A – Index\n\n";
  out +=
    "_This file is auto-generated from `tags.json`. Do not edit manually._\n\n";

  topics.forEach((topic) => {
    out += `## ${topic}\n\n`;

    const questions = sortQuestions(grouped[topic]);

    questions.forEach((q) => {
      const stars = DIFFICULTY_STARS[q.difficulty] || "";
      const icon = TYPE_ICONS[q.type] || "";
      const label = [stars, icon].filter(Boolean).join(" "); // e.g. "⭐⭐ 🧪"

      const subtopic = q.subtopic ? ` – ${q.subtopic}` : "";
      const line = `- ${label} [${q.id} – ${q.title}](${q.file})${subtopic}\n`;
      out += line;
    });

    out += "\n";
  });

  return out;
}

function main() {
  try {
    const tags = loadTags();
    const indexContent = buildIndex(tags);
    fs.writeFileSync(OUTPUT_PATH, indexContent, "utf8");
    console.log(`✅ index.md generated at: ${OUTPUT_PATH}`);
  } catch (err) {
    console.error("❌ Error generating index.md:", err.message);
    process.exit(1);
  }
}

main();
