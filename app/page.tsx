"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY
        setScrollY(scrollPosition)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate parallax positions based on scroll
  const sunPosition = isMounted ? -20 + scrollY * 0.05 : -20
  const backMountainPosition = isMounted ? 0 + scrollY * 0.1 : 0
  const frontMountainPosition = isMounted ? 0 + scrollY * 0.2 : 0
  const axePosition = isMounted ? 0 + scrollY * 0.15 : 0
  const crowPosition = isMounted ? scrollY * 0.3 : 0
  const titleOpacity = isMounted ? 1 - scrollY * 0.002 : 1
  const titlePosition = isMounted ? 0 + scrollY * 0.4 : 0

  return (
    <main className="relative h-[200vh] overflow-x-hidden bg-gradient-to-b from-[#1e5b6e] to-[#0a2a35]">
      <div ref={parallaxRef} className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Sky background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a7d93] to-[#1e5b6e] z-0"></div>

        {/* Sun */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-32 h-32 md:w-80 md:h-80 glow"
          style={{
            transform: `translate(-50%, calc(-50% + ${sunPosition}px))`,
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sun-xjH6b2pbXs5byYXYsBPjvYqEw0Uj2I.png"
            alt="Sun"
            fill
            className="object-contain"
          />
        </div>

        {/* Back mountains */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20"
          style={{
            transform: `translateY(${backMountainPosition}px)`,
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/backlayer-I6BQRQHXbTQQLhT6rQaKs9YbszCin9.png"
            alt="Background mountains"
            width={1920}
            height={300}
            className="w-full h-auto"
          />
        </div>

        {/* Front mountains */}
        <div
          className="absolute bottom-0 left-0 right-0 z-30"
          style={{
            transform: `translateY(${frontMountainPosition}px)`,
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frontlayer-N2eWkzfFSsYQNmxD741kXbp5E87Osx.png"
            alt="Foreground mountains"
            width={1920}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Axe with person */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-[80%] max-w-3xl"
          style={{
            transform: `translate(-50%, calc(-50% + ${axePosition}px))`,
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axe-0Ao2xldLw3gR2ALTa4DDKm8aTYRY9Z.png"
            alt="Axe with circuit patterns and silhouette"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Flying crows */}
        <div
          className="absolute left-[10%] top-[20%] z-50 w-32 md:w-48"
          style={{
            transform: `translate(${crowPosition}px, ${-crowPosition * 0.5}px)`,
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crows-VT717SQl0gNqdv6BZbPZ6UtLnDdGhc.png"
            alt="Flying crows"
            width={100}
            height={50}
            className="w-full h-auto"
          />
        </div>

        {/* Title and button */}
        <div
          className="absolute font-custom left-1/2 bottom-[15%] transform -translate-x-1/2 z-50 text-center w-full px-4 flex flex-col items-center"
          style={{
            transform: `translate(-50%, ${titlePosition}px)`,
            opacity: titleOpacity,
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-[#e0f2f7] tracking-wider">
            HackMol <span className="text-[#4fd1d9]">6.0</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#a7d4e2] tracking-widest font-custom">hack the realms</p>
          {/* <Button className="bg-[#1e5b6e] hover:bg-[#2a7d93] text-[#e0f2f7] border-2 border-[#4fd1d9] px-8 py-6 text-xl rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,209,217,0.5)]">
            Coming Soon...
          </Button> */}
          <div 
            className="px-10 py-4 text-[#e0f2f7] text-2xl" 
            style={{
                background: `
                    linear-gradient(135deg, transparent 8px, #1e5b6e 0) top left, 
                    linear-gradient(-135deg, transparent 8px, #1e5b6e 0) top right, 
                    linear-gradient(-45deg, transparent 8px, #1e5b6e 0) bottom right, 
                    linear-gradient(45deg, transparent 8px, #1e5b6e 0) bottom left`,
                backgroundSize: "50% 50%",
                backgroundRepeat: "no-repeat"
            }}
        >
          Coming Soon
        </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-[#4fd1d9] flex justify-center">
            <div className="w-1 h-3 bg-[#4fd1d9] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

