import HeroSection from "@/components/hero-section"
import StorySection from "@/components/story-section"
import StatsSection from "@/components/stats-section"
import GallerySection from "@/components/gallery-section"
import PartnershipsSection from "@/components/partnerships-section"
import QuoteSection from "@/components/quote-section"
import ContactSection from "@/components/contact-section"

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

      <footer className="bg-black border-t border-gray-800 py-10 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-400">&copy; 2025 Daniel Ferreira Lacerda. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
