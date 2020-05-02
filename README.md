# Ynab-Dashboards
This is an unofficial dashboard application that consumes YNAB API.
It doesn't store any data, it's only a web client application.

The target is to get some insights from your transaction history, currently only outflow transactions are considered.

# Demo
https://ynab-dashboards.herokuapp.com/

# Install
``` 
yarn
```

# Config
Create a .env file and add your YNAB developer client_id, like:
```
REACT_APP_YNAB_CLIENT_ID=VALUE_HERE
```

# Running
```
yarn start
```
