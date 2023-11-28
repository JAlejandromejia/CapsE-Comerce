import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, getFirestore  } from 'firebase/firestore';

const getProduct = async (productId) => {
    const db = getFirestore()
    const productRef = doc(db, "caps", productId)
    const snapshot = await getDoc(productRef);
    if (snapshot.exists()) 
        return {
            id: snapshot.id, ...snapshot.data()
        }
}

const getProducts = async () => {
    const db = getFirestore();
    const productsCollection = collection(db, 'caps');
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  const addProduct = async (product) => {
    const db = getFirestore();
    const productsCollection = collection(db, 'caps');
    const docRef = await addDoc(productsCollection, product);
    return docRef.id;
  };

  const removeProduct = async (productId) => {
    const db = getFirestore();
    const productRef = doc(db, 'caps', productId);
    await deleteDoc(productRef);
  };

export const productServices = { getProduct, getProducts, addProduct, removeProduct}
