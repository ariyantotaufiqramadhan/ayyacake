'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const carouselImages = [
  {
    src: '/images/carousel-bento.png',
    alt: 'Bento Cake estetik custom & mini dari AYYA Cake',
  },
  {
    src: '/images/carousel-birthday.png',
    alt: 'Birthday Cake mewah & anggun dari AYYA Cake',
  },
  {
    src: '/images/carousel-dessert.png',
    alt: 'Slice Cake & Dessert lainnya dari AYYA Cake',
  },
]

interface HeroCarouselProps {
  mobile?: boolean
}

export function HeroCarousel({ mobile = false }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl shadow-lg ${
        mobile
          ? 'aspect-video max-h-64'
          : 'aspect-square max-h-[75vh] max-w-sm sm:max-w-md lg:max-w-lg'
      }`}
    >
      {carouselImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Lihat gambar ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
