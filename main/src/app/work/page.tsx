import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { getPosts } from "@/utils/utils";
import { cache } from "react";

// Cache the projects data so it's computed once at build time
const getProjects = cache(() => {
  return getPosts(["src", "app", "work", "projects"]);
});

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

// Force this page to be statically generated at build time
export const dynamic = 'force-static';
export const revalidate = false;

export default function Work() {
  // Fetch projects at build time (server component)
  const allProjects = getProjects();
  
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Projects projects={allProjects} />
    </Column>
  );
}
