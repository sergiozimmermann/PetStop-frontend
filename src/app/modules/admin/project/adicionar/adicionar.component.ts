/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit } from '@angular/core';
import { Alert, AlertaService } from 'app/services/alerta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {
    formulario: FormGroup;


  constructor(private alertaService: AlertaService, private formBuilder: FormBuilder) {

    //this.alertaService.addAlert(teste);

    this.formulario = this.formBuilder.group({
        gramas  : [''],
        hora: [''],
        ativo: [true]
    });

    //this.pegaValues();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit(): void
  {
  }

//   public pegaValues(){
//     const teste: Alert = this.formulario.getRawValue()
//   }

  public add(){
    const teste: Alert = this.formulario.getRawValue();
    this.alertaService.addAlert(teste.gramas, teste.hora, teste.ativo = true);
  }

}
