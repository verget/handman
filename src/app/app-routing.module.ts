import { NgModule, Injectable } from '@angular/core'
import {
  Routes,
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router'
import { MainComponent } from './main/main.component'
import { MainService } from './main.service'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class GameResolver implements Resolve<string> {
  constructor(private service: MainService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> {
    return this.service.startNewGame()
  }
}

const routes: Routes = [
  {
    path: 'main',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    resolve: {
      game: GameResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
