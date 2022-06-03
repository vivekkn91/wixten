import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch("https://askover.wixten.com/questapi");
  const capsules: any[] = await response.json();
  //   console.log(capsules);

  const fields: ISitemapField[] = capsules.map((capsule) => ({
    loc: `https://www.wixten.com/${capsule._id}/${capsule.Name.replace(
      /[^a-zA-Z0-9 - _ . ~]/g,
      ""
    ).replace(/ /g, "-")}`,
    changefreq: "always",
    priority: 0.7,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
