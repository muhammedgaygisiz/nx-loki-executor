import {ExecutorContext} from "@nrwl/devkit";
import {getBuildStorybookOutput} from "./getBuildStorybookOutput";
import {existsSync} from "fs";

const checkExists = (buildStorybookOutput: string): boolean =>
  existsSync(buildStorybookOutput);

export const checkPrerequisites = (context: ExecutorContext) => {
  const buildStorybookOutput = getBuildStorybookOutput(context);
  const buildStorybookOutputExists = checkExists(buildStorybookOutput);
  if (!buildStorybookOutputExists) {
    console.log(
      `No built storybook found for project, please build storybook first (nx build-storybook ${context.projectName})`
    );

    return false;
  }

  return true;
};
