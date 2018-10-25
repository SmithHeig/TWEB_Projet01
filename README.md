# Github Friends

This application is made to see who are the contributors on your project ! 
More you had work on the user repositories, the biggest your circle will be!

## Technologies used

This application is split in two part, the `frontend` and the `API`

The `frontend` is a react with material-ui application.

The `API` is an express server who execute request on the github API and treat the data to be fetch by a client.

## Install

Run the `install.sh` script

```
sh install.sh
```

### Configuration server

You need to add a `.env` file at root of the server folder. The structure is the same as the `.env.default` 

You need to replace the: `OAUTH_TOKEN=xxx` With a personnel token generate on your github account.

To do so: `settings`-> `Developer settings`->`Personal access tokens`-> `Generate new toker`

## Run

Run the `run.sh` script. This will run the app in Docker containers.

Be sure that the port `4000`and `80` are available.