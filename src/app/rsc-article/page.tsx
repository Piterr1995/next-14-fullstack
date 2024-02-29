import { Code } from "bright";
// use client nie zadziala bo bright jest
// server only

// bez paczki bright pobiera sie taki sam
// plik JS bundle co z paczką
// co potwierdza tezę, kod JS z RSC
// nie nalezy do JSBundle pobieranego
// przez przegladarke.
export default function RSCArticle() {
  return <Code lang="py">from datetime import datetime</Code>;
}
