import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {NewPeladaPage} from '../new-pelada/new-pelada'

/*
  Generated class for the PeladasPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/peladas/peladas.html',
})
export class PeladasPage {

 peladas = null;
 constructor(private navController: NavController) {
    
    this.navController = navController;
    this.getMyPeladas();
  }

  
  getMyPeladas()
  {
   
      var peladas = [
       {
            name: "Pelada no lugano",
            playeres: ["Matheus", "Paulinho", "Pijuga", "Thiago", "Daniel"],
            nextMatch : "30/07"
        },

      {
            name: "Pelada ByFit",
            playeres: ["Matheus", "Paulinho", "Pijuga", "Thiago", "Daniel"],
              nextMatch : "05/05"
        },

      {
            name: "Pelada Federal",
            playeres: ["Matheus", "Paulinho", "Pijuga", "Thiago", "Daniel"],
            nextMatch : "10/07"
        }
    ]

    this.peladas = peladas;

    console.log(peladas);

  }

  createNewPelada(){
    this.navController.push(NewPeladaPage)
  }
}
