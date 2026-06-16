import Collapsible from './Collapsible';

interface AccessibleVideoProps {
  title: string;
  src?: string;
  transcript?: string;
  disclaimer?: string;
}

export default function AccessibleVideo({
  title,
  src,
  transcript,
  disclaimer,
}: AccessibleVideoProps) {
  if (!src) {
    return (
      <aside className="video-placeholder" role="note" aria-label={`${title} — video coming soon`}>
        <p>
          <strong>{title}</strong>
        </p>
        <p>
          Video will be added here once media files are uploaded. A screen-reader-friendly
          version with captions and transcript will be included.
        </p>
      </aside>
    );
  }

  return (
    <figure className="video-figure">
      <figcaption className="video-caption">{title}</figcaption>
      {disclaimer && <p className="video-disclaimer">{disclaimer}</p>}
      <video
        className="accessible-video"
        controls
        preload="metadata"
        aria-label={title}
        crossOrigin="anonymous"
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" srcLang="en" label="English captions" default />
        Your browser does not support the video element. Please use the transcript below.
      </video>
      {transcript && (
        <Collapsible title={`Transcript for ${title}`}>
          <div className="transcript-text">{transcript}</div>
        </Collapsible>
      )}
    </figure>
  );
}
