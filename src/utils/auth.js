import Cookies from 'js-cookie'

const Token_name = 'token'

export function setToken(token){
    return Cookies.set(Token_name,token)
}

export function getToken(){
    return Cookies.get(Token_name)
}

export function removeToken(){
    return Cookies.remove(Token_name)
}