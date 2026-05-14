import type { Screen } from '../data/screens'
import SoftButton from './SoftButton'

interface Props {
  data: Screen
  forgiven: boolean
  isLast: boolean
  onNext: () => void
  onForgive: () => void
  onRestart: () => void
}

export default function ScreenCard({ data, forgiven, isLast, onNext, onForgive, onRestart }: Props) {
  const emoji = forgiven && isLast ? '🎉' : data.emoji

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {/* Emoji */}
      <div
        className={`text-6xl leading-none select-none ${
          forgiven && isLast ? 'animate-pop-in' : 'animate-float'
        }`}
      >
        {emoji}
      </div>

      {/* Title + subtitle */}
      <div className="flex flex-col gap-1.5">
        <h1 className="font-lora text-[26px] font-semibold text-pink-700 leading-snug m-0">
          {forgiven && isLast ? 'Yay!! Thank you 🥹' : data.title}
        </h1>
        <p className="font-dm text-xs text-pink-400 italic tracking-wide m-0">
          {data.subtitle}
        </p>
      </div>

      {/* Body */}
      {data.body && !forgiven && (
        <p className="font-dm text-[15px] text-gray-500 leading-relaxed m-0 max-w-sm">
          {data.body}
        </p>
      )}

      {/* Forgiven message */}
      {forgiven && isLast && (
        <p className="font-dm text-[15px] text-gray-500 leading-relaxed m-0 max-w-sm">
          You have no idea how much this means. I promise I'll show up for you, every single time.
          Best friends forever, no matter what. 💕
        </p>
      )}

      {/* Reason cards */}
      {data.cards && (
        <div className="flex gap-2.5 w-full flex-wrap">
          {data.cards.map((card, i) => (
            <div key={i} className="reason-card">
              <div className="text-[26px] mb-2">{card.icon}</div>
              <p className="text-xs text-pink-900 m-0 leading-relaxed">{card.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Promise list */}
      {data.promises && (
        <div className="flex flex-col gap-2.5 w-full">
          {data.promises.map((promise, i) => (
            <div key={i} className="promise-card">
              <span className="text-lg text-pink-400 flex-shrink-0 mt-0.5">♡</span>
              <p className="text-sm text-gray-700 m-0 leading-relaxed">{promise}</p>
            </div>
          ))}
        </div>
      )}

      {/* Quote */}
      {data.quote && !forgiven && (
        <blockquote className="font-lora italic text-sm text-pink-700 border-l-[3px] border-pink-200 pl-3.5 m-0 text-left leading-relaxed">
          {data.quote}
        </blockquote>
      )}

      {/* CTA buttons */}
      {!forgiven ? (
        <div className="flex flex-col gap-2.5 items-center w-full">
          {!isLast ? (
            <SoftButton onClick={onNext}>{data.btnLabel}</SoftButton>
          ) : (
            <>
              <SoftButton onClick={onForgive}>{data.btnLabel}</SoftButton>
              <SoftButton variant="ghost" onClick={onRestart}>
                Read from the start
              </SoftButton>
            </>
          )}
        </div>
      ) : (
        <SoftButton variant="ghost" onClick={onRestart}>
          Read again 🌸
        </SoftButton>
      )}
    </div>
  )
}
