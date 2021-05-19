import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    // redirectTo: 'tabsnav', //otra forma de hacerlo, más fácil.
    // pathMatch: 'full'
    loadChildren: () => import('./tabsnav/tabsnav.module').then( m => m.TabsnavPageModule)

  },
  {
    path: 'tabsnav',
    loadChildren: () => import('./tabsnav/tabsnav.module').then( m => m.TabsnavPageModule)
  },
  {
    path: 'groceries',
    loadChildren: () => import('./groceries/groceries.module').then( m => m.GroceriesPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  /*{
    path: 'ladder',
    loadChildren: () => import('./ladder/ladder.module').then( m => m.LadderPageModule)
  },*/
  /*{
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
