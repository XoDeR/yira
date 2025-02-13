import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
  return c.json({
    hello: "world",
  })
})

export const GET = handle(app);

app.get('/user/:name', async (c) => {
  const name = c.req.param('name')
  // ...
})

app.get('/project/:projectId', (c) => {
  //const projectId = c.req.param('projectId')
  const { projectId } = c.req.param()
  return c.json({
    project: projectId,
  })
})