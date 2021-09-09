import connection from "@/plugins/firebase";

const database = "RiverData";

export const riverListener = () => {
  return connection.ref(`${database}`);
};

// https://firebase.google.com/docs/database/admin/retrieve-data#node.js
