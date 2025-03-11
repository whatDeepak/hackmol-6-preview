export default function Sponsors() {
    return (
        <div className="w-full h-full relative flex flex-col gap-36 items-center justify-center"
            style={{
                background: "linear-gradient(to bottom, #10223C 40%, #040D1A 100%)",
            }}>
            
            <span className="absolute top-0 left-0 h-full aspect-square bg-red-300"
                style={{
                    border: "3px solid transparent",
                    borderRadius: "72% 28% 89% 11% / 84% 64% 36% 16% ",
                    borderImage: "linear-gradient(to right, #fff, #f00)",
                    borderImageSlice: 1
                }}></span>
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