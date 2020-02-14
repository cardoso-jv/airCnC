# airCnC
This is an application developed during the OmniStack Week, it is a web / mobile platform for scheduling meetings between companies and programmers


# Setup

### Instalation

- Clone this repository
- At the root of this project, run. Don't forget to change 'http://192.168.0.12' to your localhost address
```
echo "module.exports = {
  localhost: 'http://192.168.0.12',
}" | tee  mobile/src/localhost.js  frontendweb/src/localhost.js backend/src/localhost.js

```
- In each folder run `yarn` and `yarn start` to install the packages and start the backend, frontend web and mobile applications
