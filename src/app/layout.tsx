import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo Next.js App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        {/* adds some basic general design to the body (colours, margin and padding) */}
      <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}>{children}</body>
    </html>
  )
}
