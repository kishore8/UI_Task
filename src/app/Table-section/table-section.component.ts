import { Component, OnInit, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: "table-section",
  templateUrl: "./table-section.component.html",
  styleUrls: ["./table-section.component.css"]
})
export class TableSectionComponent implements OnInit {
  sortReverse: boolean = false;
  @Input() tableData: any;
  @Input() gridDataSort: any;

  p: number = 1;
  constructor() {}

  ngOnInit() {
    this.sortData("desc");
  }

  sortData(order?: any) {
    this.sortReverse = !this.sortReverse;
    if (!this.sortReverse && order) {
      this.tableData.sort((a, b) => {
        if (a.age < b.age) return -1;
        else if (a.age > b.age) return 1;
        else return 0;
      });
    } else if (this.sortReverse && order) {
      this.tableData.sort((a, b) => {
        if (a.age > b.age) return -1;
        else if (a.age < b.age) return 1;
        else return 0;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.gridDataSort) {
      this.sortData("desc");
    }
  }
}
