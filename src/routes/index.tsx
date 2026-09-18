import { createFileRoute } from "@tanstack/react-router";
import { NikhilLanding } from "@/components/nikhil-landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikhil Sharma | Founder of Elevated India" },
      { name: "description", content: "Nikhil Sharma on two decades across India and the private luxury travel house he built—Elevated India, with its own guides, own fleet and a 24/7 control room." },
      { property: "og:title", content: "Nikhil Sharma | Founder of Elevated India" },
      { property: "og:description", content: "Most companies sell India. I run it. The story behind Elevated India, in Nikhil Sharma's own words." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <NikhilLanding />;
}
