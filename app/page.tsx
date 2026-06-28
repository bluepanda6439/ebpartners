import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about";
import { AudienceFlow } from "@/components/sections/audience-flow";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { SiteFooter } from "@/components/sections/site-footer";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <AudienceFlow />
        <AboutSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
