const Employee = require("../lib/Employee");

test("creates an employee objects", () => {
  const e = new Employee("Drake", 34, "greatest.ever@ovo.com ");
  expect(typeof(e)).toBe("object")

});
test("gets employee name", () => {
  const employee = new Employee("Drake", 34, "greatest.ever@ovo.com ");
  expect(employee.getName()).toEqual(expect.any(String));
});
test("gets employee ID", () => {
  const employee = new Employee("Drake", 34, "greatest.ever@ovo.com ");

  expect(employee.getId()).toEqual(expect.any(Number));
});
test("gets employee email", () => {
  const employee = new Employee("Drake", 34, "greatest.ever@ovo.com ");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});
test("gets role of employee", () => {
  const employee = new Employee("Drake", 34, "greatest.ever@ovo.com ");

  expect(employee.getRole()).toEqual("Employee");
});
