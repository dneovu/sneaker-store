import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import { firebaseConfig } from './config';
import { Sneaker } from '@/types/sneaker';
import { PriceRange } from '@/types/meta';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

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

export const getSneakerById = async (id: string): Promise<Sneaker> => {
  const ref = doc(db, 'sneakers', id);
  const snap = await getDoc(ref);

  if (!snap.exists()) throw new Error('Sneaker not found');
  return { id: snap.id, ...snap.data() } as Sneaker;
};
