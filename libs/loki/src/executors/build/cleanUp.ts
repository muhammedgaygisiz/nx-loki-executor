import {rmSync} from "fs";

export const cleanUp = (projectRoot: string) => {
  rmSync(`${projectRoot}/package.json`);
  rmSync(`${projectRoot}/node_modules`, { recursive: true, force: true });
};
