import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "nayef-property",
  title: "Legal Property Nayef",

  projectId: "jh1iar8y",
  dataset: "legalnayef",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
