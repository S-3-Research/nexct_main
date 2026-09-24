import { SectionLabel } from "./ui";
import { steps } from "@/data/content";

export function ProcessSection() {
  return (
    <section className="process section">
      <SectionLabel>How collaboration advances research</SectionLabel>
      <h2>Combine strengths. Create practical solutions.</h2>
      <div className="process-line">
        {steps.map((step) => (
          <article key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
