import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { KbNotificationsModule, KbNotificationCountPositionX, KbNotificationCountPositionY } from './';
import { By } from '@angular/platform-browser';

describe('Component: NotificationCount', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        KbNotificationCountBasicTestComponent,
        KbNotificationCountContentTestComponent,
        KbNotificationCountPositionTestComponent,
        KbNotificationCountPositionContentTestComponent,
        KbNotificationCountLimitTestComponent,
      ],
      imports: [MatIconModule, KbNotificationsModule],
    });
    TestBed.compileComponents();
  }));

  it('should render component with no notification tip', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountBasicTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.kb-notification-content'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.kb-notification-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.kb-notification-no-count'))).toBeFalsy();
      });
    }),
  ));

  it('should render component notification tip with no count nor number', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountBasicTestComponent);
      const component: KbNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.kb-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.kb-notification-no-count'))).toBeTruthy();
        expect(
          fixture.debugElement.query(By.css('.kb-notification-count')).nativeElement.textContent.trim(),
        ).toBeFalsy();
      });
    }),
  ));

  it('should render component notification tip with count and number', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountBasicTestComponent);
      const component: KbNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 44;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.kb-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.kb-notification-no-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.kb-notification-count')).nativeElement.textContent.trim()).toContain(
          component.notifications,
        );
      });
    }),
  ));

  it('should render component with notification tip hidden', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountBasicTestComponent);
      const component: KbNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 0;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.kb-notification-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.kb-notification-no-count'))).toBeFalsy();
      });
    }),
  ));

  it('should render component with notification tip and then hide it', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountBasicTestComponent);
      const component: KbNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.kb-notification-count'))).toBeTruthy();
        component.notifications = false;
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(fixture.debugElement.query(By.css('.kb-notification-count'))).toBeFalsy();
        });
      });
    }),
  ));

  it('should render component notification tip with defaultLimit+ when limit is not set and when count exceeds the default', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountBasicTestComponent);
      const component: KbNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 100;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.kb-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.kb-notification-no-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.kb-notification-count')).nativeElement.textContent.trim()).toContain(
          '99+',
        );
      });
    }),
  ));

  it('should render component notification tip with count when limit is not set and when count does not exceed default', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountBasicTestComponent);
      const component: KbNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 20;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.kb-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.kb-notification-no-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.kb-notification-count')).nativeElement.textContent.trim()).toContain(
          '20',
        );
      });
    }),
  ));

  it('should render component notification tip with limit+ when limit is set', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountLimitTestComponent);
      const component: KbNotificationCountLimitTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 100;
      component.limit = 50;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.kb-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.kb-notification-no-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.kb-notification-count')).nativeElement.textContent.trim()).toContain(
          '50+',
        );
      });
    }),
  ));

  it('should render component notification tip with notifications when it is less than the limit', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountLimitTestComponent);
      const component: KbNotificationCountLimitTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 20;
      component.limit = 50;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.kb-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.kb-notification-no-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.kb-notification-count')).nativeElement.textContent.trim()).toContain(
          '20',
        );
      });
    }),
  ));

  it('should render component with content transcluded', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountContentTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.kb-notification-content'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('mat-icon'))).toBeTruthy();
      });
    }),
  ));

  it('should render component with content and default positionY top and position X after', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountPositionContentTestComponent);
      const component: KbNotificationCountPositionContentTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.kb-notification-top'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.kb-notification-after'))).toBeTruthy();
      });
    }),
  ));

  it('should render component with no content and default positionY top and position X after', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountPositionTestComponent);
      const component: KbNotificationCountPositionTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.kb-notification-center-x'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.kb-notification-center-y'))).toBeTruthy();
      });
    }),
  ));

  it('should render component with positionY bottom and position X before', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(KbNotificationCountPositionTestComponent);
      const component: KbNotificationCountPositionTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      component.positionX = KbNotificationCountPositionX.Before;
      component.positionY = KbNotificationCountPositionY.Bottom;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.kb-notification-before'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.kb-notification-bottom'))).toBeTruthy();
      });
    }),
  ));
});

@Component({
  selector: 'kb-notification-count-basic-test',
  template: `
    <kb-notification-count color="color" [notifications]="notifications"></kb-notification-count>
  `,
})
class KbNotificationCountBasicTestComponent {
  color: string;
  notifications: any;
}

@Component({
  selector: 'kb-notification-count-content-test',
  template: `
    <kb-notification-count>
      <mat-icon>notifications</mat-icon>
    </kb-notification-count>
  `,
})
class KbNotificationCountContentTestComponent {}

@Component({
  selector: 'kb-notification-count-position-test',
  template: `
    <kb-notification-count
      [positionX]="positionX"
      [positionY]="positionY"
      [notifications]="notifications"
    ></kb-notification-count>
  `,
})
class KbNotificationCountPositionTestComponent {
  positionX: KbNotificationCountPositionX | string;
  positionY: KbNotificationCountPositionY | string;
  notifications: any;
}

@Component({
  selector: 'kb-notification-count-position-content-test',
  template: `
    <kb-notification-count [positionX]="positionX" [positionY]="positionY" [notifications]="notifications">
      <mat-icon>notifications</mat-icon>
    </kb-notification-count>
  `,
})
class KbNotificationCountPositionContentTestComponent {
  positionX: KbNotificationCountPositionX | string;
  positionY: KbNotificationCountPositionY | string;
  notifications: any;
}

@Component({
  selector: 'kb-notification-count-limit-test',
  template: `
    <kb-notification-count [notifications]="notifications" [limit]="limit"></kb-notification-count>
  `,
})
class KbNotificationCountLimitTestComponent {
  notifications: any;
  limit: number;
}
