import Link from "next/link";

async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/ability?limit=3");
  const data = await res.json();
  await new Promise((res) => setTimeout(res, 2000));
  return data.results;
}

export default async function Movies() {
  // const pokemons = await getPokemons();

  return (
    <div>
      Movies
      <Link href="/parallel/nested/">Go to nested</Link>
    </div>
  );
}
