import type { MetadataRoute } from "next";

const BASE_URL = "https://besmara.fr";
const LAST_CONTENT_UPDATE = new Date("2026-08-29");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/automatisation-peche-aquaculture`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ressources/guide-automatisation-peche-aquaculture`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
