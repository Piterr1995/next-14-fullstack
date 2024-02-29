export async function GET() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5");
  const data = await res.json();
  return Response.json({ data });
}
