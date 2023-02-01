import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { WidgetsHostDirective } from './widgets-host.directive';
import { WIDGETS } from '../menu';
import { SearchComponent } from './search/search.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HelpComponent } from './help/help.component';
import { ChatsComponent } from './chats/chats.component';
import { DigitalAssitantComponent } from './digital-assitant/digital-assitant.component';
import { ChatService } from './digital-assitant/services/chat.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  @Input() widgetType: string;
  @ViewChild('widgetsHost', { read: ViewContainerRef })
  widgets: ViewContainerRef;
  loadedComponent: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private chatService: ChatService
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  ngOnChanges(props): void {
    const prop = props;
    setTimeout(() => {
      this.loadWidget(prop.widgetType.currentValue);

      if (!this.loadedComponent) {
        return;
      }
      this.loadedComponent.instance.widgetType = prop.widgetType.currentValue;
    });
  }

  loadWidget(widgetType: string): void {
    switch (widgetType) {
      case WIDGETS.OVERVIEW:
        this.loadComponent(OverviewComponent);
        break;

      case WIDGETS.SEARCH:
        this.loadComponent(SearchComponent);
        break;

      case WIDGETS.ADD:
        this.loadComponent(AddTasksComponent);
        break;

      case WIDGETS.MY_TASKS:
        this.loadComponent(MyTasksComponent);
        break;

      case WIDGETS.NOTIFICATIONS:
        this.loadComponent(NotificationsComponent);
        break;

      case WIDGETS.CHATS:
        this.loadComponent(ChatsComponent);
        break;

      case WIDGETS.HELP:
        this.loadComponent(HelpComponent);
        break;

      case WIDGETS.SERRA:
        this.loadComponent(DigitalAssitantComponent);
        break;

      default:
        break;
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  loadComponent(componentInstance): void {
    this.widgets.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentInstance
    );
    this.loadedComponent = this.widgets.createComponent(componentFactory);
    this.chatService.updateScriptedFlow(false);
  }
}
