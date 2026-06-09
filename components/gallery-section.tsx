import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'

export function GallerySection() {
  const images = [
    { src: '/images/gallery-1.webp', alt: 'Space-themed birthday cake' },
    { src: '/images/gallery-2.webp', alt: 'Superhero character cake' },
    { src: '/images/gallery-3.webp', alt: 'Hello Kitty themed cake' },
    { src: '/images/gallery-4.webp', alt: 'Kuromi character cake' },
    { src: '/images/gallery-5.webp', alt: 'Cute ducks birthday cake' },
    { src: '/images/gallery-6.webp', alt: 'Dinosaur themed cake' },
    { src: '/images/gallery-7.webp', alt: 'Pastry and cream puff collection' },
    { src: '/images/gallery-8.webp', alt: 'Minimalist cute face cake' },
  ]

  return (
    <section id="galeri" className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="font-heading text-3xl font-bold text-raspberry sm:text-4xl lg:text-5xl">
            Intip Kreasi Cantik Kami
          </h2>
          <p className="mt-3 font-body text-lg text-dark-raspberry/70">
            @ayya_.cake di Instagram
          </p>
        </div>

        {/* Gallery Grid */}
        <Link
          href="https://www.instagram.com/ayya_.cake"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 block"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
              </div>
            ))}
          </div>
        </Link>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="https://www.instagram.com/ayya_.cake"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-raspberry px-6 py-3 font-body font-semibold text-raspberry transition-colors hover:bg-soft-pink hover:border-raspberry"
          >
            <Heart size={20} fill="currentColor" />
            <span>Lihat Lebih Banyak di Instagram</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
