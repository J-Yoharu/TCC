#ifndef MY_WATERMONITOR_H
#define MY_WATERMONITOR_H

#include <ESP8266WiFi.h>

  //DEFINIÇÃO DOS LEDS E SEUS PINOS 
  #define RedLed 0
  #define YellowLed 4
  #define WhiteLed 5
  // buzzer 
  #define buzzer 13
 // LIMITE DE DIST NCIA EM RELAÇÃO AO RESERVATÓRIO
  #define limite1 40
  #define limite2 80

//DEFINIÇÃO DO SENSOR E SEUS PINOS
  #define trigPin 12
  #define echoPin 14

class WaterMonitor {
    private: 
    
    public:
        void init();
        float percent_volume_of_water(float distancia, float altura, float raio, float total_volume, float pi);
        float volume_total(float raio, float altura, float pi);
        void alert(float percent);
};

#endif