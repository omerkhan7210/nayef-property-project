import Link from "next/link";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { guidesQuery } from "@/sanity/queries";

export default async function Resources() {
  const guides = await client.fetch(guidesQuery);

  return (
    <main style={{ maxWidth: 1100, margin: "80px auto", padding: 20 }}>
      <h1>Property Resources</h1>

      <p>Guides and insights for Dubai property owners and investors.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 30,
          marginTop: 50,
        }}
      >
        {guides.map((guide: any) => (
          <article key={guide._id}>
            {guide.image && (
              <Image
                src={urlFor(guide.image).width(700).url()}
                alt={guide.image.alt || guide.title}
                width={700}
                height={450}
              />
            )}

            <small>{guide.category}</small>

            <h2>
              <Link href={`/resources/${guide.slug.current}`}>
                {guide.title}
              </Link>
            </h2>

            <p>{guide.excerpt}</p>

            <small>{guide.readTime} min read</small>
          </article>
        ))}
      </div>
    </main>
  );
}
