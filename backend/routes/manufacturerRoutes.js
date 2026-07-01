const express = require("express");
const router = express.Router();

const manufacturers =
  require("../data/manufacturers");

const {
  getChannel,
} = require("../rabbitmq");



// GET ALL MANUFACTURERS


router.get("/", (req, res) => {

  res.json(manufacturers);

});



// CREATE MANUFACTURER


router.post("/", (req, res) => {

  const newManufacturer = {
    id: Date.now(),
    ...req.body,
  };

  manufacturers.push(
    newManufacturer
  );

  const channel =
    getChannel();

  if (channel) {

    channel.sendToQueue(
      "notification_queue",
      Buffer.from(
        JSON.stringify({
          event:
            "MANUFACTURER_CREATED",

          manufacturerName:
            newManufacturer.name,

          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Manufacturer Created Event Sent"
    );
  }

  res.status(201).json(
    newManufacturer
  );

});



// UPDATE MANUFACTURER


router.put("/:id", (req, res) => {

  const id =
    Number(req.params.id);

  const index =
    manufacturers.findIndex(
      manufacturer =>
        Number(
          manufacturer.id
        ) === id
    );

  if (index === -1) {

    return res.status(404).json({
      message:
        "Manufacturer not found",
    });

  }

  manufacturers[index] = {
    ...manufacturers[index],
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
            "MANUFACTURER_UPDATED",

          manufacturerName:
            manufacturers[index].name,

          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Manufacturer Updated Event Sent"
    );
  }

  res.json(
    manufacturers[index]
  );

});



// DELETE MANUFACTURER


router.delete("/:id", (req, res) => {

  const id =
    Number(req.params.id);

  const index =
    manufacturers.findIndex(
      manufacturer =>
        Number(
          manufacturer.id
        ) === id
    );

  if (index === -1) {

    return res.status(404).json({
      message:
        "Manufacturer not found",
    });

  }

  const deletedManufacturer =
    manufacturers[index];

  manufacturers.splice(
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
            "MANUFACTURER_DELETED",

          manufacturerName:
            deletedManufacturer.name,

          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Manufacturer Deleted Event Sent"
    );
  }

  res.json({
    message:
      "Manufacturer deleted",
  });

});

module.exports =
  router;