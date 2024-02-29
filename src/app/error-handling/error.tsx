"use client";

// If an error is thrown inside a Server Component,
//  Next.js will forward an Error object (stripped
// of sensitive error information in production) to the nearest error.js file as the error prop.
import { useEffect } from "react";

// For errors forwarded from Client Components,
// this will be the original Error's message.
// For errors forwarded from Server Components,
// this will be a generic error message to
// avoid leaking sensitive details.
// errors.digest can be used to match
// the corresponding error in server-side logs.
export default function Error({
  error,
  reset,
}: {
  // digest to hasz, ktorym odnajdziemy
  // nasz error w logach
  error: Error & { digest?: string };
  // A function to reset the error boundary. When executed, the function will try to re-render the Error boundary's contents. If successful, the fallback error component is replaced with the result of the re-render.
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong!</h2>
      {/* ponizszy error bedzie dotyczyl
      message, ale nie chodzi o to message
      po prostu zrobilem celowa bube
      w funkcji pobierającej dane i zwracającej
      Promise z rejectem */}
      Message :{error.message}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
