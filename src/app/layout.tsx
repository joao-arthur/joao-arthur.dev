import localFont from 'next/font/local'
import "../styles/globals.css";

const myFont = localFont({ src: './fonts/AgaveNerdFont-Regular.ttf' })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={myFont.className}>
            <body>{children}</body>
        </html>
    )
}