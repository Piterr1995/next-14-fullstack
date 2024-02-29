import type { NextRequest } from "next/server";

// Example request http GET "http://localhost:3000/api/url-query-parameters?id=1"
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return Response.json({ data });
}
