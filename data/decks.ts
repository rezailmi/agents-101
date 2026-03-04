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
    subtitle: 'My workflow',
    description: 'Plan mode, model picking, subagents, and the one trick that matters most — just ask it what tools to use.',
    accent: '#4A6B5A',
    slides: [
      {
        type: 'title',
        headline: 'How I AI',
        body: 'Everyone\'s workflow is different. Here\'s what mine actually looks like — the modes, the models, and the one trick that matters most.',
      },
      {
        type: 'concept',
        headline: 'Start in plan mode',
        body: 'Before I build anything, I plan. Claude Code has a plan mode — it thinks through the approach before writing a single line. I use it constantly. It\'s like sketching before you design. You catch bad ideas early and save yourself from going in circles.',
      },
      {
        type: 'concept',
        headline: 'Ask questions, get asked questions',
        body: 'The best sessions go both ways. I ask Claude to clarify things I don\'t understand. And I set it up to ask me questions before it starts — what\'s the goal, what are the constraints, what should it avoid. The more context it has, the better the output. Don\'t skip this part.',
      },
      {
        type: 'two-col',
        headline: 'Pick the right model',
        left: {
          heading: 'Heavy thinking',
          body: 'Opus for architecture, complex logic, and anything where getting it wrong is expensive. It\'s slower — but it thinks deeper. Use it when the problem is hard.',
        },
        right: {
          heading: 'Everything else',
          body: 'Sonnet for everyday work. Haiku for quick, simple tasks — renaming, formatting, small fixes. Match the model to the job. You don\'t need a sledgehammer for every nail.',
        },
      },
      {
        type: 'concept',
        headline: 'Skills, MCPs, and subagents',
        body: 'Claude Code can do way more than write code. Skills are shortcuts for common workflows. MCPs connect it to external tools and services. Subagents let it spin up helpers for parallel work. But here\'s the thing — you don\'t need to memorize any of this. Just ask Claude what tools it has. It\'ll tell you.',
      },
      {
        type: 'quote',
        headline: '',
        quote: 'You don\'t need to know every feature. Just ask the agent what tools it has. That\'s the whole trick.',
        attribution: 'On working with agents in practice',
      },
    ],
  },
  {
    slug: 'agents-101',
    title: 'Designing with Agents 101',
    subtitle: 'Step by step',
    description: 'Install Claude Code, connect GitHub, commit, push, open a PR — each step explained in plain English with the exact words to use.',
    accent: '#6B4E7A',
    slides: [
      {
        type: 'title',
        headline: 'Designing with\nAgents 101',
        body: 'No assumed knowledge. No jargon. Follow these steps and you\'ll be set up and shipping in under 15 minutes.',
      },
      {
        type: 'concept',
        headline: 'Step 1 — Install Claude Code',
        body: 'Go to claude.ai and download Claude Code — it installs like any Mac app. Once it\'s open, you\'ll see a terminal window. That\'s where you talk to Claude. You\'re not writing code. You\'re having a conversation.',
      },
      {
        type: 'list',
        headline: 'Step 2 — Set up your tools',
        items: [
          'Once Claude Code is open, say: "I\'m on a Mac and new to this. Install everything I need to build web projects — homebrew, node, and the GitHub CLI."',
          'Claude will walk you through each step and ask if anything needs your input',
          'You\'ll need a GitHub account — it\'s free at github.com',
          'This only needs to happen once. After this, you\'re fully set up.',
        ],
      },
      {
        type: 'concept',
        headline: 'Step 3 — Connect your project to GitHub',
        body: 'Open Claude Code in the folder you\'re working in. Then say: "Set up git on this project, create a new GitHub repo, and push everything up." Claude handles all of it — you get a link to your project online, backed up and version-controlled.',
      },
      {
        type: 'concept',
        headline: 'Commit = save a named version',
        body: 'In Figma, you create version history when you want to mark a moment. A commit is the same thing — a named snapshot of everything right now. Say to Claude: "Commit my changes with a message describing what I just did." That\'s the whole thing.',
      },
      {
        type: 'concept',
        headline: 'Push = sync it to the cloud',
        body: 'A commit saves locally on your machine. A push sends it up to GitHub. Think of publishing a Figma file — your local draft becomes the live version. Say to Claude: "Push my changes to GitHub."',
      },
      {
        type: 'two-col',
        headline: 'Pull Request = share for review',
        left: {
          heading: 'In Figma',
          body: 'You share a branch link with a teammate. They review your changes and approve them before they\'re merged into the main file.',
        },
        right: {
          heading: 'In GitHub',
          body: 'You open a pull request — same idea. It shows what changed, lets someone review it, and merges it when approved. Say: "Create a pull request."',
        },
      },
      {
        type: 'list',
        headline: 'The exact prompts to use',
        items: [
          '"Set up git on this project, create a GitHub repo, and push it up"',
          '"Commit my changes — describe what I just built"',
          '"Push to GitHub"',
          '"Create a pull request with a summary of my changes"',
        ],
      },
      {
        type: 'quote',
        headline: '',
        quote: 'You don\'t need to know the commands. You need to know what you\'re trying to do — and say it. Claude handles the rest.',
        attribution: 'On getting started',
      },
    ],
  },
];

export function getDeckBySlug(slug: string): Deck | undefined {
  return decks.find((d) => d.slug === slug);
}
