import {BuildExecutorSchema} from './schema';
import executor from './executor';
import {ExecutorContext} from "@nrwl/devkit";

const options: BuildExecutorSchema = {
  reference: 'apps/prices/.loki/reference',
  difference: 'apps/prices/.loki/difference',
  output: 'apps/prices/.loki/current',
  update: false,
};
const context: ExecutorContext = {
  cwd: "",
  isVerbose: false,
  root: ""
};

describe('Build Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
