import {ExecutorContext} from "@nrwl/devkit";

export const getProjectJsonContent = (context: ExecutorContext) => {
  const projectName = context.projectName;
  return context.workspace?.projects[projectName!];
};
