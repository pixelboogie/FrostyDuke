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
            model: "gpt-3.5-turbo-1106",
            messages,
            tools
        })

        
        console.log(response.choices[0])

        // this gets the value of finish_reason and renames it finishReason
        const { finish_reason: finishReason, message } = response.choices[0]
        const { tool_calls: toolCalls } = message

        if (finishReason === "stop") {
            console.log(message.content)
            console.log("AGENT ENDING")
            return
        }else if (finishReason === "tool_calls"){
            console.log("******** tool_calls *********")
            for(const toolCall of toolCalls){
                const functionName = toolCall.function.name
                const functionToCall = availableFunctions[functionName]
                const functionResponse = await functionToCall()
                console.log(functionResponse)
                // get the function name
                // access the actual function from the array of available functions
                // call that function
                // console.log the result
            }
        }
        
           
    // }
}

await agent("What's the current weather?")