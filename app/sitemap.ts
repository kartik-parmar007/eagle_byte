import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.eaglebyte.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString();
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services/`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects/`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
