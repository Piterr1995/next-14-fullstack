"use client";

// When we add the 'use client' directive to the ClientComp component,
// we create a “client boundary”.
// All of the components within this boundary are
// implicitly converted to Client Components.
// Even though components like Example
// don't have the 'use client' directive, they'll still
// hydrate/render on the client in this particular situation.

import { Example } from "../../components/Example";

export default function ClientComp() {
  return <Example />;
}
