
import './globals.css';
import { Inter } from 'next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid grid-cols-6"> 
      <Header props='./api/tasks'/>
      <main className="col-span-4 border-2 bg-gray-300">{children}</main>
      <Footer />
      </ body>
    </html>
  )
}
