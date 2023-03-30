import { Subject } from 'rxjs';

const subject = new Subject();

export const messageService = {
  sendMessage: message => subject.next({ text: message }),
  onMessage: () => subject.asObservable()
};