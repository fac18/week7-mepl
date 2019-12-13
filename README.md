# Team firefighter
## Ep 2

### Installation

1. git clone this repo
2. npm install to set up node modules
3. \i Initialise a local database
4. Create .env file in route file
5. Add DB_URL value to your .env - please ask MELP team to send this to you 


### What's wrong??

Currently does not authenticate, create cookie, etc. etc.
Why?

1. clone authenticate-password branch
2. run server localhost:3001
3. enter "mike" to existing users login section
4. see terminal console logs
5. handlers.js line 126 runs createToken() function, but continues running next lines of code, before tokenRes can be generated 

![](https://i.imgur.com/GFzxSJ1.png)
