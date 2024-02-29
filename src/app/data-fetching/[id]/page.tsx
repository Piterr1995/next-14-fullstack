export default async function DataFetchingPage() {
  const res = await fetch("http://localhost:3000/api/detail");
  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
}
