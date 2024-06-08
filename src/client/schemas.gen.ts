// This file is auto-generated by @hey-api/openapi-ts

export const $CompetenceDomainEntity = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    name: {
      type: "string",
      title: "Name",
    },
    type: {
      $ref: "#/components/schemas/CompetenceTypes",
    },
    index: {
      type: "string",
      title: "Index",
    },
  },
  type: "object",
  required: ["id", "name", "type", "index"],
  title: "CompetenceDomainEntity",
} as const;

export const $CompetenceTypes = {
  type: "string",
  enum: ["professional", "general"],
  title: "CompetenceTypes",
} as const;

export const $CreateCompetenceRequest = {
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    type: {
      $ref: "#/components/schemas/CompetenceTypes",
    },
    index: {
      type: "string",
      title: "Index",
    },
  },
  type: "object",
  required: ["name", "type", "index"],
  title: "CreateCompetenceRequest",
} as const;

export const $CreateDisciplineRequest = {
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    index: {
      type: "string",
      title: "Index",
    },
  },
  type: "object",
  required: ["name", "index"],
  title: "CreateDisciplineRequest",
} as const;

export const $CreateExamRequest = {
  properties: {
    discipline_id: {
      type: "string",
      title: "Discipline Id",
    },
    teacher_id: {
      type: "string",
      title: "Teacher Id",
    },
    group_id: {
      type: "string",
      title: "Group Id",
    },
    semester: {
      type: "integer",
      title: "Semester",
    },
  },
  type: "object",
  required: ["discipline_id", "teacher_id", "group_id", "semester"],
  title: "CreateExamRequest",
} as const;

export const $CreateGroupRequest = {
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    qualification_id: {
      type: "string",
      title: "Qualification Id",
    },
  },
  type: "object",
  required: ["name", "qualification_id"],
  title: "CreateGroupRequest",
} as const;

export const $CreateQualificationRequest = {
  properties: {
    index: {
      type: "string",
      title: "Index",
    },
    name: {
      type: "string",
      title: "Name",
    },
  },
  type: "object",
  required: ["index", "name"],
  title: "CreateQualificationRequest",
} as const;

export const $CreateQuestionRequest = {
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    is_task_question: {
      type: "boolean",
      title: "Is Task Question",
      default: false,
    },
    discipline_id: {
      type: "string",
      title: "Discipline Id",
    },
  },
  type: "object",
  required: ["name", "discipline_id"],
  title: "CreateQuestionRequest",
} as const;

export const $CreateThemeRequest = {
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    exam_id: {
      type: "string",
      title: "Exam Id",
    },
  },
  type: "object",
  required: ["name", "exam_id"],
  title: "CreateThemeRequest",
} as const;

export const $CreateUserRequest = {
  properties: {
    login: {
      type: "string",
      title: "Login",
    },
    name: {
      type: "string",
      title: "Name",
    },
    surname: {
      type: "string",
      title: "Surname",
    },
    patronymic: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Patronymic",
    },
    role: {
      $ref: "#/components/schemas/UserRoles",
    },
    password: {
      type: "string",
      title: "Password",
    },
  },
  type: "object",
  required: ["login", "name", "surname", "role", "password"],
  title: "CreateUserRequest",
} as const;

export const $DisciplineDomainEntity = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    name: {
      type: "string",
      title: "Name",
    },
    index: {
      type: "string",
      title: "Index",
    },
  },
  type: "object",
  required: ["id", "name", "index"],
  title: "DisciplineDomainEntity",
} as const;

export const $ExamDomainEntity = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    discipline_id: {
      type: "string",
      title: "Discipline Id",
    },
    discipline: {
      $ref: "#/components/schemas/DisciplineDomainEntity",
    },
    teacher_id: {
      type: "string",
      title: "Teacher Id",
    },
    teacher: {
      $ref: "#/components/schemas/UserDomainEntity",
    },
    group_id: {
      type: "string",
      title: "Group Id",
    },
    group: {
      $ref: "#/components/schemas/GroupDomainEntity",
    },
    semester: {
      type: "integer",
      title: "Semester",
    },
  },
  type: "object",
  required: [
    "id",
    "discipline_id",
    "discipline",
    "teacher_id",
    "teacher",
    "group_id",
    "group",
    "semester",
  ],
  title: "ExamDomainEntity",
} as const;

export const $GroupDomainEntity = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    name: {
      type: "string",
      title: "Name",
    },
    qualification_id: {
      type: "string",
      title: "Qualification Id",
    },
    students: {
      items: {
        $ref: "#/components/schemas/UserDomainEntity",
      },
      type: "array",
      title: "Students",
    },
    qualification: {
      $ref: "#/components/schemas/QualificationDomainEntity",
    },
  },
  type: "object",
  required: ["id", "name", "qualification_id", "students", "qualification"],
  title: "GroupDomainEntity",
} as const;

export const $GroupStudentDomainEntity = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    student_id: {
      type: "string",
      title: "Student Id",
    },
    group_id: {
      type: "string",
      title: "Group Id",
    },
  },
  type: "object",
  required: ["id", "student_id", "group_id"],
  title: "GroupStudentDomainEntity",
} as const;

export const $HTTPValidationError = {
  properties: {
    detail: {
      items: {
        $ref: "#/components/schemas/ValidationError",
      },
      type: "array",
      title: "Detail",
    },
  },
  type: "object",
  title: "HTTPValidationError",
} as const;

