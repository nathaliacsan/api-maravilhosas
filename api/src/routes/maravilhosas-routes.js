const express = require('express');
const { Router } = require('express');
const router = express.Router();


const controller = require("../controllers/maravilhosas-controller")

//@route GET Maravilhosas
//@desc Retornar todas as maravilhosas
//@acces Public
//@endpoint http://localhost:porta/maravilhosas
router.get("/maravilhosas", controller.getMaravilhosas)

//@route POST Maravilhosas
//@desc Criar uma maravilhosa
//@acces Public
//http://localhost:porta/maravilhosas
router.post("/maravilhosas", controller.addMaravilhosa)

//@route GET Maravilhosas
//@params :id
//@desc Retornar apenas uma única maravilhosa pelo seu id: identificador
//@acces Public
//http://localhost:porta/maravilhosas/:id
router.get("/maravilhosas/:id", controller.getMaravilhosaById)

//@route PUT Maravilhosas
//@params :id
//@desc Atualizar uma única maravilhosa pelo seu id: identificador
//@acces Public
//http://localhost:porta/maravilhosas/:id
router.put("/maravilhosas/:id", controller.updateMaravilhosa)

//@route DELETE Maravilhosas
//@desc Deletar uma maravilhosa
//@acces Public
//http://localhost:porta/maravilhosas/:id
router.delete("/maravilhosas/:id", controller.deleteMaravilhosa)

module.exports = router;