## callFunction

Using `callFunction()` we can trigger a function that has been flashed to the device.

![alt tag](https://github.com/chrisbuttery/particle-api-sandbox/blob/master/callFunction/fritzing.gif)

### JS

This example first logs into the Particle cloud to access the auth token. On success it will then call a `toggleLED` function recursively. This function calls `led` passing it an alternate argument - thus toggling the voltage to the LED.

`callFunction()` takes 4 parameters.
```js
{
  deviceId: `12345`, // your device ID
  name: 'led', // the function we want to call. In this case `led`
  argument: 'on', // an argument to pass to `led`
  auth: 'XYZ' // the token provided from logging into Particle cloud
}
```

### INO

In this example, the Photon has been [flashed](https://build.particle.io/) with `function-toggle-led.ino`. In the `setup()` function we associate the name `led` with the function `toggleLED()`. So now we can specific `led` as the function we want to call in the JS API.

### Usage

Make sure you've flashed your device with `function-toggle-led.ino`.

```bash
% node callFunction.js
```
