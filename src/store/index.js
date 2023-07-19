import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
      lists: [
        {
            id: 0,
            title: 'List 1',
            items:
            [
                {checked: false, title: 'Item 1', amount: 1, color: '#F00000'},
                {checked: true, title: 'Item 2', amount: 11, color: '#24FF00'},
                {checked: false, title: 'Item 3', amount: 15, color: '#1400FF'},
                {checked: false, title: 'Item 4', amount: 7, color: '#000000'},
            ]
        },
        {
            id: 1,
            title: 'List 2',
            items:
            [
                {checked: false, title: 'Item 1', amount: 1, color: '#24FF00'},
                {checked: false, title: 'Item 2', amount: 2, color: '#1440FF'},
                {checked: false, title: 'Item 3', amount: 3, color: '#000000'},
            ]
        },
        {
            id: 2,
            title: 'List 3',
            items:
            [
                {checked: true, title: 'Item 1', amount: 1, color: '#F00000'},
                {checked: true, title: 'Item 2', amount: 11, color: '#24FF00'},
                {checked: true, title: 'Item 3', amount: 15, color: '#1400FF'},
                {checked: true, title: 'Item 4', amount: 7, color: '#000000'},
            ]
        },
        {
            id: 3,
            title: 'List 4',
            items:
            [
                {checked: true, title: 'Item 1', amount: 1, color: '#24FF00'},
                {checked: false, title: 'Item 2', amount: 2, color: '#1440FF'},
                {checked: false, title: 'Item 3', amount: 3, color: '#000000'},
            ]
        },{
            id: 4,
            title: 'List 5',
            items:
            [
                {checked: false, title: 'Item 1', amount: 1, color: '#F00000'},
                {checked: true, title: 'Item 2', amount: 11, color: '#24FF00'},
                {checked: false, title: 'Item 3', amount: 15, color: '#1400FF'},
                {checked: false, title: 'Item 4', amount: 7, color: '#000000'},
            ]
        }
      ]
    },
    mutations: {
      check(state, payload){
        state.lists[payload.listId].items[payload.itemIdx].checked = payload.isChecked;
      },
      amount(state, payload){
        state.lists[payload.listId].items[payload.itemIdx].amount = payload.amount;
      },
      color(state, payload){
        state.lists[payload.listId].items[payload.itemIdx].color = payload.color;
      },
      delete(state, payload){
        state.lists[payload.listId].items.find(item => item.title === payload.title).amount = state.lists[payload.listId].items.find(item => item.title === payload.title).amount - 1
      }
    }
})

export default store;