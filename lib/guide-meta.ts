import type { Metadata } from "next";
import { SITE_URL } from "./sauce";

export function guideMetadata({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${SITE_URL}/${slug}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "The Sauce",
      type: "article",
    },
  };
}
