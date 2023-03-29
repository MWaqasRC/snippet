import { NgModule } from '@angular/core';
import { ImgMissingDirective } from './img-missing.directive';

@NgModule({
    declarations: [
        ImgMissingDirective
    ],
    exports: [
        ImgMissingDirective
    ]
})
export class ImgMissingModule {
}
