import { Brand } from "./ui";
export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <Brand />
        <small>Collaboration by ACHIEVE + S-3 Research</small>
      </div>
      <p>Advancing clinical research through collaboration.</p>
      <p className="copyright">ACHIEVE Clinical Expertise + S-3 Research</p>
    </footer>
  );
}
