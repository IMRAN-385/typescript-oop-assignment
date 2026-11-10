export function multiplyValue(value: number, multiplier?: number): number {
  const factor: number = multiplier === undefined ? 2 : multiplier;
  return value * factor;
}

export function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return value ? "Active" : "Inactive";
}

export function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName]: readonly [number, number, string] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

export function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combined: T[] = [];

  for (const array of arrays) {
    combined.push(...array);
  }

  return combined;
}

export interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

export function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course: Course): boolean => course.isPublished && course.students >= minStudents
  );
}

export function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item: T): T[K] => item[key]);
}

export class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

export class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

export async function validateAgeAsync(age: number): Promise<string> {
  if (age < 18) {
    return Promise.reject(new Error("Access Denied: Must be 18 or older"));
  }

  return new Promise<string>((resolve: (value: string) => void): void => {
    setTimeout((): void => resolve("Access Granted"), 1000);
  });
}
