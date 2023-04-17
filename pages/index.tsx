import {StatsBlock} from '../components/stats-block'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <StatsBlock />
    </main>
  )
}
