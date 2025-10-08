import { Users, Target, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

export function PartnershipsSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gold-accent">PARCERIAS & DIFERENCIAIS</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          {/* Current Partnerships */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="metallic-gradient steel-texture p-8 border-primary/30">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Parceria Atual</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-foreground">@odin_nutri</strong> - Nutricionista Esportivo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Acompanhamento nutricional completo para performance e evolução corporal
                  </p>
                </div>
              </div>
            </Card>

            <Card className="metallic-gradient steel-texture p-8 border-primary/30">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Parceria Futura</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-foreground">@segueopotter_personal</strong> - Educador Físico
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Especialista em musculação (treinou com Johann Schatz)
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Differentials */}
          <Card className="metallic-gradient steel-texture p-8 md:p-12 border-primary/30">
            <div className="flex items-start gap-4 mb-6">
              <Award className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 gold-accent">Diferenciais</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-foreground">Transformação Real</h4>
                <p className="text-sm text-muted-foreground">
                  De 102kg obeso a atleta natural em preparação para o palco
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-foreground">Disciplina</h4>
                <p className="text-sm text-muted-foreground">
                  Consistência diária, rotina de atleta e foco em resultados
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-foreground">Autenticidade</h4>
                <p className="text-sm text-muted-foreground">Conteúdo genuíno que inspira e motiva pessoas reais</p>
              </div>
            </div>
          </Card>

          {/* Looking For */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-6 gold-accent">BUSCANDO PARCERIAS COM</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                "Growth Supplements",
                "Max Titanium",
                "Integralmédica",
                "Probiótica",
                "Darkness",
                "Marcas de Suplementos",
                "Marcas de Performance",
              ].map((brand, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-primary/10 border-2 border-primary rounded-lg text-base font-bold text-primary hover:bg-primary/20 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
