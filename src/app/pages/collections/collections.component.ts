import { Component, OnInit } from '@angular/core';

import { DialogService } from '@shelf-front/dialogs';
import { CollectionService } from '@shelf-back/database';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price'}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor(
    private dialog: DialogService,
    private collection: CollectionService,
  ) { }

  ngOnInit(): void {
    let c = this.collection.getCollection();
    c.subscribe(a => console.log(a));
  }

  addCollection() {
    console.log('add collection');
    this.dialog.openAddCollectionDialog();
  }

}
