# Github Friends

This application is made to see who are the contributors on your project ! 
More you had work on the user repositories, the biggest your circle will be!

## Technologies used

This application is split in two part, the `frontend` and the `API`

The `frontend` is a react with material-ui application.

The `API` is an express server who execute request on the github API and treat the data to be fetch by a client. The `API` do some request on the `Github API`.

## Install

Run the `install.sh` script

```bash
sh install.sh
```

### Configuration server

You need to add a `.env` file at root of the server folder. The structure is the same as the `.env.default` 

You need to replace the: `OAUTH_TOKEN=xxx` With a personnel token generate on your github account.

To do so: `settings`-> `Developer settings`->`Personal access tokens`-> `Generate new toker`

## Run in local

Run the `run.sh` script. This will run the app in Docker containers.

Be sure that the port `4000`and `80` are available. 

You can access to the application on linux at: http://localhost or on http://192.168.99.104 (docker ip)

## Production

This web site is host on heroku at the address: https://githubfriendsfrontend.herokuapp.com

You can access to the api by this link: https://githubfriends.herokuapp.com

## Next steps

- Adding new perspectives. (more line of code added to your repositories, etc)
- Adding images (favicon, home page)
- Optimized for mobile phone