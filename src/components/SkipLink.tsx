export default function SkipLink() {
  function skipToMain(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const main = document.getElementById('main-content');
    if (!main) {
      return;
    }

    main.focus();
    main.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <a href="#main-content" className="skip-link" onClick={skipToMain}>
      Skip to main content
    </a>
  );
}
