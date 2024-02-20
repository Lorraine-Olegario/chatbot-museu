import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/types/message.type';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    messages: Message[] = JSON.parse(localStorage.getItem("messages") ?? "[]")

    constructor(private service: MessageService) { }

    updateLocalStorage(){
        localStorage.setItem("messages", JSON.stringify(this.messages));
    }

    sendSuggestedQuestion(question: string) {
        this.messages.push({
            type: 'request',
            message: question
        })

        this.updateLocalStorage();
        this.sendMessage(question);
    }

    ngOnInit(): void {
    }

    sendMessage(message: string)
    {
        this.service.sendData(message).subscribe({
            next: (body) => {
                this.messages.push({
                    type: "response",
                    message: body.response
                })
            }
        });
    }
}
