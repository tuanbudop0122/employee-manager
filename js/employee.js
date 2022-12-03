const Employee = function(id, lastName, firstName, position, startedDate) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.id = id;
  this.position = position;
  this.startedDate = startedDate;

  this.calcSalary = function() {};
};
