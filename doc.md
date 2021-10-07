## Hosting Back-end on Heroku and Front-end on Netlify
- `client/package.json`: remove `proxy: "http://localhost:3000"`
- `client` Update API url in axios request code
- `client/public`: add `_redirects` file content: `/* /index.html 200`
- `server: /auth/login.js` `post('/login')`: `res.cookie('token', token).sendStatus(200);` to `res.status(200).json('token': token);` Cannot set cookie of Client browser from Server
- `client: withAuth routes`: axios request must have header/body to deliver cookie token to `Back-end`

test
