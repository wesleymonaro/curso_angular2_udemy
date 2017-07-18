import { Component } from "@angular/core";

@Component({
    selector : 'my-app',
    template : `
        <h1>My First Angular 2</h1>

        <router-outlet></router-outlet>
    `
})
export class AppComponent{}