import { Message } from './../../types/message.type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'chat-dialog',
    templateUrl: './chat-dialog.component.html',
    styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {

    @Input() messages: Message[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
