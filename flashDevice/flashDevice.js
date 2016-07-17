const Particle = require('particle-api-js')
const particle = new Particle()

// creds
const USER = process.env.PARTICLE_USER
const PASS = process.env.PARTICLE_PASS
const DEVICE = process.env.PARTICLE_DEVICE_ID

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
    return flash(res.body.access_token)
  })
  .catch((err) => {
    console.error('Error: ', err)
  })
}

/**
 * flash
 * Pass our device id, token and relative link to our pulsate.ino file,
 * to flashDevice()
 * @param  {String} token - the token passed in from login()
 */

function flash (token) {
  particle.flashDevice({
    deviceId: DEVICE,
    files: {
      file1: './pulsate.ino'
    },
    auth: token
  })
  .then((res) => {
    return console.log('Successfully flashed: ', res)
  })
  .catch((err) => {
    console.error('Error: ', err)
  })
}

// kick out the jams
login()
