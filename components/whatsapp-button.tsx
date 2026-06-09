import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <span className="fixed bottom-6 right-6 z-40 inline-flex">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <Link
        href="https://wa.me/62895412169070"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 rounded-full bg-[#25D366] p-4 font-body font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#1ebe5d] sm:px-5 sm:py-3"
        aria-label="Tanya via WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" />
        <span className="hidden sm:inline">Tanya via WA</span>
      </Link>
    </span>
  )
}
