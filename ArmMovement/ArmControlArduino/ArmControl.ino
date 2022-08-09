#include <Servo.h>
int pos;
Servo myservo;
void setup() { 
  Serial.begin(9600);
  myservo.attach(9);}

void loop() {
 
    String data= Serial.readString();
   if(data.indexOf("يمين") > -1){
    pos=180;
    myservo.write(pos);
    Serial.println(pos);
    delay(6000);}
    
  else if(data.indexOf("يسار") > -1){
    pos=0;
    myservo.write(pos);
    Serial.println(pos);
    delay(6000);}
    
  else{
    pos=90;
   myservo.write(pos);
    Serial.println(pos);
    delay(2000);}}
