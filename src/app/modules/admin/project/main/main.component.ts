import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Alert, AlertaService } from 'app/services/alerta.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [AlertaService]
})
export class MainComponent implements OnInit {
  alerts: Alert[] = [];

  public imageIcons = "../../../../../assets/images/icons";

  public dogBowlEnabled = `${this.imageIcons}/dog-bowl-enabled.png`;

  public dogBowlDisabled = `${this.imageIcons}/dog-bowl-disabled.png`;

  constructor(private alertaService: AlertaService, private cd: ChangeDetectorRef) {

    // this.alertaService.getAlerts().subscribe((res) => {
    //     console.log(res);
    // });
  }


  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit() {
    this.obterAlarmes();
  }

  public obterAlarmes() {
    this.alertaService.getAlerts().subscribe((res) => {
      this.alerts = res;
      this.cd.detectChanges();
    });
  }

  public statusAlarme(alert, ativo) {
    if (ativo) {
      alert.ativo = true;
    } else {
      alert.ativo = false;
    }
    this.alertaService.updateAlert(alert);
  }

  public deletarAlarme(alert) {
    this.alertaService.deleteAlert(alert);
    this.obterAlarmes();
  }

}
