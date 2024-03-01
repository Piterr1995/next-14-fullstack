// example request http GET http://localhost:3000/api/pokemon/bulbasaur

export async function GET(
  request: Request,
  { params }: { params: { pokemonName: string } }
) {
  const t1 = performance.now();
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
  );
  const t2 = performance.now();

  const data = await res.json();

  return Response.json({ data, requestTime: t2 - t1 });
}
