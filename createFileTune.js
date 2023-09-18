import openai from './config.js'


async function createFineTune() {
  try {
    const response = await openai.fineTunes.create({
      training_file: 'file-xYo0naD7R0QL9vinRN2EQ72f',
      model: 'davinci'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err)
  }
}

createFineTune()