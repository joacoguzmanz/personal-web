import React from "react";
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../sass/main.scss'

import Header from "@/components/Header";
import MobMenu from "@/components/MobMenu";
import MenuContext from "@/context/menuContext";

const poppins = Poppins({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Joaco Guzman',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MenuContext>
          <Header />
          {children}
          <MobMenu />
        </MenuContext>
      </body>
    </html>
  )
}
