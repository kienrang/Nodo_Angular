import { Component, Input } from '@angular/core';
@Component({
    selector: 'hello',
    template: '<h1>Hello {{name}} !</h1>',
    styles: ['h1 {color: red}']
})

export class HelloComponent {

    @Input() name: string | undefined;

    ngOnInit(): void {
        console.log("init.........");
    }

    ngOnDestroy() {
        console.log("Destroy............")
    }
}