import {ExecutorContext} from "@nrwl/devkit";
import {BuildExecutorSchema} from "./schema";
import {getBuildStorybookOutput} from "./getBuildStorybookOutput";

export const buildCommand = (
  context: ExecutorContext,
  options: BuildExecutorSchema
) => {
  const command = ['loki'];

  if (!options.update) {
    command.push('--requireReference');
  }

  if (options.update) {
    command.push('approve');
  }

  command.push('--reactUri');

  const buildStorybookOutput = getBuildStorybookOutput(context);
  command.push(`file:${buildStorybookOutput}`);

  command.push(`--reference=../../${options.reference}`);
  command.push(`--difference=../../${options.difference}`);
  command.push(`--output=../../${options.output}`);

  return command.join(' ').trim();
};
