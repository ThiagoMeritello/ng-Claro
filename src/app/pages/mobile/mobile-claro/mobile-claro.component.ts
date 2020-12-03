import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mobile } from '../models/Mobile';
import { MobileServices } from '../services/mobile.services';

@Component({
  selector: 'app-mobile-claro',
  templateUrl: './mobile-claro.component.html',
  styleUrls: ['./mobile-claro.component.css']
})
export class MobileClaroComponent implements OnInit {

  mobile: Mobile;
  mobileForm: FormGroup;

  constructor(private fb: FormBuilder,
              private mobileService: MobileServices) { }

  ngOnInit(): void {
    this.mobileForm = this.fb.group({
      model: [''],
      price: [''],
      brand: [''],
      photo: [''],
      date: [''],
    });
  }

  enviarMobile() {
    this.createMobile();
  }

  protected createMobile(){
    this.mobile = Mobile.fromJson(this.mobileForm.value);
    console.log(this.mobile);
    this.mobileService.adicionar(this.mobile)
      .subscribe(
        sucesso => { this.processarSucesso(sucesso); },
        falha => { this.processarFalha(falha); }
      );
  }

  processarSucesso(response: any) {
    this.mobileForm.reset();
  }

  processarFalha(fail: any){
    console.log('Error mobile Adicionar');
    console.log(fail.error.errors);
  }

}
