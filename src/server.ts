import { serverHttp } from './app';

serverHttp.listen(4000, () => {
  console.log();
  console.log('Server is live');
  console.log('http://localhost:4000');
});
