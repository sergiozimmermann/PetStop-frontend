import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';

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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
updatePet(pet: Pet) {
    const petRef = doc(this.firestore, `perfilPet/${pet.id}`);
    return updateDoc(petRef, { nome: pet.nome, tamanho: pet.tamanho });
  }
}
