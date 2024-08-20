import { Department } from "../firstClass/app";

class testDepartment extends Department {
  private static instance: testDepartment;

  // for implementing singleton pattern
  private constructor(name: string) {
    super(name);
  }

  describe(): void {
    console.log("Test department");
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new testDepartment("static department");
  }
}

const testDepartmentClass = testDepartment.getInstance();
testDepartmentClass?.addEmployee(1);
testDepartmentClass?.describe
