type Style = 'bold' | 'italic';

type UserPreferences = {
  name: string,
  age: number,
  isActive: boolean,
  [key: string]: any // <- again, probably best to avoid using `any` here.
};