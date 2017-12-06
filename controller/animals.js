module.exports = {
    getAnimals: (req, res, next) => {
        const db = req.app.get('db')

        db.get_animals().then( response => {
            res.status(200).send(response)
        })
    },

    addAnimals: (req, res, next) => {
        const db = req.app.get('db')
        const {name, img} = req.body

        db.add_animals([name, img]).then( response => {
            res.status(200).send(response)
        })
    },

    updateAnimals: (req, res, next) => {
        const db = req.app.get('db')
        const {id, name} = req.params

        db.update_animals([id, name]).then( response => {
            res.status(200).send(response)
        })
        
    },
    deleteAnimals: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_animals([id]).then( response => {
            res.status(200).send(response)
        })
        
    }


}