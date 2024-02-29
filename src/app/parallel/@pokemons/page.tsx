async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/ability?limit=3");
  const data = await res.json();
  await new Promise((res) => setTimeout(res, 2000));
  return data.results;
}

export default async function Pokemons() {
  const pokemons = await getPokemons();

  return (
    <ul>
      {pokemons?.map((pok: any, index: number) => (
        <li key={index}>{pok.name}</li>
      ))}
    </ul>
  );
}
