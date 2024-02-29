// example request http GET http://localhost:3000/api/pokemon/bulbasaur

export async function GET(
  request: Request,
  { params }: { params: { pokemonName: string } }
) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
  );
  const data = await res.json();
  return Response.json({ data });
}
