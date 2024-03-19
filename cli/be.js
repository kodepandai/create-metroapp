import inquirer from "inquirer";
import { success } from "./util/logger.js";

export async function bePreset() {
  const { framework, orm } = await inquirer.prompt([
    {
      name: "framework",
      type: "list",
      message: "Please select Backend Framework",
      choices: [
        {
          name: "NestJs",
          value: "nest",
        },
      ],
    },
    {
      name: "orm",
      type: "list",
      message: "Plase select database ORM",
      choices: [
        {
          name: "Prisma ORM",
          value: "prisma",
        },
        {
          name: "Drizzle ORM",
          value: "drizzle",
        },
      ],
    },
  ]);
  return [framework, orm];
}

export function beDone(appName){
  success(`Done, your app is ready, please run this following command:
  - cd ${appName} && pnpm install
  - cp .env.example .env (setup your environment)
  - pnpm dev`);
}
