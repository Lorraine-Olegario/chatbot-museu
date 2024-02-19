import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/types/message.type';

@Component({
    selector: 'chat-response',
    templateUrl: './chat-response.component.html',
    styleUrls: ['./chat-response.component.scss']
})

export class ChatResponseComponent implements OnInit {

    @Input() message!: Message;

    constructor() { }

    ngOnInit(): void {
    }
}
