import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/types/message.type';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    messages: Message[] = []

    sendSuggestedQuestion(question: string) {
        this.messages.push({
            type: 'request',
            message: question
        })
    }

    constructor() { }

    ngOnInit(): void {
    }
}
