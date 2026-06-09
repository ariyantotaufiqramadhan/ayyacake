import Link from 'next/link'
import { HeroCarousel } from './hero-carousel'

export function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20">
        {/* Desktop: side-by-side 50/50 | Mobile: stacked with CTA above image */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16">

          {/* Text + CTA block — always first visually on mobile & desktop left */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-heading text-3xl font-bold leading-tight text-raspberry text-balance sm:text-4xl lg:text-5xl xl:text-6xl">
              Rayakan Momenmu dengan Kue Custom Homemade
            </h1>
            <p className="mt-3 font-body text-sm leading-relaxed text-dark-raspberry text-pretty sm:mt-4 sm:text-base lg:text-lg xl:text-xl">
              Birthday cake, bento cake, slice cake & dessert lainnya — dipesan sesuai keinginanmu,
              siap pickup atau GoSend area Depok
            </p>

            {/* CTA Buttons — above carousel on mobile */}
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <Link
                href="https://wa.me/6289686504962"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-raspberry px-8 py-3 font-body text-sm font-semibold text-white transition-all hover:bg-dark-raspberry sm:w-auto sm:text-base"
              >
                Order Sekarang
              </Link>
              <Link
                href="#menu"
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-raspberry px-8 py-3 font-body text-sm font-semibold text-raspberry transition-all hover:bg-raspberry hover:text-white sm:w-auto sm:text-base"
              >
                Lihat Menu
              </Link>
            </div>

            {/* Carousel — below CTA on mobile, hidden on desktop (shown in right column) */}
            <div className="mt-6 flex justify-center lg:hidden">
              <HeroCarousel mobile />
            </div>
          </div>

          {/* Desktop-only right carousel column */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
