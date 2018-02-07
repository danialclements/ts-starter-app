import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/components/common/messageservice';
import { GrowlModule } from 'primeng/growl';

import { ToasterService } from './toaster.service';
import { ToasterMessagesComponent } from './toaster-messages.component';

@NgModule({
  imports: [
    CommonModule,
    GrowlModule
  ],
  providers: [
    ToasterService,
    MessageService
  ],
  declarations: [
    ToasterMessagesComponent
  ],
  exports: [
    ToasterMessagesComponent
  ]
})
export class ToasterModule { }
