#include "WaterMonitor.h"

float WaterMonitor::volume_total(float raio, float altura, float pi) {

   float area = 0;
   float volume = 0;
   
   area = (pi * (raio * raio));
   volume = area * altura;

  return volume;
}


float WaterMonitor::percent_volume_of_water(float distancia, float altura, float raio, float total_volume, float pi){
    float water_height = 0;
    float area = 0;
    float volume_water = 0;
    
    water_height = altura - distancia;
    area = (pi * (raio * raio));
    volume_water = area * water_height;

    float percent = (volume_water /total_volume) * 100 ;
    return percent;
}

void WaterMonitor::alert(float percent) {
  
                                   if(percent <= limite1 ){        

                                         noTone(buzzer);
                                         digitalWrite(WhiteLed, HIGH);
                                         digitalWrite(RedLed, LOW);
                                         digitalWrite(YellowLed, LOW);      
                                   }else if ((percent <= limite2) && (percent >= limite1)){
                   
                                        digitalWrite(YellowLed, HIGH);   
                                        digitalWrite(RedLed, LOW);
                                        digitalWrite(WhiteLed, LOW);  

                                        // ligando o buzzer
                                        noTone(buzzer);
                                        tone(buzzer,1000); 

                                        // desligando o buzzer
                                        delay(1000);
                                        noTone(buzzer);  
                                        delay(1000);   
                                                                                                                                                     
                                   }else {

                                        digitalWrite(RedLed, HIGH);
                                        digitalWrite(YellowLed, LOW);                                   
                                        digitalWrite(WhiteLed, LOW);

                                        // ligando o buzzer
                                        tone(buzzer, 1000);
                                         }  
}

void WaterMonitor::init(){
        //MODO DOS LEDS
        pinMode(RedLed,OUTPUT);
        pinMode(YellowLed,OUTPUT);
        pinMode(WhiteLed,OUTPUT);

      

        // buzzer

        pinMode(buzzer, OUTPUT);
        noTone(buzzer);
}
