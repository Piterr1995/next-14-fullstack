import ErrorComponent from "@/components/fetchingComponentError";

export default function Page() {
  return (
    <>
      <h2>Error boundary page</h2>
      <ErrorComponent />
      {/* <ErrorBoundary FallbackComponent={Error}> */}
      {/* </ErrorBoundary> */}
    </>
  );
}
