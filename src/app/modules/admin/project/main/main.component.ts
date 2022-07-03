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

    constructor(private alertaService: AlertaService, private cd: ChangeDetectorRef) {

    // this.alertaService.getAlerts().subscribe((res) => {
    //     console.log(res);
    // });

    this.alertaService.getAlerts().subscribe((res) => {
        this.alerts = res;
        this.cd.detectChanges();
      });
   }


  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit() {
  }

}
