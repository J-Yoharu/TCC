import { io } from "socket.io-client";

const URL = "ws://localhost:3001";
const socket = io(URL);

export default socket;
