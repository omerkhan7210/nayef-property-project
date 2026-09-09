import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
    }),
  ],
});
