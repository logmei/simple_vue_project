import {SET_NAME,SET_TOKEN,SET_ROLES} from '../mutation-types'
import {setToken} from '@/utils/auth'
import {loginInterface} from '@/api/user'
const state = {
    token: '',
    name:'',
    roles:[]
}

//实际状态更改的地方
const mutations = {
    [SET_NAME]:(state,name)=>{
        state.name = name
    },
    [SET_TOKEN]:(state,token)=>{
        state.token = token
    },
    [SET_ROLES]:(state,roles)=>{
        state.roles = roles
    }
}
//可以采用异步
const actions = {
    //可以采用context:login(context){context.commit('SET_TOKEN')}，也可以使用参数解构
    login({commit},userInfo){
        const {userName,password} = userInfo
        return new Promise((resolve,reject)=>{
            loginInterface({userName:userName.trim(),password:password}).then(response=>{
                const {data} = response
                commit([SET_TOKEN],data.token)
                setToken(data.token)
                resolve()
            }).catch(error=>{
                reject(error)
            })
        })
    }
}

//store中的计算属性，根据依赖被缓存起来，且依赖发生变化时会被重新计算，getter接收state作为第一个参数
const getters = {
    token: state=> state.token,
    name: state=>state.name,
    roles:state=>state.roles
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}