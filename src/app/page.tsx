import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { CollaborationSection } from "@/components/collaboration-section";
import { ProductsSection } from "@/components/products-section";
import { TrialChatSection } from "@/components/trialchat-section";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <CollaborationSection />
        <ProductsSection />
        <TrialChatSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
