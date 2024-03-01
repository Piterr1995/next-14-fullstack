import React from "react";

async function getData() {
  const res = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
    { next: { tags: ["time"] } }
  );
  const data = res.json();
  return data;
}
export default async function page() {
  const data = await getData();
  return <div>{JSON.stringify(data)}</div>;
}
