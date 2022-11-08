// MOCKING DATA SERVER
const { v4 } = require('uuid');

class model {
    constructor() {
        this.data = [];
    }

    find() {
        return this.data;
    }

    findOne({ id }) {
        return this.data.find(entry => entry._id === id);
    }

    create(data) {
        data._id = v4();
        this.data.push(data);
        return data;
    }

    updateOne({ id }, { done, text }) {
        const entry = this.findOne({ id });

        if (!entry) return null;
        if (typeof done === "boolean") entry.done = done;
        if (text) entry.text = text;

        return entry;
    }

    deleteOne({ id }) {
        const pos = this.data.findIndex(entry => entry._id === id);
        return this.data.splice(pos, 1);
    }
}

class mongooseMock {
    connect(url, a) {a();}
    model(name, schema) {
        return new model;
    }

    Schema = class {
        constructor(a ,b) {}
    }
}
// END MOCKING DATA SERVER

// const mongoose = require('mongoose');
const mongoose = new mongooseMock();

const url = "mongodb://127.0.0.1/DB_NAME"
mongoose.connect(url, (e) => {
    console.log(e);
    console.log("connected to mongo");
})


const TodoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
  }
);
const Todo = mongoose.model("todos", TodoSchema);

module.exports = Todo;