import CharacterSheet from '../components/character-sheet'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <CharacterSheet />
    </main>
  )
}
