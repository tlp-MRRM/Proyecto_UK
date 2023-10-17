import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Para trabajar con esta function, se tiene que tener en cuenta que toma la url de ./src/helpers/_dirname.js
// Adaptar el url para su correcto uso
export function __dirname() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    return __dirname;
}
