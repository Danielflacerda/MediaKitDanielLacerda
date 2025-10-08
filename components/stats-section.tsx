import { TrendingUp, Users, Eye, Heart, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      label: "Seguidores",
      value: "1.500+",
      trend: "+69%",
    },
    {
      icon: Eye,
      label: "Alcance Mensal",
      value: "51.262",
      subtitle: "visualizações",
    },
    {
      icon: Heart,
      label: "Reels/Posts",
      value: "1.000 - 6.500",
      subtitle: "views",
    },
    {
      icon: TrendingUp,
      label: "Stories",
      value: "250 - 800",
      subtitle: "views",
    },
  ]

  const cities = [
    { name: "Salvador", percentage: 54.4 },
    { name: "Feira de Santana", percentage: 6.8 },
    { name: "São Paulo", percentage: 3.4 },
  ]

  const audience = [
    { age: "25-34 anos", percentage: 64.1 },
    { age: "18-24 anos", percentage: 18.3 },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gold-accent">ESTATÍSTICAS</span>
            </h2>
            <p className="text-xl text-muted-foreground">Dados do Instagram @dan_rera</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="metallic-gradient steel-texture p-6 border-primary/30 hover:border-primary/60 transition-colors"
              >
                <div className="space-y-3">
                  <stat.icon className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    {stat.subtitle && <p className="text-sm text-muted-foreground">{stat.subtitle}</p>}
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">{stat.label}</p>
                  {stat.trend && <p className="text-sm font-bold text-primary">{stat.trend}</p>}
                </div>
              </Card>
            ))}
          </div>

          {/* Audience Demographics */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Age Groups */}
            <Card className="metallic-gradient steel-texture p-8 border-primary/30">
              <h3 className="text-2xl font-bold mb-6 gold-accent">Faixa Etária</h3>
              <div className="space-y-4">
                {audience.map((group, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-semibold">{group.age}</span>
                      <span className="text-primary font-bold">{group.percentage}%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${group.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Cities */}
            <Card className="metallic-gradient steel-texture p-8 border-primary/30">
              <h3 className="text-2xl font-bold mb-6 gold-accent flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Principais Cidades
              </h3>
              <div className="space-y-4">
                {cities.map((city, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-semibold">{city.name}</span>
                      <span className="text-primary font-bold">{city.percentage}%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${city.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Content Types */}
          <Card className="metallic-gradient steel-texture p-8 border-primary/30">
            <h3 className="text-2xl font-bold mb-6 gold-accent text-center">Tipos de Conteúdo</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-primary">60,3%</p>
                <p className="text-foreground font-semibold">Stories</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-primary">35,8%</p>
                <p className="text-foreground font-semibold">Posts</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-primary">4,0%</p>
                <p className="text-foreground font-semibold">Reels</p>
              </div>
            </div>
          </Card>

          {/* Audience Interests */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4 text-foreground">Interesses do Público</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Treino",
                "Shape",
                "Dieta",
                "Suplementos",
                "Evolução Corporal",
                "Saúde Masculina",
                "Motivação",
                "Lifestyle Fitness",
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary border border-primary/30 rounded-full text-sm font-semibold text-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
