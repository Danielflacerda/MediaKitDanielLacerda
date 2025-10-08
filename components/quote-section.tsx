export default function QuoteSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 metallic-gradient steel-texture opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="text-6xl md:text-8xl text-primary/30 font-serif">"</div>
            <blockquote className="text-2xl md:text-4xl font-bold text-foreground leading-relaxed text-balance">
              Nenhum cidadão tem o direito de ser um amador em matéria de treinamento físico. Que desgraça é para o
              homem envelhecer sem nunca ver a beleza e a força do que o seu corpo é capaz.
            </blockquote>
            <cite className="text-xl md:text-2xl gold-accent font-semibold not-italic">— Sócrates</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
