const express = require("express");
const router = express.Router();

const employees =
  require("../data/employees");

const {
  getChannel,
} = require("../rabbitmq");



// GET ALL EMPLOYEES

router.get("/", (req, res) => {

  res.json(employees);

});



// CREATE EMPLOYEE


router.post("/", (req, res) => {

  const newEmployee = {
    id: Date.now(),
    ...req.body,
  };

  employees.push(newEmployee);

  const channel =
    getChannel();

  if (channel) {

    channel.sendToQueue(
      "notification_queue",
      Buffer.from(
        JSON.stringify({
          event:
            "EMPLOYEE_CREATED",

          employeeName:
            newEmployee.name,

          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Employee Created Event Sent"
    );
  }

  res.status(201).json(
    newEmployee
  );

});



// UPDATE EMPLOYEE


router.put("/:id", (req, res) => {

  const id =
    Number(req.params.id);

  const index =
    employees.findIndex(
      employee =>
        Number(employee.id)
        === id
    );

  if (index === -1) {

    return res.status(404).json({
      message:
        "Employee not found",
    });

  }

  employees[index] = {
    ...employees[index],
    ...req.body,
    id,
  };

  const channel =
    getChannel();

  if (channel) {

    channel.sendToQueue(
      "notification_queue",
      Buffer.from(
        JSON.stringify({
          event:
            "EMPLOYEE_UPDATED",

          employeeName:
            employees[index].name,

          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Employee Updated Event Sent"
    );
  }

  res.json(
    employees[index]
  );

});



// DELETE EMPLOYEE


router.delete("/:id", (req, res) => {

  const id =
    Number(req.params.id);

  const index =
    employees.findIndex(
      employee =>
        Number(employee.id)
        === id
    );

  if (index === -1) {

    return res.status(404).json({
      message:
        "Employee not found",
    });

  }

  const deletedEmployee =
    employees[index];

  employees.splice(
    index,
    1
  );

  const channel =
    getChannel();

  if (channel) {

    channel.sendToQueue(
      "notification_queue",
      Buffer.from(
        JSON.stringify({
          event:
            "EMPLOYEE_DELETED",

          employeeName:
            deletedEmployee.name,

          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Employee Deleted Event Sent"
    );
  }

  res.json({
    message:
      "Employee deleted",
  });

});

module.exports =
  router;