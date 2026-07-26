import type { MetadataRoute } from "next";
import { treatments } from "@/lib/treatments";

const BASE_URL = "https://rhome.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/how-it-works",
    "/treatments",
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

  const treatmentRoutes = treatments.map((t) => ({
    url: `${BASE_URL}/treatments/${t.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
