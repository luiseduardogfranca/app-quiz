import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-quizz',
  templateUrl: 'quizz.html'
})

export class QuizzPage {
  name: string = "";

  index: number[] = [0];
  
  questions: string[] = ["Qual paradigma aborda o desenvolvimento em torno de funções?"];

  answers : string[][][] = [ [["Programação Recursiva", "Programação Orientada a Objetos", "Programação Funcional", "Programação Procedural"], ["F", "F", "F", "V"]],  ];

  // , "Toda reação de combustão envolve a presença de gás oxigênio (comburente) e um combustível que é queimado. Quando o combustível é um composto orgânico, a reação completa sempre produz gás carbônico e água. Abaixo temos a equação química que representa a reação de combustão completa do gás metano: CH4(g) + O2(g) → CO2(g) + H2O(v)", "Indique a alternativa que traz os menores coeficientes que tornam essa equação corretamente balanceada:","Indique a alternativa que traz os menores coeficientes que tornam essa equação corretamente balanceada", "Uma mãe recorreu à bula para verificar a dosagem de um remédio que precisava dar a seu filho. Na bula, recomendava-se a seguinte dosagem: 5 gotas para cada 2kg de massa corporal a cada 8 horas. Se a mãe ministrou corretamente 30 gotas do remédio a seu filho a cada 8 horas, então a massa corporal dele é de:"
  
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.name = navParams.get('name');
  }

}
