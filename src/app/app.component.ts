import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

interface Chatroom {
msg: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
arrayOfMsgs = [];
  chatRoom: AngularFirestoreCollection<Chatroom>;
  message: Observable<Chatroom[]>;
  title = 'app';

  constructor(private afs: AngularFirestore) {

  }

  mr_aSent(msg1) {
    console.log(msg1);
this.chatRoom = this.afs.collection('chatroom');
this.chatRoom.doc('mr_a').set({
  msg1: msg1
});
this.updateMr_a();
  }

  mr_bSent(msg2) {
    console.log(msg2);
this.chatRoom = this.afs.collection('chatroom');
this.chatRoom.doc('mr_b').set({
  msg2: msg2
});
this.updateMr_b();
  }


updateMr_a() {
  this.afs.collection('chatroom').doc('mr_a').valueChanges()
  .first()
  .subscribe((v: any) => {
this.arrayOfMsgs.push(v.msg1);
console.log(this.arrayOfMsgs);
 });
}

updateMr_b() {
  this.afs.collection('chatroom').doc('mr_b').valueChanges()
  .first()
  .subscribe((v: any) => {
// console.log(v.msg2);
this.arrayOfMsgs.push(v.msg2);
 });
}

}
