// syntax 1 bez exportu revalidate
export async function GET() {
  const t1 = performance.now();
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1000", {
    next: { revalidate: 15 }, // revalidate every 15 sec
  });
  const t2 = performance.now();
  console.log(t2 - t1); // faktycznie idzie z casha bardzo szybko jak sie zmiescimy w przedziale
  //   najdluzej zajmuje pierwszy request
  const data = await res.json();
  const results = data.results;
  return Response.json({ results });
}

//  syntax 2 z exportem revalidate
// export async function GET() {
//   const t1 = performance.now();
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1000");
//   const t2 = performance.now();
//   console.log(t2 - t1); // faktycznie idzie z casha bardzo szybko jak sie zmiescimy w przedziale
//   //   najdluzej zajmuje pierwszy request
//   const data = await res.json();
//   const results = data.results;
//   return Response.json({ results });
// }

// export const revalidate = 10;
