import Skeleton from "react-loading-skeleton";
// to sie pokaze tylko na chwile
// potem serwer sobie zcashuje dane
// i stronka sie zaladuje od razu
// mega szybki proces
// zeby usunac cache wywal folder .next

// Recommendation: Use the loading.js convention
// for route segments (layouts and pages) as Next.js optimizes this functionality.
export default function Loading() {
  return (
    <>
      <h2>Hello world</h2>
      <h2>
        <Skeleton />
      </h2>
    </>
  );
}
