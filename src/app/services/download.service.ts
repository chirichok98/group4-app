import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod, 
    ResponseContentType } from '@angular/http';
    
import { fileSaver } from 'file-saver';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { HttpService } from './http.service';
@Injectable()
export class DownloadService {
  DEF_HEADERS: Headers;
  constructor(private http: Http, private httpService: HttpService) {
    this.DEF_HEADERS = new Headers({ 'Content-Type': 'application/json' });
  }
  downloadFile(url: string, type: string) {
    const headers = new Headers();
    headers.append('responseType', 'arraybuffer');
    return this.http.get(this.httpService.BASE_URL + '/' + url + '/?file=' + type)
            .map((res: Response) => new Blob([res],
                { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }))
            .catch((error: any) => { return Observable.throw(error); });
  }

  download(url: string, model: any) { // get file from service
    this.http.post(url, JSON.stringify(model), {
      method: RequestMethod.Post,
      responseType: ResponseContentType.Blob,
      headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
    }).subscribe(
        (response) => { // download file
          const blob = new Blob([response.blob()], { type: 'application/pdf' });
          const filename = 'file.pdf';
          const downloadUrl = window.URL.createObjectURL(blob);
          window.open(downloadUrl);
          fileSaver.saveAs(blob, filename);
        }, 
        (error) => { console.log('Subscribe error'); },
      );
  }
}


