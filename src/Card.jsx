export default function Card({ title, description, image, alt }) {
  return (
    <div className="card">
      <div className="card-img">
        {image ? <img src={image} alt={alt || title} style={{ maxHeight: '160px' }} /> : <div style={{padding:20}}>{title}</div>}
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn">Buy Jersey</button>
      </div>
    </div>
  );
}
