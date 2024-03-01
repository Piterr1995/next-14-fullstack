import React from "react";

// Przykłąd
// http GET "localhost:3000/api/revalidate-path?pathToRevalidate=/revalidation/path-revalidation"
// zrewaliduje całą tą ściekę i te ponizej. Page tez będzie zrewalidowany.

async function getData() {
  const res = await fetch(
    "https://timeapi.io/api/Time/current/ip?ipAddress=237.71.232.203"
  );
  const data = res.json();
  return data;
}
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return (
    <div className="bg-slate-400">
      Wrap me in a LAYOUT!! <br />
      <div>
        Layout data: {JSON.stringify(data)} <br />
        Below is page!
      </div>
      {children}
    </div>
  );
}
