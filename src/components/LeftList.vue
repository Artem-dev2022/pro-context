<template>
    <div class="dropdown">
      <div class="dropdown-label">
        <button class="dropdown__btn" @click="isOpen = !isOpen">
            <svg :class="isOpen ? 'dropdown__icon rotate' : 'dropdown__icon'" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9L12 15L5 9" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <input 
            v-model="parentCheck" 
            :class="isParentChecked === 'dotted' ? 'dropdown__check dotted' : 'dropdown__check'" 
            type="checkbox"
        >
        <h2>{{ this.$store.state.lists[listId].title }}</h2>
      </div>
      <ul :class="isOpen ? 'dropdown__list open' : 'dropdown__list'">
        <LeftItem  v-for="item, itemIdx of this.$store.state.lists[listId].items" 
        :itemIdx="itemIdx" 
        :listId="listId"
        :parentCheck="parentCheck"
        :stopReact="stopReact"/>
      </ul>
    </div>
</template>

<script>
import LeftItem from './LeftItem.vue'

export default {
    props: ['listId'],
    components: {LeftItem},
    data(){
        return {
            isOpen: false,
            parentCheck: false,
            stopReact: false,
        }
    },
    computed: {
        isParentChecked(){
            this.stopReact = false
            if (this.$store.state.lists[this.listId].items.length === this.$store.state.lists[this.listId].items.filter(i => i.checked == true).length) {
                this.parentCheck = true
                return 'checked'
            }
            if (this.$store.state.lists[this.listId].items.filter(i => i.checked === true).length > 0) {
                this.stopReact = true
                this.parentCheck = false
                return 'dotted'
            } else {
                this.parentCheck = false
                return 'clear'
            }
        }
    }
}
 
</script>

<style scoped>
.dropdown {
    width: 400px;
}
.dropdown-label {
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
}
.dropdown__check {
    position: relative;
}
.dropdown__check::after {
    /* content: ''; */
    position: absolute;
    top: 7px;
    left: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: black;
}
.dotted::after {
    content: '';
}
.dropdown__btn {
    height: 40px;
}
.dropdown__list {
    padding-left: 120px;
    width: 100%;
    height: 0;
    overflow: hidden;
}
.dropdown__icon {
    transition: all 0.2s;
}
.rotate {
    transform: rotate(-90deg);
}
.open {
    height: auto;
}
</style>