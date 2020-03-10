export { KbCommonModule } from './lib/common.module';

// Directives
export { KbAutoTrimDirective } from './lib/forms/auto-trim/auto-trim.directive';
export { KbFullscreenDirective } from './lib/directives/fullscreen/fullscreen.directive';

// Validators
// export { KbValidators } from './lib/forms/validators/validators';

/**
 * PIPES
 */
export { KbTimeAgoPipe } from './lib/pipes/time-ago/time-ago.pipe';
export { KbTimeDifferencePipe } from './lib/pipes/time-difference/time-difference.pipe';
export { KbBytesPipe } from './lib/pipes/bytes/bytes.pipe';
export { KbDigitsPipe } from './lib/pipes/digits/digits.pipe';
export { KbTruncatePipe } from './lib/pipes/truncate/truncate.pipe';
export { KbDecimalBytesPipe } from './lib/pipes/decimal-bytes/decimal-bytes.pipe';
export { KbTimeUntilPipe } from './lib/pipes/time-until/time-until.pipe';

/** Services */
export { KbNotificationService } from './lib/services/notifications.service';
