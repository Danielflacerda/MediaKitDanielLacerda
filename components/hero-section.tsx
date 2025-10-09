import { InstagramIcon, MailIcon } from "./icons" // Assuming icons are imported from a separate file

export default function HeroSection() {
  const basePath = typeof window !== "undefined" ? (window as any).__NEXT_DATA__?.props?.pageProps?.basePath || "" : ""

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`/images/hero-photo.png`}
          alt="Daniel Lacerda"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-balance">
              <span className="block text-white">FORJADO NO PESO</span>
              <span className="block text-orange-500 text-shadow-glow">MOLDADO NA DISCIPLINA</span>
            </h1>
          </div>

          {/* Name and Location */}
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Daniel Ferreira Lacerda</h2>
            <p className="text-xl text-orange-400 flex items-center justify-center gap-2">
              <InstagramIcon />
              @dan_rera
            </p>
            <p className="text-lg text-gray-400">Salvador - Bahia</p>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Lifestyle maromba | Treino | Motivação | Saúde e performance | Ex-Obeso
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <a
              href="https://instagram.com/dan_rera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              <InstagramIcon />
              Ver Instagram
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700"
            >
              <MailIcon />
              Contato Profissional
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-orange-500 rounded-full" />
        </div>
      </div>
    </section>
  )
}
