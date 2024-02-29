export async function generateStaticParams() {
  const params = [];
  for (let i = 1; i <= 10; i++) {
    params.push({
      id: `${i}`,
    });
  }
  return params;
}

async function getPokemons(params: { id: string }) {
  const res = await fetch(`https://pokeapi.co/api/v2/berry/${params.id}`);
  const data = await res.json();
  return data.item;
}

export default async function Pokemons({ params }: { params: { id: string } }) {
  const berry = await getPokemons(params);

  return <>{JSON.stringify(berry)}</>;
}
