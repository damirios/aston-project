import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Моковый список игр. Настоящий буду получать через запрос
const tlou = {
    id: 12,
    title: 'The Last of Us Part I',
    release: '02-09-2022',
    developer: 'Naughty Dog',
    genres: ['Action', 'Shooter'],
    platforms: ['PlayStation 5', 'PC'],
    metascore: 89,
    imageSRC: 'https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg',
    screenshots: [
        'https://media.rawg.io/media/screenshots/eb5/eb5a0522dbb56b8f698ac3fa8b884341.jpg',
        'https://media.rawg.io/media/screenshots/b0f/b0f8ff8c24bc46ca70a20ee4b83d9569.jpg',
        'https://media.rawg.io/media/screenshots/276/276688cddf9531e6cbcccc3368dfa25f.jpg',
        'https://media.rawg.io/media/screenshots/585/585fd40ad660779a79e2853f3cd7a833.jpg',
        'https://media.rawg.io/media/screenshots/7cb/7cb256eecd9dd0bb54d4524dc2a9b7ee.jpg',
        'https://media.rawg.io/media/screenshots/464/464f718f300f321d481b0ac17b1ae9cb.jpg',
    ]
}
const bioshockInfinite = {
    id: 4062,
    title: 'Bioshock Infinite',
    release: '26-03-2013',
    developer: 'Irrational Games',
    genres: ['Action', 'Shooter'],
    platforms: ['PlayStation 4', 'Xbox 360', 'Switch', 'Linux', 'PC', 'PlayStation 3', 'Xbox One'],
    metascore: 94,
    imageSRC: "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    screenshots: [
        'https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg',
        'https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg',
        'https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg',
        'https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg',
        'https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg',
        'https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg'
    ]
}
const portal2 = {
    id: 16037,
    title: 'Portal 2',
    release: '18-04-2011',
    genres: ['Shooter', 'Puzzle'],
    platforms: ['Xbox 360', 'Linux', 'macOS', 'PlayStation 3', 'PC', 'Xbox One'],
    metascore: 95,
    imageSRC: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    screenshots: [
        'https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg',
        'https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg',
        'https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg',
        'https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg',
        'https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg',
        'https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg'
    ] 
}
const tombRaider = {
    id: 14239,
    title: 'Tomb Raider (2013)',
    release: '05-03-2013',
    genres: ['Action', 'Adventure'],
    platforms: ['Xbox 360', 'PlayStation 3', 'macOS', 'PlayStation 4', 'PC', 'Xbox One'],
    metascore: 86,
    imageSRC: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    screenshots: [
        'https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg',
        'https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg',
        'https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg',
        'https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg',
        'https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg',
        'https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg'
    ]
}
const lifeIsStrange = {
    id: 3439,
    title: 'Life is Strange',
    release: '29-01-2015',
    genres: ['Adventure'],
    platforms: ['Xbox 360', 'PlayStation 3', 'PlayStation 4', 'macOS', 'Android', 'Linux', 'iOS', 'PC', 'Xbox One'],
    metascore: 83,
    imageSRC: "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    screenshots: [
        'https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg',
        'https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg',
        'https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg',
        'https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg',
        'https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg',
        'https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg'
    ]
}
const redDeadRedemption2 = {
    id: 28,
    title: 'Red Dead Redemption 2',
    release: '26-10-2018',
    genres: ['Action', 'Adventure'],
    platforms: ['PlayStation 4', 'PC', 'Xbox One'],
    metascore: 96,
    imageSRC: "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    screenshots: [
        'https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg',
        'https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg',
        'https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg',
        'https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg',
        'https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg',
        'https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg'
    ] 
}

const initialGames = [tlou, bioshockInfinite, portal2, tombRaider, lifeIsStrange, redDeadRedemption2];

const initialState = {
    list: [], // games fetched from api
    cards: initialGames, // games mini cards that will be shown after submitting the search form
    status: 'idle', // or loading, failed, loaded
    zeroSearches: true,
    lastSearchQuery: '',
};

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        gamesCardsFilled(state, action) {
            state.cards = state.list;
        },
        gamesListCleared(state, action) {
            state.list.splice(0, state.list.length);
        },
        gamesStatusLoading(state, action) {
            state.status = 'loading';
        },
        gamesStatusLoaded(state, action) {
            state.status = 'loaded';
        },
        gamesStatusIdle(state, action) {
            state.status = 'idle';
        },
        gamesListCleared(state, action) {
            state.list = [];
            state.status = 'idle';
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchGames.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.status = 'idle';
                const newState = [];
                const {games, query, queryText} = action.payload;
                
                if (games.length !== 0) {
                    games.forEach(game => newState.push(game));
                    state.status = 'loaded';
                }
                if (query) {
                    state.cards = newState;
                    state.status = 'idle';
                    state.zeroSearches = false;
                    state.lastSearchQuery = queryText;
                } else {
                    state.list = newState;
                }
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
});

export const {
    gamesCardsFilled,
    gamesListCleared,
    gamesStatusLoading,
    gamesStatusLoaded,
    gamesStatusIdle

} = gamesSlice.actions;

export const fetchGames = createAsyncThunk('games/fetchGames', async (params) => {
    const {text, query} = params;

    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
    const getURL = function(text, apikey = RAWG_API_KEY) {
        return `https://api.rawg.io/api/games?key=${apikey}&search=${text}`;
    }

    const options = {
        method: 'GET',
        mode: 'cors'
    }

    const response = await fetch(getURL(text), options)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const results = data.results.map(game => {
            return {
                id: game.id,
                title: game.name,
                release: game.released,
                genres: game.genres.map(genre => genre.name),
                platforms: game.platforms.map(platform => platform.platform.name),
                metascore: game.metacritic || -1,
                imageSRC: game.background_image,
                screenshots: game.short_screenshots.map(screenshot => screenshot.image)
            };
        });
        return {
            games: results,
            query,
            queryText: text
        };
    });
    return response;
});

export default gamesSlice.reducer;