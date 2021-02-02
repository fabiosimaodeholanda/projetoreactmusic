import { createRitmo } from 'redux';
import rootReducer from './reduce';

const ritmo = createRitmo(rootReducer);

export default ritmo;