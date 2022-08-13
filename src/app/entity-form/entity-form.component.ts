import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {Course} from '../common/interfaces';
import {COURSE_INITIALIZER} from '../common/constants';

@Component({
  selector: 'st-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityFormComponent implements OnInit {
  @Input()
  set inputEntity(entity: Course) {
    console.log('eF @i input entity: ', entity);
    this.inputEntityBS.next(entity);
    this.populateForm(entity);
  }
  get inputEntity() {
    return this.inputEntityBS.value;
  }
  inputEntityBS = new BehaviorSubject<Course>(COURSE_INITIALIZER);

  @Output() readonly entity = new EventEmitter<Course>();

  idControl = new FormControl('');
  displayName = new FormControl('');
  description = new FormControl('');
  iconUrl = new FormControl('');
  lessonsCount = new FormControl();
  seqNo = new FormControl();
  url = new FormControl('');
  courseForm = new FormGroup({
    'idControl': this.idControl,
    'displayName': this.displayName,
    'description': this.description,
    'iconUrl': this.iconUrl,
    'lessonsCount': this.lessonsCount,
    'seqNo': this.seqNo,
    'url': this.url,
  });

  constructor() { 
  }

  ngOnInit(): void {

  }

  populateForm(entity: Course) {
    console.log('ef pF populating form with entity: ', entity);
    if (entity && entity.id) {
      this.courseForm.controls['idControl'].setValue(entity.id);
      this.courseForm.controls['displayName'].setValue(entity.displayName);
      this.courseForm.controls['description'].setValue(entity.description);
      this.courseForm.controls['iconUrl'].setValue(entity.iconUrl);
      this.courseForm.controls['lessonsCount'].setValue(entity.lessonsCount);
      this.courseForm.controls['seqNo'].setValue(entity.seqNo);
      this.courseForm.controls['url'].setValue(entity.url);
  }
    

  }

  getFormData() {
    const course: Course = {
      id: this.courseForm.controls['idControl'].value ?? '',
      displayName: this.courseForm.controls['displayName'].value ?? '',
      description: this.courseForm.controls['description'].value ?? '',
      iconUrl: this.courseForm.controls['iconUrl'].value ?? '',
      lessonsCount: this.courseForm.controls['lessonsCount'].value ?? 0,
      seqNo:   this.courseForm.controls['seqNo'].value ?? 0,
      url:  this.courseForm.controls['url'].value ?? '',

    }

    console.log('eF gFD course: ', course);

    return course;
  }

  save() {
    const course = this.getFormData();
    console.log('eF s emitting entity: ', course);
    this.entity.emit(course);

  }

}
