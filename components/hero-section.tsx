import Image from "next/image"
import { Instagram, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-photo.png" alt="Daniel Lacerda" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-balance">
              <span className="block text-foreground">FORJADO NO PESO</span>
              <span className="block gold-accent text-shadow-glow">MOLDADO NA DISCIPLINA</span>
            </h1>
          </div>

          {/* Name and Location */}
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Daniel Ferreira Lacerda</h2>
            <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
              <Instagram className="w-5 h-5" />
              @dan_rera
            </p>
            <p className="text-lg text-muted-foreground">Salvador - Bahia</p>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Lifestyle maromba | Treino | Motivação | Saúde e performance | Ex-Obeso
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <a
              href="https://instagram.com/dan_rera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              Ver Instagram
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/80 transition-colors border border-gray-700"
            >
              <Mail className="w-5 h-5" />
              Contato Profissional
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
