import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "tags-section",
  templateUrl: "./tags-section.component.html",
  styleUrls: ["./tags-section.component.css"]
})
export class TagsSectionComponent implements OnInit {
  constructor() {}
  @Input() selectedTagData: any;
  @Input() originalData: any;
  @Input() tableData: any;
  @Output() tagsData = new EventEmitter();
  @Output() removedChip = new EventEmitter();

  ngOnInit() {}
  removeChip(index, chipVal) {
    this.removedChip.emit(chipVal);
    if (this.selectedTagData.length == 0) {
      this.tableData = this.originalData;
      this.tagsData.emit(this.tableData);
    }
  }

  chipDisplayValue(val) {
    if (val == "20") {
      return "below 20Yrs";
    } else if (val == "20-40") {
      return "20 to 40Yrs";
    } else if (val == "40-60") {
      return "40 to 60yrs";
    } else if (val == "60") {
      return "above 60yrs";
    }
  }
}
