import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Pet, PetService } from 'app/services/pet.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [PetService]
})
export class PerfilComponent implements OnInit {
  pets: Pet[] = [];

  @Input() onAlterPet = new EventEmitter;

  constructor(private petService: PetService, private cd: ChangeDetectorRef) {
    this.petService.getPet().subscribe((res) => {
      this.pets = res;
      this.cd.detectChanges();
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit() {
  }

  public teste(petId) {
    this.onAlterPet.emit(petId);
  }

}
