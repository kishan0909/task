import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selected:any;
  @Input() locationDt:any;
  @Output() filterMiterStorage=new EventEmitter<any>();
  @Output() filterMiterRam=new EventEmitter<any>();
  @Output() filterMiterHdd=new EventEmitter<any>();
  @Output() filterMiterLocation=new EventEmitter<any>();
  selectedStorage:any=['0', '250GB', '500GB', '1TB', '2TB', '3TB', '4TB', '8TB', '12TB', '24TB', '48TB', '72TB'];
  ram:any=[ '4GB', '8GB', '12GB', '16GB', '128GB', '32GB', '48GB', '64GB', '96GB'];
  hardisk:any=['SAS', 'SATA', 'SSD'];
  location:any;
  hddSelect:any;
  selectLoc:any;
  filterRm:any=[];
  filterLocation:any;
  filter:any=[];
  constructor() { }

  ngOnInit(): void {
    this.location = this.locationDt
  }

  storageO(){
    document.getElementById('storage')?.classList.toggle('d-none')
  }

  selectedStorageM(st:any){
    this.filterMiterStorage.emit(st)
    document.getElementById('storage')?.classList.add('d-none')
  }
  // ram value
  selectedRam(rm:any){
    this.filterRm.push(rm);
    this.filterMiterRam.emit(this.filterRm)
  }


  // hardisck value
  selectedHdd(){
    this.filterMiterHdd.emit(this.hddSelect)
  }

  // selected location
  selectedLocation(){
    this.filterMiterLocation.emit(this.selectLoc)
  }


  locationList(){
    document.getElementById('selectLocation')?.classList.remove('d-none');
  }

  locationListC(){
    document.getElementById('selectLocation')?.classList.add('d-none');
  }

  subDropDown(){
    document.getElementById('sub1')?.classList.remove('d-none');
  }

  subDropDownT(){
   document.getElementById('sub1')?.classList.add('d-none'); 
  }

  hddList(){
    document.getElementById('selectHdd')?.classList.remove('d-none');
  }

  hddListC(){
    document.getElementById('selectHdd')?.classList.add('d-none');
  }
}
