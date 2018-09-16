import { Component, OnInit } from '@angular/core';

declare var M:any;
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  user = localStorage.getItem('currentUser');
  constructor() { }
  msg='<h3>Bienvenido </h3>'+ localStorage.getItem('currentUser') ;
  ngOnInit() {

    M.toast({html: this.msg });
  }

}
