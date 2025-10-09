export default function GallerySection() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250930_214020%281%29-4JdAWpNKD2ujndGe3GNL51OIat054C.jpg",
      alt: "Treino funcional",
      span: "md:col-span-2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250816_154828-cWn41cEhcrswkedb2quH2J4KShhA3Y.jpg",
      alt: "Leg press",
      span: "md:col-span-1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250816_150003%281%29-3EZf2tKE2kj5Sdu0BaYE95ClPmCbHm.jpg",
      alt: "Treino de peito",
      span: "md:col-span-1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250911_161205-TG5lvu9XYl49VE7b5G8eVv6ooW7Lzl.jpg",
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
                className={`relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all group ${image.span}`}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
