import Cookies from 'js-cookie';

const setUserCookie = (username) => {
    Cookies.set('username', username, { expires: 7 });
};


const isAuthenticated = () => {
    return Cookies.get('username') !== undefined;
};
export { setUserCookie, isAuthenticated };