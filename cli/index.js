import inquirer from "inquirer";
import degit from "degit";
import { beDone, bePreset } from "./be.js";
import { warn, error } from "./util/logger.js";
import { feDone, fePreset } from "./fe.js";

const arg = process.argv.slice(2)[0];

let presets = [];
let done = () => { };

const { preset, appName } = await inquirer.prompt([
  {
    name: "appName",
    type: "input",
    message: "Please enter your app name:",
    default: arg || "metro-app",
  },
  {
    name: "preset",
    type: "list",
    message: "Please select preset:",
    choices: [
      {
        name: "Backend",
        value: "be",
      },
      {
        name: "Frontend",
        value: "fe",
      },
    ],
  },
]);

presets.push(preset);
if (preset == "fe") {
  presets.push(await fePreset());
  presets = presets.flat();
  done = feDone;
}

if (preset == "be") {
  presets.push(await bePreset());
  presets = presets.flat();
  done = beDone;
}
const url = `kodepandai/create-metroapp/presets/${presets.join("-")}#main`;
try {
  const emitter = degit(url, {
    cache: false,
    force: true,
    verbose: true,
  });

  emitter.on("info", (info) => {
    console.log(info.message);
  });

  await emitter.clone(appName);
  done(appName);
} catch (e) {
  error(e);
}
