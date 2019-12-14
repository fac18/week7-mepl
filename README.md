Our HackMD presentatiion can be found [here](https://hackmd.io/@y5wWQLwIQ2eAS9VhTT6f4Q/ryWkplgCS#/).


# Team firefighter
## Ep 2

Kin - Maria - Nikke - Pat

---

### Installation

1. git clone this repo
2. npm install to set up node modules
3. \i Initialise a local database
4. Create .env file in route file
5. Add DB_URL value to your .env - please ask MELP team to send this to you 

---

## Requirements

+ [x] Login form with 2 fields - username and password
+ [x] Users only have to log in once (i.e. implement a cookie-based session on login)
+ [ ] Username is visible on each page of the site after logging in
+ [ ] Any user-submitted content should be labelled with the authors username

---

+ [x] There should be protected routes and unprotected routes that depend on the user having a cookie or not (or what level of access they have).
+ [x] Website content should be stored in a database
+ [x] Include thorough tests on the back-end, testing pure functions and testing routes using Supertest. If you make external API calls, use Nock to mock the response for your tests.
+ [ ] Test front-end logic, we don't expect tests on the DOM.

---

## Fruit basket week 6
![](https://i.imgur.com/Tc3fZBY.png)


---

## Mobile first design

![](https://i.imgur.com/Hhyk8ya.png =200x)

---

## Responsiveness

![](https://i.imgur.com/sPXkAT4.jpg =500x)

---

## Accessibility

![](https://i.imgur.com/M52EyMo.png)

---

## Input labels CSS animations:

- input and label by default stacked one on each other

```css
.user-form-container .input-field input:focus ~ label,
.user-form-container .input-field input:valid ~ label {
  top: -29px;
  left: 0;
  color: rgb(39, 37, 37);
  font-size: 0.8rem;
}
```

---

### Architecture 3.0

![](https://i.imgur.com/euwK23c.png)

Extra snippets can also be added: 
https://app.creately.com/diagram/DdgtfSE5Wqp/view


---

### git rebase

As a team we started adopting a a new git command: "git rebase"


---

### git merge

![](https://i.imgur.com/70Y7UQo.png =350x)

![](https://i.imgur.com/8cIBK7u.png =350x)





---

### git rebase

![](https://i.imgur.com/ackfwCL.png =400x)



https://www.freecodecamp.org/news/an-introduction-to-git-merge-and-rebase-what-they-are-and-how-to-use-them-131b863785f/

---

#### Week-6-MEPL > Insights > Network 

![](https://i.imgur.com/gfo0ZYx.png =800x)

#### Week-7-MEPL > Insights > Network 

![](https://i.imgur.com/heSeISA.png =800x)

---

## GitSh*t

![](https://i.imgur.com/DtgIccU.png)

---

![](https://i.imgur.com/hkzVqdf.png =700x)

---

## Testing

- Our database - get/post functions
- Hashing of our passwords
- Our routers
- though this takes a little while...
![](https://i.imgur.com/Zwd527g.png)
- Code coverage

---

## Handlers etc.

- Promise!! (we wrote one)
- Monster handler (needs to be refactored and modularised)
- POST (does not need an API request - a form will know how to handle this)

---

## Things to improve

- Codecov
- Project requirements!
- 

---




