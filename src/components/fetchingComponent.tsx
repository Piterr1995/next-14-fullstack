async function getPokemon() {
  const res = await fetch(`https://pokeapi.co/api/v2/berry/2`);
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return data.item;
}

export default async function Pokemon() {
  const res = await getPokemon();

  return <div>Pokemon: {JSON.stringify(res)}</div>;
}
