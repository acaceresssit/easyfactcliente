import {Injectable} from "@angular/core";
import {Headers, Http, ResponseContentType} from "@angular/http";
import {ConsultaComprobanteElectronico} from "../+dto/ConsultaComprobanteElectronico";
import {Observable} from "rxjs/Observable";
import {ConsultaComprobanteElectronicoInterno} from "../+dto/ConsultaComprobanteElectronicoInterno";
import {Cabecera} from "../+dto/Cabecera";
/**
 * Created by josediaz on 6/29/17.
 */


@Injectable()
export class ConsultaComprobanteElectronicoService {

    constructor(private http: Http) {
    }


    public consultar(consultaComprobante:ConsultaComprobanteElectronico){

        let url = 'http://localhost:8999/ConsultaComprobanteElectronico';

        let header = new Headers({'Content-Type': 'application/json'});
        return this.http.post(url,JSON.stringify(consultaComprobante),{headers: header})
            .map((res => <ConsultaComprobanteElectronico>res.json()))
            .catch(this.handleError);
    }


    public consultaInterna(consultaComprobanteInterna:ConsultaComprobanteElectronicoInterno){

        let url = 'http://localhost:8999/ConsultaComprobanteElectronicoInterno';

        let header = new Headers({'Content-Type': 'application/json'});
        return this.http.post(url,JSON.stringify(consultaComprobanteInterna),{headers: header})
            .map((res => <Cabecera[]>res.json()))
            .catch(this.handleError);
    }


    public downloadPDF(): any {
        return this.http.get('http://localhost:8999/download/pdf/documento.pdf', { responseType: ResponseContentType.Blob }).map(
            (res) => {
                return new Blob([res.blob()], { type: 'application/pdf' })
            })
    }


    private handleError(error: any): Observable<string> {
        return Observable.throw(error.json() || 'Server error');
    }

}