"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EnhancedParallax() {
  const [scrollY, setScrollY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
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

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX / window.innerWidth - 0.5)
      setMouseY(e.clientY / window.innerHeight - 0.5)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Calculate parallax positions based on scroll and mouse position
  const sunPosition = isMounted ? -20 + scrollY * 0.05 : -20
  const sunMouseX = isMounted ? mouseX * 20 : 0
  const sunMouseY = isMounted ? mouseY * 20 : 0

  const backMountainPosition = isMounted ? 0 + scrollY * 0.1 : 0
  const backMountainMouseX = isMounted ? mouseX * 10 : 0

  const frontMountainPosition = isMounted ? 0 + scrollY * 0.2 : 0
  const frontMountainMouseX = isMounted ? mouseX * 20 : 0

  const axePosition = isMounted ? 0 + scrollY * 0.15 : 0
  const axeMouseX = isMounted ? mouseX * 30 : 0
  const axeMouseY = isMounted ? mouseY * 15 : 0

  const crowPosition = isMounted ? scrollY * 0.3 : 0
  const crowMouseX = isMounted ? mouseX * 40 : 0
  const crowMouseY = isMounted ? mouseY * 20 : 0

  const titleOpacity = isMounted ? 1 - scrollY * 0.002 : 1
  const titlePosition = isMounted ? 0 + scrollY * 0.4 : 0

  return (
    <main className="relative h-[200vh] overflow-x-hidden bg-gradient-to-b from-[#1e5b6e] to-[#0a2a35]">
      <div ref={parallaxRef} className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Sky background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a7d93] to-[#1e5b6e] z-0">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,209,217,0.3),transparent_70%)]"></div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20 animate-pulse"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Sun with glow effect */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-32 h-32 md:w-48 md:h-48"
          style={{
            transform: `translate(calc(-50% + ${sunMouseX}px), calc(-50% + ${sunPosition}px + ${sunMouseY}px))`,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-xl"></div>
          <div className="absolute inset-0 rounded-full bg-white opacity-30 blur-lg"></div>
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
            transform: `translate(${backMountainMouseX}px, ${backMountainPosition}px)`,
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
            transform: `translate(${frontMountainMouseX}px, ${frontMountainPosition}px)`,
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

        {/* Axe with person and glowing circuit patterns */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-[80%] max-w-3xl"
          style={{
            transform: `translate(calc(-50% + ${axeMouseX}px), calc(-50% + ${axePosition}px + ${axeMouseY}px))`,
          }}
        >
          <div className="absolute inset-0 opacity-50 blur-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axe-0Ao2xldLw3gR2ALTa4DDKm8aTYRY9Z.png"
              alt="Glowing effect"
              width={800}
              height={600}
              className="w-full h-auto"
              style={{
                filter: "brightness(1.5) hue-rotate(10deg)",
              }}
            />
          </div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axe-0Ao2xldLw3gR2ALTa4DDKm8aTYRY9Z.png"
            alt="Axe with circuit patterns and silhouette"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Flying crows with animation */}
        <div
          className="absolute left-[10%] top-[20%] z-50 w-32 md:w-48"
          style={{
            transform: `translate(${crowPosition + crowMouseX}px, ${-crowPosition * 0.5 + crowMouseY}px)`,
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crows-VT717SQl0gNqdv6BZbPZ6UtLnDdGhc.png"
            alt="Flying crows"
            width={100}
            height={50}
            className="w-full h-auto animate-pulse"
            style={{ animationDuration: "3s" }}
          />
        </div>

        {/* Title and button with hover effects */}
        <div
          className="absolute left-1/2 bottom-[15%] transform -translate-x-1/2 z-50 text-center w-full px-4"
          style={{
            transform: `translate(-50%, ${titlePosition}px)`,
            opacity: titleOpacity,
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-[#e0f2f7] tracking-wider">
            HackMol{" "}
            <span className="text-[#4fd1d9] animate-pulse" style={{ animationDuration: "3s" }}>
              6.0
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#a7d4e2] tracking-widest">hack the realms</p>
          <Button className="bg-[#1e5b6e] hover:bg-[#2a7d93] text-[#e0f2f7] border-2 border-[#4fd1d9] px-8 py-6 text-xl rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,209,217,0.5)] relative overflow-hidden group">
            <span className="relative z-10">Register</span>
            <span className="absolute inset-0 bg-[#4fd1d9] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20"></span>
          </Button>
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

