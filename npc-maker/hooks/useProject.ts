import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_CULTURE_MUTATION, GET_CULTURES } from "@/app/_apollo/gql/culturegql";
import { CREATE_HISTORY_MUTATION, GET_HISTORIES } from "@/app/_apollo/gql/historygql";
import { CURRENT_PROJECT, SAVE_BACKGROUND_MUTATION, SAVE_NAME_MUTATION } from "@/app/_apollo/gql/projectsgql";
import { Culture, History } from "@/gql/graphql";

export const useProjectData = (projectUUID: string) => {
  const { data: projectData, loading: projectLoading, error: projectError } = useQuery(CURRENT_PROJECT, { variables: { id: projectUUID } });
  const { data: cultureData, loading: cultureLoading, error: cultureError } = useQuery(GET_CULTURES, { variables: { id: projectUUID } });
  const { data: historyData, loading: historyLoading, error: historyError } = useQuery(GET_HISTORIES, { variables: { id: projectUUID } });
  return { projectData, projectLoading, projectError, cultureData, cultureLoading, cultureError, historyData, historyLoading, historyError };
};

export const useProjectMutations = () => {
  const [saveProjectName] = useMutation(SAVE_NAME_MUTATION);
  const [saveBackground] = useMutation(SAVE_BACKGROUND_MUTATION);
  const [createCulture] = useMutation(CREATE_CULTURE_MUTATION);
  const [createHistory] = useMutation(CREATE_HISTORY_MUTATION);
  return { saveProjectName, saveBackground, createCulture, createHistory };
};

export const useProjectState = () => {
  const [cultureName, setCultureName] = useState('');
  const [cultureDescription, setCultureDescription] = useState('');
  const [historyName, setHistoryName] = useState('');
  const [historyDescription, setHistoryDescription] = useState('');
  const [projectBackground, setProjectBackground] = useState('');
  const [cultures, setCultures] = useState<{ node: Culture }[]>([]);
  const [histories, setHistories] = useState<{ node: History }[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  return {
    cultureName, setCultureName,
    cultureDescription, setCultureDescription,
    historyName, setHistoryName,
    historyDescription, setHistoryDescription,
    projectBackground, setProjectBackground,
    cultures, setCultures,
    histories, setHistories,
    isEditing, setIsEditing,
    projectTitle, setProjectTitle
  };
};