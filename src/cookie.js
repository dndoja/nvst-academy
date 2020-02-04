import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const register = () => {
    cookies.set("nvst_registered",true)
};

export const isRegistered = () => {
    return cookies.get("nvst_registered")
};