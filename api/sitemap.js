export default async function handler(req, res) {
  try {
    const response = await fetch("https://blogs.rana.net.in/sitemap.xml", {
      headers: {
        "User-Agent": "Googlebot",
      },
    });

    if (!response.ok) {
      return res.status(500).send("Failed to fetch sitemap.");
    }

    const xml = await response.text();

    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");

    res.status(200).send(xml);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to generate sitemap.");
  }
}