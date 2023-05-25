import './globals.css'

export const metadata = {
  title: 'Mistery of Tomires',
  description: 'Tomires birthday',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
