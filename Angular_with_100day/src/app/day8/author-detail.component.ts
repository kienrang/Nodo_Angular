import { Author } from './author.model';
import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'author-detail',
    template: `
            <h3>{{author.lastName}} {{author.firstName}} 
            <button (click) = "select.emit(author)" style="magin-left: 1rem">Select</button>
            <button (click) = "delete.emit(author.id)" style="magin-left: 2rem">Delete</button>
            </h3> 
    `
})
export class AuthorDetail {
    @Input()
    author!: Author;
    @Output() select = new EventEmitter<Author>();
    @Output() delete = new EventEmitter<Number>();
}