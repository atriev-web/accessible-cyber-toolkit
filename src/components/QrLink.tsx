import { QRCodeSVG } from 'qrcode.react';
import type { ContactLink } from '../data/contacts';

interface QrLinkProps {
  label: string;
  href: string;
  type?: ContactLink['type'];
}

function destinationText(href: string, type?: ContactLink['type']): string {
  if (type === 'phone') {
    return href.replace(/^tel:/, '');
  }
  if (type === 'email') {
    return href.replace(/^mailto:/, '');
  }
  return href;
}

export default function QrLink({ label, href, type }: QrLinkProps) {
  const opensInNewTab = type === 'website' || type === 'social';
  const destination = destinationText(href, type);

  return (
    <div className="qr-link">
      <div className="qr-link-text">
        <a
          href={href}
          {...(opensInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
          {opensInNewTab && <span className="sr-only"> (opens in new tab)</span>}
        </a>
        <p className="qr-caption">
          QR code for {label}. Scan the code, or use the link. Destination: {destination}.
        </p>
      </div>
      <div className="qr-figure" aria-hidden="true">
        <QRCodeSVG
          value={href}
          size={144}
          bgColor="#ffffff"
          fgColor="#000000"
          level="M"
          marginSize={4}
        />
      </div>
    </div>
  );
}
