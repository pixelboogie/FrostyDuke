

add location, unit as params to getcurrentweather
add getLocation function to fetch an api
the ip address checker didn't work - 
Visit https://ipapi.co/ratelimited/ for details

Add location, unit as params to getcurrentweather
Added fetch an api, but was ratelimited


-----------------------------

 Pushing to messages

-----------------------------

// Check finish_reason
// if "stop"
    // return the result
// else if "tool_calls"
    // call functions
            // get the function name
                // access the actual function from the array of available functions
                // call that function
                // console.log the result

------------------------------

OpenAI Functions
Rewrite some using Functions
Get rid of system prompt
Moved tools to external tools.js

More about openai tools here:
https://platform.openai.com/docs/api-reference/chat/create#chat-create-tools

------------------------------

* PLAN:
* 1. Split the string on the newline character \n
* 2. Search through the array of strings for one that has "Action:"
* 3. Parse the action (function and parameter) from the string
* 4. Calling the function
* 5. Add an "Obversation" message with the results of the function call

installed nodeamon
so it will auto update without me restarting node each time
To start the project with nodemon so that it will autoupdate as I edit:
    npx nodemon src/index.js
    Ctrl + C to end

------------------------------


 * Goal - build an agent that can answer any questions that might require knowledge about my current location and the current weather at my location.

 PLAN:
 1. Design a well-written ReAct prompt
 2. Build a loop for my agent to run in.
 3. Parse any actions that the LLM determines are necessary
 4. End condition - final Answer is given


Added a long system prompt telling GPT how to cycle through the steps and pause.
Add the agent function to process the system prompt and operate off the query passed in from the user.

Called the function with the question "What book should I read next? I like self-help books." 
Response in console was:
Thought: To recommend a self-help book, I should consider the user's preferences and suggest a book that aligns with their interests and needs.

Action: PAUSE

------------------------------

I added a gitignore file copied from this github repo:

https://github.com/github/gitignore/blob/main/Node.gitignore


-------------------------------------

I added .env with environment variable for openai apikey
used this video as a guide: https://www.youtube.com/watch?v=hZUNMYU4Kzo

-------------------------------------

This is a basic Node setup - able to make a successful connection to openai and get a response.

I used this video as a guide: https://www.youtube.com/watch?v=sKJ33ce-1-o

commands/steps:
    npm init es6 -y
    npm i openai


