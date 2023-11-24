import express from "express";
import * as http from "http";
import cors from "cors";

const app = express();
const port =  process.env.PORT || 3000;

app.use(express.static(__dirname, { dotfiles: 'allow' } ));

app.use(express.json());

app.use(cors({ credentials: true }));

const routes = [];

const server = http.createServer(app).listen(port, () => {

    routes.forEach(route => {
        console.log(`Routes configured for ${route.getName()}`);
    });
    
    console.log("Server Started at: " + server.address()?.toString());
});