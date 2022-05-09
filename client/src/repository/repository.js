// const { User } = require('../Entities/user');

class Repository {
    
    #data;

    constructor() {
        this.#data = new Set
    }

    getOne(searchedId) {
        this.#data.forEach(entity => {
            if(entity.id === searchedId) return entity;
        })

        throw 'There is no object with this id.';
    }


    getAll() {
        return this.#data;
    }

    addData(newData) {
        if (this.#data.has(newData)) {
            throw 'Object to be added is already in the database.';
        }
        this.#data.add(newData);
    }

    deleteData(toBeDeleted) {
        if (!this.#data.delete(toBeDeleted)) {
            throw 'Object to be deleted was not found.';
        }
    }

    updateData(oldData, newData) {
        if (this.#data.has(oldData)) {
            this.#data.delete(oldData);
            this.#data.add(newData);
        }
    }
}

exports.Repository = Repository;