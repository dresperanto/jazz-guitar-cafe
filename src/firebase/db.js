import { db } from './firebase';

export const onceGetUsers = () =>
  db.collection('guitarists').orderBy("firstName")

export const onceGetUser =
  db.collection("guitarists")
