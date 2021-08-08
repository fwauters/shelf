import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormBuilder ,FormControl, FormGroup, FormArray } from "@angular/forms";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

import { CollectionService } from '@shelf-back/database';

@Component({
  selector: 'app-add-collection-dialog',
  templateUrl: './add-collection-dialog.component.html',
  styleUrls: ['./add-collection-dialog.component.scss']
})
export class AddCollectionDialogComponent implements OnInit {

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  addCollectionForm: FormGroup = this.resetForm();

  collectionName: string = '';
  columnHeader : string = '';
  selectedType: string = '';

  formTypes = [
    {
      title: 'Texte',
      value: 'text',
    },
    {
      title: 'Numéro',
      value: 'number',
    },
    {
      title: 'Date',
      value: 'date',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private collection: CollectionService,
    private _ngZone: NgZone,
  ) { }

  ngOnInit(): void {
  }

  resetForm() {
    return this.fb.group({
      name: [''],
      collection: this.fb.array([]),
    });
  }

  addNewField(type: string, title: string) {
    console.log(type + ' / ' + title);
  }

}
