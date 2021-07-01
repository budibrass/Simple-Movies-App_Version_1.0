const Film = require("./film");
const fs = require("fs");

class Model {
    static show(callback) {
        fs.readFile("./data.json", (err, data) => {
            if (err) callback(err, null)
            else {
                data = JSON.parse(data);
                let films = []

                for (let i = 0; i < data.length; i++) {
                    films.push(new Film(data[i].id, data[i].name, data[i].genre))
                }
                callback(null, films)
            }
        })
    };

    static findById(id, callback) {
        Model.show((err, data) => {
            if (err) callback (err, null)
            else {
                for (let datas of data) {
                    if (Number(id) === datas.id) {
                        callback(null, datas)
                    }
                }
            }
        })
    };

    static postAdd(obj, callback) {
        Model.show((err, data) => {
            if (err) callback(err, null)
            else {
                let newId = data[data.length - 1].id + 1;
                data.push(new Film(newId, obj.name, obj.genre))

                Model.save(data, (err, data) => {
                    if (err) callback(err, null)
                    else callback(null, data)
                })
                callback(null, data)            
            }
        })
    };

    static delFilm(id, callback) {
        Model.show((err, data) => {
            if (err) callback(err, null)
            else {
                for (let i = 0; i < data.length; i++) {
                    if (Number(id) === data[i].id) {
                        data.splice(i, 1)

                        Model.save(data, (err, data) => {
                            if (err) callback(err, null)
                            else callback (data, null)
                        })
                        callback(null, data)
                    }
                }
            }
        })
    };

    static getEdit(id, callback) {
        Model.show((err, data) => {
            if (err) callback(err, null)
            else {
                for (let i = 0; i < data.length; i++) {
                    if (Number(id) === data[i].id) {
                        callback(null, data[i])
                    }
                }
            }
        })
    };

    static postEdit(id, obj, callback) {
        Model.show((err, data) => {
            if (err) callback(err, null)
            else {
                for (let i = 0; i < data.length; i++) {
                    if (Number(id) === data[i].id) {
                        data[i].name = obj.name,
                        data[i].genre = obj.genre

                        Model.save(data, (err, data) => {
                            if (err) callback(err, null)
                            else callback(null, data)
                        })
                        callback(null, data)
                    }
                }
            }
        })
    };

    static save(data, callback){
        fs.writeFile("./data.json", JSON.stringify(data, null, 4), (err) => {
            if (err) callback(err, null)
            else callback (null, data)
        })
    };
};

module.exports = Model;