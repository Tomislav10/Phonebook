import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./phonebook/phonebook.module').then(
            m => m.PhonebookModule
          )
      }
    ]
  },
  {path: '**', component: ErrorPageComponent, data: {message: 'Oops page not found!'}}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
