import { HairDryer } from './HairDryer';

export interface HairDryerState {
  doAction(context: HairDryer): void;
}

export type User = {
  name: string;
  password: string;
  address: string;
  phone: string;
};

export type PartialsUser = Partial<User>;

// type Partisl<User> = {
//   [P in keyof User]?: User[P]
// }

export type RequiredUser = Required<User>;

// type Required<User> = {
//   [P in keyof User]-?: User[P]
// }

export type UserMap = Record<number, User>;

export type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

export type T1 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;

export type AnotherUser = Pick<User, 'name' | 'address'>;

export type OmittedUserProperties = Omit<User, 'address'>;

export type Value = string | number | string[] | boolean | null | undefined;
export type NonNullableValue = NonNullable<Value>;

export const getUserInfo = (id: number, name: string) => {
  return `User Id: ${id}, User Name: ${name}`;
};

export type FuncParams = Parameters<typeof getUserInfo>;
export type FuncReturnType = ReturnType<typeof getUserInfo>;

export type Method = 'get' | 'post' | 'put' | 'delete';
export type UpperCaseMethod = Uppercase<Method>;
export type LowerCaseMethod = Lowercase<Method>;
export type CapitalizeMethod = Capitalize<Method>;
export type UnCapitalizeMethod = Uncapitalize<CapitalizeMethod>;
