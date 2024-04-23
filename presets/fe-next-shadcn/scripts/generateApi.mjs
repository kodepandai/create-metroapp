// const {generateApi} = require("swagger-typescript-api");
import {generateApi} from "swagger-typescript-api";
import path from "path";
import {config} from 'dotenv'
config();

const SWAGGER_URL = process.env.SWAGGER_URL;

if(SWAGGER_URL === undefined) {
    throw new Error("SWAGGER_URL is not defined")
}

generateApi({
    name: "BaseApi.ts",
    url: SWAGGER_URL,
    httpClientType: "axios",
    output: path.resolve(process.cwd(), "./shared/api"),
    defaultResponseType: "unknown",
}).then(() => {
    console.log("Generated successfully")
    //exit terminal
    process.exit(0)
})

