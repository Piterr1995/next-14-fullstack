"use client";

import { useSearchParams } from "next/navigation";

export default function SP() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  //   const params = new URLSearchParams(searchParams.toString());
  return <div>{JSON.stringify(searchParams.get("search"))}</div>;
}
