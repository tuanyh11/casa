import {create} from 'zustand'
import {persist} from 'zustand/middleware'

const useCompareStore = create(persist((set, get) => ({
    items: [],
    add(product) {

        set((state) => {
            const items = state.items

            const existingItem = items.find((item) => item.id === product.id)
            if(existingItem) return {...state}
            
            return {...items.unshift(product)}
        })    
    },
    remove(id) {
        set((state) => {
            const updatedItems = state.items.filter((item) => item.id !== id);
            return {...state, items: updatedItems}
        })
    }
}), {
    name: 'COMPARE_STORE',
}))

export default useCompareStore