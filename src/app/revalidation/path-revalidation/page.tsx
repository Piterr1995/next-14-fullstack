import React from "react";

// Gdy dam w terminalu
// http GET "localhost:3000/api/revalidate-path?pathToRevalidate=/revalidation/path-revalidation"
// to zrewaliduje te sciezke, ALE  "http://localhost:3000/api/time" dalej będzie serwować
// zcashowane dane, więc nic sie tu nie zmieni.
// Dopiero gdy dam  http GET "localhost:3000/api/revalidate-path?pathToRevalidate=/api/time"
// i znowu "localhost:3000/api/revalidate-path?pathToRevalidate=/revalidation/path-revalidation"
// to dane się odświeza.

async function getData() {
  const res = await fetch("http://localhost:3000/api/time");
  const data = res.json();
  return data;
}
export default async function Page({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return (
    <div className="bg-slate-600">
      I am PAGE <br />
      <div>
        Page data: {JSON.stringify(data)} <br />
        Below is page!
      </div>
      {children}
    </div>
  );
}
