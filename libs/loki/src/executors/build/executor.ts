import {BuildExecutorSchema} from './schema';
import {ExecutorContext} from '@nrwl/devkit';
import {checkPrerequisites} from "./checkPrerequisites";
import {getProjectRoot} from "./getProjectRoot";
import {copyFileSync} from "fs";
import {buildCommand} from "./buildCommand";
import {execSync} from "child_process";
import {cleanUp} from "./cleanUp";

export default async (
  options: BuildExecutorSchema,
  context: ExecutorContext
) => {
  const prerequisitesFullfilled = checkPrerequisites(context);

  if (!prerequisitesFullfilled) {
    return Promise.resolve({ success: false });
  }

  const projectRoot = getProjectRoot(context);

  // Copy current package.json to projectRoot for loki commands to work
  copyFileSync('package.json', `${projectRoot}/package.json`);

  const cmd = buildCommand(context, options);

  try {
    execSync(cmd, {
      stdio: 'inherit',
      cwd: `${projectRoot}`,
    });
  } catch (e) {
    console.error('An error occured', e);
    cleanUp(projectRoot);
    return Promise.resolve({ success: false });
  }

  cleanUp(projectRoot);

  return {
    success: true,
  };
}
