const User = require('./../models/user')

module.exports = {

    new: (req, res) => {
        let user = new User()
        let dados = req.body

        user.nome = dados.nome
        user.email = dados.email

        user.save( (err) => {
            if (err) {
                res.status(500).send({message: 'Deu ruim ', error: err})
            } else {
                res.status(200).send({message: 'Deu Bom', user: user})
            }
        } )
    },

    retrieveUsers: (req, res) => {
        User.find({}).then((err, users) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(users)
            }
        })
    },

    retriveUserById: (req, res) => {
        User.findById(req.params.id).then((err, user) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(user)
            }
        })
    },

    delete: (req, res) => {
        User.findByIdAndRemove(req.params.id).then((user) => {
            if (user) {
                res.status(200).send('Excluido com sucesso')
            } else {
                res.status(404).send('Usuário nao encontrado')
            }
        })
    },

    update: (req, res) => {
        let user = {}
        let dados = req.body

        user = Object.assign(user, dados)

        User.findOneAndUpdate({ '_id': req.params.id }, { $set: user })
        .then((err) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send('Usuario editado com sucesso')
            }
        })
    }

}