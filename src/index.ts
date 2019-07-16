import * as userCmd from './commands/userCmd';
import { dateNow } from './helper/dateNow';
import { status } from './valueObject/status';
import * as path from 'path';
import guid from 'guid';
import request from 'request';
import jsonServer from 'json-server';
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middleWares = jsonServer.defaults()
const port = 3000
const host = `http://localhost:${port}`;

server.use(jsonServer.bodyParser)

// Intercept request for include default values
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.id = guid.create()
    req.body.createdIn = dateNow()
    req.body.updatedIn = dateNow()
  } else if(req.method === 'PUT') {
    req.body.createdIn = dateNow()
    req.body.updatedIn = dateNow()
  } else if(req.method === 'PATCH') {
    req.body.updatedIn = dateNow()
  }
  next()
})

server.post('/user', (req, res, next) => {
  const cmd = userCmd.postCmd(req.body)
  if (!cmd.isValid()) {
    res.status(400).jsonp(cmd.errors)
    return null
  }
  next()
})

server.put('/user/:id', (req, res, next) => {
  req.body.id = req.params.id;
  const cmd = userCmd.putCmd(req.body)
  if (!cmd.isValid()) {
    res.status(400).jsonp(cmd.errors)
    return null
  }
  next()
})

server.patch('/user/:id', (req, res, next) => {
  req.body.id = req.params.id;
  const cmd = userCmd.patchCmd(req.body)
  if (!cmd.isValid()) {
    res.status(400).jsonp(cmd.errors)
    return null
  }
  next()
})

server.delete('/user/:id', (req, res, next) => {
  const cmd = userCmd.deleteCmd(req.params)
  if (!cmd.isValid()) {
    res.status(400).jsonp(cmd.errors)
    return null
  }
  const url = `${host}/user/${req.params.id}`;
  const config = {url: url, json: true, method: 'PATCH', body: { status: status.Deleted }};
  request(config, (err, response, body) => {
    res.send(response.body);
  });
})

server.use(middleWares)
server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running in ${host}`)
})
