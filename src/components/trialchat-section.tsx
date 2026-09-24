import { SectionLabel } from "./ui";

export function TrialChatSection() {
  return (
    <section className="trialchat section" id="trialchat">
      <div className="chat-window" aria-hidden="true">
        <div className="chat-top">
          <span className="chat-logo">T</span>
          <div>
            <strong>TrialChat</strong>
            <small>Clinical research guide</small>
          </div>
          <i></i>
        </div>
        <div className="chat-date">Today</div>
        <div className="bubble bot">
          Hi—what would you like to understand about clinical trials?
        </div>
        <div className="bubble user">
          What should I ask before contacting a study site?
        </div>
        <div className="bubble bot">
          I can help you prepare questions about visits, eligibility,
          participation, and what happens next.
        </div>
        <div className="chat-input">
          <span>Ask a question...</span>
          <b>↑</b>
        </div>
      </div>

      <div className="trialchat-copy">
        <SectionLabel light>TrialChat · Collaboration in action</SectionLabel>
        <h2>A closer look at collaboration in action.</h2>
        <p>
          TrialChat brings S-3 Research’s AI-enabled technology together with
          ACHIEVE’s clinician- and patient-centered approach. The result is a
          conversational guide designed to make clinical research information
          easier for patients and caregivers to understand.
        </p>
        <div className="chat-features">
          <div>
            <span>01</span>
            <p>
              <strong>Understand</strong> clinical research in clear language.
            </p>
          </div>
          <div>
            <span>02</span>
            <p>
              <strong>Explore</strong> studies and topics relevant to your
              needs.
            </p>
          </div>
          <div>
            <span>03</span>
            <p>
              <strong>Prepare</strong> for conversations with clinicians and
              research sites.
            </p>
          </div>
        </div>
        <p className="disclaimer">
          TrialChat provides educational and navigation support. It does not
          provide medical advice or determine study eligibility. Participation
          decisions remain with patients, and study sites determine eligibility
          and enrollment.
        </p>
      </div>
    </section>
  );
}
