import { NodePlopAPI } from 'plop';
import { transformGenerator } from './generators/transform';

export default function (plop: NodePlopAPI) {
  plop.setWelcomeMessage('Starting to generate a transformer!');
  plop.setGenerator('transform', transformGenerator);
}
