const Particle = require('particle-api-js')
const particle = new Particle()

// creds
const DEVICE = process.env.PARTICLE_DEVICE_ID
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
    return toggleLED(res.body.access_token)
  })
  .catch((err) => {
    console.error('Error: ', err)
  })
}

/**
 * toggleLED
 * action callFunction() referencing the led() function flashed to the device.
 * On success of callFunction() call itself recursively, passing in token and
 * return value from the response.
 * @param  {String} token - the token passed in from login()
 * @param  {Number} val - the return value of led(). 1 or a 0
 */

function toggleLED (token, val) {
  particle.callFunction({
    deviceId: DEVICE,
    name: 'led',
    argument: (!val || val === 0) ? 'on' : 'off',
    auth: token
  })
  .then((res) => {
    return toggleLED(token, res.body.return_value)
  })
  .catch((err) => {
    console.error('Error: ', err)
  })
}

// kick out the jams
login()
