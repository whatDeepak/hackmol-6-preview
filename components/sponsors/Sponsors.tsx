import { useEffect, useState } from "react";

export default function Sponsors() {
    const [stars, setStars] = useState<
        { x: number; y: number; size: number; opacity: number; }[]
      >([]);
      
      useEffect(() => {
          const generatedStars = Array.from({ length: 220 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1.5,
            opacity: Math.random() * 0.5 + 0.3,
          }));
          setStars(generatedStars);
      }, [])
    return (
        <div className="w-full h-full relative flex flex-col gap-36 items-center justify-center"
            style={{
                background: "linear-gradient(to bottom, #10223C 40%, #040D1A 100%)",
            }}>
            
            <span className="absolute top-0 left-10 h-full aspect-square"
                style={{
                    border: "3px solid transparent",
                    background: "linear-gradient(130deg, #00D4FF 0%, #00D4FFF0 15%, #00D4FF00 40%) border-box",
                    mask: 
                      "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
                    maskComposite: "exclude",
                    borderRadius: "92% 8% 91% 9% / 79% 16% 84% 21% ",
                }}></span>
            <span className="absolute top-0 right-10 h-full aspect-square"
                style={{
                    border: "3px solid transparent",
                    background: "linear-gradient(-50deg, #00D4FF 0%, #00D4FFF0 15%, #00D4FF00 40%) border-box",
                    mask: 
                      "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
                    maskComposite: "exclude",
                    borderRadius: "92% 8% 91% 9% / 79% 16% 84% 21% ",
                }}></span>

            <span className="absolute top-5 left-5 bottom-5 right-5 rounded-tl-full rounded-br-full overflow-hidden">
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
            }}
          />
        ))}
            </span>
            <h2 className="text-5xl font-semibold font-custom">
                <span className="text-[#00D4FF]">Previous</span> Sponsors
                <div className="w-full h-[1px] -mt-[3px]" style={{ background: "linear-gradient(to right, #00D4FF00 0%, #00D4FFF0 15%, #00D4FF 50%, #00D4FFF0 85%, #00D4FF00 100%)" }}></div>
            </h2>

            <div className="flex items-center justify-center flex-wrap gap-20 px-40">
                <img src="/Group.png" className="h-16 object-contain" alt="sponsors" />
                <img src="/Group.png" className="h-16 object-contain" alt="sponsors" />
                <img src="/Group.png" className="h-16 object-contain" alt="sponsors" />
                <img src="/Group.png" className="h-16 object-contain" alt="sponsors" />
                <img src="/Group.png" className="h-16 object-contain" alt="sponsors" />
            </div>
        </div>
    )
}