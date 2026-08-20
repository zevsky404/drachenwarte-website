import React from 'react'
import './styles.css'
import './globals.css'
import { modernAntiqua } from "@/app/(frontend)/fonts";
import { TopNavbar } from '@/app/components/top-navbar'


export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${modernAntiqua.className} antialiased`}>
        <TopNavbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
