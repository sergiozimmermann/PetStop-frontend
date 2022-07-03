import { Component, OnInit } from '@angular/core';
import { Alert, AlertaService } from 'app/services/alerta.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  constructor(private alertaService: AlertaService) {
    this.alertaService.addAlert(62289836, 'Jane');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit() {
  }

}
