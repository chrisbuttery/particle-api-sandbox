## listDevices

This is a slight variation of the [../callFunction]() example.

Instead of passing in an explicit device id, we're going to query out Particle cloud account for a list of devices and filter out the first one with the
`connected: true` prop/value.

We'll then pass the connected device if to a function that will then call the `led` function flashed on the device - turning the LED on.

![alt tag](https://github.com/chrisbuttery/particle-api-sandbox/blob/master/listDevices/fritzing.png)

### JS

Once logged in, we can gain access to a list of devices associated with our Particle account via `particle.listDevices({ auth: token })`.

This method takes 1 param (our access token returned from login) and returns a Promise. On resolve we will have access to an array of devices.

```js
// response

{ body:
  [
    {
      id: '1234',
      name: 'captain_narwhal',
      last_app: null,
      last_ip_address: '111.22.33.44',
      last_heard: '2016-07-14T13:15:37.075Z',
      product_id: 6,
      connected: true, // true!
      platform_id: 6,
      cellular: false,
      status: 'normal',
      pinned_build_target: '0.4.4'
    },
    {
      id: '5678',
      name: 'wombat_ranger',
      last_app: null,
      last_ip_address: '111.22.33.44',
      last_heard: '2015-08-31T23:08:35.749Z',
      product_id: 6,
      connected: false,
      platform_id: 6,
      cellular: false
    },
    {
      id: '9012',
      name: 'turkey_morphing',
      last_app: null,
      last_ip_address: '111.22.33.44',
      last_heard: '2015-09-10T22:46:45.842Z',
      product_id: 6,
      connected: false,
      platform_id: 6,
      cellular: false,
      pinned_build_target: '0.4.4'
    }
  ],
  statusCode: 200
}
```

### INO

In this example, the Photon has been [flashed](https://build.particle.io/) with `function-toggle-led.ino`. In the `setup()` function we associate the name `led` with the function `toggleLED()`. So now we can specific `led` as the function we want to call in the JS API.

### Usage

Make sure you've flashed your device with `function-toggle-led.ino`.

```bash
% node listDevices.js
```
