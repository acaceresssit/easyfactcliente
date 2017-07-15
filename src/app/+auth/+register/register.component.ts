import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Message} from 'primeng/primeng';
import {ConsultaComprobanteElectronicoService} from "../../+service/ConsultaComprobanteElectronicoService";
import {ConsultaComprobanteElectronico} from "../../+dto/ConsultaComprobanteElectronico";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [],
    providers : [ConsultaComprobanteElectronicoService]
})
export class RegisterComponent implements OnInit {


    private consultaComprobante: ConsultaComprobanteElectronico = new ConsultaComprobanteElectronico();
    msgs: Message[] = [];

    constructor(private router: Router, private consultaComprobanteElectronicoService: ConsultaComprobanteElectronicoService) {

    }

    ngOnInit() {
    }

    submitConsultaComprobante() {


        debugger;

        this.consultaComprobanteElectronicoService.consultar(this.consultaComprobante).subscribe(
            (data) => {

                debugger;
                console.log(data);

                setTimeout(() => {

                    this.msgs.push({severity:'success', summary:'Enviando Comprobante Electrónico', detail:'El comprobante electrónico ha sido enviado a su correo electrónico.'});

                    //recibir exito de enviar por email o fracaso por que no se encuentra en nuestra BD

                }, 3000);
            },
            error => {
                console.log(error);
                this.msgs.push({severity:'error', summary:'Enviando Comprobante Electrónico', detail:'El comprobante electrónico no se encuentra en nuestra base de datos.'});
            }
        );

    }



}
