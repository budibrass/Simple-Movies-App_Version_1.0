const Model = require("../models/model");

class Controller {
    static show(req, res) {
        Model.show((err, data) => {
            if (err) res.send(err)
            else res.render("film", { data })
        })
    }

    static findById(req, res) {
        let id = req.params.id;

        Model.findById(id, (err, data) => {
            if (err) res.send(err)
            else res.render("filmById", {data})
        })
    }

    static getAdd(req, res) {
        res.render("addFilm")
    }

    static postAdd(req, res) {
        let obj = {
            name : req.body.name,
            genre : req.body.genre
        }

        Model.postAdd(obj, (err, data) => {
            if (err) res.send(err)
            else res.redirect("/")
        })
    }

    static getEdit(req, res) {
        let id = req.params.id
        Model.getEdit(id, (err, data) => {
            if (err) res.send(err)
            else res.render("editFilm", {data})
        })
    }

    static delFilm(req, res) {
        let id = req.params.id;

        Model.delFilm(id, (err, data) => {
            if (err) res.send(err)
            else res.redirect("/")
        })
    }

    static postEdit(req, res) {
        let id = req.params.id;
        let obj = {
            name : req.body.name,
            genre : req.body.genre
        }

        Model.postEdit(id, obj, (err, data) => {
            if (err) res.send(err)
            else res.redirect("/")
        })
    }
}

module.exports = Controller;