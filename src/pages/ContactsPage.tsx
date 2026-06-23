import { contactSections } from '../data/contacts';
import { usePageTitle } from '../hooks/usePageTitle';
import { publicAsset } from '../utils/assets';

export default function ContactsPage() {
  usePageTitle('Contacts');

  return (
    <div className="page contacts-page">
      <section className="contacts-intro" aria-labelledby="contacts-heading">
        <h1 id="contacts-heading">Contacts</h1>
        <p className="tagline">You don&apos;t have to face it alone.</p>
        <p>
          This Contacts Page is your guide to the people and organizations ready to help you.
          Whether you need to report a cybercrime, ask for legal support, or reach out for emotional
          and mental health care, everything you need is gathered here in one safe place.
        </p>
        <p>
          From official law enforcement and legal agencies to mental health professionals and PWD
          support groups, these are trusted allies who are here to listen, guide, and support you. No
          matter the situation, help is always within reach, just a few clicks away.
        </p>
      </section>

      {contactSections.map((section) => (
        <section
          key={section.id}
          className="contact-section"
          aria-labelledby={`${section.id}-heading`}
        >
          <h2 id={`${section.id}-heading`}>{section.title}</h2>

          {section.entries.map((entry) => (
            <article
              key={entry.id}
              className="contact-card"
              aria-labelledby={`${entry.id}-name`}
            >
              {entry.logoSrc && (
                <img
                  src={publicAsset(entry.logoSrc)}
                  alt={`${entry.name} logo`}
                  className="org-logo"
                  width={240}
                  height={120}
                />
              )}
              <h3 id={`${entry.id}-name`}>{entry.name}</h3>
              <p>{entry.description}</p>

              {entry.bullets && (
                <ul>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)}>{bullet}</li>
                  ))}
                </ul>
              )}

              {entry.links.length > 0 && (
                <ul className="contact-links">
                  {entry.links.map((link) => (
                    <li key={`${entry.id}-${link.label}`}>
                      <a
                        href={link.href}
                        {...(link.type === 'website' || link.type === 'social'
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {link.label}
                        {(link.type === 'website' || link.type === 'social') && (
                          <span className="sr-only"> (opens in new tab)</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>
      ))}
    </div>
  );
}
