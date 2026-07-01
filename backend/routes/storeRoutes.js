const express = require("express");
const router = express.Router();

const stores = require("../data/stores");

const { getChannel } = require("../rabbitmq");



// GET ALL STORES


router.get("/", (req, res) => {

  console.log("GET STORES ROUTE HIT");

  res.json(stores);

});



// CREATE STORE


router.post("/", (req, res) => {

  const newStore = {
    id: Date.now(),
    ...req.body,
  };

  stores.push(newStore);

  const channel = getChannel();

  if (channel) {

    channel.sendToQueue(
      "notification_queue",
      Buffer.from(
        JSON.stringify({
          event: "STORE_CREATED",
          storeName: newStore.storeName,
          timestamp: new Date(),
        })
      )
    );

    console.log(
      "Store Created Event Sent"
    );
  }

  res.status(201).json(newStore);

});



// UPDATE STORE


router.put("/:id", (req, res) => {

  const id = Number(req.params.id);

  const index = stores.findIndex(
    store => Number(store.id) === id
  );

  if (index === -1) {

    return res.status(404).json({
      message: "Store not found",
    });

  }

  stores[index] = {
    ...stores[index],
    ...req.body,
    id,
  };

  const channel = getChannel();

  if (channel) {

    channel.sendToQueue(
      "notification_queue",
      Buffer.from(
        JSON.stringify({
          event: "STORE_UPDATED",
          storeName:
            stores[index].storeName,
          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Store Updated Event Sent"
    );

  }

  res.json(stores[index]);

});



// DELETE STORE


router.delete("/:id", (req, res) => {

  const id = Number(req.params.id);

  const index = stores.findIndex(
    store => Number(store.id) === id
  );

  if (index === -1) {

    return res.status(404).json({
      message: "Store not found",
    });

  }

  const deletedStore =
    stores[index];

  stores.splice(index, 1);

  const channel = getChannel();

  if (channel) {

    channel.sendToQueue(
      "notification_queue",
      Buffer.from(
        JSON.stringify({
          event: "STORE_DELETED",
          storeName:
            deletedStore.storeName,
          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Store Deleted Event Sent"
    );

  }

  res.json({
    message: "Store deleted",
  });

});

module.exports = router;