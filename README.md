# User Login Code Challenge

Using a JavaScript framework of your choice (preferably [React](https://reactjs.org/)):
- [x] create a simple login screen that allows users to enter their username and password and submit the login form to a backend process.
- [x] create a backend (preferably using [GoLang](https://go.dev/), but not required) that processes the login information and checks if the username and password are valid.
- [x] If the login information is valid, the backend should return a success message to the user. 
- [x] If the login information is invalid, the backend should return an error message to the user.


## How-To
```
go run server.go
[open a new terminal tab or window]
nvm use
cd client
npm i
npm run start
```
Should take you to `localhost:3000`. Based on authorization, it will then redirect you to `/login`.

Your credentials are:
```
username: admin
password: secret
```

The only validation is that both fields are required, and the password has to be `6` characters long.

## Assumptions
Lots to fit in here.

Things I totally blew pass or you'll notice.

### Back-end
1. No DB. I never touched Go before today, so no DB interfaces.
2. CORS isn't set up for proper whitelist. 
3. Returns a JSON token, but it's not real.

### Front-end
1. Used the latest Redux to have an excuse to play with the latest Redux Toolkit. Tried adding Sagas also, but newer API challenges sucked up too much time.
2. Redux was probably overkill. Even Context would have been overkill for this. Could have used local state in the App component.
3. Never set any token in local storage or anything like that on `200` response from the `Go` server. That's normally how would would handle auth, through `Bearer token` or `JWT`.
4. React Hook Forms has a typscript error in it you'll see in the console. Not sure what that is, but didn't hurt anything.
5. The API was all coded in the Form component. Obviously should be pulled out.
6. That goes for all the components. Didn't do a lot of decomposition, confirming functionality first. Cleanup second.
7. Endpoints and other `env` variables were put inline for simplicity.







Send an email to Scoir (code_challenge@scoir.com) with a link to your newly created repo containing the completed exercise (preferably no later than one day before your next interview).


