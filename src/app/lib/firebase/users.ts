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
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import App from "./config";
import { getFirestore } from "firebase/firestore";
import { success, notFound, notImplemented } from "@/app/api/statusCode";

const db = getFirestore(App);

export async function GetUserById(id: any) {
  try {
    const docSnap = await getDoc(doc(db, "users", id));
    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...docSnap.data() };
      return { status: true, statusCode: success, data };
    }
    return { status: false, statusCode: notFound, data: null };
  } catch {
    return { status: false, statusCode: notImplemented, data: null };
  }
}

export async function GetUserBy(inputUser: any) {
  try {
    const q = query(
      collection(db, "users"),
      or(
        where("email", "==", inputUser.email)
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

export async function PostUser(dataInput: any) {
  dataInput.created_at = serverTimestamp();
  try {
    await setDoc(doc(collection(db, "users")), dataInput);
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}

export async function GetAllUser(order: any, sort: "asc" | "desc") {
  const createQuery = (db: any, order: any, sort: "asc" | "desc") => {
    let q;
    if (order) {
      q = query(collection(db, "users"), orderBy(order, sort));
    } else {
      q = query(collection(db, "users"));
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

export async function DeleteUser(id: any) {
  try {
    await deleteDoc(doc(db, "users", id));
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}

export async function UpdateUser({
  id,
  dataUpdate,
}: {
  id: string;
  dataUpdate: any;
}) {
  try {
    await updateDoc(doc(db, "users", id), dataUpdate);
    return { status: true, statusCode: success };
  } catch {
    return { status: false, statusCode: notImplemented };
  }
}
