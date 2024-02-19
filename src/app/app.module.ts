import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArrowRightComponent } from './icons/arrow-right/arrow-right.component';
import { SparkleComponent } from './icons/sparkle/sparkle.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ArrowLeftComponent } from './icons/arrow-left/arrow-left.component';
import { MuseumComponent } from './icons/museum/museum.component';
import { ChatSuggestionsComponent } from './components/chat-suggestions/chat-suggestions.component';
import { ChatResponseComponent } from './components/chat-response/chat-response.component';
import { QuestionComponent } from './icons/question/question.component';
import { CuriosityComponent } from './icons/curiosity/curiosity.component';
import { HistoryComponent } from './icons/history/history.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ChatComponent,
        ChatSuggestionsComponent,
        ChatResponseComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ArrowRightComponent,
        ArrowLeftComponent,
        SparkleComponent,
        MuseumComponent,
        QuestionComponent,
        CuriosityComponent,
        HistoryComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
