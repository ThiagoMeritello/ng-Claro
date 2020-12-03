import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mobile } from '../models/Mobile';
import { MobileServices } from '../services/mobile.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-claro-edit',
  templateUrl: './mobile-claro-edit.component.html',
  styleUrls: ['./mobile-claro-edit.component.css']
})
export class MobileClaroEditComponent implements OnInit {

  mobile: Mobile;
  mobileForm: FormGroup;
  code: string;

  constructor(private fb: FormBuilder,
    private mobileService: MobileServices,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mobileForm = this.fb.group({
      model: [''],
      price: [''],
      brand: [''],
      photo: [''],
      date: [''],
    });
    this.code = this.route.snapshot.params['code'];
    console.log(this.code);
    this.mobileService.obterPorId(this.code)
      .subscribe(
        mobiles => {
          this.mobile = mobiles;

          this.mobileForm.patchValue({
            model: this.mobile.model,
            price: this.mobile.price,
            brand: this.mobile.brand,
            photo: this.mobile.photo,
            date: this.mobile.date,
          });
        },
        error => console.log(error));
   }

  enviarMobile() {
    this.editarMobile();
  }

  protected editarMobile() {
    this.mobile = Mobile.fromJson(this.mobileForm.value);
    this.mobile.code = this.code;
    this.mobileService.atualizar(this.mobile)
      .subscribe(
        sucesso => { this.processarSucesso(sucesso); },
        falha => { this.processarFalha(falha); }
      );
  }

  processarSucesso(response: any) {
    this.mobileForm.reset();
  }

  processarFalha(fail: any) {
    console.log('Error mobile Adicionar');
    console.log(fail.error.errors);
  }
}
