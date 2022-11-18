export function addNewUserToLocalStorage(user, isLocalStorageEmpty = false) {
    let LSContent = JSON.parse(localStorage.getItem('users'));
    const {login} = user;
    if (isLocalStorageEmpty) {
        LSContent = {
            [login]: {
                ...user,
                favorites: {},
                history: {}
            }
        }
    } else {
        LSContent = {
            ...LSContent,
            [login]: {
                ...user,
                favorites: {},
                history: {}
            }
        }
    }
    localStorage.setItem('users', JSON.stringify(LSContent));
}

export function addOnlineStatusOnLS(user) {
    let LSContent = JSON.parse(localStorage.getItem('online'));
    const onlineUser = {
        login: user.login,
        password: user.password
    };
    if (!LSContent) {
        localStorage.setItem('online', JSON.stringify(onlineUser));
    }
}

export function addOfflineStatusOnLS() {
    localStorage.setItem('online', JSON.stringify(null));
}

export function getInfoFromLS() {
    const LSOnline = JSON.parse(localStorage.getItem('online'));
    const LSUsers = JSON.parse(localStorage.getItem('users'));
    return {
        online: LSOnline,
        users: LSUsers
    }
}

export function addFavoriteGameToLS(game) {
    const LSUsers = JSON.parse(localStorage.getItem('users'));
    const LSOnline = JSON.parse(localStorage.getItem('online'));
    const currentUser = LSUsers[LSOnline.login];
    const newUsers = {
        ...LSUsers,
        [LSOnline.login]: {
            login: currentUser.login,
            password: currentUser.password,
            favorites: {
                ...currentUser.favorites,
                [game.id]: game
            },
            history: {
                ...currentUser.history,
            }
        }
    };

    localStorage.setItem('users', JSON.stringify(newUsers));
}

export function removeFavoriteGameFromLS(gameID) {
    const LSUsers = JSON.parse(localStorage.getItem('users'));
    const LSOnline = JSON.parse(localStorage.getItem('online'));
    const currentUser = LSUsers[LSOnline.login];
    delete currentUser.favorites[gameID];

    localStorage.setItem('users', JSON.stringify(LSUsers));
}

export function getFavoriteGamesFromLS() {
    const LSUsers = JSON.parse(localStorage.getItem('users'));
    const LSOnline = JSON.parse(localStorage.getItem('online'));
    const currentUser = LSUsers[LSOnline.login];
    const favorites = Object.values(currentUser.favorites);
    return favorites;
}