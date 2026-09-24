import type { Partner } from "@/data/content";
export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className={`partner-card ${partner.tone}`}>
      <p className="card-kicker">{partner.kicker}</p>
      <h3>{partner.name}</h3>
      <p>{partner.description}</p>
      <ul>
        {partner.capabilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={partner.url} target="_blank" rel="noopener">
        {partner.linkLabel} <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
