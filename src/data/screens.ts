export interface ReasonCard {
  icon: string
  label: string
}

export interface Screen {
  emoji: string
  title: string
  subtitle: string
  body?: string
  btnLabel: string
  cards?: ReasonCard[]
  promises?: string[]
  quote?: string
  isFinal?: boolean
}

export const screens: Screen[] = [
  {
    emoji: '🌸',
    title: 'Hey, bestie…',
    subtitle: 'I made this just for you.',
    body: "I know things have been off between us, and I hate that. You mean too much to me to just let it sit there. So I made this little page because you deserve more than a text.",
    btnLabel: "I'm listening 🌼",
  },
  {
    emoji: '🥺',
    title: 'I messed up, and I know it.',
    subtitle: 'No excuses. Just honesty.',
    body: "You've always shown up for me — through the good, the messy, and the chaotic. And when you needed me, I let you down. That's not the friend I want to be.",
    btnLabel: 'Keep reading 💌',
    cards: [
      { icon: '💬', label: "I didn't listen the way you deserved" },
      { icon: '⏳', label: 'I took you for granted' },
      { icon: '💔', label: 'I hurt your feelings' },
    ],
  },
  {
    emoji: '🤞',
    title: "Here's what I promise you.",
    subtitle: 'Not just words — I mean every one.',
    btnLabel: 'One more thing 🫶',
    promises: [
      "I'll listen first and talk second — always.",
      "I'll check in on you, not just when things are fun.",
      "I'll always prioritize you and things that matter to you, especially with days and dates",
      "I'll be the friend you've always been to me.",
    ],
  },
  {
    emoji: '🫂',
    title: 'You mean the world to me.',
    subtitle: "And I'm not giving up on us.",
    body: "Friendships like ours don't come around twice. I'm not willing to let a mistake define us — because what we have is so much bigger than that.",
    quote: '"A real friend walks in when the rest of the world walks out." — and I\'m walking back in, if you\'ll let me. 🌷',
    btnLabel: 'I forgive you 💕',
    isFinal: true,
  },
]
