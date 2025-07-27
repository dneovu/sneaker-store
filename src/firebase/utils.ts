import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import { firebaseConfig } from './config';
import { Sneaker } from '../types/sneaker';
import { PriceRange } from '../types/meta';
// import { MetaSneakers } from '../types/meta';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const exampleSneakerData = [
  {
    brand: 'Adidas',
    model: 'Superstar Classic',
    imgSrc:
      'https://res.cloudinary.com/dlej7gbzs/image/upload/v1744039994/Rectangle_38_b1c56x.png',
    price: 12000,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste quibusdam, non ex nihil temporibusi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste quibusdam, non ex nihil temporibusi?',
    sizes: {
      40: 1,
      41: 2,
      42: 3,
      43: 4,
      44: 5,
    },
  },
];

export const getAllCollectionByName = async (collectionName: string) => {
  const collectionRef = collection(db, collectionName);
  const collectionSnapshot = await getDocs(collectionRef);
  return collectionSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getPriceRange = async (): Promise<PriceRange> => {
  const ref = doc(db, 'price', 'priceRange');
  const snap = await getDoc(ref);

  if (!snap.exists()) throw new Error('Meta document not found');
  return { id: snap.id, ...snap.data() } as PriceRange;
};

// for test
type SneakerToAdd = Omit<Sneaker, 'id'>;

export const addSneaker = async (sneaker: SneakerToAdd) => {
  const sneakerRef = collection(db, 'sneakers');
  await addDoc(sneakerRef, sneaker);
};

export const addSneakers = () => {
  exampleSneakerData.forEach((sneaker) => addSneaker(sneaker));
};
