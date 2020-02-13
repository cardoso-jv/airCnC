# airCnC
This is an application developed during the OmniStack Week, it is a web / mobile platform for scheduling meetings between companies and programmers


# Setup

### Instalation

- Clone this repository
- To update the localhost path to your machine. At the root of this project, run
```
echo "module.exports = {
  localhost: '<inser_your_localhost_adress - ex:192.168.0.12>',
}" | tee  mobile/src/localhost.js  frontendweb/src/localhost.js backend/src/localhost.js

```
- In each folder run `yarn` and `yarn start` to install the packages and start the backend, frontend web and mobile applications