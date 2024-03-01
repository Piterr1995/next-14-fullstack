// example request using HTTPIE
// http GET http://localhost:3000/api/detail id==2
// OR
// http GET "http://localhost:3000/api/detail?id=2" -> koniecznie w cudzysłowie

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  // const id = searchParams.get("id");
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return Response.json({ data }); // to zwróci słownik z data jako klucz => { data: {...} }
}
