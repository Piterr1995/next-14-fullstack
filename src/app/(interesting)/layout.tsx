// dzięki tej sekcji moesz zaaplikować ten layout dla kilku stron
// o róznych pathameach

// Good to know: The App Router takes priority over the Pages Router.
// Routes across directories should not resolve to
// the same URL path and will cause a build-time error to prevent
// a conflict.

// The naming of route groups has no special significance other than for organization. They do not affect the URL path.
// Routes that include a route group should not resolve to the same URL path as other routes. For example, since route groups don't affect URL structure, (marketing)/about/page.js and (shop)/about/page.js would both resolve to /about and cause an error.
// If you use multiple root layouts without a top-level layout.js file, your home page.js file should be defined in one of the route groups, For example: app/(marketing)/page.js.
// Navigating across multiple root layouts will cause a full page load (as opposed to a client-side navigation). For example, navigating from /cart that uses app/(shop)/layout.js to /blog that uses app/(marketing)/layout.js will cause a full page load. This only applies to multiple root layouts.

import React from "react";

export default function InterestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-32 bg-gray-200 text-black">
      <h1 className="text-4xl">This is interesing section</h1>
      {children}
    </div>
  );
}
