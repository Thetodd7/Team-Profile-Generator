// using Manager constructor
const Manager = require("../lib/Manager");

// creating manager object
test("creates an Manager object", () => {
  const testNumber = 1024;
  const manager = new Manager("Drake", 34, "greatest.ever@ovo.com", testNumber);

  expect(manager.officeNumber).toBe(testNumber);
});

// gets role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("Drake", 34, "greatest.ever@ovo.com", 24);

  expect(manager.getRole()).toEqual("Manager");
});
