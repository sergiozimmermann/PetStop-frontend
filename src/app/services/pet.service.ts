import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Pet {
    id?: string;
    nome: string;
    tamanho: string;
  }

@Injectable({
  providedIn: 'root'
})
export class PetService {

constructor(private firestore: Firestore) { }

getPet(): Observable<Pet[]> {
    const petRef = collection(this.firestore, 'meu-pet');
    return collectionData(petRef, { idField: 'id'}) as Observable<Pet[]>;
  }

  getPetById(id): Observable<Pet> {
    const petRef = doc(this.firestore, `meu-pet/${id}`);
    return docData(petRef, { idField: 'id' }) as Observable<Pet>;
  }
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
updatePet(pet: Pet) {
    const petRef = doc(this.firestore, `meu-pet/${pet.id}`);
    return updateDoc(petRef, { nome: pet.nome, tamanho: pet.tamanho });
  }
}
