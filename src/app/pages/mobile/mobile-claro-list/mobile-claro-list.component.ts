import { Component, OnInit } from '@angular/core';
import { Mobile } from '../models/Mobile';
import { MobileServices } from '../services/mobile.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-claro-list',
  templateUrl: './mobile-claro-list.component.html',
  styleUrls: ['./mobile-claro-list.component.css']
})
export class MobileClaroListComponent implements OnInit {

  public mobiles: Mobile[];

  constructor(private mobileService: MobileServices,
              private router: Router) { }

  ngOnInit(): void {
    this.mobileService.obterTodos()
    .subscribe(
      mobiles => this.mobiles = mobiles,
      error => console.log(error));
  }

  deleteMobile(mobile: Mobile) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete){
      this.mobileService.deletar(mobile.code).subscribe(
        () => alert('Sucesso ao excluir!'),
        () => alert('Erro ao tentar excluir!')
      );
    }
  }

}
