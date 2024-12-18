const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todosdb');

const Todo = mongoose.model('Todo', { title: String, completed: Boolean });


const todo = new Todo({
    title: 'Learn MongoDB',
    completed: false
});

todo.save().then(() => console.log('Todo saved!'));