## renameDevice

This example is checks for a connected device and passes it's `id ` to `renameDevice()`.

### JS

Once logged in, we can gain access to a list of devices associated with our Particle account via `particle.listDevices({ auth: token })`.

This method takes 1 param (our access token returned from login) and returns a Promise. On resolve we will have access to an array of devices. We then check for a connected device and pass it to `renameDevice()`.

`renameDevice()` takes 3 params. Our access `token`, the `deviceId` and lastly a name we wish to rename it to. This method returns a promise which on 'resolve', provides us with the status for renaming the device.

```js
{
  body: {
    name: 'denim-demon',
    id: '1234567890'
  },
  statusCode: 200
}
```

### Usage

```bash
% node renameDevice.js
```
