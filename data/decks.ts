import type { Deck } from '@/lib/types';

export const decks: Deck[] = [
  {
    slug: 'material',
    title: 'Understanding the material',
    subtitle: 'Software and agents',
    description: 'To design well, you need to understand what you\'re designing with. Context, constraints, capability, possibility.',
    accent: '#5C6B5A',
    slides: [
      {
        type: 'title',
        headline: 'Understanding\nthe material',
        body: 'Good design starts with understanding what you\'re working with. Software is your material. Do you know it?',
      },
      {
        type: 'concept',
        headline: 'Know your material',
        body: 'A carpenter understands wood grain. A tailor understands fabric weight. A designer working with software needs to understand what software actually is — how it behaves, what it wants, what it resists.',
      },
      {
        type: 'two-col',
        headline: 'Four things to understand',
        left: {
          heading: 'Context & constraints',
          body: 'What problem are you solving and for who? What are the hard limits — technical, time, team? Constraints aren\'t obstacles. They\'re the shape of the problem.',
        },
        right: {
          heading: 'Capability & possibility',
          body: 'What can this technology actually do? What\'s possible that wasn\'t before? Understanding capability is what separates good design from wishful thinking.',
        },
      },
      {
        type: 'concept',
        headline: 'Agents are new material',
        body: 'An agent isn\'t just autocomplete. It\'s a model that can take actions, use tools, run for a while, and make decisions along the way. That\'s a new kind of material — with new properties, new behaviors, and new possibilities.',
      },
      {
        type: 'concept',
        headline: 'Understand what it can do',
        body: 'The designers who get the most out of agents aren\'t the ones who know how to code. They\'re the ones who understand what agents are good at, where they struggle, and how to set them up to succeed.',
      },
      {
        type: 'quote',
        headline: '',
        quote: 'You can\'t design well with a material you don\'t understand. That\'s true for wood, light, and software.',
        attribution: 'On understanding the material',
      },
    ],
  },
  {
    slug: 'intent',
    title: 'To design is to talk',
    subtitle: 'Your intent',
    description: 'I don\'t prompt. I just talk — explaining my intent like I would to a smart teammate. That\'s the whole thing.',
    accent: '#8B6914',
    slides: [
      {
        type: 'title',
        headline: 'To design\nis to talk',
        body: 'I don\'t prompt when I\'m designing with agents. I just explain what I mean — like I\'m talking to a smart coworker.',
      },
      {
        type: 'concept',
        headline: 'Forget "prompting"',
        body: 'The word "prompting" makes it sound technical. Specialized. Like a skill you have to learn. But really, it\'s just talking. You\'re explaining what you want to someone who\'s ready to help. That\'s it.',
      },
      {
        type: 'concept',
        headline: 'Lead with your intent',
        body: 'Before you say anything else, be clear on what you\'re trying to do. Not just "make this button blue." What are you actually trying to achieve? Why does it matter? What would a good outcome feel like? Get that straight first, then say it.',
      },
      {
        type: 'two-col',
        headline: 'The difference',
        left: {
          heading: 'Prompting',
          body: 'Carefully crafted. Optimized. Structured for the machine. Feels like filling out a form to get the right answer.',
        },
        right: {
          heading: 'Talking',
          body: 'Natural. Contextual. Evolving. Feels like a conversation with a teammate who actually gets what you\'re going for.',
        },
      },
      {
        type: 'concept',
        headline: 'Give it context',
        body: 'Same as onboarding a new teammate — what\'s the project, who\'s it for, what decisions are already made, what matters most. The more context Claude has, the better it can help. Don\'t make it guess.',
      },
      {
        type: 'quote',
        headline: '',
        quote: 'I don\'t think about what to "prompt." I think about what I\'m trying to do, and then I just say it.',
        attribution: 'On talking, not prompting',
      },
    ],
  },
  {
    slug: 'how-i-ai',
    title: 'How I AI',
    subtitle: '0–80, 20–100',
    description: 'Fast software to quality software. How to bring your craft to new tooling, and what it unlocks.',
    accent: '#4A6B5A',
    slides: [
      {
        type: 'title',
        headline: 'How I AI',
        body: '0 to 80 is fast. 80 to 100 is yours. Here\'s how I think about working with agents in practice.',
      },
      {
        type: 'concept',
        headline: '0 to 80 — the fast phase',
        body: 'Claude can get you from nothing to something fast. A working prototype. A first draft. A rough structure. This is where speed lives. Use it. Don\'t feel bad about it. Getting to 80% quickly is the whole point.',
      },
      {
        type: 'concept',
        headline: '80 to 100 — that\'s yours',
        body: 'The last stretch is craft. It\'s your taste, your standards, your sense of what feels right and what\'s slightly off. Claude can\'t feel that. You can. That\'s not a limitation — that\'s the job.',
      },
      {
        type: 'two-col',
        headline: 'New tools, same craft',
        left: {
          heading: 'What changed',
          body: 'The speed, the access, the starting point. You can begin further along and move faster than before. The floor got raised.',
        },
        right: {
          heading: 'What didn\'t',
          body: 'Good design is still good design. Quality still matters. Your judgment, your taste, your standards — those are still yours to bring.',
        },
      },
      {
        type: 'concept',
        headline: 'New capabilities unlocked',
        body: 'With agents, you can do things that were previously too slow, too complex, or too expensive. Not just do your job faster — do things that weren\'t on the table before. That\'s worth thinking about.',
      },
      {
        type: 'quote',
        headline: '',
        quote: 'The tools changed. The craft didn\'t. Use agents to raise the floor. Use your judgment to reach the ceiling.',
        attribution: 'On bringing craft to new tooling',
      },
    ],
  },
  {
    slug: 'agents-101',
    title: 'Designing with Agents 101',
    subtitle: 'How to start',
    description: 'Installing Claude, setting up the stack, and understanding GitHub — explained like it\'s a Figma file.',
    accent: '#6B4E7A',
    slides: [
      {
        type: 'title',
        headline: 'Designing with\nAgents 101',
        body: 'The hardest part is starting. Here\'s exactly how to get set up — and how to think about the tools.',
      },
      {
        type: 'concept',
        headline: 'Start with Claude Code',
        body: 'Claude Code is how you talk to Claude from your terminal — your computer\'s command line. Install it once, and it\'s available everywhere. From there, you can ask Claude to set up everything else.',
      },
      {
        type: 'list',
        headline: 'Ask Claude to install the stack',
        items: [
          'Homebrew — your Mac\'s package manager (think: App Store for developer tools)',
          'gh — GitHub\'s command-line tool, for working with repos without leaving the terminal',
          'Node.js — the runtime that powers most web apps and tools',
          'Just ask Claude: "install homebrew, gh, and node on my mac"',
        ],
      },
      {
        type: 'concept',
        headline: 'GitHub is just Figma for code',
        body: 'If you\'ve used Figma, you already understand GitHub. The concepts map almost perfectly — you just need to learn the names.',
      },
      {
        type: 'two-col',
        headline: 'Figma → GitHub',
        left: {
          heading: 'In Figma',
          body: 'Published file\nDraft / branch\nShare for feedback\nVersion history\nAuto-save',
        },
        right: {
          heading: 'In GitHub',
          body: 'Main branch\nFeature branch\nPull request\nCommit history\nGit commit',
        },
      },
      {
        type: 'concept',
        headline: 'Let Claude do the technical parts',
        body: 'Once you\'re set up, you don\'t need to remember commands. Just talk to Claude. "Commit my changes," "create a new branch," "open a pull request." You stay in the design headspace. Claude handles the mechanics.',
      },
      {
        type: 'quote',
        headline: '',
        quote: 'You don\'t need to become a developer. You need to understand the material well enough to collaborate with one — or with an agent.',
        attribution: 'On getting started',
      },
    ],
  },
];

export function getDeckBySlug(slug: string): Deck | undefined {
  return decks.find((d) => d.slug === slug);
}
