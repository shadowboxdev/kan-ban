import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { KbNotificationCountComponent } from './notification-count.component';

const KB_NOTIFICATIONS: Type<any>[] = [KbNotificationCountComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [KB_NOTIFICATIONS],
  exports: [KB_NOTIFICATIONS],
})
export class KbNotificationsModule {}
