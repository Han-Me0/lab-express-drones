const express = require('express');
const router = express.Router();

const modelDrone = require("../models/Drone.model");

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  
  try{
    const droneFromDb = await modelDrone.find();

    res.render("drones/list.hbs", {droneFromDb})
  }
  catch(err){
   console.log("Error!",err)
  }

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const newDrone = new modelDrone({
    name : req.body.name,
    propellers : req.body.propellers,
    maxSpeed : req.body.maxSpeed
  })
  console.log(newDrone)
  await modelDrone.create(newDrone);
  res.redirect("/drones");
});

// router.get('/drones/:id/edit', async (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
  
// // const droneId = mongoose.Types.ObjectId(req.params.id);
//   const droneDetails = await modelDrone.findById(req.params.id);
//   console.log(droneDetails);
//   res.render("drones/update-form.hbs", {droneDetails});
// });

// router.post('/drones/:id/edit', async (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
//   const droneId = mongoose.Types.ObjectId(req.params.id);
//   await modelDrone.findByIdAndUpdate(droneId, { ...req.body });
//   res.redirect("/drones/" + droneId);
// });

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  router.delete("/drones/:id/delete", async (req, res) => {
    const droneId = mongoose.Types.ObjectId(req.params.id);
    console.log("droneId to delete", droneId);
  
    await modelDrone.findByIdAndDelete(droneId);
    res.send("Successfully deleted");
  });
});

module.exports = router;
