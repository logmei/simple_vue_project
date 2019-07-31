import request from '@/utils/request.js'
export {
    login as loginInterface
}
function login(data){
    return request({
        url:'/login',
        method:'post',
        data
    })
}