"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Meteors } from "@/components/magicui/meteors";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Add stars state
  const [stars, setStars] = useState<
    { x: number; y: number; size: number; opacity: number; speed: number }[]
  >([]);

  // Add comets state
  const [comets, setComets] = useState<
    {
      x: number;
      y: number;
      size: number;
      angle: number;
      speed: number;
      delay: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    setIsMounted(true);

    // Generate random stars
    const generatedStars = Array.from({ length: 400 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 0.05 + 0.01,
    }));
    setStars(generatedStars);

    // Generate random comets (fewer than stars)
    const generatedComets = Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 60, // Keep comets in upper part of sky
      size: Math.random() * 3 + 2,
      angle: Math.random() * 30 + 30, // 30-60 degree angle
      speed: Math.random() * 2 + 3,
      delay: Math.random() * 15, // Random delay for each comet
      duration: Math.random() * 4 + 2, // Duration between 2-6 seconds
    }));
    setComets(generatedComets);

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        setScrollY(scrollPosition);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax positions based on scroll
  const sunPosition = isMounted ? -20 + scrollY * 0.05 : -20;
  const backMountainPosition = isMounted ? 0 + scrollY * 0.1 : 0;
  const frontMountainPosition = isMounted ? 0 + scrollY * 0.2 : 0;
  const axePosition = isMounted ? 0 + scrollY * 0.15 : 0;
  const crowPosition = isMounted ? scrollY * 0.3 : 0;
  const titleOpacity = isMounted ? 1 - scrollY * 0.002 : 1;
  const titlePosition = isMounted ? 0 + scrollY * 0.4 : 0;

  // Sun rotation based on scroll
  const sunRotation = isMounted ? scrollY * 0.05 : 0;

  return (
    <main className="relative h-[200vh] overflow-x-hidden bg-gradient-to-b from-[#1e5b6e] to-[#0a2a35]">
      <div
        ref={parallaxRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Sky background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a7d93] to-[#1e5b6e] z-0"
            style={{
              background: "linear-gradient(180deg, #000 1%, #152126 21%, #385867 55%, #2A424D 100%)"
            }}></div>
        <Meteors number={11} className="z-50 pointer-events-none " />
        {/* Stars */}
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              transform: `translateY(${scrollY * star.speed}px)`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${
                Math.random() * 2
              }s`,
              zIndex: 5,
            }}
          />
        ))}

        {/* Comets */}
        {comets.map((comet, index) => (
          <div
            key={`comet-${index}`}
            className="absolute z-5"
            style={{
              left: `${comet.x}%`,
              top: `${comet.y}%`,
              transform: `translateY(${scrollY * 0.03}px)`,
              zIndex: 6,
            }}
          >
            <div
              className="relative"
              style={{
                animation: `cometMove ${comet.duration}s linear ${comet.delay}s infinite`,
              }}
            >
              <div
                className="absolute rounded-full bg-white"
                style={{
                  width: `${comet.size}px`,
                  height: `${comet.size}px`,
                  boxShadow: `0 0 ${comet.size * 2}px ${
                    comet.size / 2
                  }px rgba(255, 255, 255, 0.8)`,
                }}
              />
              <div
                className="absolute comet-tail"
                style={{
                  width: `${comet.size * 15}px`,
                  height: `${comet.size}px`,
                  transform: `rotate(${comet.angle}deg)`,
                  transformOrigin: `0 50%`,
                }}
              />
            </div>
          </div>
        ))}

        {/* Sun with glow effect and rotation */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-56 aspect-square md:w-60 bg-[#FAFCE3] rounded-full"
          style={{
            transform: `translate(-50%, calc(-80% + ${sunPosition}px)) rotate(${sunRotation}deg)`,
            filter: "drop-shadow(0 0 40px rgba(255, 255, 200, 0.5))",
            transition: "transform 0.1s ease-out",
          }}
        >
        </div>

        {/* Back mountains with subtle hover */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20"
          style={{
            transform: `translateY(${backMountainPosition}px)`,
            transition: "transform 0.1s ease-out",
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

        {/* Axe with circuit patterns and silhouette */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full h-full"
          style={{
            transform: `translate(-50%, calc(-50% + ${axePosition}px))`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="https://res.cloudinary.com/doipplfld/image/upload/v1741435828/hackmol6/cst4nupjeqdoyva827na.png"
            alt="Axe with circuit patterns and silhouette"
            fill
            style={{ 
              objectFit: "contain",
              scale: "2.8",
              transform: `translateY(10%) translateX(-13%)`,
            }}
          />
        </div>

        {/* Front mountains with hover effect */}
        <div
          className="absolute bottom-0 left-0 right-0 z-30"
          style={{
            transform: `translateY(${frontMountainPosition}px)`,
            transition: "transform 0.1s ease-out",
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

        {/* Flying crows with wing flap animation */}
        <div
          className="absolute left-[10%] top-[20%] z-50 w-32 md:w-48"
          style={{
            transform: `translate(${crowPosition}px, ${-crowPosition * 0.5}px)`,
            animation: "fly 15s linear infinite",
            transition: "transform 0.1s ease-out",
            filter: "invert(1)"
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crows-VT717SQl0gNqdv6BZbPZ6UtLnDdGhc.png"
            alt="Flying crows"
            width={100}
            height={50}
            className="w-full h-auto animate-wingFlap"
          />
        </div>

        {/* Title and button */}
        <div
          className="absolute font-custom left-1/2 bottom-[15%] transform -translate-x-1/2 z-50 text-center w-full px-4 flex flex-col items-center"
          style={{
            transform: `translate(-50%, ${titlePosition}px)`,
            opacity: titleOpacity,
            transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-base-dark tracking-wider">
            HackMol <span className="text-[#4fd1d9]">6.0</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#a8d5e3] tracking-widest">
            hack the realms
          </p>

          <div
            className="px-12 py-3 text-[#e0f2f7] text-2xl relative overflow-hidden group"
            style={{
              background: `
                    linear-gradient(135deg, transparent 5px, #08080834 0) top left, 
                    linear-gradient(-135deg, transparent 5px, #08080834 0) top right, 
                    linear-gradient(-45deg, transparent 5px, #08080834 0) bottom right, 
                    linear-gradient(45deg, transparent 5px, #08080834 0) bottom left`,
              backgroundSize: "50% 50%",
              backgroundRepeat: "no-repeat",
            }}
          >
              <span className="relative z-10 group-hover:text-[#4fd1d9] transition-colors duration-300">
                Coming Soon
              </span>
            {/* </div> */}
            <span className="absolute bottom-[6px] left-[6px] w-full h-[2px] bg-[#4fd1d9] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            <span className="absolute top-[6px] right-[6px] h-full w-[2px] bg-[#4fd1d9] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></span>
            <span className="absolute top-[6px] right-[6px] w-full h-[2px] bg-[#4fd1d9] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></span>
            <span className="absolute bottom-[6px] left-[6px] h-full w-[2px] bg-[#4fd1d9] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-300"></span>
            {/* Glitch effect on hover */}
            {/* <span className="absolute inset-0 bg-[#4fd1d9] opacity-0 group-hover:animate-glitch"></span> */}
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-[#4fd1d9] flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-[#4fd1d9] rounded-full mt-2 animate-scrollPulse"></div>
            <div className="absolute inset-0 bg-[#4fd1d9] opacity-10 animate-glow"></div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, calc(-50% + ${axePosition}px));
          }
          50% {
            transform: translate(-50%, calc(-50% + ${axePosition - 10}px));
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes cometMove {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(200px) translateY(100px);
            opacity: 0;
          }
        }

        // .comet-tail {
        //   background: linear-gradient(
        //     90deg,
        //     rgba(255, 255, 255, 0.8) 0%,
        //     rgba(255, 255, 255, 0) 100%
        //   );
        //   border-radius: 100px;
        // }

        @keyframes wingFlap {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.9);
          }
        }

        @keyframes textGlow {
          0%,
          100% {
            text-shadow: 0 0 5px rgba(79, 209, 217, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(79, 209, 217, 0.6);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollPulse {
          0%,
          100% {
            opacity: 0.5;
            height: 3px;
          }
          50% {
            opacity: 1;
            height: 6px;
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes fly {
          0% {
            transform: translate(${crowPosition}px, ${-crowPosition * 0.5}px);
          }
          50% {
            transform: translate(
              ${crowPosition + 20}px,
              ${-crowPosition * 0.5 - 15}px
            );
          }
          100% {
            transform: translate(${crowPosition}px, ${-crowPosition * 0.5}px);
          }
        }

        @keyframes glitch {
          0%,
          100% {
            opacity: 0;
          }
          10%,
          15% {
            opacity: 0.1;
            transform: translate(-3px, 0);
          }
          20%,
          25% {
            opacity: 0.1;
            transform: translate(3px, 0);
          }
          30%,
          35% {
            opacity: 0.1;
            transform: translate(-3px, 0);
          }
          40%,
          45% {
            opacity: 0.1;
            transform: translate(3px, 0);
          }
          46% {
            opacity: 0;
          }
        }

        .animate-wingFlap {
          animation: wingFlap 1s ease-in-out infinite;
        }

        .animate-textGlow {
          animation: textGlow 3s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }

        .animate-scrollPulse {
          animation: scrollPulse 2s ease-in-out infinite;
        }

        .animate-glitch {
          animation: glitch 2s ease-in-out;
        }
      `}</style>
    </main>
  );
}
