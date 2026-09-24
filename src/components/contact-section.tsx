import { ButtonLink } from "./ui";

export function ContactSection() {
  return (
    <section className="cta section">
      <p className="eyebrow">Advance through collaboration</p>
      <h2>Complex research challenges require complementary strengths.</h2>
      <p>
        Explore how an ACHIEVE and S-3 Research collaboration can support a
        clinical research program, community initiative, or patient education
        effort.
      </p>
      <div className="cta-actions">
        <ButtonLink
          tone="coral"
          href="mailto:christine@achieveexpertise.com?subject=Exploring%20a%20NEXCt%20collaboration"
        >
          Start a conversation
        </ButtonLink>
        <a className="phone-link" href="tel:+13522830992">
          352-283-0992
        </a>
      </div>
    </section>
  );
}
