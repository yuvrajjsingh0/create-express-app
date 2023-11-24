import express from "express";
import * as http from "http";
import cors from "cors";
import VoidCors from "../config/cors";

const app: express.Application = express();
const port =  process.env.PORT || 3000;

app.use(express.static(__dirname, { dotfiles: 'allow' } ));

app.use(express.json());

app.use(VoidCors());

const bootstrapExpress = () => {
    return app;
}

export default bootstrapExpress;