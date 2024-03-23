import inquirer from "inquirer";
import { success } from "./util/logger.js";

export async function bePreset() {
  const { framework, format, orm } = await inquirer.prompt([
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
      name: "format",
      type: "list",
      message: "Please select format",
      choices: [
        {
          name: "ES Module",
          value: "esm",
        },
        {
          name: "CommonJS",
          value: "cjs",
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
  return [framework, format, orm];
}

export function beDone(appName) {
  success(`Done, your app is ready, please run this following command:
  - cd ${appName} && pnpm install
  - cp .env.example .env (setup your environment)
  - pnpm dev`);
}
