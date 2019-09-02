import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectShowValue} from '../store/showHideElement/hide-show.selectors';
import {InvertHideShow} from '../store/showHideElement/hide-show.actions';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
    showAdmin = true;

    constructor(private store: Store<any>) {

    }

    ngOnInit() {
        this.store.select(selectShowValue).subscribe((value) => {
            this.showAdmin = value;
        });
    }

    toggleAdminShow() {
        this.store.dispatch(new InvertHideShow());
    }

}