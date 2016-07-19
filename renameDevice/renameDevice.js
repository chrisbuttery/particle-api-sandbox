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
 * device id to getDevice()
 */

function listUserDevices (token, filterConnectedDevice = true) {
  particle.listDevices({ auth: token })
  .then((res) => {
    const devices = res.body
    console.log('All devices \n', abstractDeviceData(devices))

    if (filterConnectedDevice) {
      const connected = devices.filter((device) => {
        return device.connected
      })
      return connected.length
        ? renameDevice(token, connected[0].id)
        : false
    }
  })
  .catch((err) => {
    console.error('Error: ', err)
  })
}

/**
 * abstractDeviceData
 * Pull out the id and name of a device
 * @param  {Array} devices
 * @return {Array}
 */

function abstractDeviceData (devices) {
  return devices.map((device) => {
    return {
      id: device.id,
      name: device.name
    }
  })
}

/**
 * renameDevice
 * Log the attributes of a device
 * @param  {String} token
 * @param  {String} id
 */

function renameDevice (token, id) {
  particle.renameDevice({
    auth: token,
    deviceId: id,
    name: 'denim-demon'
  })
  .then((res) => {
    console.log('renamed Device \n', res)
    listUserDevices(token, false)
  })
  .catch((err) => {
    console.error('Error: ', err)
  })
}
// kick out the jams
login()
