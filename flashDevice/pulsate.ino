// ------------
// Pulse
// Pulsate the LEDS
// ------------


int led1 = D0;
int led2 = D7; // built in LED

// specify that we'll be sending voltage to out LEDs
void setup() {
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
}

// turn the LEDs on/off and loop
void loop() {
  // on...
  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);

  // wait...
  delay(100);

  // off...
  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);

  // wait...
  delay(100);

  // on...
  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);

  // wait...
  delay(100);

  // off...
  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);

  // Wait 2 seconds...
  delay(2000);
}
