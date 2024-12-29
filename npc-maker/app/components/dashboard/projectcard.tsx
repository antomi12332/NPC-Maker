'use client'
import { gql, useQuery } from "@apollo/client";

const ALL_PROJECTS_QUERY = gql`
  query projectCollection($orderBy: ProjectOrder) {
    projectCollection(orderBy: $orderBy) {
      edges {
        node {
          id
          project_name
          short_description
        }
      }
    }
  }
`;


export default function ProjectCard() {
  const { loading, error, data } = useQuery(ALL_PROJECTS_QUERY, {
    variables: { orderBy: { id: "AscNullsLast" } }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.projectCollection.edges.map(({ node }: { node: { id: string; project_name: string; short_description: string } }) => {
    const { id, project_name } = node;
    return (
      <div key={id}>
        <div className="self-stretch justify-start items-start gap-10 inline-flex">
          <div className="grow shrink basis-0 self-stretch py-5 justify-center items-center gap-4 flex">
            <div className="w-[60px] h-[60px] bg-black/5 rounded-[30px] justify-center items-center flex">
              <div className="w-[60px] self-stretch text-center text-black text-[37.50px] font-normal leading-[60px]">🌌</div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-black text-xl font-normal leading-7">{project_name}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}