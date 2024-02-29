import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import Movies from "../../components/fetchingComponent";
import Pokemon from "../../components/fetchingComponent2";

// With SSR, there's a series of steps that need to be completed before a user can see and interact with a page:

// First, all data for a given page is fetched on the server.
// The server then renders the HTML for the page.
// The HTML, CSS, and JavaScript for the page are sent to the client.
// A non-interactive user interface is shown using the generated HTML, and CSS.
// Finally, React hydrates the user interface to make it interactive.

// These steps are sequential and blocking, meaning the server can only render the HTML for a page once all the data has been fetched. And, on the client, React can only hydrate the UI once the code for all components in the page has been downloaded.
// Streaming allows you to break down the page's HTML into smaller chunks and progressively send those chunks from the server to the client.

// Od zwykłęgo loadingu rózni sie tym,
// ze mozna zrobic kilka fetchy na raz
// w serwer komponentach i renderowac
// jeden po drugim
// pierwszy fetch jak sie rozwiaze bedzie
// pokazany juz uzytkownikowi
export default function Streaming() {
  return (
    <>
      <h2>Welcome to streaming</h2>
      <Suspense
        fallback={
          <h2>
            <Skeleton />
          </h2>
        }
      >
        <Movies />
      </Suspense>
      <Suspense
        fallback={
          <h2>
            <Skeleton baseColor="red" />
          </h2>
        }
      >
        <Pokemon />
      </Suspense>
    </>
  );
}
