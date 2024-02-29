async function getMovies() {
  let res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API}`
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return res.json();
}

export default async function Movies() {
  const { results } = await getMovies();

  return <div>dupa{JSON.stringify(results)}</div>;
}
