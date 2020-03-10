import { NgModule, Optional, SkipSelf, Type } from '@angular/core';

/** Lib Imports */
import { KbCommonModule } from '@common';
import { KbLayoutModule } from '@core/layout';

/** Providers */
import { ErrorHanderProviders } from './error-handler/error-handler.providers';


const LIB_IMPORTS: Type<any>[] = [KbCommonModule, KbLayoutModule];

@NgModule({
  imports: [...LIB_IMPORTS],
  providers: [...ErrorHanderProviders]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
