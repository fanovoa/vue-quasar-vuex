import { computed } from 'vue'
import { useStore } from 'vuex'


const useUI = () =>{


    const store = useStore();

    return {
        // sideMenuOpen: computed( () => store.getters['ui/sideMenuOpen'] ),
        sideMenuOpen: computed( {
            get(){
                return store.getters['ui/sideMenuOpen']
            },
            set(val){

                store.commit('ui/toogleSideMenu')
            }
        } ),
        toogleSideMenu(){
            store.commit('ui/toogleSideMenu')
          }

    }
}


export default useUI
