"use client";

async function revalidate() {
  const res = await fetch("http://localhost:3000/api/revalidate-tag/time");
  if (res) {
    alert("Revalidated!");
    window.location.reload();
  }
}

export default function Button() {
  return (
    <button onClick={revalidate} className="border border-blue-400">
      revalidate!!
    </button>
  );
}
