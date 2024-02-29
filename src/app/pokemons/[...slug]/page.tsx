// http://localhost:3000/pokemons/janusz/mirek/swirek

export default function Pokemons({ params }: any) {
  return <div>{JSON.stringify(params)}</div>;
}
