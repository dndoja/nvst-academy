import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const register = () => {
    cookies.set("nvst_registered",true)
};

export const isRegistered = () => {
    const cookie = cookies.get("nvst_registered");

    return cookie
};