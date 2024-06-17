import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anhtuan Kckt | Dashboard',
  description: 'Trang dashboard anhtuan kckt'
}

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <section>
      {children}
    </section>
  )
}
