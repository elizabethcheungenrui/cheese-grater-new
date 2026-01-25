import "./Card.css";

export default function ACard({
  slug,
  section,
  title,
  summary,
  image,
  tag,
  date,
  articlecontent,
}: {
  slug: string;
  section: string;
  title: string;
  summary: string;
  image: string;
  tag: string;
  date: string;
  articlecontent: Boolean;
}) {
  return (
    <div className="card a-card">
      <a href={`/article/${slug}`} className="link">
        <div className="ratio-7-5">
          <img
            src={image || undefined}
            alt={title}
            fetchPriority="high"
            loading="lazy"
          />
        </div>

        <span className={`tag tag-major tag-${section.toLowerCase()}`}>
          {" "}
          {tag.toUpperCase()}{" "}
        </span>

        <h3>
          <span className={`wipe ${articlecontent? "mbwipe" : ""}`}>{title}</span>
        </h3>

        <p
          dangerouslySetInnerHTML={{__html:(summary)}} 
        />

        <span className="date"> {date} </span>
      </a>
    </div>
  );
}
