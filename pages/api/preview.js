import { getStaticRoute, getDynamicRoute } from "lib/routes";

export default function handler(req, res) {
  // bail if no secret provided
  if (!req?.query?.secret) {
    return res.status(401).json({
      message:
        "No secret token. Check you added a query param called '?secret=...'" +
        req.query.type,
    });
  }

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({
      message:
        "Invalid secret token! Check your configured SANITY_PREVIEW_SECRET environment variable",
    });
  }

  // check if we have a slug to redirect to (page to be previewed)
  if (!req.query.slug) {
    return res.status(401).json({ message: "No slug" });
  }

  // Enable Preview Mode by setting the cookies and passing the sanity token for fetching
  res.setPreviewData(
    { token: process.env.SANITY_API_TOKEN },
    {
      maxAge: 20,
    }
  );

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/${req?.query?.slug}` ?? `/` });
  res.redirect(`/`);

  // return res.end();
}
