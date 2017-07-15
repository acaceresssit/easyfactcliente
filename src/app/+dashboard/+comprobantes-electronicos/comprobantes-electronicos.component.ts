import {Component, OnDestroy, OnInit} from "@angular/core";
import {ConsultaComprobanteElectronicoInterno} from "../../+dto/ConsultaComprobanteElectronicoInterno";
import {Cabecera} from "../../+dto/Cabecera";
import {ConsultaComprobanteElectronicoService} from "../../+service/ConsultaComprobanteElectronicoService";
import {SelectItem} from 'primeng/primeng';
/**
 * Created by josediaz on 7/2/17.
 */

import { saveAs } from 'file-saver';


@Component({
    selector: 'comprobantes-electronicos',
    templateUrl: 'comprobantes-electronicos.component.html',
    providers : [ConsultaComprobanteElectronicoService]
})
export class ComprobantesElectronicosComponent implements OnInit, OnDestroy {

    private consultaComprobanteInterna: ConsultaComprobanteElectronicoInterno = new ConsultaComprobanteElectronicoInterno();

    tipoDocumentos: SelectItem[];


    private cabeceras : Cabecera[] = [];

    constructor( private consultaComprobanteElectronicoService: ConsultaComprobanteElectronicoService) {

        this.tipoDocumentos = [];
        this.tipoDocumentos.push({label:'Todos', value:null});
        this.tipoDocumentos.push({label:'Factura', value:'01'});
        this.tipoDocumentos.push({label:'Boleta de Venta', value:'03'});
        this.tipoDocumentos.push({label:'Nota de Credito', value:'07'});
        this.tipoDocumentos.push({label:'Nota de Debito', value:'08'});
        this.tipoDocumentos.push({label:'Retenciones', value:'20'});
    }



    ngOnDestroy(): void {

    }

    ngOnInit(): void {

    }

    consultar(){

        this.consultaComprobanteElectronicoService.consultaInterna(this.consultaComprobanteInterna).subscribe(
            (data: Cabecera[]) => {

                this.cabeceras = data;
            },
            error => {
                console.log(error);
                
            }
        );

    }


    downloadFile(ruta: string){


        this.consultaComprobanteElectronicoService.downloadPDF().subscribe(
            (res) => {
                saveAs(res, "documento.pdf"); //if you want to save it - you need file-saver for this : https://www.npmjs.com/package/file-saver

                var fileURL = URL.createObjectURL(res);
                window.open(fileURL);

            }
        );

    }



}