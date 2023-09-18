import openai from './config.js'

async function createCompletion() {
  try {
    const response = await openai.completions.create({
      model: 'davinci:ft-personal-2023-09-18-07-15-40',
      prompt: 'What is Lens Protocol',
      max_tokens: 200
    })
  
    if (response.choices) {
      console.log('choices: ', response.choices)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()