export const isUserLoggedIn = () => {
    let authData = null;

    //   if (process.browser) {
    authData = JSON.parse(localStorage.getItem("auth"));
    //   }
    return authData;
};
export const setAuth = (authData) => {
    localStorage.setItem("auth", JSON.stringify(authData));
};