const Particle = require('particle-api-js')
const particle = new Particle()

// creds
const USER = process.env.PARTICLE_USER
const PASS = process.env.PARTICLE_PASS

/**
 * login
 * log into particle.
 * On success call toggleLED()
 * otherwise write error to the console
 */

function login () {
  particle.login({
    username: USER,
    password: PASS
  })
  .then((res) => {
    console.log('Connected to Particle')
    return listUserDevices(res.body.access_token)
  })
  .catch((err) => {
    console.error('Error: ', err)
  })
}

/**
 * listUserDevices
 * Instead of passing in an explicit device id, we're going to check out
 * Particle for devices, and look for a 'connected: true' prop/value.
 * If found, we'll pass the token we received when logging in, and the connected
 * device id to triggerLED()
 */

function listUserDevices (token) {
  particle.listDevices({ auth: token })
  .then((res) => {
    const devices = res.body
    const filteredDevice = devices.filter((device) => {
      return device.connected
    })
    return filteredDevice.length
      ? triggerLED(token, filteredDevice[0].id)
      : false
  })
  .catch((err) => {
    console.error('Error: ', err)
  })
}

/**
 * triggerLED
 * Take a token and device id, and call the 'led' function on the device.
 * Make sure the device was flashed with 'function-toggle-led.ino'
 * @param  {String} token - the token passed in from login()
 * @param  {Number} id - the id of a connected device
 */

function triggerLED (token, id) {
  particle.callFunction({
    deviceId: id,
    name: 'led',
    argument: 'on',
    auth: token
  })
  .catch((err) => {
    console.error('Error: ', err)
  })
}

// kick out the jams
login()
