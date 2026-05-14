# sorry-bestie 🌸

A cute multi-step apology site built with React + Vite + TypeScript + Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
src/
├── app/
│   ├── App.tsx        # Root component — manages screen & forgiven state
│   └── index.css      # Tailwind directives + global component classes
├── assets/            # Static assets (images, gifs)
├── components/
│   ├── FloatingHearts.tsx   # Particle hearts animation
│   ├── ProgressDots.tsx     # Step indicator dots
│   ├── ScreenCard.tsx       # Renders a single screen's content
│   └── SoftButton.tsx       # Reusable button (main / ghost variants)
├── data/
│   └── screens.ts     # All screen copy & config — edit this to personalise!
├── pages/
│   └── Home.tsx       # Page layout, composes ScreenCard + ProgressDots
└── main.tsx           # ReactDOM entry point
```

## Personalising

Edit `src/data/screens.ts` to change the text, emojis, reason cards, and promises.
