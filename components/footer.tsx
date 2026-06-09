import Link from 'next/link'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer id="kontak" className="bg-raspberry py-10 text-white sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">

          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold sm:text-2xl">AYYA Cake</h3>
            <p className="mt-2 font-body italic text-white/80">
              &ldquo;Dibuat khusus, spesial untukmu&rdquo;
            </p>
          </div>

          {/* Jam Operasional + Sosmed */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="font-heading text-base font-bold">Jam Operasional</h4>
              <p className="mt-1 font-body text-sm text-white/80">
                Senin&ndash;Minggu, 08.00&ndash;20.00 WIB
              </p>
            </div>

            <div>
              <h4 className="font-heading text-base font-bold">Ikuti Kami</h4>
              <div className="mt-2 flex items-center gap-3">
                <Link
                  href="https://instagram.com/ayya_.cake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-white/20"
                  aria-label="Instagram AYYA Cake"
                >
                  <InstagramIcon className="h-4 w-4" />
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://tiktok.com/@ayya_.cake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-white/20"
                  aria-label="TikTok AYYA Cake"
                >
                  <TikTokIcon className="h-4 w-4" />
                  <span>TikTok</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Lokasi + Maps */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-heading text-base font-bold">Lokasi Toko</h4>
            <p className="mt-1 font-body text-sm leading-relaxed text-white/80">
              Melayani area Depok &amp; sekitarnya via GoSend atau Self pickup.
            </p>
            <div className="mt-4 overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7929.766905576602!2d106.7405243!3d-6.4090114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e90032b2b8db%3A0xb46865dc43f28144!2sayyacake!5e0!3m2!1sen!2sid!4v1780730864630!5m2!1sen!2sid"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi AYYA Cake"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center">
          <p className="font-body text-sm text-white/60">&copy; {new Date().getFullYear()} AYYA Cake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
