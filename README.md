# Instagram Like Bot &middot;

Like posts on Instagram with a Bot.

## Installing / Getting started

To setup create a file in ``config/credentials.js`` and make it's content 
```js
module.exports = {
    username: '',
    password: ''
};
```
Now install all dependencies and compile the source files.
```shell
npm i
tsc
```

## Usage

````bash
node dist/index
````
This starts the application. You have to wait for a few seconds until the browser is ready. 

After waiting you can paste the ID of the Post you want to like into the console and press ``Enter``.

You then have to wait for the Like to be done (console message once liked).

####Example

![](https://i.tiehm.me/9e76f1f1-6033-4428-9074-5406ede3974b.png)

## Licensing

UNLICENSED
