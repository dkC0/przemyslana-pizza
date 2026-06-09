'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'none'
}

export default function ScrollReveal({ children, delay = 0, className, direction = 'up' }: Props) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: direction === 'up' ? 16 : 0,
        x: direction === 'left' ? -24 : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.35, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
