export default function StorySection() {
  const basePath = typeof window !== "undefined" ? (window as any).__NEXT_DATA__?.props?.pageProps?.basePath || "" : ""

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gold-accent">MINHA JORNADA</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground">
                Em 2020, eu estava em um quadro de <strong className="gold-accent">obesidade, com 102kg</strong>, após o
                fim de um relacionamento e mergulhado em maus hábitos durante a pandemia.
              </p>
              <p className="text-muted-foreground">
                Em 2021, decidi mudar — comecei a treinar, emagreci para 97kg, e com o acompanhamento do nutricionista
                esportivo <strong className="text-foreground">Odilon (@odin_nutri)</strong>, alcancei meu menor peso
                desde então: <strong className="gold-accent">86kg</strong>.
              </p>
              <p className="text-muted-foreground">
                Desde lá, passamos por diversos ciclos de <strong className="text-foreground">bulking</strong> e{" "}
                <strong className="text-foreground">cutting</strong>, conquistando massa magra e definição. Hoje, voltei
                aos <strong className="gold-accent">102kg</strong> — mas com saúde, desempenho e um físico que
                representa superação e disciplina.
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden border-2 border-primary/30">
              <img
                src={`${basePath}/images/hero-photo.png`}
                alt="Daniel Lacerda - Transformação"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission Statement */}
          <div className="metallic-gradient steel-texture rounded-lg p-8 md:p-12 border border-gray-700">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold gold-accent text-center">MEU PRÓXIMO OBJETIVO</h3>
              <p className="text-xl text-center text-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
                Subir ao palco do <strong className="gold-accent">fisiculturismo</strong>. Estou construindo essa
                jornada com seriedade, parcerias sólidas e o propósito de inspirar outras pessoas a acreditarem no
                próprio potencial.
              </p>
            </div>
          </div>

          {/* Team Photo */}
          <div className="mt-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden border-2 border-primary/30">
              <img
                src={`${basePath}/images/team-photo.png`}
                alt="Equipe de treino"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4 italic">
              Parte do time que acompanhou e fortaleceu minha evolução — irmãos de ferro.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
