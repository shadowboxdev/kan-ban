import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Directives
 */
import { KbAutoTrimDirective } from './forms/auto-trim/auto-trim.directive';
import { KbFullscreenDirective } from './directives/fullscreen/fullscreen.directive';

const KB_DIRECTIVES: Type<any>[] = [KbAutoTrimDirective, KbFullscreenDirective];

// Validators
const KB_VALIDATORS: Type<any>[] = [];

/**
 * PIPES
 */
import { KbTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { KbTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { KbTimeUntilPipe } from './pipes/time-until/time-until.pipe';
import { KbBytesPipe } from './pipes/bytes/bytes.pipe';
import { KbDecimalBytesPipe } from './pipes/decimal-bytes/decimal-bytes.pipe';
import { KbDigitsPipe } from './pipes/digits/digits.pipe';
import { KbTruncatePipe } from './pipes/truncate/truncate.pipe';

const KB_PIPES: Type<any>[] = [
  KbTimeAgoPipe,
  KbTimeDifferencePipe,
  KbTimeUntilPipe,
  KbBytesPipe,
  KbDecimalBytesPipe,
  KbDigitsPipe,
  KbTruncatePipe,
];

/**
 * Services
 */

import { RouterPathService } from './services/router-path.service';
import { IconService } from './services/icon.service';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [...KB_DIRECTIVES, ...KB_PIPES, ...KB_VALIDATORS],
  exports: [FormsModule, CommonModule, ...KB_DIRECTIVES, ...KB_PIPES, ...KB_VALIDATORS],
  providers: [RouterPathService, IconService],
})
export class KbCommonModule {}
