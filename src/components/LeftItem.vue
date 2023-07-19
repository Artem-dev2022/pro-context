<template>
    <div class="item">
        <div class="item__left">
            <input @change="check" v-model="checked" class="item__check" type="checkbox">
            <p>{{ this.$store.state.lists[listId].items[itemIdx].title }}</p>
        </div>
        <div class="item__right">
            <input 
                @input="e => changeAmount(e.target.value)"
                :value="quantity"
                class="item__amount" 
                type="number"
            >
            <input 
                @input="changeColor()" 
                v-model="color" 
                class="item__color" 
                type="color"
            >
        </div>
    </div>
</template>

<script>
export default {
    props: ['itemIdx', 'listId', 'parentCheck', 'stopReact'],
    data() {
        return {
            checked: this.$store.state.lists[this.listId].items[this.itemIdx].checked,
            color: this.$store.state.lists[this.listId].items[this.itemIdx].color
        }
    },
    computed: {
        quantity(){
            return this.$store.state.lists[this.listId].items[this.itemIdx].amount
        }
    },
    watch: {
        parentCheck(){
            if (this.parentCheck) {
                this.checked = true
            } else {
                if (this.stopReact) return
                this.checked = false
            }
            this.check()
        }
    },
    methods: {
        check(){
            this.$store.commit('check', {'listId': this.listId, 'itemIdx': this.itemIdx, 'isChecked': this.checked})
        },
        changeAmount(value){
            this.$store.commit('amount', {'listId': this.listId, 'itemIdx': this.itemIdx, 'amount': Number(value)})
            if (value < 0) {
                this.$store.commit('amount', {'listId': this.listId, 'itemIdx': this.itemIdx, 'amount': Number(0)})
            }
        },
        changeColor(){
            this.$store.commit('color', {'listId': this.listId, 'itemIdx': this.itemIdx, 'color': this.color})
        }
    },
}
</script>

<style scoped>
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.item__left,
.item__right {
    display: flex;
    align-items: center;
    gap: 10px;
}
.item__amount {
    width: 40px;
    height: 40px;
}
.item__color {
    width: 40px;
    height: 40px;

}
</style>