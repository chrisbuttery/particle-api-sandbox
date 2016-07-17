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
    return removeDevice(res.body.access_token)
  })
  .catch((err) => {
    console.error('Login Error: ', err)
  })
}

/**
 * removeDevice
 * Pass our token and device id to removeDevice()
 * On resolve, log the devices for our account
 * Then pass the device id to claimDevice()
 * @param  {String} token - the token passed in from login()
 */

function removeDevice (token) {
  particle.removeDevice({
    auth: token,
    deviceId: DEVICE
  })
  .then((res) => {
    console.log(`Removed Device: ${DEVICE} \n`, res)
    return listDevices(token)
  })
  .then(() => {
    return claimDevice(token)
  })
  .catch((err) => {
    console.error('Error: ', err.error.response.text)
  })
}

/**
 * claimDevice
 * Pass our token and device id to claimDevice()
 * On resolve, log the devices for our account
 * @param  {String} token
 */

function claimDevice (token) {
  particle.claimDevice({
    auth: token,
    deviceId: DEVICE
  })
  .then((res) => {
    console.log(`Claimed Device: ${DEVICE} \n`, res)
    return listDevices(token)
  })
  .catch((err) => {
    console.error('Error: ', err.error.response.text)
  })
}

/**
 * listDevices
 * Log all device id/names for this account
 * @param  {String} token
 */

function listDevices (token) {
  particle.listDevices({ auth: token })
  .then((res) => {
    const devices = res.body.map((device) => {
      return {
        id: device.id,
        name: device.name
      }
    })
    console.log('Current Devices:  \n', devices)
  })
  .catch((err) => {
    console.error('Error: ', err)
  })
}

// kick out the jams
login()
