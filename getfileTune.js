import openai from './config.js'


async function getFile() {
  try {
    const response = await openai.fineTunes.list()
    console.log('File ID: ', response.data)
  } catch (err) {
    console.log('err: ', err)
  }
}


getFile()