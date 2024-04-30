// This file is auto-generated by @hey-api/openapi-ts

export const $CreateUserRequest = {
    properties: {
        login: {
            type: 'string',
            title: 'Login'
        },
        name: {
            type: 'string',
            title: 'Name'
        },
        surname: {
            type: 'string',
            title: 'Surname'
        },
        patronymic: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Patronymic'
        },
        role: {
            type: 'string',
            title: 'Role'
        },
        password: {
            type: 'string',
            title: 'Password'
        }
    },
    type: 'object',
    required: ['login', 'name', 'surname', 'role', 'password'],
    title: 'CreateUserRequest'
} as const;

export const $HTTPValidationError = {
    properties: {
        detail: {
            items: {
                '$ref': '#/components/schemas/ValidationError'
            },
            type: 'array',
            title: 'Detail'
        }
    },
    type: 'object',
    title: 'HTTPValidationError'
} as const;

export const $UpdateUserRequest = {
    properties: {
        id: {
            type: 'string',
            title: 'Id'
        },
        login: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Login'
        },
        name: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Name'
        },
        surname: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Surname'
        },
        patronymic: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Patronymic'
        },
        role: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Role'
        },
        is_blocked: {
            anyOf: [
                {
                    type: 'boolean'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Is Blocked'
        },
        password: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Password'
        }
    },
    type: 'object',
    required: ['id'],
    title: 'UpdateUserRequest'
} as const;

export const $UserDomainEntity = {
    properties: {
        id: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Id'
        },
        login: {
            type: 'string',
            title: 'Login'
        },
        name: {
            type: 'string',
            title: 'Name'
        },
        surname: {
            type: 'string',
            title: 'Surname'
        },
        patronymic: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Patronymic'
        },
        role: {
            type: 'string',
            title: 'Role'
        },
        is_blocked: {
            type: 'boolean',
            title: 'Is Blocked'
        },
        password: {
            type: 'string',
            title: 'Password'
        }
    },
    type: 'object',
    required: ['id', 'login', 'name', 'surname', 'role', 'is_blocked', 'password'],
    title: 'UserDomainEntity'
} as const;

export const $ValidationError = {
    properties: {
        loc: {
            items: {
                anyOf: [
                    {
                        type: 'string'
                    },
                    {
                        type: 'integer'
                    }
                ]
            },
            type: 'array',
            title: 'Location'
        },
        msg: {
            type: 'string',
            title: 'Message'
        },
        type: {
            type: 'string',
            title: 'Error Type'
        }
    },
    type: 'object',
    required: ['loc', 'msg', 'type'],
    title: 'ValidationError'
} as const;