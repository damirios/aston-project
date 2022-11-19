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
    description: `Revisit the game that set a new bar for single-player narrative 
    storytelling with The Last of Us™ and explore a ravaged and hardened world, 
    where every action has a brutal consequence for Joel and Ellie.`
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
    description: `The third game in the series, Bioshock takes the story of the underwater confinement 
    within the lost city of Rapture and takes it in the sky-city of Columbia. 
    Players will follow Booker DeWitt, a private eye with a military past; 
    as he will attempt to wipe his debts with the only skill he’s good at – finding people. 
    Aside from obvious story and style differences, this time Bioshock 
    protagonist has a personality, character, and voice, no longer the protagonist is a silent man, trying to survive.
    Open and bright level design of Columbia shows industrial colonial America in a seemingly endless carnival. 
    But Bioshock is not famous for its visuals, but for its story. 
    Mystery and creative vision of Irrational Games invite players to uncover the secrets of Columbia’s leader - Zachary Comstock 
    and save Elizabeth, the girl, that’s been locked up in the flying city since her birth.
    Unique weapons and mechanics of Vigor will make encounters different, 
    helping players to adjust to the new found mobility and hook shot, making fights fast-paced and imaginative.`
}
const portal2 = {
    id: 16037,
    title: 'Portal 2',
    release: '18-04-2011',
    genres: ['Shooter', 'Puzzle'],
    platforms: ['Xbox 360', 'Linux', 'macOS', 'PlayStation 3', 'PC', 'Xbox One'],
    metascore: 95,
    imageSRC: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    description: `Portal 2 is a first-person puzzle game developed by Valve Corporation and released on April 19, 2011 on Steam, 
    PS3 and Xbox 360. It was published by Valve Corporation in digital form and by Electronic Arts in physical form.
    Its plot directly follows the first game's, taking place in the Half-Life universe. 
    You play as Chell, a test subject in a research facility formerly ran by the company Aperture Science, 
    but taken over by an evil AI that turned upon its creators, GladOS. 
    After defeating GladOS at the end of the first game but failing to escape the facility, 
    Chell is woken up from a stasis chamber by an AI personality core, Wheatley, as the unkempt complex is falling apart. 
    As the two attempt to navigate through the ruins and escape, they stumble upon GladOS, and accidentally re-activate her...    
    Portal 2's core mechanics are very similar to the first game's ; the player must make their way through several test chambers 
    which involve puzzles. For this purpose, they possess a Portal Gun, a weapon capable of creating teleportation 
    portals on white surfaces. This seemingly simple mechanic and its subtleties coupled with the many different puzzle elements 
    that can appear in puzzles allows the game to be easy to start playing, yet still feature profound gameplay. 
    The sequel adds several new puzzle elements, such as gel that can render surfaces bouncy or allow you to accelerate when running on them.
    The game is often praised for its gameplay, its memorable dialogue and writing and its aesthetic. 
    Both games in the series are responsible for inspiring most puzzle games succeeding them, particularly first-person puzzle games. 
    The series, its characters and even its items such as the portal gun and the companion cube 
    have become a cultural icon within gaming communities.
    Portal 2 also features a co-op mode where two players take on the roles of robots being led through tests by GladOS, 
    as well as an in-depth level editor.`
}
const tombRaider = {
    id: 14239,
    title: 'Tomb Raider (2013)',
    release: '05-03-2013',
    genres: ['Action', 'Adventure'],
    platforms: ['Xbox 360', 'PlayStation 3', 'macOS', 'PlayStation 4', 'PC', 'Xbox One'],
    metascore: 86,
    imageSRC: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    description: `A cinematic revival of the series in its action third person form, Tomb Rider follows Lara in her 
    least experience period of life – her youth. Heavily influenced by Naughty Dog’s “Uncharted”, the game is a mix of everything, 
    from stealth and survival to combat and QTE action scenes.
    Young Lara Croft arrives on the Yamatai, lost island near Japan, as the leader of the expedition in search of the Yamatai Kingdom, 
    with a diverse team of specialists. But shipwreck postponed the successful arrival and seemingly forgotten island 
    is heavily populated with hostile inhabitants, cultists of Solarii Brotherhood.
    The game will be graphic at times, especially after failed QTE’s during some of the survival scenes, but overall players 
    will enjoy classic action adventure, reminiscent of the beginning of the series. This game is not a direct sequel or 
    continuation of existing sub-series within the franchise, but a reboot, 
    setting up Tomb Raider to represent modern gaming experience.
    The game has RPG elements and has a world, which you can explore during the story campaign and after the completion. 
    As well as multiplayer mode, where 2 teams (4 scavengers and 4 survivors) are clashing in 3 game modes while 
    using weapons and environments from the single-player campaign.`
}
const lifeIsStrange = {
    id: 3439,
    title: 'Life is Strange',
    release: '29-01-2015',
    genres: ['Adventure'],
    platforms: ['Xbox 360', 'PlayStation 3', 'PlayStation 4', 'macOS', 'Android', 'Linux', 'iOS', 'PC', 'Xbox One'],
    metascore: 83,
    imageSRC: "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    description: `Interactive storytelling and plot-heavy games gained popularity, and “Life is Strange” 
    arrived as teen mystery adventure. The plot will go through the life of Maxine, a teenager in possession of curious power, 
    allowing her to stop and rewind time, in order to manipulate her surroundings. Max, after the reunion with her friend Chloe, 
    is on the path to uncovering the secrets of Arcadia Bay. Players will have to deal with puzzle solving 
    through the fetch quests, in order to change the world around them.
    The game puts players in situations, where they’re forced to make a moral choice, going through 
    the decision which may have short-term or long-term consequences. Every choice made by the player will trigger 
    the butterfly effect, surrounding the first playthrough of the game with a lot of emotional struggle, 
    thoughtfully crafted by the developers at Dontnod Entertainment. Life is Strange is third person adventure game, 
    where players might seem just as an observer of the stories, unfolding in front of them.`
}
const redDeadRedemption2 = {
    id: 28,
    title: 'Red Dead Redemption 2',
    release: '26-10-2018',
    genres: ['Action', 'Adventure'],
    platforms: ['PlayStation 4', 'PC', 'Xbox One'],
    metascore: 96,
    imageSRC: "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    description: `America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. 
    Those who will not surrender or succumb are killed.
    After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang 
    are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, 
    the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. 
    As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals 
    and loyalty to the gang who raised him.
    From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of 
    life in America at the dawn of the modern age.`
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
    const response = new Promise( (res, rej) => {
        setTimeout(() => {
            const filteredGames = initialGames.filter(game => {
                if (game.title.toLowerCase().includes(text)) {
                    return true;
                }
                return false;
            });
            res({
                games: filteredGames,
                query: query,
                queryText: text
            });
        }, 500);
    });
    return response;
});

export default gamesSlice.reducer;