'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Berapa lama minimal waktu pemesanan kue?',
    answer: 'Pemesanan kue kustom sebaiknya dilakukan minimal H-2 sebelum acara biar slot pembuatannya masih tersedia.',
  },
  {
    question: 'Apakah bisa request desain sendiri atau minta less sugar?',
    answer: 'Bisa banget! Kami terima custom design sesuai referensi foto kamu. Tingkat kemanisan dan varian rasa juga bisa di-request.',
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Cukup bayar DP 30% dulu untuk amanin slot, sisanya dilunasi pas kue udah siap dikirim atau di-pickup.',
  },
  {
    question: 'Aman nggak kalau dikirim pakai GoSend atau GrabExpress?',
    answer: 'Aman! Kami kemas kue dengan kotak yang kokoh dan kasih instruksi khusus ke driver-nya. Untuk kue ukuran besar, lebih disarankan pakai GoSend Car biar makin aman.',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="font-heading text-3xl font-bold text-raspberry sm:text-4xl lg:text-5xl">
            Pertanyaan Sering Ditanya
          </h2>
        </div>

        {/* Accordion */}
        <AccordionPrimitive.Root type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionPrimitive.Item
              key={index}
              value={`item-${index}`}
              className="rounded-lg border border-soft-pink bg-white shadow-sm"
            >
              <AccordionPrimitive.Trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 font-body font-semibold text-raspberry transition-colors hover:bg-soft-pink/30 sm:px-6 sm:py-5">
                <span className="text-left text-sm sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300 data-[state=open]:rotate-180" />
              </AccordionPrimitive.Trigger>

              <AccordionPrimitive.Content className="border-t border-soft-pink/40 px-5 py-4 font-body text-sm leading-relaxed text-dark-raspberry/80 sm:px-6 sm:py-5">
                {faq.answer}
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  )
}
