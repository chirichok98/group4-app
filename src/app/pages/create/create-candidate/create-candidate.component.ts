import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { CreateCandidateService, HelpService } from './create-candidate.service';
import { ContactsFormComponent } from '../../../components/contacts-form/contacts-form.component';
import { PrevJobFormComponent } from '../../../components/prev-job-form/prev-job-form.component';
import { SelectFormComponent } from '../../../components/select-form/select-form.component';
// tslint:disable-next-line:max-line-length
import { DatepickerFormComponent } from '../../../components/datepicker-form/datepicker-form.component';
import { IGeneral } from '../../../interfaces/IGeneral';

declare const $;

@Component({
  selector: 'create-candidate',
  templateUrl: 'create-candidate.component.html',
  styleUrls: ['create-candidate.component.scss'],
})
export class CreateCandidateComponent implements OnInit {
  @ViewChild('contact') contactsForm: ContactsFormComponent;
  @ViewChildren('prevJob') prevJobsForm: QueryList<PrevJobFormComponent>;
  @ViewChild('city') citySelect: SelectFormComponent;
  @ViewChild('engLevel') englishSelect: SelectFormComponent;
  @ViewChild('primary') primarySelect: SelectFormComponent;
  @ViewChild('secondary') secondarySelect: SelectFormComponent;
  @ViewChild('date') datepickerInput: DatepickerFormComponent;
  canInfo: any = {};
  prevJobs: any = [];

  cities: IGeneral[];
  englishLevel: IGeneral[] = [
    { id: 1, name: 'A1' },
    { id: 2, name: 'A3' },
    { id: 3, name: 'B1' },
    { id: 4, name: 'B2' },
    { id: 5, name: 'C1' },
    { id: 6, name: 'C2' },
  ];
  skills: IGeneral[] = [
    { id: 1, name: 'Dotnet' },
    { id: 2, name: 'JS' },
    { id: 3, name: 'Node js' },
    { id: 4, name: 'C++' },
    { id: 5, name: 'Java' },
    { id: 6, name: 'C#' },
  ];
  
  constructor(private ccService: CreateCandidateService, private hService: HelpService) {
    this.cities = this.hService.getCities();
    console.log(this.cities);
  }

  ngOnInit() {
  }

  getSelectedIndex(field: ElementRef, multiple: boolean): number | number[] {
    const options: any = field.nativeElement.selectedOptions;
    const index: number[] = [];
    if (!multiple) {
      return options[0].index;
    }
    for (const option of options) {
      index.push(option.index);
    }
    return index;
  }

  getCity(field: ElementRef): any {
    const index: number | number[] = this.getSelectedIndex(field, false);
    return index;
  }

  getEnglishLevel(field: ElementRef): any {
    const index: number | number[] = this.getSelectedIndex(field, false);
    return index;
  }

  getPrimarySkill(field: ElementRef): any {
    const index: number | number[] = this.getSelectedIndex(field, false);
    return index;
  }

  getSecondarySkills(field: ElementRef): any {
    const index: number | number[] = this.getSelectedIndex(field, true);
    return index;
  }

  getDate(field: ElementRef): any {
    const dateStr: string = field.nativeElement.value;
    const date: Date = new Date(dateStr);
    return date;
  }

  addCandidate(): void {
    this.canInfo.city = this.getCity(this.citySelect.result);
    this.canInfo.engLevel = this.getEnglishLevel(this.englishSelect.result);
    this.canInfo.primarySkill = this.getPrimarySkill(this.primarySelect.result);
    this.canInfo.secondarySkill = this.getSecondarySkills(this.secondarySelect.result);


    this.canInfo.pSExperience = this.getDate(this.datepickerInput.date);
    this.canInfo.contact = this.contactsForm.contact;

    this.prevJobs.length = 0;
    this.prevJobsForm.forEach((item: any) => {
      this.prevJobs.push(item.prevJob);
    });  // insert in function for addeng new prev job;
    this.canInfo.candidatePrevJobs = this.prevJobs;
    // console.log(this.contactsForm);
    // console.log(this.citySelect);
    // // this.canInfo.city = this.citySelect;
    console.log(this.canInfo);


    // this.ccService.addCandidate(this.canInfo)
    //   .then((can: any) => {
    //     console.log(can);
    //   });
  }
}
