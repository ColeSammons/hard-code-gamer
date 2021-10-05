import env from "react-dotenv";

//Get back search results for keyword
export const getYtSearch = (data) => {
    data = data.replace(/\s+/g, '%20').toLowerCase().trim();
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${data}&key=${env.DB_YOUTUBE_ID}&maxResults=20&type=video`;
    return fetch(url);
};

export const getYtRec = (vidID) => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${vidID}&key=${env.DB_YOUTUBE_ID}&maxResults=20&type=video`;
    return fetch(url);
};

//get back access token and expiration
export const getTwToken = () => {
    const url = `https://id.twitch.tv/oauth2/token?client_id=${env.DB_TWITCH_CLIENT}&client_secret=${env.DB_TWITCH_SECRET}&grant_type=client_credentials`;

    return fetch(url, {
        method: 'POST'
    });

};

//get back <50 live channels for a game category, english only
export const getTwChannelsByGameID = (token, gameID) => {
    const options = {
        url: `https://api.twitch.tv/helix/streams?game_id=${gameID}&first=50&language=en`,
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

//get back game categories that match value entered
export const getTwCategoriesByGame= (token, game) => {
    const options = {
        url: `https://api.twitch.tv/helix/search/categories?query=${game}&first=50`,
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

//get back top twitch games
export const getTwTopGames= (token) => {
    const options = {
        url: `https://api.twitch.tv/helix/games/top?first=50`,
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

//get top twitch channels
export const getTwTopChannels= (token) => {
    const options = {
        url: `https://api.twitch.tv/helix/streams?first=50&language=en`,
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