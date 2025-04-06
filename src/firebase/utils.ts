import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { firebaseConfig } from './config';
import { Sneaker } from '../types/sneaker';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const exampleSneakerData = [
  {
    brand: 'Puma',
    model: 'Running SX',
    imgSrc:
      'https://res.cloudinary.com/dlej7gbzs/image/upload/v1743949991/sneaker-1_hofxuo.png',
    price: 10000,
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
  {
    brand: 'Asics',
    model: 'Gel Kayano 14',
    imgSrc:
      'https://res.cloudinary.com/dlej7gbzs/image/upload/v1743957583/ipad_the-museum-visitor-x-asics-gel-kayano-14-cream-yellow-0_tbqzia.png',
    price: 23000,
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
  {
    brand: 'Nike',
    model: 'Air Jordan XT',
    imgSrc:
      'https://res.cloudinary.com/dlej7gbzs/image/upload/v1743950780/Rectangle_24_em731h.png',
    price: 25000,
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
  {
    brand: 'Nike',
    model: 'Wobler',
    imgSrc:
      'https://res.cloudinary.com/dlej7gbzs/image/upload/v1743950790/Rectangle_26_lu0fru.png',
    price: 43000,
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

export const getAllSneakers = async () => {
  const sneakersRef = collection(db, 'sneakers');
  const sneakersSnapshot = await getDocs(sneakersRef);
  return sneakersSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Sneaker[];
};

type SneakerToAdd = Omit<Sneaker, 'id'>;

export const addSneaker = async (sneaker: SneakerToAdd) => {
  const sneakerRef = collection(db, 'sneakers');
  await addDoc(sneakerRef, sneaker);
};

export const addSneakers = () => {
  exampleSneakerData.forEach((sneaker) => addSneaker(sneaker));
};
