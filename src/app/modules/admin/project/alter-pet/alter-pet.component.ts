/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pet, PetService } from 'app/services/pet.service';

@Component({
  selector: 'app-alter-pet',
  templateUrl: './alter-pet.component.html',
  styleUrls: ['./alter-pet.component.scss']
})
export class AlterPetComponent implements OnInit {

    @Input() id: string;
    pet: Pet = null;

    formulario: FormGroup;

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
        this.formulario = this.formBuilder.group({
        nome  : [''],
        tamanho: ['']
    });
  }

  ngOnInit() {
    this.petService.getPetById(this.id).subscribe((res) => {
        this.pet = res;
      });

}
    public updatePet() {
    this.petService.updatePet(this.pet);

  }
}
