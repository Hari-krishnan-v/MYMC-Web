import Cookies from 'js-cookie';

const setUserCookie = (username) => {
    Cookies.set('username', username, { expires: 7 });
};


const isAuthenticated = () => {
    return Cookies.get('username') !== undefined;
};
// AuthStore.js
export const NumberOfPlayers = async () => {
    try {
        const response = await fetch('https://api.mcstatus.io/v2/status/java/play.muttayi.world');
        const data = await response.json();
        return {
            online: data.online,
            players: data.players.online,
            maxPlayers: data.players.max,
            version: data.version.name
        };
    } catch (error) {
        console.error('Error fetching player count:', error);
        return 0;
    }
};
export { setUserCookie, isAuthenticated };