import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { IGeneral } from '../../../interfaces/IGeneral';
import { ITechSkill } from '../../../interfaces/ITechSkill';
import { SelectFormComponent } from '../../../components/select-form/select-form.component';
// tslint:disable-next-line:max-line-length
import { DatepickerFormComponent } from '../../../components/datepicker-form/datepicker-form.component';
import { HelpService } from '../help.service';
import { CreateVacancyService } from './create-vacancy.service';
import { SkillFormComponent } from '../../../components/skill-form/skill-form.component';

@Component({
  selector: 'create-vacancy',
  templateUrl: 'create-vacancy.component.html',
  styleUrls: ['create-vacancy.component.scss'],
})

export class CreateVacancyComponent implements OnInit {
  @ViewChild('status') statusSelect: SelectFormComponent;
  @ViewChild('city') citySelect: SelectFormComponent;
  @ViewChild('engLevel') englishSelect: SelectFormComponent;
  @ViewChild('startDate') datepickerStart: DatepickerFormComponent;
  @ViewChild('closeDate') datepickerClose: DatepickerFormComponent;
  @ViewChild('requestDate') datepickerRequest: DatepickerFormComponent;
  @ViewChild('primary') primSkill: SkillFormComponent;
  @ViewChildren('secondary') secSkills: QueryList<SkillFormComponent>;
  vacInfo: any = {};

  hasPrimary: boolean = false;

  secondarySkills: any = [];

  statuses: IGeneral[] = [];
  cities: IGeneral[] = [];
  englishLevel: IGeneral[] = [];
  skills: ITechSkill[] = [];

  constructor(private hService: HelpService, private cvService: CreateVacancyService) {
    this.hService.getCities().then((cities) => {
      this.cities = cities;
    });
    this.hService.getEnglishLevel().then((levels) => {
      this.englishLevel = levels;
    });
    this.hService.getSkills().then((skills) => {
      this.skills = skills;
    });
    this.hService.getVacancyStatuses().then((statuses) => {
      this.statuses = statuses;
    });
  }

  ngOnInit() { }

  getValueFromRanger(field: ElementRef) {
    const value: number = field.nativeElement.valueAsNumber;
    return value;
  }

  getSelectedIndex(field: any): number | null {
    const index: number = field.nativeElement.selectedIndex;
    if (index === -1) return null;
    return index;
  }

  getDate(field: ElementRef): any {
    const dateStr: string = field.nativeElement.value;
    const date: Date = new Date(dateStr);
    return date;
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

  addVacancy(): void {
    this.vacInfo.city = this.getSelectedIndex(this.citySelect.result);
    this.vacInfo.engLevel = this.getSelectedIndex(this.englishSelect.result);
    this.vacInfo.status = this.getSelectedIndex(this.statusSelect.result);
    this.vacInfo.startDate = this.getDate(this.datepickerStart.date);
    this.vacInfo.closeDate = this.getDate(this.datepickerClose.date);
    this.vacInfo.requestDate = this.getDate(this.datepickerRequest.date);


    if (this.hasPrimary) {
      this.vacInfo.primarySkill = this.getSkill(this.primSkill);
    }
    if (this.secondarySkills.length) {
      this.vacInfo.secondarySkills = this.getSecondarySkills(this.secSkills);
    }
    console.log(this.vacInfo);
    this.cvService.addVacancy(this.vacInfo)
      .then((vac: any) => {
        console.log(vac);
      }, (err: any) => {
        console.log('Error with vacancy creation');
      });
  }

  addPrimary() {
    this.hasPrimary = true;
  }

  addSecondary() {
    this.secondarySkills.push({});
  }

}
