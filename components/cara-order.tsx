import { ClipboardList, MessageCircle, CreditCard, Package } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Siapkan Detail Pesanan',
    description:
      'Siapkan tema/desain, tanggal acara, ukuran, dan jumlah porsi. Pemesanan minimal H-2 sebelum tanggal acara.',
  },
  {
    icon: MessageCircle,
    title: 'Hubungi via WhatsApp',
    description:
      'Kirimkan detail yang sudah kamu siapkan ke WhatsApp kami untuk cek ketersediaan slot.',
  },
  {
    icon: CreditCard,
    title: 'Konfirmasi & Bayar DP',
    description:
      'Konfirmasi final desain dan amankan slot kuemu dengan pembayaran DP 30%.',
  },
  {
    icon: Package,
    title: 'Pengambilan Kue',
    description:
      'Kue siap di-pickup langsung atau kami siapkan pengirimannya via GoSend.',
  },
]

export function CaraOrder() {
  return (
    <section id="cara-order" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-2xl font-bold text-raspberry sm:text-3xl lg:text-4xl">
            Cara Order
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-dark-raspberry sm:text-base">
            Pesan kue impianmu dalam 4 langkah mudah
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="relative flex flex-col gap-4 rounded-2xl bg-cream p-6 ring-1 ring-soft-pink/50"
              >
                {/* Step number badge */}
                <span className="absolute right-4 top-4 font-heading text-5xl font-bold text-soft-pink/50 leading-none select-none">
                  {index + 1}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-raspberry text-white shrink-0">
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-heading text-base font-bold text-raspberry sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-dark-raspberry/80 text-pretty">
                    {step.description}
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
