'use client'
import Image from 'next/image'
import {cn} from "@/lib/utils"

export default function Hero({id}: { id?: string }) {
    return (
        <section id={id} className="pt-24 py-16 relative min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                    <Image
                        src="/images/Stoyanov2.svg"
                        alt="Stoyanov Guitars Logo"
                        width={600}
                        height={200}
                        className="mx-auto mb-4 invert"
                        priority
                    />
                    <p className={cn("text-xl mb-10 font-semibold invert text-center", "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]")}>Welcome
                        to
                        Stoyanov Guitars Page!</p>
                    <p className={cn("text-xl mb-8 font-semibold invert text-center", "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]")}>Everything
                        you see here is a made by me. including the webpage itself.</p>

                </div>
            </div>
        </section>
)
}

