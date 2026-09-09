import { notFound } from "next/navigation";
import Image from "next/image";

import { PortableText } from "@portabletext/react";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { guideQuery } from "@/sanity/queries";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = await client.fetch(guideQuery, { slug });

  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.metaDescription || guide.excerpt,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = await client.fetch(guideQuery, { slug });

  if (!guide) notFound();

  return (
    <main
      style={{
        maxWidth: 900,
        margin: "80px auto",
        padding: 20,
      }}
    >
      <small>{guide.category}</small>

      <h1>{guide.title}</h1>

      <p>{guide.excerpt}</p>

      {guide.image && (
        <Image
          src={urlFor(guide.image).width(1400).url()}
          alt={guide.image.alt || guide.title}
          width={1400}
          height={800}
          priority
        />
      )}

      <div
        style={{
          marginTop: 40,
          fontSize: 18,
          lineHeight: 1.8,
        }}
      >
        <PortableText value={guide.content} />
      </div>
    </main>
  );
}
