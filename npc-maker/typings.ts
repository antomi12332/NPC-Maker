interface Project {
  node: { id: string };
  id: string;
  project_name: string;
}

interface Location {
  node: { id: string };
  id: string;
  location_name: string;
  description: string;
  npcsCollection: { edges: object[] };
}

interface Culture {
  node: { id: string };
  id: string;
  title: string;
  description: string;
}

interface Quest {
  node: { id: string };
  id: string;
  title: string;
  objective: string;
  reward: string;
}

interface History {
  node: { id: string };
  id: string;
  title: string;
  description: string;
}






export interface ProjectCardProps {
  project: Project;
  setProjects: React.Dispatch<React.SetStateAction<{ node: { id: string } }[]>>;
}

export interface LocationsCardProps {
  locations: Location;
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
}

export interface QuestCardProps {
  questData: Quest;
  setquestData: React.Dispatch<React.SetStateAction<Quest[]>>;
}

export interface CultureCardProps {
  cultures: Culture;
  setCultures: React.Dispatch<React.SetStateAction<Culture[]>>;
}

export interface HistoryCardProps {
  histories: History;
  setHistories: React.Dispatch<React.SetStateAction<History[]>>;
}
