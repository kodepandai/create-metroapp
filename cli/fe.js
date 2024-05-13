import inquirer from "inquirer";
import { success } from "./util/logger.js";

export async function fePreset() {
  const { framework, ui } = await inquirer.prompt([
    {
      name: "framework",
      type: "list",
      message: "Please select Frontend Framework",
      choices: [
        {
          name: "NextJs",
          value: "next",
        },
      ],
    },
    {
      name: "UI Library",
      type: "list",
      message: "Plase select UI Library",
      choices: [
        {
          name: "Shadcn",
          value: "shadcn",
        },
      ],
    },
  ]);
  return [framework, ui];
}

export function feDone(appName) {
  success(`Done, your app is ready, please run this following command:
  - cd ${appName} && pnpm install
  - cp .env.example .env (setup your environment)
  - pnpm dev`);
}
