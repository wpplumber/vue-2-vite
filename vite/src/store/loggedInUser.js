import { defineStore } from 'pinia'

export const useLoggedInUserStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'loggedInUser',
  state: ()=>({ 
    name: 'Abu Bakr',
    email: 'ab@medina.earth',
    username: 'Al Seddek'}),
  getters: {},
  actions:{}
})