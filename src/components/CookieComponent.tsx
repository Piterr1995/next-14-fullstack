import { cookies } from "next/headers";

export default function CookieComponent() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("name"); // it will return { name: 'name', value: 'John' } or undefined
  //   i previously set cookie in browser: document.cookie = "name=John", therefore nama: "name"
  return <h1>This is a cookie name: {JSON.stringify(cookie?.name)} </h1>;
}
