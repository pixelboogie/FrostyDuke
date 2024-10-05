import OpenAI from 'openai'
import dotenv from 'dotenv'
import { getCurrentWeather, getLocation } from "./tools.js"

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const weather = await getCurrentWeather()
const location = await getLocation()

async function main() {
  const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [
         {
             role: "user",
             content: `Give me list of 3 activity ideas based on my current location of ${location} 
             and ${weather}`
         }]
  });

  console.log(response.choices[0].message.content)
}

main(); 