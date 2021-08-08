import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl, FormGroup, FormArray } from "@angular/forms";

import { CollectionService } from '@shelf-back/database';

@Component({
  selector: 'app-add-collection-dialog',
  templateUrl: './add-collection-dialog.component.html',
  styleUrls: ['./add-collection-dialog.component.scss']
})
export class AddCollectionDialogComponent implements OnInit {

  //otherResultForm: FormGroup = this.resetForm();

  addCollectionForm = this.resetForm();

  collectionName: string = '';

  constructor(
    private fb: FormBuilder,
    private collection: CollectionService,
  ) { }

  ngOnInit(): void {
  }

  resetForm() {
    return this.fb.group({
      name: [''],
      collection: this.fb.array([]),
    });
  }

}
