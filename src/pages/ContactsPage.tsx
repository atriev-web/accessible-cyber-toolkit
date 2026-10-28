import QrLink from '../components/QrLink';
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
        <p>
          If you have trouble using this site or an official reporting page, email us at{' '}
          <a href="mailto:inquiry@atriev.org">inquiry@atriev.org</a>.
        </p>
      </section>

      <section className="contact-section" aria-labelledby="offline-heading">
        <h2 id="offline-heading">If you have little or no internet</h2>
        <p>
          You can still get help by calling from a basic mobile or landline phone. You do not need
          mobile data for these national numbers. Local and regional hotlines will be added later.
          For now, these numbers work across the Philippines.
        </p>
        <ul>
          <li>
            Emergency: <a href="tel:911">911</a>
          </li>
          <li>
            Cybercrime, CICC: <a href="tel:1326">1326</a>
          </li>
          <li>
            Lost phone, text spam, and telecom complaints, NTC: <a href="tel:1682">1682</a>
          </li>
          <li>
            Mental health crisis, NCMH: <a href="tel:1553">1553</a>
          </li>
        </ul>
        <p>
          Save these numbers in your phone while you have signal. You may also go to the nearest
          police station and ask for the Anti-Cybercrime Group. If you cannot call, ask a trusted
          family member, friend, barangay official, or teacher to call for you.
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
                    <li key={`${entry.id}-${link.label}-${link.href}`}>
                      {link.showQr ? (
                        <QrLink label={link.label} href={link.href} type={link.type} />
                      ) : (
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
                      )}
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
