import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { profile } from '../data/portfolio';

function ContactCard({ icon: Icon, title, detail, href, external, variant }) {
  const content = (
    <>
      <span className={`contact-card-icon contact-card-icon--${variant}`}>
        <Icon aria-hidden="true" />
      </span>
      <span className="contact-card-copy">
        <span className="contact-card-title">{title}</span>
        <span className="contact-card-detail">{detail}</span>
      </span>
    </>
  );

  if (!href) {
    return <div className="contact-card">{content}</div>;
  }

  return (
    <a
      className="contact-card contact-card-link"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {content}
    </a>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-wrap contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="section-heading">
        <h2 id="contact-heading">
          Get In Touch<span>.</span>
        </h2>
        <p>
          Have an opportunity or a project in mind? I'd love to hear from you.
        </p>
      </div>
      <div className="contact-columns">
        <div className="contact-column">
          <h3>Let's Connect</h3>
          <p className="contact-introduction">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
          <div className="contact-card-list">
            <ContactCard
              icon={FiMail}
              title="Email"
              detail={profile.email}
              href={`mailto:${profile.email}`}
              variant="gradient"
            />
            <ContactCard
              icon={FiPhone}
              title="Phone"
              detail={profile.phone}
              href={profile.phoneHref}
              variant="gradient"
            />
            <ContactCard
              icon={FiMapPin}
              title="University"
              detail={profile.university}
              variant="gradient"
            />
          </div>
        </div>
        <div className="contact-column">
          <h3>Follow Me</h3>
          <p className="contact-introduction">
            Connect with me on social media to stay updated with my latest
            projects and insights.
          </p>
          <div className="contact-card-list">
            <ContactCard
              icon={FaLinkedinIn}
              title="LinkedIn"
              detail="Professional networking"
              href={profile.linkedin}
              external
              variant="linkedin"
            />
            <ContactCard
              icon={FaGithub}
              title="GitHub"
              detail="Code repositories"
              href={profile.github}
              external
              variant="github"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
