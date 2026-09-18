import { createFileRoute } from "@tanstack/react-router";
import { NikhilLanding } from "@/components/nikhil-landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikhil Sharma | Business Growth Maestro" },
      { name: "description", content: "Meet Nikhil Sharma—entrepreneur, business growth strategist and digital transformation expert with more than 20 years of experience." },
      { property: "og:title", content: "Nikhil Sharma | Business Growth Maestro" },
      { property: "og:description", content: "Two decades of building ventures, transforming businesses and mentoring founders." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <NikhilLanding />;
}
