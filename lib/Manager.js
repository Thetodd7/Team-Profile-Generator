const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manger";
  }
}
module.export = Manager;
