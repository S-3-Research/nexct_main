import { ButtonLink } from "./ui";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <Image
        fill
        preload
        sizes="100vw"
        unoptimized
        className="hero-image"
        src="/images/nexct-collaboration-hero.png"
        alt="A diverse care team, an older adult, and a caregiver reviewing information together on a tablet"
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="eyebrow">
          A collaboration between ACHIEVE Clinical Expertise + S-3 Research
        </p>
        <h1>
          Advancing research
          <br />
          <em>through collaboration.</em>
        </h1>
        <p className="hero-copy">
          <strong>
            NEXCt brings ACHIEVE Clinical Expertise and S-3 Research into a
            shared framework for collaboration.
          </strong>{" "}
          Together, clinician infrastructure and purpose-built technology become
          practical solutions for advancing clinical research.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#collaboration">
            How the collaboration works
          </ButtonLink>
          <a className="text-link" href="#products">
            Explore collaboration products <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="hero-proof" aria-label="NEXCt collaboration model">
        <div>
          <strong>ACHIEVE</strong>
          <span>Clinician and community infrastructure</span>
        </div>
        <div>
          <strong>S-3 Research</strong>
          <span>Technology, data science, and AI</span>
        </div>
        <div>
          <strong>Collaboration products</strong>
          <span>Shared capabilities put into practice</span>
        </div>
      </div>
    </section>
  );
}
