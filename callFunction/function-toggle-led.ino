// ------------
// Function Toggle LED
// ------------

// define our pin
int led = D0;

/**
 * setup
 * Specify that the `led` will receive voltage
 * Associate the function name 'led' to ledToggle()
 */

void setup () {
  pinMode(led, OUTPUT);
  Spark.function("led", toggleLED);
}

/**
 * toggleLED
 * Take a string as `command`.
 * It `on` set the `led` voltage to HIGH, else LOW
 */

int toggleLED (String command) {
  if (command=="on") {
    digitalWrite(led, HIGH);
    return 1;
  }
  else {
    digitalWrite(led, LOW);
    return 0;
  }
}
