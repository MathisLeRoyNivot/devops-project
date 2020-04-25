# ABB API Documentation

## Description
ABB API

## Getting Started

### Requirements

* Nest CLI
* Firebase
* Firebase-tools
```
$ npm install -g @nestjs/cli firebase firebase-tools
```

### Installation

First, connect to your Firebase account
```
$ firebase login
```

Then, install dependencies
```
$ npm install
```

---

## Development

To run the development environment
```
$ firebase emulators:start
```

---

## Deployment

To deploy the API to Firebase
```
$ firebase deploy --only functions
```