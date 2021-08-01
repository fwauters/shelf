import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

import { CollectionService } from '@shelf-back/database';

@Component({
  selector: 'app-add-collection-dialog',
  templateUrl: './add-collection-dialog.component.html',
  styleUrls: ['./add-collection-dialog.component.scss']
})
export class AddCollectionDialogComponent implements OnInit {

  //otherResultForm: FormGroup = this.resetForm();

  addCollectionForm = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
  });

  constructor(private collection: CollectionService,) { }

  ngOnInit(): void {
  }

}
