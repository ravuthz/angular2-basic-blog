import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    public title: string;
    public content: string;
    constructor() { }

    ngOnInit() {
        this.title = 'home page'
        this.content = 'Welcome to the home page'
    }
}
