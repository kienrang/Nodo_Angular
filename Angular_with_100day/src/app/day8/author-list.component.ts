import { Component } from "@angular/core";
import { authors, Author } from "./author.model";

@Component({
    selector: 'author-list',
    template: `
    <author-detail *ngFor="let author of authors" [author] = "author" (select)="onSelected($event)"
    (delete) = "onDelete($event)"
    ></author-detail>
    <div>
    Current selected author: {{currentAuthor.lastName}} {{currentAuthor.firstName}}
    </div>
    `
})
export class AuthorListComponent {
    authors = authors;
    currentAuthor = authors[0];
    onSelected(selectedAuthor: Author) {
        this.currentAuthor = selectedAuthor;
    }

    onDelete(id: Number) {
        this.authors = this.authors.filter(author => {
            return author.id !== id;
        })

        if (this.currentAuthor.id == id) {
            this.currentAuthor = this.authors[0];
        }
    }
}