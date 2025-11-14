import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
declare var $: any
@Component({
    selector: 'app-landing-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private route: Router) { }
    ngOnInit(): void { }

    ScrollIntoView(elem: string) {
        this.route.navigate(['/home'])
        setTimeout(() => document.querySelector(elem)!.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100)
    }

    close() {
        const a = document.querySelector('#nav')
        a?.classList.remove('show')
    }
}
