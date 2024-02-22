import {io} from "socket.io-client"
const port = 3031;
const socket = io.connect(`http://`,{
    transports: ['websocket']
 })

 export default socket;