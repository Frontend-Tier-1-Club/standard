"use client"

import { useParams } from "next/navigation"
import type { ReactNode } from "react"

import { cn } from "@/shared/library/cn"

export function useMode(): string | undefined {
  const { slug } = useParams()
  return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined
}

export function Body({ children }: { children: ReactNode }): React.ReactElement {
  const mode = useMode()

  return <body className={cn(mode, "relative flex min-h-screen flex-col")}>{children}</body>
}
