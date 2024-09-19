import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  or,
  getDoc,
  updateDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import App from "./config";
import { getFirestore } from "firebase/firestore";
import { success, notFound, notImplemented } from "@/app/api/statusCode";

const db = getFirestore(App);

export async function GetProductById(id: any) {
  try {
    const docSnap = await getDoc(doc(db, "products", id));
    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...docSnap.data() };
      return { status: true, statusCode: success, data };
    }
    return { status: false, statusCode: notFound, data: null };
  } catch {
    return { status: false, statusCode: notImplemented, data: null };
  }
}

export async function GetProductBy(inputUser: any) {
  try {
    const q = query(
      collection(db, "products"),
      or(
        where("name", "==", inputUser.name)
        //   where("fullname", "==", inputUser.fullname)
      )
    );
    try {
      const querySnapshot = await getDocs(q);
      const response: any = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      if (response.length == 0) {
        return { status: false, statusCode: notFound, data: null };
      }
      return { status: true, statusCode: success, data: response[0] };
    } catch {
      return { status: false, statusCode: notImplemented, data: null };
    }
  } catch {
    return { status: false, statusCode: notImplemented, data: null };
  }
}

export async function PostProduct(dataInput: any) {
  dataInput.created_at = serverTimestamp();
  dataInput.category =
    dataInput.category[0].toUpperCase() + dataInput.category.slice(1);
  dataInput.name = dataInput.name[0].toUpperCase() + dataInput.name.slice(1);
  try {
    await setDoc(doc(collection(db, "products")), dataInput);
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}

export async function GetAllProduct(order: any, sort: "asc" | "desc") {
  const createQuery = (db: any, order: any, sort: "asc" | "desc") => {
    let q;
    if (order) {
      q = query(collection(db, "products"), orderBy(order, sort));
    } else {
      q = query(collection(db, "products"));
    }
    return q;
  };
  try {
    const q = createQuery(db, order, sort);
    const querySnapshot = await getDocs(q);
    const response: any = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return { status: true, statusCode: success, data: response };
  } catch {
    return { status: false, statusCode: notImplemented, data: null };
  }
}

export async function DeleteProduct(id: any) {
  try {
    await deleteDoc(doc(db, "products", id));
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}

export async function UpdateProduct({
  id,
  dataUpdate,
}: {
  id: string;
  dataUpdate: any;
}) {
  dataUpdate.category =
    dataUpdate.category[0].toUpperCase() + dataUpdate.category.slice(1);
  dataUpdate.name = dataUpdate.name[0].toUpperCase() + dataUpdate.name.slice(1);
  try {
    await updateDoc(doc(db, "products", id), dataUpdate);
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}
