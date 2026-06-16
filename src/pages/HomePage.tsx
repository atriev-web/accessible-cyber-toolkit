import { Link } from 'react-router-dom';
import AccessibleVideo from '../components/AccessibleVideo';
import Collapsible from '../components/Collapsible';

export default function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero" aria-labelledby="welcome-heading">
        <h1 id="welcome-heading">Welcome to Cybercrime Reporting Made Accessible</h1>
        <p className="tagline">Simple. Accessible. Empowering.</p>
        <p>
          The Cybercrime Reporting Made Accessible is a platform designed with Persons with
          Disabilities (PWDs) in mind to make reporting online crimes and digital incidents easier
          and more inclusive. Whether you are experiencing cyberbullying, online harassment, scams,
          identity theft, or other cyber-related concerns, this toolkit provides a simple and
          user-friendly way to submit reports and raise concerns safely and efficiently.
        </p>
        <p>
          Built with accessibility in mind, the platform supports individuals with different
          abilities by offering a clear and convenient reporting process. Our goal is to promote
          digital inclusion by ensuring that Persons with Disabilities have equal access to
          cybercrime reporting services and the opportunity to be heard in the online community.
        </p>
      </section>

      <section className="content-section" aria-labelledby="cyber-basics-heading">
        <h2 id="cyber-basics-heading">Understanding Cybersecurity Basics</h2>
        <p>
          Not sure what some cyber terms mean? Don&apos;t worry, this video is here to help. It
          breaks down common cyber security words in a simple and easy way so you can understand
          them without any confusion.
        </p>
        <p>
          As you go through it, you&apos;ll get familiar with the terms often used when reporting
          online incidents. This makes it easier for you to describe what happened clearly and
          submit your report with confidence.
        </p>
        <AccessibleVideo
          title="Cybersecurity Definition of Terms"
          disclaimer="This video was generated using AI voice and video generation tools for production purposes. All content, including the script and instructional material, is original and created by the content writer."
        />
        <Collapsible title="Cybersecurity Definition of Terms — transcript">
          <p>
            Transcript will be added when the video file is uploaded. This collapsible section
            keeps the page organized while giving screen reader users a full text alternative.
          </p>
        </Collapsible>
      </section>

      <section className="content-section highlight-section" aria-labelledby="toolkit-cta-heading">
        <h2 id="toolkit-cta-heading">Report with the Toolkit</h2>
        <p>
          Now that you&apos;ve learned the basic cyber security terms, you&apos;re ready to move on
          to the toolkit.
        </p>
        <p>
          Here, you&apos;ll answer a few simple questions about what happened online. Your answers
          help identify the type of incident you are experiencing, such as cyberbullying, scams,
          harassment, or other cybercrime concerns. Based on your responses, the toolkit will guide
          you step by step and show you how to properly submit a report.
        </p>
        <p>
          Some reporting steps include short video demonstrations to make the process easier to
          follow. These videos are designed with accessibility in mind, including screen reader
          audio, captions, and transcripts, so Persons with Disabilities (PWDs) can fully access
          and understand each step.
        </p>
        <Link to="/toolkit" className="button-primary">
          Go to the Toolkit
        </Link>
      </section>

      <section className="content-section" aria-labelledby="document-heading">
        <h2 id="document-heading">But before You Report, Document!</h2>
        <p>
          Before submitting a report, it is important to collect and organize evidence of what
          happened. This helps make your report clear, complete, and easier to review.
        </p>
        <p>Here are simple ways to document cybercrime incidents:</p>

        <Collapsible title="1. Take screenshots">
          <h3 className="sr-only">Screenshot instructions by device</h3>
          <h4>Windows</h4>
          <p>
            Press Windows key + PrtScn (Print Screen) at the same time. The screenshot will be
            automatically saved in the Screenshots folder inside Pictures.
          </p>
          <h4>Android</h4>
          <p>
            Press Power + Volume Down at the same time. The screenshot will be saved in your
            Gallery or Photos app.
          </p>
          <h4>iOS (iPhone/iPad)</h4>
          <p>
            Press the Side button + Volume Up (or Home button + Power button on older devices).
            The screenshot will be saved in your Photos app.
          </p>
        </Collapsible>

        <Collapsible title="2. Save emails (Gmail and Outlook)">
          <h3 className="sr-only">Email saving instructions</h3>
          <h4>Gmail</h4>
          <p>
            Open the email, click the three dots (More), then select Download message or Print to
            save a copy. You can also keep the email in your inbox without deleting it.
          </p>
          <h4>Outlook</h4>
          <p>
            Open the email, click File &gt; Save As, and save it as a file. You can also keep it in
            your inbox or use Print &gt; Save as PDF for a digital copy.
          </p>
        </Collapsible>

        <Collapsible title="3. Write up an incident report">
          <ul>
            <li>Write a report that clearly explains what happened from start to finish.</li>
            <li>
              Include important details such as timestamps, names, usernames, email addresses,
              links, the platform where the incident happened, and any other relevant information
              that can help describe the situation accurately.
            </li>
            <li>
              Combine all your evidence, including screenshots, attachments, and saved emails, into
              one report file or folder.
            </li>
            <li>
              Store everything in a secure place, such as your local drive or cloud storage (for
              example, Google Drive or OneDrive), so it stays safe and can be easily accessed when
              you are ready to submit your report.
            </li>
          </ul>
        </Collapsible>

        <p>
          Once everything is documented and organized, you can proceed with the toolkit questions
          and submit your report step by step.
        </p>
      </section>

      <section className="content-section" aria-labelledby="about-heading">
        <h2 id="about-heading">About Us</h2>

        <article aria-labelledby="atriev-heading">
          <h3 id="atriev-heading">
            Adaptive Technology for Rehabilitation, Integration and Empowerment of the Visually
            Impaired (ATRIEV)
          </h3>
          <p>
            Founded in 1994 by blind computer enthusiasts, ATRIEV is the Philippines&apos; pioneering
            computer training center for the blind and has since expanded to serve all disability
            sectors through adaptive technology. Committed to building a fully inclusive society,
            ATRIEV provides ICT-based programs and services that empower persons with visual
            impairment and other disabilities through education, employment, and livelihood
            opportunities.
          </p>
          <ul className="contact-inline-list">
            <li>
              <a href="https://www.atriev.org" target="_blank" rel="noopener noreferrer">
                www.atriev.org
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ATRIEV"
                target="_blank"
                rel="noopener noreferrer"
              >
                ATRIEV Computer Training Center for the Visually Impaired
              </a>
            </li>
            <li>
              <a href="mailto:inquire@atriev.org">inquire@atriev.org</a>
            </li>
          </ul>
        </article>

        <article aria-labelledby="apnic-heading">
          <h3 id="apnic-heading">Asia Pacific Network Information Centre (APNIC)</h3>
          <p>
            Founded in 1993, APNIC is a not-for-profit, membership-based organization that supports
            the growth and stability of the Internet across the Asia Pacific region. As the Regional
            Internet Registry (RIR) for 56 economies, APNIC manages and distributes Internet number
            resources, including IP addresses and Autonomous System Numbers (ASNs), while promoting
            a global, open, stable, and secure Internet.
          </p>
          <ul className="contact-inline-list">
            <li>
              <a href="https://www.apnic.net" target="_blank" rel="noopener noreferrer">
                www.apnic.net
              </a>
            </li>
            <li>
              <a href="https://www.apnic.net" target="_blank" rel="noopener noreferrer">
                APNIC
              </a>
            </li>
            <li>
              <a href="mailto:helpdesk@apnic.net">helpdesk@apnic.net</a>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}
