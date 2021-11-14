export enum UserRole {
    Investor = 'ROLE_INVESTOR',
    Internal = 'ROLE_INTERNAL',
}

type UserUuid = string;

type UserProfile = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
}

export type User = {
    roles: UserRole[],
    uuid: UserUuid,
    profile: UserProfile,
}
