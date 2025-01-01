# Boomshark

![Boomshark](https://raw.githubusercontent.com/jamespro/boomshark/main/public/img/boomshark-logo.png)

- Demo: [https://boomshark.herokuapp.com/](https://boomshark.herokuapp.com/)

---

# Introduction

---

Boomshark will be an app for sharing projects that you're working on. Posts will include a title, image, description, and a link to the live url or github (and maybe tagging as well if we can get added within a week).

New ideas to focus the concept:

- BOOM! SHARK ALERTS: post SHARK SIGHTING photos: Because in some areas, dangerous sharks are changing their patterns due to global warming and are being found along beaches where they have not been seen before. Could include map function. Could it get the location data from the photo?
- Twitch DJ streamcap posts: Take a screencap of your favorite streamer, post it here to share with friends! Maybe Twitch DJ focused. Maybe any kind of streamer.

---

# Objectives

- It's a beginner level app created to understand how MVC concept and logins are added

---

# Who is this for?

- It's for beginners & intermediates with little more experience, to help understand the various aspects of building a node app with some complex features

---

# Packages/Dependencies used

bcrypt, cloudinary, connect-mongo, dotenv, ejs, express, express-session, method-override, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

## Cloudinary

https://cloudinary.com/users/login

## MongoDB

https://account.mongodb.com/account/login
NOTE: If you have trouble logging in, try Incognito mode and disabling extensions or un-blocking domains.

- 20241228 - I am not 100% positive my original URL is still the right format for MongoDB or if something might have changed...

Hosting options may include:

- siteground
- fly.io (may need to update Github access settings)
- cyclic.sh
- netlify
- replit
- vercel.com
- aws (credits)

- See what can pull directly from github repo, e.g. fly.io (may need to update Github access settings).

## Deploying on Fly.io

- fly.io has a CLI
  - `flyctl` and `fly`... `fly help`
  - 'fly launch' to get docker files, fly.toml, etc. and set up initial app
  - `flyctl status` `flyctl deploy`
- LIVE LOGS: Check web admin or CLI `flyctl logs` - KEEP OPEN WHEN DEPLOYING to see problems right away!
- Created the "deployment" in the web interface. It needed to create then add 3 files to the repo. I needed to go to GitHub and approve and merge these files. Then I updated my local repo.
- SECRETS: You need to put your environment variables i.e. keys for your services, into "secrets", either via fly's web admin or CLI. You should re-deploy whenever you update secrets.
  - https://fly.io/docs/apps/secrets/#setting-secrets
  - PORT: Not sure if I need to let Fly determine the port and therefore not put into a secret??
  - ! PORT - Need to set a SECRET in FLY ADMIN!
    - SET THE SECRET, in Fly admin, for PORT, set = 3000
    - Can LEAVE IT in the code as 2121 (pretty sure)

---

# Install all the dependencies or node packages used for development via Terminal

`npm install`

---

# Things to add

- Create a `.env` file at /config/.env and add the following as `key=value`

  - PORT=2121 (can be any port example: 3000)
  - DB_STRING=`your database URI`
  - CLOUD_NAME=`cloudinary name`
  - CLOUD_API_KEY=`cloudinary api_key`
  - CLOUD_API_SECRET=`cloudinary api_secret`

  ***

# Outline

- /
- /post
- /login
- /signup
- /feed
- /profile

# Current Activity

- [x] Landing page, make graphic smaller; replace
- [] Profile page: make narrower; flows off-screen
- [ ] Update handleCameraUpload because getting 500 server error because it's having a problem with "id". Sounds like it really wants a logged in user... but maybe for testing we can say it's optional. Maybe should have a default user for dev.

## Takeaways

### Top Detail Takeaways

- Deploying (fly.io and maybe others): set the port
- Docker: Check dockerignore to make sure no files you need are being ignored and not deployed. (also .gitignore)

### Top Major Takeaways

- Services: Make sure they are active. Log in to check that MongoDB, Cloudinary, etc. are live and allowing the right access, either very open or restricted to your IP address or certain IP addresses.
- Services: Check that their startup time is not so long that your requests timeout before your service is ready. Consider using hosting that is always-up.