export const $QualificationDomainEntity = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    index: {
      type: "string",
      title: "Index",
    },
    name: {
      type: "string",
      title: "Name",
    },
    competencies: {
      items: {
        $ref: "#/components/schemas/CompetenceDomainEntity",
      },
      type: "array",
      title: "Competencies",
    },
  },
  type: "object",
  required: ["id", "index", "name", "competencies"],
  title: "QualificationDomainEntity",
} as const;

export const $QuestionDomainEntity = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    name: {
      type: "string",
      title: "Name",
    },
    is_task_question: {
      type: "boolean",
      title: "Is Task Question",
      default: false,
    },
    theme_id: {
      type: "string",
      title: "Theme Id",
    },
    theme: {
      $ref: "#/components/schemas/ThemeDomainEntity",
    },
  },
  type: "object",
  required: ["id", "name", "theme_id", "theme"],
  title: "QuestionDomainEntity",
} as const;

export const $ThemeDomainEntity = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    name: {
      type: "string",
      title: "Name",
    },
    exam_id: {
      type: "string",
      title: "Exam Id",
    },
    exam: {
      $ref: "#/components/schemas/ExamDomainEntity",
    },
  },
  type: "object",
  required: ["id", "name", "exam_id", "exam"],
  title: "ThemeDomainEntity",
} as const;

export const $UpdateCompetenceRequest = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    name: {
      type: "string",
      title: "Name",
    },
    type: {
      $ref: "#/components/schemas/CompetenceTypes",
    },
    index: {
      type: "string",
      title: "Index",
    },
  },
  type: "object",
  required: ["id", "name", "type", "index"],
  title: "UpdateCompetenceRequest",
} as const;

export const $UpdateDisciplineRequest = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    name: {
      type: "string",
      title: "Name",
    },
    index: {
      type: "string",
      title: "Index",
    },
  },
  type: "object",
  required: ["id", "name", "index"],
  title: "UpdateDisciplineRequest",
} as const;

export const $UpdateExamRequest = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    discipline_id: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Discipline Id",
    },
    teacher_id: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Teacher Id",
    },
    group_id: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Group Id",
    },
    semester: {
      anyOf: [
        {
          type: "integer",
        },
        {
          type: "null",
        },
      ],
      title: "Semester",
    },
  },
  type: "object",
  required: ["id"],
  title: "UpdateExamRequest",
} as const;

export const $UpdateGroupRequest = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    name: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Name",
    },
    qualification_id: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Qualification Id",
    },
  },
  type: "object",
  required: ["id"],
  title: "UpdateGroupRequest",
} as const;

export const $UpdateQualificationRequest = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    index: {
      type: "string",
      title: "Index",
    },
    name: {
      type: "string",
      title: "Name",
    },
  },
  type: "object",
  required: ["id", "index", "name"],
  title: "UpdateQualificationRequest",
} as const;

export const $UpdateQuestionRequest = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    name: {
      type: "string",
      title: "Name",
    },
    is_task_question: {
      type: "boolean",
      title: "Is Task Question",
      default: false,
    },
    discipline_id: {
      type: "string",
      title: "Discipline Id",
    },
  },
  type: "object",
  required: ["id", "name", "discipline_id"],
  title: "UpdateQuestionRequest",
} as const;

export const $UpdateThemeRequest = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    name: {
      type: "string",
      title: "Name",
    },
    exam_id: {
      type: "string",
      title: "Exam Id",
    },
  },
  type: "object",
  required: ["id", "name", "exam_id"],
  title: "UpdateThemeRequest",
} as const;

export const $UpdateUserPasswordRequest = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    password: {
      type: "string",
      title: "Password",
    },
  },
  type: "object",
  required: ["id", "password"],
  title: "UpdateUserPasswordRequest",
} as const;

export const $UpdateUserRequest = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    login: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Login",
    },
    name: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Name",
    },
    surname: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Surname",
    },
    patronymic: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Patronymic",
    },
    role: {
      anyOf: [
        {
          $ref: "#/components/schemas/UserRoles",
        },
        {
          type: "null",
        },
      ],
    },
    is_blocked: {
      anyOf: [
        {
          type: "boolean",
        },
        {
          type: "null",
        },
      ],
      title: "Is Blocked",
    },
  },
  type: "object",
  required: ["id"],
  title: "UpdateUserRequest",
} as const;

export const $UserDomainEntity = {
  properties: {
    id: {
      type: "string",
      title: "Id",
    },
    login: {
      type: "string",
      title: "Login",
    },
    name: {
      type: "string",
      title: "Name",
    },
    surname: {
      type: "string",
      title: "Surname",
    },
    patronymic: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Patronymic",
    },
    role: {
      $ref: "#/components/schemas/UserRoles",
    },
    is_blocked: {
      type: "boolean",
      title: "Is Blocked",
    },
    password: {
      type: "string",
      title: "Password",
    },
  },
  type: "object",
  required: [
    "id",
    "login",
    "name",
    "surname",
    "role",
    "is_blocked",
    "password",
  ],
  title: "UserDomainEntity",
} as const;

export const $UserRoles = {
  type: "string",
  enum: ["student", "teacher", "admin"],
  title: "UserRoles",
} as const;

export const $ValidationError = {
  properties: {
    loc: {
      items: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "integer",
          },
        ],
      },
      type: "array",
      title: "Location",
    },
    msg: {
      type: "string",
      title: "Message",
    },
    type: {
      type: "string",
      title: "Error Type",
    },
  },
  type: "object",
  required: ["loc", "msg", "type"],
  title: "ValidationError",
} as const;
