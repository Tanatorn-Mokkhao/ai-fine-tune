import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;