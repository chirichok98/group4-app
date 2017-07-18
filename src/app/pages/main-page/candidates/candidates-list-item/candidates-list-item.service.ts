import { Injectable } from '@angular/core';
import { ICandidateDetail } from '../../../../interfaces/ICandidateDetail';


const candidates: ICandidateDetail[] = [
  {
    id: 1,
    firstNameEng: 'Avery',
    lastNameEng: 'Kautzer',
    firstNameRus: 'Damon',
    lastNameRus: 'Lang',
    contact: {
      id: 1,
      phone: 'dfs',
      email: 'dfkvds',
      skype: 'dfkjdf',
      linkedIn: 'fskhvbds',
    },
    city: {
      id: 34,
      name: 'Minsk',
    },
    primarySkill: {
      id: 3,
      name: 'L',
      skillUrl: 'dkajf',
    },
    secondarySkills: [{
      id: 3,
      name: 'L',
      skillUrl: 'dkajf',
    }],
    experience: new Date(2017),
    englishLevel: {
      id: 3,
      name: 'B1',
    },
    desiredSalary: 5000,
    lastContactDate: new Date(2017, 3, 4),
    vacancies: [{
      id: 1,
      projectName: 'Future Factors Executive',
      vacancyName: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/dotnet_roma.png',
    }],
    hrm: {
      id: 1,
      name: 'kto-to',
      role: {
        id: 1,
        name: 'admin',
      },
    },
    status: {
      id: 2,
      name: 'sdfi',
    },
    reminder: new Date(2016),
    interviews: [{
      id: 1,
      date: new Date(2017),
      hrm: {
        id: 1,
        name: 'vanya',
        role: {
          id: 4,
          name: 'kto-to',
        },
      },
      interviewer: {
        id: 1,
        name: 'string',
        role: {
          id: 3,
          name: 'dkjfk',
        },
      },
    }],
  },
  {
    id: 2,
    firstNameEng: 'Avery',
    lastNameEng: 'Kautzer',
    firstNameRus: 'Damon',
    lastNameRus: 'Lang',
    contact: {
      id: 1,
      phone: 'dfs',
      email: 'dfkvds',
      skype: 'dfkjdf',
      linkedIn: 'fskhvbds',
    },
    city: {
      id: 34,
      name: 'Minsk',
    },
    primarySkill: {
      id: 3,
      name: 'L',
      skillUrl: 'dka',
    },
    secondarySkills: [{
      id: 3,
      name: 'L',
      skillUrl: 'dka',
    }],
    experience: new Date(2017),
    englishLevel: {
      id: 3,
      name: 'B1',
    },
    desiredSalary: 5000,
    lastContactDate: new Date(2017, 3, 4),
    vacancies: [{
      id: 1,
      projectName: 'Future Factors Executive',
      vacancyName: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/dotnet_roma.png',
    }],
    hrm: {
      id: 1,
      name: 'kto-to',
      role: {
        id: 1,
        name: 'admin',
      },
    },
    status: {
      id: 2,
      name: 'sdfi',
    }, 
    reminder: new Date(2016),
    interviews: [{
      id: 1,
      date: new Date(2017),
      hrm: {
        id: 1,
        name: 'vanya',
        role: {
          id: 4,
          name: 'kto-to',
        },
      },
      interviewer: {
        id: 1,
        name: 'string',
        role: {
          id: 3,
          name: 'dkjfk',
        },
      },
    }],
  }, {
    id: 3,
    firstNameEng: 'Avery',
    lastNameEng: 'Kautzer',
    firstNameRus: 'Damon',
    lastNameRus: 'Lang',
    contact: {
      id: 1,
      phone: 'dfs',
      email: 'dfkvds',
      skype: 'dfkjdf',
      linkedIn: 'fskhvbds',
    },
    city: {
      id: 34,
      name: 'Minsk',
    },
    primarySkill: {
      id: 3,
      name: 'L',
      skillUrl: 'dka',
    },
    secondarySkills: [{
      id: 3,
      name: 'L',
      skillUrl: 'dka',
    }],
    experience: new Date(2017),
    englishLevel: {
      id: 3,
      name: 'B1',
    },
    desiredSalary: 5000,
    lastContactDate: new Date(2017, 3, 4),
    vacancies: [{
      id: 1,
      projectName: 'Future Factors Executive',
      vacancyName: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/dotnet_roma.png',
    }],
    hrm: {
      id: 1,
      name: 'kto-to',
      role: {
        id: 1,
        name: 'admin',
      },
    },
    status: {
      id: 2,
      name: 'sdfi',
    },
    reminder: new Date(2016),
    interviews: [{
      id: 1,
      date: new Date(2017),
      hrm: {
        id: 1,
        name: 'vanya',
        role: {
          id: 4,
          name: 'kto-to',
        },
      },
      interviewer: {
        id: 1,
        name: 'string',
        role: {
          id: 3,
          name: 'dkjfk',
        },
      },
    }],
  }, {
    id: 4,
    firstNameEng: 'Avery',
    lastNameEng: 'Kautzer',
    firstNameRus: 'Damon',
    lastNameRus: 'Lang',
    contact: {
      id: 1,
      phone: 'dfs',
      email: 'dfkvds',
      skype: 'dfkjdf',
      linkedIn: 'fskhvbds',
    },
    city: {
      id: 34,
      name: 'Minsk',
    },
    primarySkill: {
      id: 3,
      name: 'L',
      skillUrl: 'dka',
    },
    secondarySkills: [{
      id: 3,
      name: 'L',
      skillUrl: 'dka',
    }],
    experience: new Date(2017),
    englishLevel: {
      id: 3,
      name: 'B1',
    },
    desiredSalary: 5000,
    lastContactDate: new Date(2017, 3, 4),
    vacancies: [{
      id: 1,
      projectName: 'Future Factors Executive',
      vacancyName: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/dotnet_roma.png',
    }],
    hrm: {
      id: 1,
      name: 'kto-to',
      role: {
        id: 1,
        name: 'admin',
      },
    },
    status: {
      id: 2,
      name: 'sdfi',
    },
    reminder: new Date(2017),
    interviews: [{
      id: 1,
      date: new Date(2017),
      hrm: {
        id: 1,
        name: 'vanya',
        role: {
          id: 4,
          name: 'kto-to',
        },
      },
      interviewer: {
        id: 1,
        name: 'string',
        role: {
          id: 3,
          name: 'dkjfk',
        },
      },
    }],
  }, {
    id: 5,
    firstNameEng: 'Avery',
    lastNameEng: 'Kautzer',
    firstNameRus: 'Damon',
    lastNameRus: 'Lang',
    contact: {
      id: 1,
      phone: 'dfs',
      email: 'dfkvds',
      skype: 'dfkjdf',
      linkedIn: 'fskhvbds',
    },
    city: {
      id: 34,
      name: 'Minsk',
    },
    primarySkill: {
      id: 3,
      name: 'L',
      skillUrl: 'dka',
    },
    secondarySkills: [{
      id: 3,
      name: 'L',
      skillUrl: 'dka',
    }],
    experience: new Date(2017),
    englishLevel: {
      id: 3,
      name: 'B1',
    },
    desiredSalary: 5000,
    lastContactDate: new Date(2017, 3, 4),
    vacancies: [{
      id: 1,
      projectName: 'Future Factors Executive',
      vacancyName: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/dotnet_roma.png',
    }],
    hrm: {
      id: 1,
      name: 'kto-to',
      role: {
        id: 1,
        name: 'admin',
      },
    },
    status: {
      id: 2,
      name: 'sdfi',
    },
    reminder: new Date(2017),
    interviews: [{
      id: 1,
      date: new Date(2017),
      hrm: {
        id: 1,
        name: 'vanya',
        role: {
          id: 4,
          name: 'kto-to',
        },
      },
      interviewer: {
        id: 1,
        name: 'string',
        role: {
          id: 3,
          name: 'dkjfk',
        },
      },
    }],
  }, {
    id: 6,
    firstNameEng: 'Avery',
    lastNameEng: 'Kautzer',
    firstNameRus: 'Damon',
    lastNameRus: 'Lang',
    contact: {
      id: 1,
      phone: 'dfs',
      email: 'dfkvds',
      skype: 'dfkjdf',
      linkedIn: 'fskhvbds',
    },
    city: {
      id: 34,
      name: 'Minsk',
    },
    primarySkill: {
      id: 3,
      name: 'L',
      skillUrl: 'dka',
    },
    secondarySkills: [{
      id: 3,
      name: 'L',
      skillUrl: 'dka',
    }],
    experience: new Date(2017),
    englishLevel: {
      id: 3,
      name: 'B1',
    },
    desiredSalary: 5000,
    lastContactDate: new Date(2017, 3, 4),
    vacancies: [{
      id: 1,
      projectName: 'Future Factors Executive',
      vacancyName: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/dotnet_roma.png',
    }],
    hrm: {
      id: 1,
      name: 'kto-to',
      role: {
        id: 1,
        name: 'admin',
      },
    },
    status: {
      id: 2,
      name: 'sdfi',
    },
    reminder: new Date(2017),
    interviews: [{
      id: 1,
      date: new Date(2017),
      hrm: {
        id: 1,
        name: 'vanya',
        role: {
          id: 4,
          name: 'kto-to',
        },
      },
      interviewer: {
        id: 1,
        name: 'string',
        role: {
          id: 3,
          name: 'dkjfk',
        },
      },
    }],
  },
];

@Injectable()
export class CandidatesListItemService {
  constructor() { }

  getCandidateById(id): Promise<ICandidateDetail> {
    const candidate = candidates.find(i => i.id === id);
    return Promise.resolve(candidate);
  }
  getCandidateByIdSlowly(id): Promise<ICandidateDetail> {
    return new Promise((res: any) => setTimeout(() => res(this.getCandidateById(id)), 1000));
  }
}
