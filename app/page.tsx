import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TentangKami } from '@/components/tentang-kami'
import { MenuSection } from '@/components/menu-section'
import { GallerySection } from '@/components/gallery-section'
import { TestimonialSection } from '@/components/testimonial-section'
import { CaraOrder } from '@/components/cara-order'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="pt-16 sm:pt-20">
      <Navbar />
      <Hero />
      <TentangKami />
      <MenuSection />
      <GallerySection />
      <TestimonialSection />
      <CaraOrder />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
