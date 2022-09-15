const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.dbConnect = async () => {
  try {
    await prisma.$connect()
    console.log('Connect to Database is Success')
  } catch (error) {
    console.log(error.message)
  }
}
