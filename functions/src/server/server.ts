import { app } from './app';

const port = 3332;

const server = app.listen(port, () => console.log(`Project is running at port ${port}`));

export {
  server
};