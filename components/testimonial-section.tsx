import { Star } from 'lucide-react'

interface TestimonialCard {
  text: string
  author: string
  avatar: React.ReactNode
}

const AvatarMaya = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-full w-full">
    <circle cx="24" cy="24" r="24" fill="#FADADD" />
    {/* Hair */}
    <ellipse cx="24" cy="17" rx="11" ry="10" fill="#C2507A" />
    <path d="M13 22 Q12 32 15 36 Q13 30 13 26Z" fill="#C2507A" />
    <path d="M35 22 Q36 32 33 36 Q35 30 35 26Z" fill="#C2507A" />
    {/* Face */}
    <circle cx="24" cy="24" r="9" fill="#F9C6C9" />
    {/* Eyes */}
    <circle cx="21" cy="23" r="1.2" fill="#5B2333" />
    <circle cx="27" cy="23" r="1.2" fill="#5B2333" />
    {/* Blush */}
    <ellipse cx="19.5" cy="26" rx="2" ry="1.2" fill="#F4A0B0" opacity="0.7" />
    <ellipse cx="28.5" cy="26" rx="2" ry="1.2" fill="#F4A0B0" opacity="0.7" />
    {/* Smile */}
    <path d="M21 27.5 Q24 30 27 27.5" stroke="#C2507A" strokeWidth="1" strokeLinecap="round" fill="none" />
    {/* Body */}
    <path d="M14 42 Q14 35 24 35 Q34 35 34 42" fill="#F080A0" />
  </svg>
)

const AvatarLia = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-full w-full">
    <circle cx="24" cy="24" r="24" fill="#D4EDDA" />
    {/* Hair — longer */}
    <ellipse cx="24" cy="16" rx="11" ry="9" fill="#7B4F2E" />
    <rect x="13" y="16" width="4" height="16" rx="2" fill="#7B4F2E" />
    <rect x="31" y="16" width="4" height="16" rx="2" fill="#7B4F2E" />
    {/* Face */}
    <circle cx="24" cy="24" r="9" fill="#FDDBB4" />
    {/* Eyes */}
    <circle cx="21" cy="23" r="1.2" fill="#3B2314" />
    <circle cx="27" cy="23" r="1.2" fill="#3B2314" />
    {/* Blush */}
    <ellipse cx="19.5" cy="26" rx="2" ry="1.2" fill="#F4A878" opacity="0.6" />
    <ellipse cx="28.5" cy="26" rx="2" ry="1.2" fill="#F4A878" opacity="0.6" />
    {/* Smile */}
    <path d="M21 27.5 Q24 30 27 27.5" stroke="#A0522D" strokeWidth="1" strokeLinecap="round" fill="none" />
    {/* Body */}
    <path d="M14 42 Q14 35 24 35 Q34 35 34 42" fill="#6DBF82" />
  </svg>
)

const AvatarRama = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-full w-full">
    <circle cx="24" cy="24" r="24" fill="#D0E8FF" />
    {/* Hair — short */}
    <ellipse cx="24" cy="16" rx="10" ry="7" fill="#3B2314" />
    <rect x="14" y="16" width="20" height="5" fill="#3B2314" />
    {/* Face */}
    <circle cx="24" cy="24" r="9" fill="#FDDBB4" />
    {/* Eyes */}
    <circle cx="21" cy="23" r="1.2" fill="#3B2314" />
    <circle cx="27" cy="23" r="1.2" fill="#3B2314" />
    {/* Eyebrows */}
    <path d="M19.5 20.5 Q21 19.5 22.5 20.5" stroke="#3B2314" strokeWidth="1" strokeLinecap="round" fill="none" />
    <path d="M25.5 20.5 Q27 19.5 28.5 20.5" stroke="#3B2314" strokeWidth="1" strokeLinecap="round" fill="none" />
    {/* Smile */}
    <path d="M21 27.5 Q24 30 27 27.5" stroke="#A0522D" strokeWidth="1" strokeLinecap="round" fill="none" />
    {/* Body */}
    <path d="M14 42 Q14 35 24 35 Q34 35 34 42" fill="#5B8FCC" />
  </svg>
)

const testimonials: TestimonialCard[] = [
  {
    text: "Hasilnya sesuai banget sama yang aku minta, bahkan lebih cantik dari ekspektasi! Krimnya enak, nggak terlalu manis. Pasti balik lagi deh!",
    author: 'Maya',
    avatar: <AvatarMaya />,
  },
  {
    text: "Bento cake-nya gemesin abis, cocok banget buat kado dadakan. Adminnya asik, cepet bales, dan sabar nemenin milih desain.",
    author: 'Lia',
    avatar: <AvatarLia />,
  },
  {
    text: "Udah 3 kali order di sini dan nggak pernah kecewa. Kemasannya aman banget, kuenya nyampe rumah masih mulus!",
    author: 'Rama',
    avatar: <AvatarRama />,
  },
]

export function TestimonialSection() {
  return (
    <section id="testimoni" className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="font-heading text-3xl font-bold text-raspberry sm:text-4xl lg:text-5xl">
            Kata Mereka
          </h2>
          <p className="mt-3 font-body text-lg text-dark-raspberry/70">
            Kepuasan pelanggan adalah prioritas kami
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 sm:p-8"
            >
              {/* Rating Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="flex-1 font-body text-sm leading-relaxed text-dark-raspberry/80 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Avatar + Name */}
              <div className="mt-5 flex items-center gap-3 border-t border-soft-pink/30 pt-4">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  {testimonial.avatar}
                </div>
                <p className="font-heading text-sm font-bold text-raspberry">
                  {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
