import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { StatsSection } from "@/components/stats-section"
import { GallerySection } from "@/components/gallery-section"
import { PartnershipsSection } from "@/components/partnerships-section"
import { QuoteSection } from "@/components/quote-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StorySection />
      <StatsSection />
      <GallerySection />
      <PartnershipsSection />
      <QuoteSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Daniel Ferreira Lacerda (@dan_rera) - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  )
}
