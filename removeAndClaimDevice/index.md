## Remove and claim a device

This example is combining 2 methods from the particle API.

First we're going to remove a specific device from our Particle user account and then claim the device again. To indicate the process has been successful we'll log a list of devices in our user account after we action each of these methods.

Instead of checking for a logged in device, we'll tell particle exactly which device to remove and claim

```js
// get the device from our `.particlerc` dot file, or just replace 'process.env.PARTICLE_DEVICE_ID' with it
const DEVICE = process.env.PARTICLE_DEVICE_ID
```

```bash
Connected to Particle

Removed Device: 1234567890
 { body: { ok: true }, statusCode: 200 }

Claimed Device:
 { body:
   { user_id: '1234',
     id: '3333333333',
     connected: true,
     ok: true },
  statusCode: 200 }

Current Devices:
 [ { id: '1111111111', name: 'wombat_ranger' },
  { id: '2222222222', name: 'turkey_morphing' } ]

Current Devices:
 [ { id: '3333333333', name: 'captain_narwhal' },
  { id: '1111111111', name: 'wombat_ranger' },
  { id: '2222222222', name: 'turkey_morphing' } ]
```