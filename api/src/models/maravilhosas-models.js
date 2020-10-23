let data = require("../data/data.json")

// selectAllData
const selectAllData = () => data

//insertData

const insertData = (newData) => {
    const { name, photo, subtitle, about, phrase, history } = newData

    const existName = data.find(data => data.name == name)

    if (!existName) {

        if (name && photo && subtitle && about && phrase && history) {
            const id = (data.length > 0) ? data[data.length - 1].id + 1 : 1

            let addingData = {
                id: id,
                name: name,
                photo: photo,
                subtitle: subtitle,
                about: about,
                phrase: phrase,
                history: history
            }

            data.push(addingData)
            return addingData
        } else {
            return {message: "Algum campo não foi preenchido"}
        }

    } else {
        return {message: "Essa maravilhosa já existe"}
    }

}

//selectDataById
const selectDataById = (id) => {
    return data.find(data => data.id == id)
}


//updateData
const updateData = (updateData, id) => {

    const iDs = data.map(data => data.id)
    const index = iDs.indexOf(id)

    if (index !== -1) {
        const dataUpdate = { id, ...updateData }
        data.splice(index, 1, dataUpdate)
        return dataUpdate
    }

}


//deleteData
const deleteData = (id) => {

    const findingId = data.find(data => data.id == id)

    if (findingId) {
        const index = data.indexOf(findingId)
        data.splice(index, 1)
        return data
    }
}



module.exports = {
    selectAllData,
    selectDataById,
    insertData,
    updateData,
    deleteData
}