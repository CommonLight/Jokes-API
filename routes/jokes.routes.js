const JokesController = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/allJokes', JokesController.findAllJokes)
    app.get('/api/allJokes/:id', JokesController.findOneSingleJoke)
    app.post('/api/allJokes', JokesController.createNewJoke)
    app.patch('/api/allJokes/:id', JokesController.updateExistingJoke)
    app.delete('/api/allJokes/:id', JokesController.deleteAnExistingJoke)
}
