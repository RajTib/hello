interface Props {
  current: number
  total: number
}

export default function ProgressDots({ current, total }: Props) {
  return (
    <div className="flex gap-2 justify-center mt-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i === current
              ? 'bg-pink-400 scale-125'
              : 'bg-pink-200'
          }`}
        />
      ))}
    </div>
  )
}
