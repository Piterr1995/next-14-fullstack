"use client";
import { useEffect, useReducer } from "react";

// Fetching Data on the Client with third-party libraries
// You can also fetch data on the client using a
// third-party library such as SWR or TanStack Query.
// These libraries provide their own APIs for memoizing requests, caching,
// revalidating, and mutating data.

export default function Page() {
  const [_, rerender] = useReducer((state) => state + 1, 0);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3000/api/time"); // this data is cached on the server
      //   and wont change if we don't revalidate it
      const data = await res.json();
      console.log(data);
    }
    getData();
  }, [_]);
  return (
    <div>
      <button onClick={rerender}>Rerender</button>
    </div>
  );
}
