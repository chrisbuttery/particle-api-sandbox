## getDevice

This example is combining 2 methods from the particle API.

First we're going to list devices associated to our Particle account and then check for a connected device. If found, we'll then pass the 'id' of the connected device to `particle.getDevice()` and log it's details.

### JS

Once logged in, we can gain access to a list of devices associated with our Particle account via `particle.listDevices({ auth: token })`.

This method takes 1 param (our access token returned from login) and returns a Promise. On resolve we will have access to an array of devices. We then check for a connected device and pass it to `getDevice()`.

`getDevice()` takes 2 params. Our access `token` and the `deviceId`. This method returns a promise which on 'resolve', provides us with all the attributes for this device.

```js
{
  body: {
    id: '1234567890',
    name: 'captain_narwhal',
    last_app: null,
    last_ip_address: '121.44.225.75',
    last_heard: '2016-07-19T10:49:16.293Z',
    product_id: 6,
    connected: true,
    platform_id: 6,
    cellular: false,
    status: 'normal',
    pinned_build_target: '0.4.4',
    variables: {},
    functions: [],
    cc3000_patch_version: 'wl0: Nov  7 2014 16:03:45 version 5.90.230.12 FWID 01-f4b8d43f'
  },
  statusCode: 200
}
```

### Usage

```bash
% node getDevice.js
```
