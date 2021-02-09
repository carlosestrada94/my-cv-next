import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "l3t9xs7i",
  dataset: "production",
  useCdn: false,
});
