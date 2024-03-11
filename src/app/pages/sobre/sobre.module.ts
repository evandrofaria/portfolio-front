import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobrePageRoutingModule } from './sobre-routing.module';

import { SobrePage } from './sobre.page';
import { ComponentsModule } from '../../shared/components/components.module';
import { ContatoPageModule } from '../contato/contato.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobrePageRoutingModule,
    ComponentsModule,
    ContatoPageModule
  ],
  exports: [
    SobrePage
  ],
  declarations: [SobrePage]
})
export class SobrePageModule {}
