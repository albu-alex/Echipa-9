// const { User } = require('../Entities/user');

class Repository {
    
    _data: Set;

    constructor() {
        this._data = new Set
    }

    getOne(searchedId) {
        this._data.forEach(entity => {
            if(entity.id === searchedId) return entity;
        })

        throw 'There is no object with this id.';
    }
    
    getAll() {
        return this._data;
    }

    addData(newData) {
        if (this._data.has(newData)) {
            throw 'Object to be added is already in the database.';
        }
        this._data.add(newData);
    }

    deleteData(toBeDeleted) {
        if (!this._data.delete(toBeDeleted)) {
            throw 'Object to be deleted was not found.';
        }
    }

    updateData(oldData, newData) {
        if (this._data.has(oldData)) {
            this._data.delete(oldData);
            this._data.add(newData);
        }
    }
}

exports.Repository = Repository;