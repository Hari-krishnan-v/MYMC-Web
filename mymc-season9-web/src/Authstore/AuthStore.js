

export const NumberOfPlayers = async () => {
    try {
        const response = await fetch('https://api.mcstatus.io/v2/status/java/82.180.147.201:19132');
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
