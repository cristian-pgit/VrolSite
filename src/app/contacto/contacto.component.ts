import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder){
    this.forma = this.fb.group({});
    this.creaForm();
  }

  ngOnInit(): void {
   console.log(this.forma);
  }

  creaForm(){
    this.forma = this.fb.group({
      nombre :  ['',[Validators.required, Validators.minLength(3)]],
      paterno: ['',[Validators.required]],
      materno: ['',[Validators.required]],
      correo: ['',[Validators.required], [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$]')]],
      mensaje: ['',[Validators.required]]
    });
  }

  guardar(){
    if(this.forma.status === 'INVALID'){
      console.log(this.forma.status)
      console.log("Ocurrio un error en el Formulario")
    }
    console.log(this.forma)
  }

}
