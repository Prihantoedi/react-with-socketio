import { io } from 'socket.io-client';

// export const socket = io('http://localhost:4000');

const io = new Server({
    cors: {
        origin: 'http://localhost:3000'
    }
});

io.listen(4000);