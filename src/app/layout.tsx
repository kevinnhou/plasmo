import "@/app/globals.css"

import React from "react"

import Providers from "~/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
