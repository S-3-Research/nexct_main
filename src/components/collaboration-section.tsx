import { SectionLabel, Brand } from "./ui";
import { partners } from "@/data/content";
import { PartnerCard } from "./partner-card";

export function CollaborationSection() {
  return (
    <section className="intro section" id="collaboration">
      <SectionLabel>What is NEXCt?</SectionLabel>
      <div className="intro-grid">
        <h2>A collaborative framework for advancing research.</h2>
        <div className="intro-copy">
          <p>
            <strong>
              NEXCt represents the collaboration between ACHIEVE Clinical
              Expertise and S-3 Research.
            </strong>{" "}
            It combines distinct capabilities around a shared goal: making
            clinical research more connected, accessible, and responsive to the
            people it is designed to serve.
          </p>
          <p>
            ACHIEVE brings the clinician and community infrastructure. S-3
            Research brings the technology, data science, and AI infrastructure.
            Together, the collaboration creates more connected experiences for
            clinicians, patients, caregivers, and research teams.
          </p>
        </div>
      </div>

      <div className="partner-grid">
        <PartnerCard partner={partners[0]} />

        <div className="connection-mark" aria-hidden="true">
          <span></span>
          <b>+</b>
          <span></span>
        </div>

        <PartnerCard partner={partners[1]} />
      </div>

      <div className="nexct-band">
        <Brand large />
        <div>
          <p className="card-kicker">NEXCt · Collaboration in practice</p>
          <h3>From shared expertise to real-world solutions.</h3>
        </div>
        <p>
          NEXCt turns complementary strengths into shared projects and products
          spanning clinician engagement, patient education, decentralized
          research support, research insights, and AI-enabled navigation.
        </p>
      </div>
    </section>
  );
}
