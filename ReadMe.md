











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


