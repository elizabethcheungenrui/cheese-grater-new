import { Image } from "astro:assets";
import './Card.css';

export default function MBCard({
  slug,
  section,
  title,
  image,
  tag,
  date,
}: {
  slug: string;
  section: string;
  title: string;
  image: string;
  tag: string;
  date: string;
}) {
  return (
    <div className="card mb-card">
      <a href={`/article/${slug}`} className="link">
        <div className="ratio-7-5">
          <Image 
            src={image || undefined} 
            alt={title}
            layout='constrained'
            inferSize
          />
        </div>

        {tag != '' && (
          <h2 className={`tag tag-major-mbcard tag-${section.toLowerCase()}`}>
            {' '}
            {tag.toUpperCase()}{' '}
          </h2>
        )}

        <h3 className="mbcard-title">
          <span className="wipe">{title}</span>
        </h3>

        <span className="date"> {date} </span>
      </a>
    </div>
  );
}
