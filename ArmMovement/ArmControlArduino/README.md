## How does it work?
**When we say "يمين" <sub>Right in Arabic</sub> the servo motor which controls the arm movement and connected with the Arduino board will move the arm to the right side by angle of 180,
as well as when we say "يسار" <sub>Left in Arabic</sub> the servo motor will move the arm to the left side by angle of 0.
When nothing said or the robot hear things other than "يمين" or "يسار" the arm won't move it will stay at 90 degree.**
### notes:
* **Because we don't have the servo motor to run the code on it and we only have Wemose ESP32 board, we wrote another code response to what we say except that when we say "يمين" the blue light turns on and when we say "يسار" only the red light will be on otherwise the board will blink.**

* **Another note that after about 6 seconds from each command; the board will start blinking again! as on the arm or robot, after some amount of time the arm will returns back to its initial position.**
