const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router_user = jsonServer.router("todoData.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; //  chose port from here like 8080, 3001

server.use(middlewares);

server.listen(port);

server.use(router_user);

