import { createFileRoute } from "@tanstack/react-router";
import { NikhilLanding } from "@/components/nikhil-landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elevated India | Private Luxury Journeys by Nikhil Sharma" },
      { name: "description", content: "Elevated India is a private luxury travel house founded by Nikhil Sharma—bespoke journeys across India and Nepal with rare access, cultural depth and complete discretion." },
      { property: "og:title", content: "Elevated India | Private Luxury Journeys by Nikhil Sharma" },
      { property: "og:description", content: "Palaces, tiger country and backwaters, privately designed and personally run—own guides, own fleet, 24/7 control room." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <NikhilLanding />;
}
