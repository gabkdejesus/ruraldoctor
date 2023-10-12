import Image from 'next/image'
import Navbar from './components/Navbar'
import Video from './components/Video'
import ScrollVideo from './components/ScrollVideo'
import Posts from './components/Posts'


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Posts />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ScrollVideo src="/videos/wotw.mp4"/>
      </div>
    </main>
  )
}
