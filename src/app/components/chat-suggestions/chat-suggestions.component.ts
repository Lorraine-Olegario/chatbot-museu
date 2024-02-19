import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chat-suggestions',
    templateUrl: './chat-suggestions.component.html',
    styleUrls: ['./chat-suggestions.component.scss'],
})

export class ChatSuggestionsComponent implements OnInit {

    suggestionsTopics = [
        {
            title: "Dúvidas",
            icon: 'doubt',
            questions: [
                "Qual o valor para entrar no museu?",
                "Quando o museu está aberto?"
            ]
        },

        {
            title: "Curiosidades",
            icon: 'curiosity',
            questions: [
                "Quem era o prefeito na época da criação?",
                "Quantos cômodos existem no museu?",
                "Quantas peças estão exibidas no museu?"
            ]
        },

        {
            title: "História",
            icon: 'history',
            questions: [
                "Quando o museu foi criado?",
                "Qual o estilo arquitetônico do prédio?",
                "Quem foi o arquiteto do prédio?"
            ]
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
