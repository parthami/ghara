import {Metadata} from "next";

import './globals.css'

export const metadata: Metadata = {
    title: 'Ghara',
    description: 'Ghara',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <div id="root">{children}</div>
        </body>
        </html>
    )
}