'use client'
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { setProject } from '@/app/store/projectSlice';

const ALL_PROJECTS_QUERY = gql`
  query GetProjects {
      projectsCollection(orderBy: {id: AscNullsLast}) {
      edges {
        node {
          id,
          project_id,
          project_name,
          short_description,
        }
      }
    }
  }
`;


export default function ProjectCard() {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(ALL_PROJECTS_QUERY, {
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data.projectsCollection.edges.length) {
    return <p className="self-stretch text-black text-xl font-normal leading-7">No Projects</p>;
  }

  return data.projectsCollection.edges.map(({ node }: { node: { id: string; project_name: string; short_description: string } }) => {
    const { id, project_name } = node;
    return (
      <Link
        key={id}
        href={`/projectdetail/${id}`}
        className="self-stretch justify-start items-start gap-10 inline-flex"
        onClick={() => dispatch(setProject({ id, project_name }))}
      >        <div className="grow shrink basis-0 self-stretch py-5 justify-center items-center gap-4 flex">
          <div className="w-[60px] h-[60px] bg-black/5 rounded-[30px] justify-center items-center flex">
            <div className="w-[60px] self-stretch text-center text-black text-[37.50px] font-normal leading-[60px]">🌌</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <p className="self-stretch text-black text-xl font-normal leading-7">{project_name}</p>
          </div>
        </div>
      </Link>
    );
  });
}