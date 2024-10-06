import OpenAI from 'openai'
import dotenv from 'dotenv'
import { getCurrentWeather, getLocation, tools } from "./tools.js"

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const availableFunctions = {
    getCurrentWeather,
    getLocation
}


async function agent(query) {

    const messages = [
        { role: "system", content: "You are a helpful AI agent. Give highly specific answers based on the information you're provided. Prefer to gather information with the tools provided to you rather than giving basic, generic answers." },
        { role: "user", content: query }
    ]

    const MAX_ITERATIONS = 5

    // for (let i = 0; i < MAX_ITERATIONS; i++) {
    //     console.log(`Iteration #${i + 1}`)
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages,
            tools
        })

        // const responseText = response.choices[0].message.content
        // console.log(response)
        console.log(response.choices[0])
    // }
}

// console.log(await agent("What are some activity ideas that I can do this afternoon based on my location and weather?"))

await agent("How are you today?")