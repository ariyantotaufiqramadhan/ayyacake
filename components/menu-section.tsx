import Image from 'next/image'
import { Cake, Box, Slice, UtensilsCrossed } from 'lucide-react'

type MenuItem = {
  title: string
  image: string
  icon: React.ElementType
  description: string
  tags: string[]
  price: string
}

const menuItems: MenuItem[] = [
  {
    title: 'Birthday Cake',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu-birthday-TaSs2TlkNtxO45wMPpb6Gjl3V9EbaP.png',
    icon: Cake,
    description:
      'Kue ulang tahun kustom yang elegan dan anggun, dibuat khusus sesuai tema acaramu dengan rasa premium.',
    tags: ['Custom Design', 'Premium'],
    price: 'Mulai dari Rp150.000',
  },
  {
    title: 'Bento Cake',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu-bento-UbXefTBs2ilEs5OhEcf6y8xUniKPkc.png',
    icon: Box,
    description:
      'Kue mungil lucu dalam kotak bento, cocok untuk hadiah personal atau momen spesial yang intim.',
    tags: ['Mini', 'Gift Ready'],
    price: 'Mulai dari Rp35.000',
  },
  {
    title: 'Slice Cake',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu-slice-2ZM2DP9W0mtqB9EF5ffMQh5g7RvFPr.png',
    icon: Slice,
    description:
      'Potongan kue lembut berlapis dengan krim pilihan, sempurna untuk dinikmati kapan saja.',
    tags: ['Per Slice', 'Homemade'],
    price: 'Mulai dari Rp15.000',
  },
  {
    title: 'Dessert',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu-dessert-vxbkVNMqRtxbzErlo4Te9I3LcfyhB0.png',
    icon: UtensilsCrossed,
    description:
      'Aneka camilan manis homemade termasuk cupcake, banana bread, dan pilihan dessert segar lainnya.',
    tags: ['Cupcake', 'Banana Bread'],
    price: 'Mulai dari Rp10.000',
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="bg-cream py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-raspberry sm:text-3xl lg:text-4xl">
            Menu Kami
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-dark-raspberry sm:text-base">
            Pilihan kue &amp; dessert homemade yang dibuat fresh sesuai pesananmu
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-soft-pink/40 transition-shadow hover:shadow-md"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Floating tags */}
                  <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/60 bg-white/70 px-2 py-0.5 font-body text-[10px] font-medium text-raspberry backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Icon + Title */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft-pink text-raspberry">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <h3 className="font-heading text-base font-bold text-raspberry sm:text-lg">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm leading-relaxed text-dark-raspberry/80 text-pretty">
                    {item.description}
                  </p>

                  {/* Price */}
                  <p className="mt-4 border-t border-soft-pink/40 pt-3 font-heading text-sm font-bold text-raspberry">
                    {item.price}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
