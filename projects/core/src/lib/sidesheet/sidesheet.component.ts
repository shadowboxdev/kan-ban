import { Component, ContentChild, Directive, Input, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: 'kb-sidesheet-content',
})
export class KbSidesheetContentDirective {}

@Directive({
  selector: 'kb-sidesheet-title',
})
export class KbSidesheetTitleDirective {}

@Directive({
  selector: 'kb-sidesheet-actions',
  /* tslint:disable-next-line */
  host: {
    '[class.align-end]': 'align === "end"',
    '[class.align-start]': 'align === "start"',
  },
})
export class KbSidesheetActionsDirective {
  @Input() align: 'start' | 'end' = 'start';
}

@Component({
  selector: 'kb-sidesheet-header',
  templateUrl: 'sidesheet-header.component.html',
})
export class KbSidesheetHeaderComponent {}

@Component({
  selector: 'kb-sidesheet',
  templateUrl: './sidesheet.component.html',
  styleUrls: ['./sidesheet.component.scss'],
  // tslint:disable-next-line:use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class KbSidesheetComponent {
  @ContentChild(KbSidesheetHeaderComponent) headerExists: KbSidesheetHeaderComponent;
  @ContentChild(KbSidesheetActionsDirective) actionsExist: KbSidesheetActionsDirective;
}
