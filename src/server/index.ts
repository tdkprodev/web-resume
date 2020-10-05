console.log('server index.ts starting');
import * as express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';

const app = express();
const port = process.env.PORT || 3001;

//Static file declaration
app.use(express.static(path.resolve(__dirname, '../client/build')));

//production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../client/build')));

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
  });
}

app.get('/ping', (req: Request, res: Response) => {
  return res.send('pong');
});

//build mode
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
});

//start server
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
