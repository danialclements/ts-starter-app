import { Injectable } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';


@Injectable()
export class ToasterService {

  constructor(private messegeService: MessageService) { }

  add(message: Message) {
    this.messegeService.add(message);
  }

  addAll(messages: Message[]) {
    this.messegeService.addAll(messages);
  }

  clear() {
    this.messegeService.clear();
  }

}
