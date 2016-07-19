# particle-api-sandbox

A sandbox for foolin' around with [Particle API JS](https://docs.particle.io/reference/javascript/).

These examples were developed using the following:
* Particle: v1.15.0. (`npm install -g particle-cli`)
* The [Photon](https://store.particle.io/?product=particle-photon&utm_source=Proto&utm_medium=Button&utm_content=Photon&utm_campaign=Buy)
* nodejs `6.3.0`
* A `.particlerc` dot file with my Particle credentials

For example:

```bash
export PARTICLE_USER="username"
export PARTICLE_PASS='password'
export PARTICLE_DEVICE_ID="your_device_id"
```

## API
* [callFunction](callFunction/)
* [listDevices](listDevices/)
* [claimDevice](removeAndClaimDevice)
* [flashDevice](flashDevice/)
* [getDevice](getDevice/)
* getVariable
* [removeDevice](removeAndClaimDevice)
* [renameDevice](renameDevice/)
* signalDevice
* sendPublicKey
* getEventStream
* publishEvent
* compileCode
* createUser
* listAccessTokens
* removeAccessToken
