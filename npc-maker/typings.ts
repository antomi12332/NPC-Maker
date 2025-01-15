import { Culture, History, Location, ProjectsEdge, Quests } from "./gql/graphql";

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

export interface LocationsCardProps {
  locations: Location;
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
}

export interface QuestCardProps {
  questData: Quests;
  setquestData: React.Dispatch<React.SetStateAction<Quests[]>>;
}

export interface EditDisplayNameProps {
  displayName: string;
  isEditing: boolean;
  handleEditDisplayName: () => void;
  handleDisplayNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDisplayNameSave: () => void;
}

export interface LocationSelectorProps {
  locationNode: Location;
  setSelectedLocation: (node: Location) => void;
}

export interface NpcDialogTableProps {
  locationNode: Location;
  questData: Quests[];
  cultures: Culture[];
  histories: History[];
}