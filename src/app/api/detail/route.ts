// example request using HTTPIE
// http GET http://localhost:3000/api/detail id==2

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  // const id = searchParams.get("id");
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return Response.json({ data }); // to zwróci słownik z data jako klucz => { data: {...} }
}

// export async function GET() {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
//   const data = await res.json();
//   return Response.json({ data });
// }
