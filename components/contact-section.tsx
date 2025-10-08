import { Card } from "@/components/ui/card"

// Inline SVG components
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gold-accent">CONTATO PROFISSIONAL</span>
            </h2>
            <p className="text-xl text-muted-foreground">Vamos construir algo incrível juntos</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="https://wa.me/5571996663080" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="metallic-gradient steel-texture p-6 border-primary/30 hover:border-primary transition-all hover:scale-105 h-full">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                    <p className="font-bold text-foreground">(71) 99666-3080</p>
                  </div>
                </div>
              </Card>
            </a>

            <a href="mailto:daniel.felacerda@hotmail.com" className="block">
              <Card className="metallic-gradient steel-texture p-6 border-primary/30 hover:border-primary transition-all hover:scale-105 h-full">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">E-mail</p>
                    <p className="font-bold text-foreground text-sm break-all">daniel.felacerda@hotmail.com</p>
                  </div>
                </div>
              </Card>
            </a>

            <a href="https://instagram.com/dan_rera" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="metallic-gradient steel-texture p-6 border-primary/30 hover:border-primary transition-all hover:scale-105 h-full">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <InstagramIcon />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Instagram</p>
                    <p className="font-bold text-foreground">@dan_rera</p>
                  </div>
                </div>
              </Card>
            </a>
          </div>

          {/* CTA */}
          <Card className="metallic-gradient steel-texture p-8 md:p-12 border-primary/30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gold-accent">Pronto para uma parceria de sucesso?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              Busco marcas sérias e comprometidas com performance para caminhar comigo nessa jornada de evolução,
              inspiração e resultados reais.
            </p>
            <a
              href="https://wa.me/5571996663080?text=Olá%20Daniel,%20vi%20seu%20mídia%20kit%20e%20gostaria%20de%20conversar%20sobre%20uma%20parceria!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <PhoneIcon />
              Entrar em Contato
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}
