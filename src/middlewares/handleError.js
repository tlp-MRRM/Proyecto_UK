import path from 'path';
import { fileURLToPath } from 'url';
import { createLogs } from '../helpers/createLogs.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handleErrors = (err, req, res, next) => {
  const date = new Date();
  const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  createLogs(`${timestamp}-${err.stack}\n`, path.dirname(__dirname), 'errors');
  console.log('ERROOOOOOOOOOOOOOOOOR ')
  console.log('ERROOOOOOOOOOOOOOOOOR ', err)
  console.log('ERROOOOOOOOOOOOOOOOOR ')
  const errorMessage = JSON.parse(err)
  res.status(errorMessage.status).send(errorMessage.Error);
};


export { handleErrors };
