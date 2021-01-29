import { action, observable,makeObservable, computed } from 'mobx'
import moment from 'moment'

class AppStore {

    //新版本需要makeObservable
    constructor() {
        makeObservable(this)
    }

    @observable time = ''
    @observable todos = []

    @computed get desc(){
        return `${this.time} 还有 ${this.todos.length} 条任务待完成`
    }

    @action addTodo(todo) {
        this.todos.push(todo)
    }

    @action deleteTodo(){
        this.todos.pop()
    }

    @action resetTodo(){
        this.todos = []
    }

    @action getNow(){
        this.time = moment().format('yyyy-MM-DD HH:mm:ss')
    }

}

const store = new AppStore()

setInterval(() => {
    store.getNow()
}, 1000);

export default store