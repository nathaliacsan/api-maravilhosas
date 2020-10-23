//Nomes dos métodos para implementação:

const model = require("../models/maravilhosas-models")




//getMaravilhosas
const getMaravilhosas = (request, response) => {
    response.status(200).send(model.selectAllData())
}

//getMaravilhosaById
const getMaravilhosaById = (request, response) => {
    const id = request.params.id

    const maravilhosasId = model.selectDataById(id) 

     if (maravilhosasId) {
         response.status(200).send(maravilhosasId)
         console.log(maravilhosasId)
     } else {
         response.status(404).send({ message: "Id não encontrado"})
     }
}

//addMaravilhosa 
const addMaravilhosa = (request, response) => {
    const newData = request.body 
    const addedData = model.insertData(newData)

    if (addedData) {
        response.status(201).send(addedData)
    } else {
        response.status(403).send(addedData)
    }

}

//updateMaravilhosa 
const updateMaravilhosa = (request, response) => {
    const id = parseInt(request.params.id)
    const updateData = request.body

    const update = model.updateData(updateData, id)

    if (update) {
        response.status(200).send(update)
    } else {
        response.status(404).send({message: "Id não encontrado"})
    }
   
}

//deleteMaravilhosa
const deleteMaravilhosa = (request, response) => {
    const id = parseInt(request.params.id)

    const deleting = model.deleteData(id)

    if (deleting) {
        response.status(204).send(deleting)
    } else {
        response.status(404).send({message: "Id não encontrado"})
    }
}



module.exports = {
    getMaravilhosas,
    getMaravilhosaById,
    addMaravilhosa,
    updateMaravilhosa,
    deleteMaravilhosa
}