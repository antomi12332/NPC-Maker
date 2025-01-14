import { Culture, History, ProjectsEdge } from "./gql/graphql";

export interface ProjectCardProps {
  project: ProjectsEdge['node'];
  setProjects: React.Dispatch<React.SetStateAction<{ projectsCollection: { edges: ProjectsEdge[] } }>>;
}

export interface CultureCardProps {
  cultures: Culture;
  setCultures: React.Dispatch<React.SetStateAction<Culture[] | undefined>>;
}

export interface HistoryCardProps {
  histories: History;
  setHistories: React.Dispatch<React.SetStateAction<History[] | undefined>>;
}

export interface EditTitleProps {
  projectTitle: string;
  isEditing: boolean;
  handleEditProjectName: () => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTitleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleTitleSave: () => void;
}