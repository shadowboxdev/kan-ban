import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'kb-layout-card-over',
  styleUrls: ['./layout-card-over.component.scss'],
  templateUrl: './layout-card-over.component.html'
})
export class KbLayoutCardOverComponent {
  /**
   * cardTitle?: string
   *
   * Title set in card.
   */
  @Input()
  public cardTitle: string;

  /**
   * cardSubtitle?: string
   *
   * Subtitle set in card.
   */
  @Input()
  public cardSubtitle: string;

  /**
   * cardWidth?: string
   *
   * Card flex width in %.
   * Defaults to 70%.
   */
  @Input()
  public cardWidth = 70;

  /**
   * color?: 'accent' | 'primary' | 'warn'
   *
   * toolbar color option: primary | accent | warn.
   * If [color] is not set, primary is used.
   */
  @Input() color: 'accent' | 'primary' | 'warn' = 'primary';
}
