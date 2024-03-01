export async function GET() {
  const res = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam"
  );
  const data = await res.json();

  return Response.json({ data });
}
