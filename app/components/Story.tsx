import Image from 'next/image'

export default function Story({id}: { id?: string }) {
    return (
        <section id={id} className="pt-24 py-16 relative text-white">
            <div className="container mx-auto px-4">
                <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-center mb-8">My Story</h2>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-gray-300 font-bold mb-6 text-xl">
                            Stoyanov Guitars began as a passion project by Peter Stoyanov, combining his love for music and craftsmanship.
                            Each guitar is handcrafted with care, blending tradition with modern innovation to create unique instruments
                            that inspire creativity.</p>
                        <p className="text-gray-300 font-bold text-xl">
                            Built from premium materials and designed with precision, Stoyanov Guitars offer exceptional sound,
                            comfort, and aesthetics. From a small workshop to a growing brand, these guitars reflect individuality
                            and a deep connection to music.</p>
                        <p className="text-gray-100 font-bold mt-6 italic text-xl">
                            "Every instrument has a story, waiting to be completed by you."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

