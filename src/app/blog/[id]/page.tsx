// With Static Rendering (Default behavior),
// routes are rendered at build time,
// or in the background after data revalidation.
// The result is cached and can be pushed to
// a Content Delivery Network (CDN).
// This optimization allows you to share the
// result of the rendering work between users
// and server requests.

// Static rendering is useful when a route has data that is not personalized to the user and can be known at build time, such as a static blog post or a product page.

export default function Jan({ params }: { params: any }) {
  return (
    <div className="bg-green-900">
      I am blog page <br />
      Here are my params: <br />
      {JSON.stringify(params)}
    </div>
  );
}
