import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'projetos',
    loadChildren: () => import('./pages/projetos/projetos.module').then( m => m.ProjetosPageModule)
  },
  {
    path: 'experiencias',
    loadChildren: () => import('./pages/experiencias/experiencias.module').then( m => m.ExperienciasPageModule)
  },
  {
    path: 'educacao',
    loadChildren: () => import('./pages/educacao/educacao.module').then( m => m.EducacaoPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./pages/contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
