import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "jh1iar8y",
  dataset: "legalnayef",
  apiVersion: "2026-05-01",
  useCdn: true,
});
