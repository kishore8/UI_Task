import { Component} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridData: Array<any> = [];
  tempGridData: Array<any> = [];
  chipsData:Array<any> = [];
  isTagDeleted: any;
  sortGridData: any;
  constructor(private http: Http){}

  ngOnInit(){
    this.http.get('./assets/table.json')
            .map((response: Response) => response.json())
            .subscribe(data => {
                this.gridData = data;
                this.tempGridData = this.gridData.slice();
            });
            this.gridSort();
  }
  gridSort(){
    this.sortGridData = true;
  }

  filterAgeData(data){
    this.gridData = data;
  }

  filteredTags(data){
    this.chipsData = data;
  }

  deleteTag(data){
      this.isTagDeleted = data;
    
  }
}