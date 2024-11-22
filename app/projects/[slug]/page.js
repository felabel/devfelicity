import Head from "next/head";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";

export default function singleProject() {
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
        <ProjectDetails />
      </main>
    </>
  );
}
