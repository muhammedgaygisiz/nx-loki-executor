import {ExecutorContext} from "@nrwl/devkit";
import {getProjectJsonContent} from "./getProjectJsonContent";

export const getProjectRoot = (context: ExecutorContext) => {
  const project = getProjectJsonContent(context);
  return `${context.root}/${project?.root}`;
};
