import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { IGeneral } from '../../../interfaces/IGeneral';
import { ITechSkill } from '../../../interfaces/ITechSkill';

import { CreateCandidateService } from './create-candidate.service';
import { ContactsFormComponent } from '../../../components/contacts-form/contacts-form.component';
import { PrevJobFormComponent } from '../../../components/prev-job-form/prev-job-form.component';
// tslint:disable-next-line:max-line-length
import { DatepickerFormComponent } from '../../../components/datepicker-form/datepicker-form.component';
import { HelpService } from '../help.service';
import { SelectFormComponent } from '../../../components/select-form/select-form.component';
import { SkillFormComponent } from '../../../components/skill-form/skill-form.component';

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
  @ViewChild('primary') primSkill: SkillFormComponent;
  @ViewChildren('secondary') secSkills: QueryList<SkillFormComponent>;
  @ViewChild('date') datepickerInput: DatepickerFormComponent;
  canInfo: any = {};
  prevJobs: any = [];
  hasPrimary: boolean = false;
  secondarySkills: any = [];

  cities: IGeneral[] = [];
  englishLevel: IGeneral[] = [];
  skills: ITechSkill[] = [];

  constructor(private router: Router,
              private eRef: ElementRef,
              private ccService: CreateCandidateService,
              private hService: HelpService) {
    this.hService.getCities().then((cities) => {
      this.cities = cities;
    });
    this.hService.getEnglishLevel().then((levels) => {
      this.englishLevel = levels;
    });
    this.hService.getSkills().then((skills) => {
      this.skills = skills;
    });
  }

  ngOnInit() { }

  getValueFromRanger(field: ElementRef) {
    const value: number = field.nativeElement.valueAsNumber;
    return value;
  }

  getSelectedIndex(field: any): number | null {
    const str: string = field.nativeElement.value;
    const indexOfSpace: number = str.indexOf(' ');
    const index: number = +str.slice(indexOfSpace);
    if (index === -1) return null;
    return index;
  }

  getDate(field: ElementRef): any {
    const dateStr: string = field.nativeElement.value;
    const date: Date = new Date(dateStr);
    return date;
  }

  getContacts() {
    return this.contactsForm.contact;
  }

  getSkill(field: SkillFormComponent) {
    const skill: any = {};
    skill.techSkill = this.getSelectedIndex(field.select.result);
    skill.level = this.getValueFromRanger(field.ranger.range);
    return skill;
  }

  getSecondarySkills(field: QueryList<SkillFormComponent>) {
    const skills: any = [];
    field.forEach((item: any) => {
      const skill: any = this.getSkill(item);
      skills.push(skill);
    });
    return skills;
  }

  getPrevJobs(field: QueryList<PrevJobFormComponent>) {
    const jobs: any = [];
    this.prevJobsForm.forEach((item: any) => {
      jobs.push(item.prevJob);
    });
    return jobs;
  }

  addCandidate(): void {
    this.canInfo.city = this.getSelectedIndex(this.citySelect.result);
    this.canInfo.engLevel = this.getSelectedIndex(this.englishSelect.result);
    this.canInfo.psExperience = this.getDate(this.datepickerInput.date);
    this.canInfo.contact = this.getContacts();
    this.canInfo.candidatePrevJobs = this.getPrevJobs(this.prevJobsForm);

    if (this.hasPrimary) {
      this.canInfo.candidatePrimarySkill = this.getSkill(this.primSkill);
    }
    if (this.secondarySkills.length) {
      this.canInfo.candidateSecondarySkills = this.getSecondarySkills(this.secSkills);
    }
    
    this.sendPostRequest(this.canInfo);
  }

  sendPostRequest(candidate: any): void {
    this.ccService.addCandidate(candidate)
      .then((can: any) => {
        console.log(can.status);
        this.router.navigate(['main-page/candidates']);
      }, (err: any) => {
        console.log('Error with candidate creation');
      });
  }

  addPrevJob(): void {
    this.prevJobs.push({});
  }

  removePrevJob(): void {
    this.prevJobs.pop();
  }

  addPrimary() {
    this.hasPrimary = true;
  }

  addSecondary() {
    this.secondarySkills.push({});
  }
}
