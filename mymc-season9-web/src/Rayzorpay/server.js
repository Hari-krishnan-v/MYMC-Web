// queryServer.js
const { queryFull } = require('minecraft-server-util');

const serverIP = 'play.muttayi.world';
const serverPort = 25565; // Default Minecraft server port

queryFull(serverIP, { port: serverPort })
    .then((response) => {
        const playerCount = response.players.online;
        const playerUsernames = response.players.list;

        console.log(`Number of players online: ${playerCount}`);
        console.log('Player usernames:', playerUsernames);
    })
    .catch((error) => {
        console.error('Error querying the server:', error);
    });