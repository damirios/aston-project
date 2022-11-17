export function setInitialUserState(LSInfo) {
    const {online, users} = LSInfo;
    
    let initialState = {
        authStatus: 'notAuthorized', // or authorized
        favorites: {}, // fields: id, title, developer, genres, platforms, metascore, img
        history: {}
    };

    if (online !== null) {
        const currentUserLogin = online.login;
        initialState = {
            authStatus: 'authorized',
            favorites: {
                ...users[currentUserLogin].favorites
            },
            history: {
                ...users[currentUserLogin].history
            }
        }
    }

    return initialState;
}