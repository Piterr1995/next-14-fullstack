import { cookies } from "next/headers";

// The cookies function allows you to read the HTTP incoming
// request cookies from a Server Component or write outgoing
// request cookies in a Server Action or Route Handler.

// Good to know: cookies() is a Dynamic Function whose returned
// values cannot be known ahead of time. Using it in a layout or
// page will opt a route into dynamic rendering at request time.

export default function CookieComponent() {
  const cookieStore = cookies();
  const allCookies = cookieStore.getAll();
  const cookie = cookieStore.get("name"); // it will return { name: 'name', value: 'John' } or undefined
  //   i previously set cookie in browser: document.cookie = "name=John", therefore nama: "name"
  return (
    <h1>
      This is a cookie name: {JSON.stringify(cookie?.name)} <br /> Here are all
      cookies {JSON.stringify(allCookies)}
    </h1>
  );
}
