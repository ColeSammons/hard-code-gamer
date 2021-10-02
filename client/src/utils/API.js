import env from "react-dotenv";
export const getYoutubeSearch = (data) => {
    data = data.replace(/\s+/g, '%20').toLowerCase().trim();
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${data}&key=AIzaSyDQ-TXKonQ_KK--UuDHZIm6bexKVKgcE_o&maxResults=15`;
    return fetch(url);
};

export const getTwitchToken = () => {
    const url = `https://id.twitch.tv/oauth2/token?client_id=${env.DB_TWITCH_CLIENT}&client_secret=${env.DB_TWITCH_SECRET}&grant_type=client_credentials`;

    return fetch(url, {
        method: 'POST'
    });

};

export const getTwitchChannelsByGame = (token) => {
    const options = {
        url: 'https://api.twitch.tv/helix/streams?game_id=33214&first=10&language=en',
        headers: {
            'Client-Id': '0url3bsnihn8ffk5wq6ywyp55xu255',
            'Authorization': `Bearer ${token}`
        }
    };

    return fetch(options.url, {
        method: "GET",
        headers: options.headers
    })
};