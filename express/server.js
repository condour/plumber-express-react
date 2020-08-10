// Simple proxy for Plumber on RSConnect; also passes through static files.
//
import express, { response } from 'express';
import proxy from 'express-http-proxy';
require('dotenv').config();

// Choose a port at runtime based on environment variables
const PORT = process.env.HTTP_PORT || 8080;

// instantiate an express server
const app = express();

// here's the meat and potatoes. Divert all requests for "/proxy" to the
// RSConnect server, but add the actual API key.

// This is also where you'd validate the user's JWT to make sure they're allowed 
// access. But we're not doing that here yet.

app.use('/proxy', proxy(process.env.EXPRESS_PLUMBER_API_URL, {
  proxyReqOptDecorator: function (proxyReqOpts) {
    proxyReqOpts.headers = {"Authorization": `Key ${process.env.EXPRESS_PLUMBER_API_KEY}`};
    return proxyReqOpts;
  }
}));

// This will serve the react site, as long as it's located in a folder called build
app.use(express.static(`${__dirname}/build`, { fallthrough: false }));

// Let's show what port we're on at start, shall we?
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});