import React from "react";
import RevalidateButton from "./Button";

export default async function Page() {
  //   const data = await getData();
  const res = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
    {
      next: { tags: ["time"] },
      // cache: "no-store" wtedy nie będzie cashowania
    }
  );
  const data = await res.json();

  return (
    <div>
      {JSON.stringify(data)}
      <RevalidateButton />
    </div>
  );
}
