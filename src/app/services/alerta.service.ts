/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
// import { collectionData } from '@angular/fire/firestore';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Alert {
  id?: string;
  gramas: number;
  hora: string;
  ativo: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AlertaService {

  constructor(private firestore: Firestore) { }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type

  getAlerts(): Observable<Alert[]> {
    const alertsRef = collection(this.firestore, 'alerts');
    return collectionData(alertsRef, { idField: 'id' }) as Observable<Alert[]>;
  }

  //   getNoteById(id): Observable<Note> {
  //     const noteDocRef = doc(this.firestore, `notes/${id}`);
  //     return docData(noteDocRef, { idField: 'id' }) as Observable<Note>;
  //   }

addAlert(gramas: any, hora: string) {
    if(gramas == null || hora == null){
        const alertsRef = collection(this.firestore, 'alerts');
        return addDoc(alertsRef, {gramas: gramas, hora: hora});
    }
  }

  deleteAlert(alert: Alert) {
    const alertsRef = doc(this.firestore, `alerts/${alert.id}`);
    return deleteDoc(alertsRef);
  }

  updateAlert(alert: Alert) {
    if(alert.gramas == null || alert.hora == null){
    const alertsRef = doc(this.firestore, `alerts/${alert.id}`);
    return updateDoc(alertsRef, { title: alert.gramas, alert: alert.hora });
    }
  }
}
