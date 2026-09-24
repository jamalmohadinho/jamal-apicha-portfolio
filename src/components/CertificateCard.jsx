export default function CertificateCard({ certificate }) {
  return (
    <article className="surface p-7">
      <p className="eyebrow">{certificate.issuer}</p>
      <h3 className="mt-3 text-xl font-semibold">{certificate.title}</h3>
      <p className="mt-2 text-slate-400">{certificate.date}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          className="button secondary"
          href={certificate.file}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate ↗
        </a>
        <a
          className="button primary"
          href={certificate.file}
          download
        >
          Download PDF ↓
        </a>
        {certificate.verification && (
          <a
            className="button secondary"
            href={certificate.verification}
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify credential ↗
          </a>
        )}
      </div>
    </article>
  );
}
