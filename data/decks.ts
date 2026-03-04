import type { Deck } from '@/lib/types';

export const decks: Deck[] = [
  {
    slug: 'git',
    title: 'The Ledger of Changes',
    subtitle: 'Git for Collaboration',
    description: 'Version control as a discipline. How to record, branch, review, and co-author with Claude.',
    accent: '#5C6B5A',
    slides: [
      {
        type: 'title',
        headline: 'The Ledger\nof Changes',
        body: 'A system for recording every change, preserving every decision, and collaborating without collision.',
      },
      {
        type: 'concept',
        headline: 'What is Git?',
        body: 'Git is a distributed version control system. Every change is recorded — who made it, when, and why. Nothing is lost. Everything is traceable. The past is a map, not a memory.',
      },
      {
        type: 'two-col',
        headline: 'The core primitives',
        left: {
          heading: 'The Repository',
          body: 'A complete history of your project. Lives locally on your machine. Connects to a remote. Every collaborator holds the full record.',
        },
        right: {
          heading: 'The Commit',
          body: 'A named moment in time. Small, purposeful, described. Each commit is a deliberate entry in the ledger.',
        },
      },
      {
        type: 'concept',
        headline: 'The Branch',
        body: 'A parallel draft. Work on a separate copy of the codebase without touching the main line. Experiment freely, iterate without fear. Merge when ready. Delete when done.',
      },
      {
        type: 'concept',
        headline: 'The Pull Request',
        body: 'A proposal. Changes presented for scrutiny before acceptance. Opens a chamber for review, discussion, and refinement. Nothing reaches main without passing through.',
      },
      {
        type: 'two-col',
        headline: 'Co-authoring with Claude',
        left: {
          heading: 'Claude as scribe',
          body: 'Ask Claude to draft commit messages, write PR descriptions, suggest code changes. Review and refine together. The work is yours; the effort is shared.',
        },
        right: {
          heading: 'The Co-Author line',
          body: 'Attribution matters. Every commit Claude helps with carries the mark:\n\nCo-Authored-By: Claude\n<noreply@anthropic.com>',
        },
      },
      {
        type: 'quote',
        headline: '',
        quote: 'You do not just write code. You write a history that your future self and collaborators will thank you for.',
        attribution: 'On the discipline of version control',
      },
    ],
  },
  {
    slug: 'prompting',
    title: 'The Art of the Query',
    subtitle: 'Prompting Claude',
    description: 'How you ask determines what you receive. Precision, context, and iteration as practice.',
    accent: '#8B6914',
    slides: [
      {
        type: 'title',
        headline: 'The Art of\nthe Query',
        body: 'How you ask determines what you receive. Precision is the practitioner\'s first virtue.',
      },
      {
        type: 'concept',
        headline: 'What is a prompt?',
        body: 'Not a command. A specification. A complete description of the context, the goal, the constraints, and the desired form of output. The more Claude understands, the better it can serve.',
      },
      {
        type: 'concept',
        headline: 'Be specific',
        body: 'Vague inputs yield vague outputs. Name the language, the framework, the file. Describe what you have tried. Describe what you want. The alchemist measures precisely.',
      },
      {
        type: 'two-col',
        headline: 'The four elements',
        left: {
          heading: 'Role & Context',
          body: 'Who are you? What are you building? What constraints apply? What have you already tried? Context is the soil in which the answer grows.',
        },
        right: {
          heading: 'Task & Format',
          body: 'What exactly do you need? In what form? Step-by-step instructions? A code block only? A summary? Specify the shape of the answer.',
        },
      },
      {
        type: 'concept',
        headline: 'Give examples',
        body: 'Show Claude a sample of what you want. Input → Output pairs are worth a thousand words of description. One concrete example eliminates ten misunderstandings.',
      },
      {
        type: 'concept',
        headline: 'Iterate',
        body: 'The first prompt is rarely the best. Refine, rephrase, redirect. Treat each conversation as a dialogue — a back-and-forth toward the thing you actually need.',
      },
      {
        type: 'quote',
        headline: '',
        quote: 'The quality of your output is bounded by the quality of your input. Write prompts as you would write a brief to a brilliant colleague.',
        attribution: 'On the practice of prompting',
      },
    ],
  },
  {
    slug: 'skills',
    title: 'The Codex of Skills',
    subtitle: 'Claude Code Skills',
    description: 'Reusable instruction sets. Pre-built procedures that encode expertise and invoke it on demand.',
    accent: '#4A6B5A',
    slides: [
      {
        type: 'title',
        headline: 'The Codex\nof Skills',
        body: 'Pre-built procedures. Reusable instructions. Consistent outcomes.',
      },
      {
        type: 'concept',
        headline: 'What are skills?',
        body: 'Skills are reusable instruction sets that Claude loads when invoked. They encode expertise, procedures, and standards — defined once, used repeatedly. A skill is expertise made portable.',
      },
      {
        type: 'concept',
        headline: 'How to invoke',
        body: 'Type /skill-name in Claude Code. Claude reads the skill\'s instructions and executes them in context. The right knowledge, at the right moment, without repetition.',
      },
      {
        type: 'list',
        headline: 'Skills in practice',
        items: [
          '/commit — craft a well-formed, intentional git commit',
          '/code-review — review a pull request with discipline',
          '/design-audit — audit a UI against HIG guidelines',
          '/frontend-design — build a polished, distinctive interface',
          '/simplify — remove unnecessary complexity from code',
          '/deslop — clean AI-generated artifacts from a codebase',
          '/humanizer — make writing sound human, not generated',
        ],
      },
      {
        type: 'concept',
        headline: 'Creating your own',
        body: 'Place a Markdown file in ~/.claude/skills/ or your shared claude-config repository. Describe the procedure in plain language. Claude follows it. Your expertise, encoded and shared.',
      },
      {
        type: 'quote',
        headline: '',
        quote: 'A skill is expertise made repeatable. What takes an hour to explain once, you can encode and invoke in seconds.',
        attribution: 'On the utility of skills',
      },
    ],
  },
  {
    slug: 'agents',
    title: "The Alchemist's Triangle",
    subtitle: 'Agentic Agents',
    description: 'Every agentic outcome is the product of three forces: the model, the harness, and the usage.',
    accent: '#6B4E7A',
    slides: [
      {
        type: 'title',
        headline: "The Alchemist's\nTriangle",
        body: 'Every agentic outcome is the product of three forces. Understanding them is the key to mastery.',
      },
      {
        type: 'concept',
        headline: 'What is an agent?',
        body: 'An agent is a model operating autonomously in a loop — using tools, managing memory, making decisions, calling other agents. It acts, observes, and acts again. Not a single response. A sustained process.',
      },
      {
        type: 'triangle',
        headline: 'The three forces',
        center: 'QUALITY',
        vertices: [
          { label: 'MODEL', description: 'The intelligence ceiling' },
          { label: 'HARNESS', description: 'The apparatus' },
          { label: 'USAGE', description: 'The practitioner' },
        ],
      },
      {
        type: 'concept',
        headline: 'The Model',
        body: 'The intelligence ceiling. A more capable model can reason more deeply, handle more complexity, and recover from more mistakes. You cannot exceed it. Choose accordingly.',
      },
      {
        type: 'concept',
        headline: 'The Harness',
        body: 'The apparatus surrounding the model. Tools, context window, memory, loops, sub-agents. Good harness design multiplies model capability. Poor design wastes it. The scaffolding shapes the outcome.',
      },
      {
        type: 'concept',
        headline: 'The Usage',
        body: 'The practitioner\'s hand. How you direct, constrain, and guide. The quality of your prompts, the precision of your instructions, the care of your oversight. The human in the loop.',
      },
      {
        type: 'quote',
        headline: '',
        quote: 'You cannot have a great outcome from a weak model, even with perfect harness and usage. Nor from a great model with no harness. All three must be present.',
        attribution: 'On the algebra of agents',
      },
    ],
  },
];

export function getDeckBySlug(slug: string): Deck | undefined {
  return decks.find((d) => d.slug === slug);
}
