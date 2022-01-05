export default function Avatar({ href, imageSrc, alt }) {
  return (
    <div>
      <a href={href}>
        <img src={imageSrc} alt={alt} />
      </a>
    </div>
  );
}
