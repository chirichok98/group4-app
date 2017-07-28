import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { IGeneral } from '../../../interfaces/IGeneral';
import { ITechSkill } from '../../../interfaces/ITechSkill';

import { ContactsFormComponent } from '../../../components/contacts-form/contacts-form.component';
import { PrevJobFormComponent } from '../../../components/prev-job-form/prev-job-form.component';
// tslint:disable-next-line:max-line-length
import { DatepickerFormComponent } from '../../../components/datepicker-form/datepicker-form.component';
import { SelectFormComponent } from '../../../components/select-form/select-form.component';
import { SkillFormComponent } from '../../../components/skill-form/skill-form.component';
import { CreateCandidateService } from '../../../services/create-candidate.service';
import { DictionariesService } from '../../../services/dictionaries.service';

@Component({
  selector: 'create-candidate',
  templateUrl: 'create-candidate.component.html',
  styleUrls: ['create-candidate.component.scss'],
})
export class CreateCandidateComponent implements OnInit {
  @ViewChildren('prevJob') prevJobsForm: QueryList<PrevJobFormComponent>;
  canInfo: any = {
    contact: {},
    candidatePrimarySkill: {},
    candidateSecondarySkills: [],
  };
  prevJobs: any = [];

  statuses: IGeneral[] = [];
  cities: IGeneral[] = [];
  englishLevel: IGeneral[] = [];
  skills: IGeneral[] = [];

  constructor(private router: Router,
    private ccService: CreateCandidateService,
    private hService: DictionariesService) {
    this.hService.getCities().then((cities) => {
      this.cities = cities;
    });
    this.hService.getEnglishLevel().then((levels) => {
      this.englishLevel = levels;
    });
    this.hService.getSkills().then((skills) => {
      this.skills = skills;
    });
    this.hService.getCandidateStatuses().then((statuses) => {
      this.statuses = statuses;
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
    if (!index) return null;
    return index;
  }

  getDate(field: ElementRef): any {
    const dateStr: string = field.nativeElement.value;
    const date: Date = new Date(dateStr);
    return date;
  }

  // getSkill(field: SkillFormComponent) {
  //   const skill: any = {};
  //   skill.id = this.getSelectedIndex(field.select.result);
  //   if (!skill.id) return null;
  //   skill.level = this.getValueFromRanger(field.ranger.range);
  //   return skill;
  // }

  // getSecondarySkills(field: QueryList<SkillFormComponent>) {
  //   const skills: any = [];
  //   field.forEach((item: any) => {
  //     const skill: any = this.getSkill(item);
  //     skills.push(skill);
  //   });
  //   return skills;
  // }

  // getPrevJobs(field: QueryList<PrevJobFormComponent>) {
  //   const jobs: any = [];
  //   this.prevJobsForm.forEach((item: any) => {
  //     jobs.push(item.prevJob);
  //   });
  //   return jobs;
  // }

  addCandidate(): void {
    // this.canInfo.psExperience = this.getDate(this.datepickerInput.date);
    // this.canInfo.contact = this.getContacts();
    // this.canInfo.candidatePrevJobs = this.getPrevJobs(this.prevJobsForm);

    // this.canInfo.candidatePrimarySkill = this.getSkill(this.primSkill);
    // if (this.secondarySkills.length) {
    //   this.canInfo.candidateSecondarySkills = this.getSecondarySkills(this.secSkills);
    // }

    // this.sendPostRequest(this.canInfo);
    console.log(this.canInfo);
  }

  sendPostRequest(candidate: any): void {
    this.ccService.addCandidate(candidate)
      .then((can: any) => {
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

  addSecondary() {
    this.canInfo.candidateSecondarySkills.push({});
  }

  removeSecondary() {
    this.canInfo.candidateSecondarySkills.pop();
  }
}
