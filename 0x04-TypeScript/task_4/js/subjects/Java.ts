// task_4/js/subjects/Java.ts
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

      getAvailableTeacher(): string {
  if (!this.teacher || this.teacher.experienceTeachingC === undefined) {
    return 'No available teacher';
  }
  return `Available Teacher: ${this.teacher.firstName}`;
  }

  }
}
