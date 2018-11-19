"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userCmd = __importStar(require("./commands/userCmd"));
const dateNow_1 = require("./helper/dateNow");
const status_1 = require("./valueObject/status");
const path = __importStar(require("path"));
const guid_1 = __importDefault(require("guid"));
const request_1 = __importDefault(require("request"));
const json_server_1 = __importDefault(require("json-server"));
const server = json_server_1.default.create();
const router = json_server_1.default.router(path.join(__dirname, 'db.json'));
const middlewares = json_server_1.default.defaults();
const port = 3000;
const host = `http://localhost:${port}`;
server.use(json_server_1.default.bodyParser);
// Intercept request for include default values
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.id = guid_1.default.create();
        req.body.createdIn = dateNow_1.dateNow();
        req.body.updatedIn = dateNow_1.dateNow();
    }
    else if (req.method === 'PUT') {
        req.body.createdIn = dateNow_1.dateNow();
        req.body.updatedIn = dateNow_1.dateNow();
    }
    else if (req.method === 'PATCH') {
        req.body.updatedIn = dateNow_1.dateNow();
    }
    next();
});
server.post('/user', (req, res, next) => {
    const cmd = userCmd.postCmd(req.body);
    if (!cmd.isValid()) {
        res.status(400).jsonp(cmd.errors);
        return null;
    }
    next();
});
server.put('/user/:id', (req, res, next) => {
    req.body.id = req.params.id;
    const cmd = userCmd.putCmd(req.body);
    if (!cmd.isValid()) {
        res.status(400).jsonp(cmd.errors);
        return null;
    }
    next();
});
server.patch('/user/:id', (req, res, next) => {
    req.body.id = req.params.id;
    const cmd = userCmd.patchCmd(req.body);
    if (!cmd.isValid()) {
        res.status(400).jsonp(cmd.errors);
        return null;
    }
    next();
});
server.delete('/user/:id', (req, res, next) => {
    const cmd = userCmd.deleteCmd(req.params);
    if (!cmd.isValid()) {
        res.status(400).jsonp(cmd.errors);
        return null;
    }
    const url = `${host}/user/${req.params.id}`;
    const config = { url: url, json: true, method: 'PATCH', body: { status: status_1.status.Deleted } };
    request_1.default(config, (err, response, body) => {
        res.send(response.body);
    });
});
server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running in ${host}`);
});
