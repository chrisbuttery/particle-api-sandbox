## flashDevice

In this example, we'll flash the device with a local `pulsate.ino` file.

![alt tag](https://github.com/chrisbuttery/particle-api-sandbox/blob/master/flashDevice/fritzing.gif)


## JS

Once logged in we call `flashDevice()`.

`flashDevice()` takes 3 params. The access token, the device id and a path to a file we wish to flash the device with, such as `'./pulsate.ino'`.

On success, the device will be flashed, perform a restart and then perform.

```js
particle.flashDevice({
  auth: token
  deviceId: DEVICE,
  files: {
    file1: './pulsate.ino'
  }
})
.then((res) => {
  // {
  //   body: {
  //     id: '1234567890',
  //     status: 'Update started'
  //   },
  // statusCode: 200
  // }
})
```

### INO

The example `pulsate.ino` file is just a simple loop that turns LEDs `D0` and `D7` on and off with a pulsating effect.
