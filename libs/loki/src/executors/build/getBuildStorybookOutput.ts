import {ExecutorContext} from "@nrwl/devkit";
import {getProjectJsonContent} from "./getProjectJsonContent";

const BUILD_STORYBOOK_TARGET = 'build-storybook';

export const getBuildStorybookOutput = (context: ExecutorContext) => {
  const project = getProjectJsonContent(context);

  const buildStorybookOutputDir =
    project?.targets &&
    project?.targets[BUILD_STORYBOOK_TARGET].options.outputDir;
  return `${context.root}/${buildStorybookOutputDir}`;
};
