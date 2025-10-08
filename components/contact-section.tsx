import { Instagram, Mail, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ContactSection() {
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
                    <Phone className="w-6 h-6 text-primary" />
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
                    <Mail className="w-6 h-6 text-primary" />
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
                    <Instagram className="w-6 h-6 text-primary" />
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
              <Phone className="w-5 h-5" />
              Entrar em Contato
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}
