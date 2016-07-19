import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NewPeladaPage} from '../new-pelada/new-pelada'

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {
    this.navController = navController;
  }

  goTo(){
    this.navController.push(NewPeladaPage);
  }
}
