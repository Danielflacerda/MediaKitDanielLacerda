import Image from "next/image"

export function GallerySection() {
  const images = [
    {
      src: "/images/training-1.png",
      alt: "Treino funcional",
      span: "md:col-span-2",
    },
    {
      src: "/images/training-2.png",
      alt: "Leg press",
      span: "md:col-span-1",
    },
    {
      src: "/images/training-3.png",
      alt: "Treino de peito",
      span: "md:col-span-1",
    },
    {
      src: "/images/casual-photo.png",
      alt: "Lifestyle",
      span: "md:col-span-2",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gold-accent">GALERIA</span>
            </h2>
            <p className="text-xl text-muted-foreground">Treinos, evolução e lifestyle</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative h-[300px] md:h-[400px] rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all group ${image.span}`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
