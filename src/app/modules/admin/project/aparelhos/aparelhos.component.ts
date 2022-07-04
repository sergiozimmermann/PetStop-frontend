import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AparelhosService, Aparelhos } from 'app/services/aparelhos.service';

@Component({
  selector: 'app-aparelhos',
  templateUrl: './aparelhos.component.html',
  styleUrls: ['./aparelhos.component.scss']
})
export class AparelhosComponent implements OnInit {
    aparelhos: Aparelhos[] = [];
  constructor(private aparelhosService: AparelhosService, private cd: ChangeDetectorRef) {
    this.aparelhosService.getAparelhos().subscribe((res) => {
        this.aparelhos = res;
        this.cd.detectChanges();
      });
  }

  ngOnInit() {
  }

}
