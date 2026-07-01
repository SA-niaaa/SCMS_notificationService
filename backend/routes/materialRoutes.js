const express = require("express");
const router = express.Router();

const materials =
  require("../data/materials");

const {
  getChannel,
} = require("../rabbitmq");



// GET ALL MATERIALS


router.get("/", (req, res) => {

  res.json(materials);

});



// CREATE MATERIAL


router.post("/", (req, res) => {

  const newMaterial = {
    id: Date.now(),
    ...req.body,
  };

  materials.push(newMaterial);

  const channel =
    getChannel();

  if (channel) {

    channel.sendToQueue(
      "notification_queue",
      Buffer.from(
        JSON.stringify({
          event:
            "MATERIAL_CREATED",

          materialName:
            newMaterial.name,

          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Material Created Event Sent"
    );

  }

  res.status(201).json(
    newMaterial
  );

});



// UPDATE MATERIAL


router.put("/:id", (req, res) => {

  const id =
    Number(req.params.id);

  const index =
    materials.findIndex(
      material =>
        Number(material.id) === id
    );

  if (index === -1) {

    return res.status(404).json({
      message:
        "Material not found",
    });

  }

  materials[index] = {
    ...materials[index],
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
            "MATERIAL_UPDATED",

          materialName:
            materials[index].name,

          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Material Updated Event Sent"
    );

  }

  res.json(
    materials[index]
  );

});



// DELETE MATERIAL


router.delete("/:id", (req, res) => {

  const id =
    Number(req.params.id);

  const index =
    materials.findIndex(
      material =>
        Number(material.id) === id
    );

  if (index === -1) {

    return res.status(404).json({
      message:
        "Material not found",
    });

  }

  const deletedMaterial =
    materials[index];

  materials.splice(
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
            "MATERIAL_DELETED",

          materialName:
            deletedMaterial.name,

          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Material Deleted Event Sent"
    );

  }

  res.json({
    message:
      "Material deleted",
  });

});

module.exports =
  router;