import { useId, type ReactNode } from 'react';

interface CollapsibleProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function Collapsible({
  title,
  children,
  defaultOpen = false,
}: CollapsibleProps) {
  const contentId = useId();
  const buttonId = useId();

  return (
    <details className="collapsible" open={defaultOpen}>
      <summary id={buttonId} className="collapsible-trigger" aria-controls={contentId}>
        {title}
      </summary>
      <div id={contentId} className="collapsible-content" role="region" aria-labelledby={buttonId}>
        {children}
      </div>
    </details>
  );
}
