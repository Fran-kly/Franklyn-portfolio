export default function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && (
        <span className="eyebrow">
          <span className="eyebrow-line" />
          {eyebrow}
        </span>
      )}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}
