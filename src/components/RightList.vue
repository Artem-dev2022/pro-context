<template>
    <div class="list">
        <div class="top">
            <h3 class="title">{{ this.$store.state.lists[listId].title }}</h3>
            <button @click="changeList()" class="btn">{{ btnText }}</button>
        </div>
        <div v-if="btnText === 'Перемешать'" v-for="item in checkedItems" class="string">
            <span v-for="square in item.amount" 
                @click="deleteItem(item)"
                class="square"
                :style="{'background-color': item.color}">
            </span>
        </div>
        <div v-else class="string">
            <span v-for="square in allCheckedItems" 
                @click="deleteItem(square)"
                class="square"
                :style="{'background-color': square.color}">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['listId'],
    data(){
        return {
            btnText: 'Перемешать'
        }
    },
    computed: {
        checkedItems(){
            return this.$store.state.lists[this.listId].items.filter(item => item.checked === true )
        },
        allCheckedItems(){
            const list = []
            for (let i of this.checkedItems) {
                for (let j = 0; j < i.amount; j++) {
                    list.push(i)
                }
            }
            return list.sort(() => Math.random() - 0.5)
        }
    },
    methods: {
        changeList(){
            if (this.btnText === 'Перемешать') {
                this.btnText = 'Сортировать'
            } else {
                this.btnText = 'Перемешать'
            }
        },
        deleteItem(item){
            this.$store.commit('delete', {'listId': this.listId, 'title': item.title})
        }
    }
}
</script>

<style scoped>
.list {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    border: 1px solid black;
}
.top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.btn {
    padding: 15px 25px;
    background-color: rgb(0, 255, 119);
    border-radius: 5px;
}
.string {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 100%;
    overflow: hidden;
}
.square {
    display: block;
    width: 20px;
    height: 20px;
}
</style>