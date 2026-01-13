import Card from "./Card";

const quotes = [
  { name: "George Siway | Rivals City Owner", text: "W Fast response sa mga problems and request sa scripts." },
  { name: "Nine Guerrero | New Horizon City Owner", text: "very fast & reliable sa services niya, more customers to come mxds!." },
];

export default function Testimonials() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {quotes.map((q) => (
        <Card key={q.name}>
          <div className="text-sm text-zinc-300">“{q.text}”</div>
          <div className="mt-4 text-xs text-zinc-400">— {q.name}</div>
        </Card>
      ))}
    </div>
  );
}