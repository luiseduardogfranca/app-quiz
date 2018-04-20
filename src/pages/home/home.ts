import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { QuizzPage } from '../quizz/quizz';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  like: any = 0 ; 
  name: string = ""; 

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }

  likeQuizz(amount: any) {
    this.like += amount;
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Estamos quase lá!',
      message: "Digite seu nome para que eu te conheça:",
      inputs: [
        {
          name: 'name',
          placeholder: 'Nome'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            this.name = "";
          }
        },
        {
          text: 'Pronto',
          handler: data => {
            this.name = data.name;
            if(this.name != ""){
              this.presentLoading()
              this.navCtrl.push(QuizzPage, {name:this.name});
            }
          }
        }
      ]
    });
    prompt.present();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Carregando as questões!",
      duration: 1500
    });
    loader.present();
  }
}
