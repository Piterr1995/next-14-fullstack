"use client";

// Back and forward navigation (popstate event) has a soft navigation behavior. This means, the client-side cache is re-used and navigation is near-instant.
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  // Recommendation: Use the <Link> component to navigate between routes unless you have a specific requirement for using useRouter.
  // <Link> component: Routes are automatically prefetched as they become visible in the user's viewport. Prefetching happens when the page first loads or when it comes into view through scrolling.
  // Prefetching is not enabled in development, only in production.
  return (
    <>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Back to homepage
      </button>
    </>
  );
}
