import { Acme } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Acme({
    subsets: ['latin'],
    display: 'auto',
    weight: '400',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
            <body>{children}</body>
        </html>
    )
}