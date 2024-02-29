import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export default function Layout({
  children,
  pokemons,
  movies,
}: {
  children: React.ReactNode;
  pokemons: React.ReactNode;
  movies: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-center">PARALLEL PAGES!</h2>
      <div className="grid grid-cols-2">
        <div>
          <h2>Pokemons</h2>
          <Suspense
            fallback={
              <h2>
                <Skeleton />
              </h2>
            }
          >
            {pokemons}
          </Suspense>
        </div>
        <div>
          <h2>Movies</h2>
          {movies}
        </div>
      </div>
    </div>
  );
}
