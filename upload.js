import openai from './config.js'
import fs from 'fs'

async function upload() {
  try {
    const response = await openai.files.create({ file: fs.createReadStream('./data_prepared.jsonl'), purpose: 'fine-tune' });
    console.log('File ID: ', response.data)
  } catch (err) {
    console.log('err: ', err)
  }
}


upload()