import type { MetadataRoute } from "next";
import { peptides } from "@/lib/peptides";

const BASE_URL = "https://rhome.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/how-it-works",
    "/peptides",
    "/pricing",
    "/about",
    "/faq",
    "/get-started",
    "/legal/privacy",
    "/legal/terms",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const peptideRoutes = peptides.map((p) => ({
    url: `${BASE_URL}/peptides/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...peptideRoutes];
}
