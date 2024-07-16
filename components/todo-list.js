import { LitElement,html } from "lit";

export class TodoList extends LitElement{
    render(){
        return html 
        `<p> Hello World!</p>
        `;
    }
}


customElements.define('todo-list',TodoList)