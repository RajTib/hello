import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'main' | 'ghost'
  children: ReactNode
}

export default function SoftButton({ variant = 'main', children, className = '', ...rest }: Props) {
  return (
    <button
      className={variant === 'main' ? `btn-main ${className}` : `btn-ghost ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
