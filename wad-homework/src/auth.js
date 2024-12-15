import store from "./store";

export default {
    user: { authenticated: false },
    authenticated: async function() {
        await fetch("http://localhost:3000/auth/authenticate", {
                credentials: 'include', //  Don't forget to specify this if you need cookies
            })
            .then((response) => {
                console.log("Auth.js response: ", response)
                return response.json();
                
            })
            .then((data) => {
                store.dispatch('updateUserState', (data.message == "Authenticated"))
            })
            .catch((e) => {
                console.log(e);
                console.log("error logout");
            });
        console.log("Auth.js authenticated: ", store.state.user.authenticated)
        return store.state.user.authenticated;
    }

}