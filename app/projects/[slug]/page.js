import Head from "next/head";
import { createClient } from "contentful";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Fetch project data for server-side rendering
export async function generateStaticParams() {
  const response = await client.getEntries({
    content_type: "portfolioProject",
  });

  return response.items.map((item) => ({
    slug: item.fields.slug,
  }));
}

export default async function singleProject({ params }) {
  const { slug } = params;

  const response = await client.getEntries({
    content_type: "portfolioProject",
    "fields.slug": slug,
    limit: 1,
  });

  if (response.items.length === 0) {
    notFound();
  }

  const project = response.items[0];
  console.log("main", project);
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Project Details</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <main>
        <ProjectDetails project={project.fields} />
      </main>
    </>
  );
}
