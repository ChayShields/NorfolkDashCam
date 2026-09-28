import { GA_MEASUREMENT_ID } from "@/lib/analytics";

// Served as an external script so the site's CSP never needs an
// inline <script> for GA's config. The ID comes from a constant and nothing
// from the request is ever interpolated into the response, so there is no
// query-string input to inject through.
const body =
  "window.dataLayer=window.dataLayer||[];" +
  "function gtag(){dataLayer.push(arguments);}" +
  "gtag('js',new Date());" +
  `gtag('config','${GA_MEASUREMENT_ID}');`;

// Prerendered at build time and served from the CDN: the body is a constant.
export const dynamic = "force-static";

export function GET() {
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
