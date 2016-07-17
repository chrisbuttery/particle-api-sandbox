# particle-api-sandbox

A sandbox for foolin' around with [Particle API JS](https://docs.particle.io/reference/javascript/).

These examples were developed using the following:
* The [Photon](https://store.particle.io/?product=particle-photon&utm_source=Proto&utm_medium=Button&utm_content=Photon&utm_campaign=Buy)
* nodejs `6.3.0`
* A `.particlerc` dot file with my Particle credentials

For example:

```bash
export PARTICLE_DEVICE_ID="your_device_id"
export PARTICLE_USER="username"
export PARTICLE_PASS='password'
```

## API
* [callFunction](callFunction/)
* [listDevices](listDevices/)
* claimDevice
* flashDevice
* getDevice
* getVariable
* removeDevice
* renameDevice
* signalDevice
* sendPublicKey
* getEventStream
* publishEvent
* compileCode
* createUser
* listAccessTokens
* removeAccessToken
