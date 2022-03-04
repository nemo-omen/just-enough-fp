// Partial Application

// partial application happens when a curried function has some, 
// but not all, of its functions applied
import fetch from 'node-fetch';

const getFromAPI = baseURL => endpoint => cb =>
   fetch(`${baseURL}${endpoint}`)
      .then(res => res.json())
      .then(data => cb(data))
      .catch(error => {console.error(error.message)});

// partially applied -- only one of the 3 function params
const getGithub = getFromAPI('https://api.github.com');

// now we can pass different endpoints by partially
// applying the param of the 2nd function
const getGithubUsers = getGithub('/users');
const getGithubRepos = getGithub('/repositories');

// finally, we can apply the 3rd param, the callback
// doing it this way allows us to store specific
// 

const userNames = getGithubUsers(async data => {
   // console.log(data.map(user => user.login));
   return await data.map(user => user.login);
});

const userAvatars = getGithubUsers(async data => {
   // console.log(data.map(user => user.avatar_url));
   return await data.map(user => user.avatar_url);
});

const logAsyncInfo = async (pending) => {
   console.log(await pending);
};

logAsyncInfo(userNames);
logAsyncInfo(userAvatars);