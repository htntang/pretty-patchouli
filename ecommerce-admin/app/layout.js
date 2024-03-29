import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Home() {
  return(
    <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div>
        <button className="bg-white p-2">Login with Google</button>
      </div>
    </div>
  )
}
