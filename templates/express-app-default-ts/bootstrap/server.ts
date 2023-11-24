import * as http from "http";
import routes from "./routes";
import bootstrapExpress from "./express";

const app = bootstrapExpress();

const port = process.env.PORT || 8200;

const runServer = () => {
    const server = http.createServer(app).listen(port, () => {

        routes.forEach(route => {
            console.log(`Routes configured for ${route.getName()}`);
        });
        
        console.log("Server Started at: " + server.address()?.toString());
    });
}

export default runServer;