import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "filter-section",
  templateUrl: "./filter-section.component.html",
  styleUrls: ["./filter-section.component.css"]
})
export class FilterSectionComponent implements OnInit {
  count: any;
  @Input() countData: any;
  @Input() originalData: any;
  @Input() tagDeleted: any;

  @Output() filteredData = new EventEmitter();
  @Output() tagsData = new EventEmitter();
  @Output() sortGrid = new EventEmitter();

  isbelowTwentyClicked: boolean = false;
  isFourtyToSixtyClicked: boolean = false;
  isTwentyToFourtyClicked: boolean = false;
  isaboveSixtyClicked: boolean = false;
  chipsData: Array<any> = [];
  val: Array<any> = [];
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.filterAgeData(this.countData);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tagDeleted && changes.tagDeleted.currentValue) {
      this.isFilterClicked({}, changes.tagDeleted.currentValue);
    }
  }

  filterAgeData(countData) {
    this.count = {
      belowTwenty: 0,
      twentyToFourty: 0,
      fourtyToSixty: 0,
      aboveSixty: 0
    };
    for (let value of countData) {
      if (value.age < 20) {
        this.count.belowTwenty = this.count.belowTwenty + 1;
      } else if (value.age >= 20 && value.age < 40) {
        this.count.twentyToFourty = this.count.twentyToFourty + 1;
      } else if (value.age >= 40 && value.age <= 60) {
        this.count.fourtyToSixty = this.count.fourtyToSixty + 1;
      } else {
        this.count.aboveSixty = this.count.aboveSixty + 1;
      }
    }
  }

  isFilterClicked(eve, filterVal) {
    this.val = [];
    if (filterVal == "20") {
      this.isbelowTwentyClicked = !this.isbelowTwentyClicked;
      if (!this.isbelowTwentyClicked) {
        this.chipsData.splice(this.chipsData.indexOf("20"), 1);
      } else {
        this.chipsData.push(filterVal);
      }
    } else if (filterVal == "20-40") {
      this.isTwentyToFourtyClicked = !this.isTwentyToFourtyClicked;
      if (!this.isTwentyToFourtyClicked) {
        this.chipsData.splice(this.chipsData.indexOf("20-40"), 1);
      } else {
        this.chipsData.push(filterVal);
      }
    } else if (filterVal == "40-60") {
      this.isFourtyToSixtyClicked = !this.isFourtyToSixtyClicked;
      if (!this.isFourtyToSixtyClicked) {
        this.chipsData.splice(this.chipsData.indexOf("40-60"), 1);
      } else {
        this.chipsData.push(filterVal);
      }
    } else if (filterVal == "60") {
      this.isaboveSixtyClicked = !this.isaboveSixtyClicked;
      if (!this.isaboveSixtyClicked) {
        this.chipsData.splice(this.chipsData.indexOf("60"), 1);
      } else {
        this.chipsData.push(filterVal);
      }
    }
    let arr = this.countData.slice();
    for (let i = 0; i < this.chipsData.length; i++) {
      arr = this.originalData.slice();
      this.filterData(arr, this.chipsData[i]);
    }
    this.countData = this.val;
    if (this.chipsData.length == 0) {
      this.countData = this.originalData;
    }

    setTimeout(() => {
      this.filteredData.emit(this.countData);
      this.tagsData.emit(this.chipsData);
    });
    this.sortGrid.emit("desc");
  }

  filterData(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (val == "20") {
        if (arr[i].age < 20) {
          if (this.isbelowTwentyClicked) {
            this.val.push(arr[i]);
          }
        }
      } else if (val == "20-40") {
        if (this.isTwentyToFourtyClicked) {
          if (arr[i].age >= 20 && arr[i].age < 40) {
            this.val.push(arr[i]);
          }
        }
      } else if (val == "40-60") {
        if (this.isFourtyToSixtyClicked) {
          if (arr[i].age >= 40 && arr[i].age <= 60) {
            this.val.push(arr[i]);
          }
        }
      } else if (val == "60") {
        if (this.isaboveSixtyClicked) {
          if (arr[i].age > 60) {
            this.val.push(arr[i]);
          }
        }
      }
    }
  }
}
