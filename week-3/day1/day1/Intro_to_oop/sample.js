class Document {
  constructor(name) {
    this.name = name;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }
  work(office) {
    for (let i = 0; i < 10; i++) {
      office.forEach((element) => {
        element.push(new Document());
      });
    }
  }
}

class Manager {
  constructor(employees) {
    this.employees = [];
    this.name = name;
  }
  hireEmployee(name) {
    employees.push(new Employee(name));
  }

  askEmployeesToWork(office) {
    employees.forEach((element) => element.work(office));
  }
}
class Cleaner {
  constructor(name) {
    this.name = name;
  }
  clean() {
    console.log("Clean");
  }
}

class Office {
  constructor(name) {
    documents = [];
    managers = [];
    cleaners = [];
  }

  hireCleaner(name) {
    cleaners.push(new Cleaner(name));
  }
  hireManager(name) {
    managers.push(new Manager(name));
  }

  startWorkDay() {
    managers.forEach((element) => element.askEmployeesToWork(this));
    cleaners.forEach((element) => element.clean());
  }
}
