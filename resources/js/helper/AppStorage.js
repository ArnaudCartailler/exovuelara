

class AppStorage {

    constructor(){}

    storeItem( key, value ) {
        try {
            localStorage.setItem( key, value );
        } catch (e)
        {
            console.error( e );
        }
    }

    clear() {
        localStorage.removeItem( 'user' );
    }

    // TODO: ClearAll LocalStorage function
    // clearAll() {
    //     localStorage.removeItem();
    // }

    getToken() {
        return localStorage.getItem( 'token' );
    }

    getApiToken() {
        return localStorage.getItem( 'apiToken' );
    }

    getItem( key ) {
        return localStorage.getItem( key );
    }

    getUser() {
        return localStorage.getItem( 'user' );
    }


}

export default AppStorage = new AppStorage();