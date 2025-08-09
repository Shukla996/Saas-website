"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import styles from "@/styles/animations.module.css"
import { cn } from "@/lib/utils"

type Animation = "fade-in" | "fade-up" | "blur-reveal" | "scale-in"

type AnimatedSectionProps = {
  children?: React.ReactNode
  animation?: Animation
  delay?: number
  className?: string
}

export function AnimatedSection(
  { children, animation = "fade-in", delay = 0, className = "" }: AnimatedSectionProps = {
    children: null,
    animation: "fade-in",
    delay: 0,
    className: "",
  },
) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(styles.base, styles[animation], visible && styles.visible, className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
