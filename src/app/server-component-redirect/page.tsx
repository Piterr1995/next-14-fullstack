import { redirect } from "next/navigation";

async function getPokemons() {
  new Promise((resolve) => setTimeout(resolve, 1000));
  return undefined;
}

export default async function Pokemons() {
  const pokemons = await getPokemons();
  if (!pokemons) {
    redirect("/");
  }
}
