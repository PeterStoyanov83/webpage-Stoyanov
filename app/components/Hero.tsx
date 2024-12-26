'use client'
import Image from 'next/image'
import { cn } from "@/lib/utils"

export default function Hero({ id }: { id?: string }) {
  return (
    <section id={id} className="relative h-screen flex items-center justify-center -z-10">
      <div className="relative z-10 text-center text-white flex flex-col items-center">
        <Image
          src="/images/Stoyanov2.svg"
          alt="Stoyanov Guitars Logo"
          width={300}
          height={100}
          className="mx-auto mb-4 invert"
          priority
        />
        <p className={cn("text-xl mb-8 font-semibold", "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]")}>Handcrafted perfection for discerning musicians</p>
        
      </div>
    </section>
  )
}

