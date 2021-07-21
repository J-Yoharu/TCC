 
 // CONECTA COM O WI-FI
  #include <ESP8266WiFi.h>
  // CRIA O SERVIDOR
  #include <ESP8266WebServer.h> 
  #include <string>


  //VALOR SERIAL P/ COMUNICAÇÃO
  #define valSerial 115200
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

// Dimensões do recipiente de teste

  float pi = 3.14159;
  float altura = 8;
  float raio =  7;
  float total_volume = 0;
  float volume_water = 0;
  
  float distancia = 0;
 
 //NOME E SENHA DA REDE WI-FI
  const char *ssid ="Medina_Net";
  const char *password ="120713Ss";

  bool first;
  ESP8266WebServer server(80);// objeto do servidor na porta 80, padrão

  void setup() {
  
/*==========CONFIGURAÇÃO DO SERVER*============*/
  Serial.begin(valSerial);
  Serial.print("Rede Wi-Fi: ");
  Serial.println(ssid);
  WiFi.begin(ssid,password);
  
//TENTANDO CONEXÃO COM WI-FI
while(WiFi.status() != WL_CONNECTED){
  Serial.print("Tentando conexão com a rede ");
  Serial.println(WiFi.SSID());
  delay(500);
  }
  Serial.print("CONECTADO COM SUCESSO! esse é o seu ip: ");
  Serial.println(WiFi.localIP());
  Serial.println("==============================================================");

/*==========Volume do recipiente*============*/  

total_volume = volume_total(raio, altura);

/*==========CONFIGURAÇÃO DOS PINOS*============*/

 //MODO DOS LEDS
  pinMode(RedLed,OUTPUT);
  pinMode(YellowLed,OUTPUT);
  pinMode(WhiteLed,OUTPUT);

  //MODO DO SENSOR
  pinMode(trigPin,OUTPUT);
  pinMode(echoPin,INPUT);

  // buzzer

  pinMode(buzzer, OUTPUT);
  noTone(buzzer);
}

void loop() {
        // CONFIGURANDO O SENSOR DE DISTANCIA ULTRASSONICO
        digitalWrite(trigPin, LOW);
        delay(500);
        digitalWrite(trigPin, HIGH);
        delay(500);
        digitalWrite(trigPin, LOW);
        unsigned long duracao = pulseIn(echoPin, HIGH);
        distancia = (duracao * 0.034)/2;
        server.handleClient(); //CHAMANDO REQUISIÇÕES HTTP CONTINUAMENTE 
        Serial.print("Distância em CM: ");
        Serial.println(distancia);

        volume_water = volume_of_water(distancia, altura, raio);
        float percent = (volume_water /total_volume) * 100 ;
        Serial.println(percent);
        

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
float volume_total(float raio, float altura) {

   float area = 0;
   float volume = 0;
   
   area = (pi * (raio * raio));
   volume = area * altura;

  return volume;
}

float volume_of_water(float distancia, float altura, float raio) {

  float water_height = 0;
  float area = 0;
  float volume_water = 0;
  
  water_height = altura - distancia;
  area = (pi * (raio * raio));
  volume_water = area * water_height;

  return volume_water;
  
  }
