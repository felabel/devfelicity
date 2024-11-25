import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getProjects = async () => {
  const response = await client.getEntries({
    content_type: "portfolioProject",
  });
  return response.items.map((item) => {
    const { name, slug, shortDescription, thumbnail, date, tags } = item.fields;
    return {
      id: item.sys.id,
      name,
      slug,
      shortDescription,
      thumbnail: thumbnail?.fields?.file?.url,
      date,
      tags,
    };
  });
};
