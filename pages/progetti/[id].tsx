import React from 'react'
import { useRouter } from 'next/router'
import content from 'content.json'
import { ProjectProps } from '../../src/app/progetti/page'
import { ParsedUrlQuery } from 'querystring'

function Project({ project }: { project: ProjectProps }) {
    const router = useRouter();
    const { id } = router.query;
  
    return (
      <div>
        <h1>Post {id}</h1>
        <p>{project.link}</p>
      </div>
    );
  }
  
  export async function getStaticPaths() {
    const paths = content.progetti.projects.map((project) => ({
      params: { id: project.link },
    }));
  
    return {
      paths,
      fallback: false, // Set to false to return a 404 if the path is not found
    };
  }
  
  export async function getStaticProps({ params }: { params: { id: string } }) {
    const postId = params.id;
    const project = content.progetti.projects.find((p) => p.link === postId);
  
    return {
      props: {
        project,
      },
    };
  }
  
  export default Project;