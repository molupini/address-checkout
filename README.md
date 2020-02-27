# ADDRESS CHECKOUT

Powered by Nodejs.

  - Deploy with npm

# Features

You can:
  - Checkout Address from ipam api, see [ipam]

# Installation

#### Install

Open your favorite Terminal and run these commands.

First, if necessary:
```sh
$ mkdir ./ipam-checkout
$ cd ipam-checkout/
```
Second:
```sh
$ git init
```
Third:
```sh
$ git clone git@github.com:molupini/ipam-checkout.git
```

#### Author

Before we begin, credentials can be stored within environment variables, if omitted you'll need to use the following parameters see instructions below :
```sh
$ vi ./.env/app.env
JWT_TOKEN=default
```

### Deploy

Install node:
```sh
$ cd ./src
$ npm i --save
```

# Instructions

Verify node,

```sh
# # IMPORTANT 

# PARAMETERS
    # --jwt=
      # > either make use of a environment variable or parameter not both,
      # > example if you set the JWT_TOKEN environment variable and jwt parameter the env will take effect. 
    # --network=, 0.0.0.0 IPv4 format 

# COMMEND
$ node run.js --jwt= --network=

# RESULT
  # > SUCCESS JSON RESPONSE 
  # > FAILURE 1 WITH ERROR IN CONSOLE
```

# License

MIT

# Author
**Want to contribute? Great! See repo [git-repo-url] from [Maurizio Lupini][mo]    -Author, Working at [...][linkIn]**


   [mo]: <https://github.com/molupini>
   [linkIn]: <https://za.linkedin.com/in/mauriziolupini>
   [git-repo-url]: <https://github.com/molupini/address-checkout>
   [ipam]: <https://github.com/molupini/ipam>
   [node.js]: <http://nodejs.org>
