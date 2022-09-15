const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.getAllTodo = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany({})
    res.status(200).json(todos)
  } catch (error) {
    res.sendStatus(500).json({ error: error.message })
    console.log(error.message)
  }
}

exports.addNewTodo = async (req, res) => {
  try {
    const { text } = req.body
    const todo = await prisma.todo.create({ data: { text } })
    res.status(200).json(todo)
  } catch (error) {
    res.sendStatus(500).json({ error: error.message })
    console.log(error.message)
  }
}

exports.changeStatus = async (req, res) => {
  try {
    const { id } = req.body
    const todoStatus = await prisma.todo.findMany({
      where: { id },
      select: { isDone: true },
    })
    const todo = await prisma.todo.update({
      where: { id },
      data: {
        isDone: !todoStatus[0].isDone,
      },
    })
    res.status(200).json(todo)
  } catch (error) {
    res.sendStatus(500).json({ error: error.message })
    console.log(error.message)
  }
}

exports.editTodo = async (req, res) => {
  try {
    const { id, text } = req.body
    const todo = await prisma.todo.update({ where: { id }, data: { text } })
    res.status(200).json(todo)
  } catch (error) {
    res.sendStatus(500).json({ error: error.message })
    console.log(error.message)
  }
}

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params
    await prisma.todo.delete({ where: { id: Number(id) } })
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500).json({ error: error.message })
    console.log(error.message)
  }
}

exports.deleteAllTodo = async (req, res) => {
  try {
    await prisma.todo.deleteMany({})
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500).json({ error: error.message })
    console.log(error.message)
  }
}
