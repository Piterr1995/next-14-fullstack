import { revalidateTag } from "next/cache";

export async function GET(_: any, { params }: { params: { tag: string } }) {
  const tag = params.tag;
  if (tag) {
    revalidateTag(tag);
    return Response.json({ revalidated: true });
  }
  return Response.json({ revalidated: false });
}

// Przyklad z medium
// export async function POST(
//   request: any,
//   { params }: { params: { tag: string } }
// ) {
//   const tag = params.tag;
//   if (tag) {
//     revalidateTag(tag);
//     return Response.json({ revalidated: true });
//   }

//   return Response.json({ revalidated: false, message: "Tag does not exist" });
// }
