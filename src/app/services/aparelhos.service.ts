/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable id-blacklist */
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Aparelhos{
    id?: string;
    modelo: string;
    nome: string;
    vercao: number;
  }
@Injectable({
  providedIn: 'root'
})
export class AparelhosService {

constructor(private firestore: Firestore) { }

getAparelhos(): Observable<Aparelhos[]> {
    const aparelhosRef = collection(this.firestore, 'aparelhos');
    return collectionData(aparelhosRef, { idField: 'id'}) as Observable<Aparelhos[]>;
  }

//   getNoteById(id): Observable<Note> {
//     const noteDocRef = doc(this.firestore, `notes/${id}`);
//     return docData(noteDocRef, { idField: 'id' }) as Observable<Note>;
//   }

addAparelhos(modelo: any, nome: string, vercao: number) {
    const aparelhosRef = collection(this.firestore, 'aparelhos');
    return addDoc(aparelhosRef, {modelo: modelo, nome: nome, vercao: vercao});
  }

  deleteAparelhos(aparelho: Aparelhos) {
    const aparelhosRef = doc(this.firestore, `aparelhos/${aparelho.id}`);
    return deleteDoc(aparelhosRef);
  }
}
