import { getFirestore} from 'firebase/firestore/lite';

import firebaseApp from './firebaseConfig.js';


console.log(getFirestore(firebaseApp));