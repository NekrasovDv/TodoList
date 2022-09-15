const {
  getAllTodo,
  addNewTodo,
  changeStatus,
  editTodo,
  deleteTodo,
  deleteAllTodo,
} = require('../controllers.js/todosControllers')

const router = require('express').Router()

router
  .route('/')
  .get(getAllTodo)
  .post(addNewTodo)
  .patch(changeStatus)
  .put(editTodo)
  .delete(deleteAllTodo)

router.delete('/:id', deleteTodo)

module.exports = router
