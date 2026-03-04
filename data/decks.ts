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
        headline: 'To design is to build',
        body: 'Designers have always been designing for the end outcome — the software, the service, the thing someone actually uses. Mockups were the cheapest way to convey an idea. They\'re not anymore. A conversation, a rough drawing, a quick build — the first concept is faster now.',
      },
      {
        type: 'two-col',
        headline: 'What you need to understand',
        left: {
          heading: 'Context & constraints',
          body: 'The problem you\'re solving, the goal behind it. The technical limits, the user\'s mental model. These aren\'t blockers — they\'re the shape of the problem.',
        },
        right: {
          heading: 'Capability & possibility',
          body: 'What can this actually do? What\'s now possible that wasn\'t before? Understanding capability is what separates good design from wishful thinking.',
        },
      },
      {
        type: 'concept',
        headline: 'Technology opens new space',
        body: 'The internet opened new possibilities. Mobile created new industries. Agents are already doing that. Each shift doesn\'t just change the tools — it changes how we approach both the problem and the solution.',
      },
      {
        type: 'concept',
        headline: 'Diverge and converge',
        body: 'That\'s still the core skill. How fast, how messy, how complex you can go in and out — zoom in, zoom out, hold a context, drop it, pick it back up. The tools change. The designer\'s ability to move through complexity doesn\'t. Being aware of all of it is what enables better software.',
      },
      {
        type: 'triangle',
        headline: 'Designing with agents',
        center: 'OUTCOME',
        vertices: [
          { label: 'MODEL', description: 'The intelligence ceiling' },
          { label: 'HARNESS', description: 'The setup around it' },
          { label: 'USAGE', description: 'How you direct it' },
        ],
      },
      {
        type: 'concept',
        headline: 'Three things that determine the outcome',
        body: 'The model is the ceiling — how capable it is. The harness is the setup around it — tools, context, memory. The usage is you — how clearly you direct it, how well you understand what it needs. All three matter. Weak in any one, and the outcome suffers.',
      },
      {
        type: 'quote',
        headline: '',
        quote: 'To design well, you need to understand the material. Always have. Software and agents are just the latest material.',
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
        body: 'You don\'t need a special skill to work with agents. You already have it — you\'ve been explaining ideas to people your whole life.',
      },
      {
        type: 'concept',
        headline: 'You already know how to do this',
        body: 'Every time you\'ve explained a design direction to a teammate, walked someone through your thinking, or described what "right" looks like — that\'s the skill. Talking to Claude isn\'t a new thing to learn. It\'s something you\'ve been doing your entire career.',
      },
      {
        type: 'concept',
        headline: 'Lead with your intent',
        body: 'Say what you\'re trying to do, not how to do it. "I want this page to feel calm and focused" beats "add more whitespace and make the font smaller." When you share the intent, Claude can actually help you get there — not just follow a checklist.',
      },
      {
        type: 'two-col',
        headline: 'Two ways to work',
        left: {
          heading: 'Instruction',
          body: 'One-shot. Mechanical. You dictate every step and hope it comes out right. If it doesn\'t, you start over with a better command.',
        },
        right: {
          heading: 'Conversation',
          body: 'Back and forth. You share what you\'re going for, react to what comes back, and refine together. It builds on itself.',
        },
      },
      {
        type: 'concept',
        headline: 'Trust the conversation',
        body: 'You don\'t have to get it perfect on the first message. Say something, see what comes back, adjust. That\'s how conversations work — and it\'s how the best results happen. Let go of trying to control the output. Just keep talking.',
      },
      {
        type: 'quote',
        headline: '',
        quote: 'Just talk like a person. The context you give matters way more than how you phrase it.',
        attribution: 'On intent over instruction',
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
