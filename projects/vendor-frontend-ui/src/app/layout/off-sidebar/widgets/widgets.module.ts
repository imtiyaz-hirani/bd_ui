import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets.component';
import { OverviewComponent } from './overview/overview.component';
import { SearchComponent } from './search/search.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatsComponent } from './chats/chats.component';
import { HelpComponent } from './help/help.component';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DigitalAssitantComponent } from './digital-assitant/digital-assitant.component';
import { RealTimeNotificationsService } from './notifications/services/real-time-notifications.service';
import { DateAgoPipe } from './notifications/pipes/date-ago.pipe';
import { GroupByTimePipe } from './notifications/pipes/group-by-time.pipe';
import { SharedModule } from '@app/shared/shared.module';
import { ChatPanelComponent } from './digital-assitant/chat-panel/chat-panel.component';
import { ChatService } from './digital-assitant/services/chat.service';
import { SpeechRecognitionService } from './digital-assitant/services/speech-recognition.service';
import { ChatFooterComponent } from './digital-assitant/chat-footer/chat-footer.component';
import { ScriptedFlowComponent } from './digital-assitant/scripted-flow/scripted-flow.component';
import { PaymentCardsComponent } from './digital-assitant/payment-cards/payment-cards.component';


@NgModule({
  imports: [
    CommonModule,
    TextBoxModule,
    ButtonModule,
    SharedModule,
  ],
  declarations: [
    WidgetsComponent,
    OverviewComponent,
    SearchComponent,
    AddTasksComponent,
    MyTasksComponent,
    NotificationsComponent,
    ChatsComponent,
    HelpComponent,
    DigitalAssitantComponent,
    DateAgoPipe,
    GroupByTimePipe,
    ChatPanelComponent,
    ChatFooterComponent,
    ScriptedFlowComponent,
    PaymentCardsComponent,
  ],
  entryComponents: [
    OverviewComponent,
    SearchComponent,
    AddTasksComponent,
    MyTasksComponent,
    NotificationsComponent,
    ChatsComponent,
    HelpComponent,
    PaymentCardsComponent,
  ],
  providers: [
    RealTimeNotificationsService,
    DateAgoPipe,
    GroupByTimePipe,
    ChatService,
    SpeechRecognitionService,
  ],
  exports: [
    WidgetsComponent,
    DateAgoPipe,
    GroupByTimePipe,
    ChatFooterComponent,
  ],
})
export class WidgetsModule {}
