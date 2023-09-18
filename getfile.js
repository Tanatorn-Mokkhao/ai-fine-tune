import openai from './config.js'


async function getFile() {
  try {
    const response = await openai.files.list()
    console.log('File ID: ', response.data)
  } catch (err) {
    console.log('err: ', err)
  }
}


getFile()