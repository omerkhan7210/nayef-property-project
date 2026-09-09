import { defineQuery } from "next-sanity";

export const guidesQuery = defineQuery(`
  *[_type == "guide"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    image,
    excerpt,
    readTime,
    "category": category->title
  }
`);

export const guideQuery = defineQuery(`
  *[
    _type == "guide" &&
    slug.current == $slug
  ][0] {
    title,
    slug,
    image,
    excerpt,
    readTime,
    content,
    metaDescription,
    "category": category->title
  }
`);
