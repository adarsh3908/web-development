import Card from "./Card";
import './App.css';

const jerseys = [
  {
    title: 'India Home Jersey',
    description: 'Classic blue home jersey with saffron accents and team badge.',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240"><rect width="100%" height="100%" fill="%230b4a76"/><text x="50%" y="50%" fill="%23ffd54f" font-size="28" font-family="Arial" text-anchor="middle">India Home</text></svg>'
  },
  {
    title: 'India Away Jersey',
    description: 'White away kit with subtle blue pinstripes and breathable fabric.',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240"><rect width="100%" height="100%" fill="%23ffffff"/><text x="50%" y="50%" fill="%230b4a76" font-size="28" font-family="Arial" text-anchor="middle">India Away</text></svg>'
  },
  {
    title: 'India Alternate Jersey',
    description: 'Bold alternate jersey with saffron and green highlights for special matches.',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240"><rect width="100%" height="100%" fill="%23ff6f00"/><text x="50%" y="50%" fill="%230b4a76" font-size="28" font-family="Arial" text-anchor="middle">India Alternate</text></svg>'
  }
];

export default function Home() {
  return (
    <div className="container">
      <header style={{textAlign:'center'}}>
        <h1 style={{margin:0}}>Indian Team Jerseys</h1>
        <p className="small">Official style showcase — pick your favourite jersey</p>
      </header>

      <div className="cards-grid">
        {jerseys.map((j) => (
          <Card key={j.title} title={j.title} description={j.description} image={j.image} />
        ))}
      </div>
    </div>
  );
}
