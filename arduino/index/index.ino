 
  #include <ESP8266WiFi.h>
  #include <ESP8266WebServer.h> 
  #include <WebSocketsServer.h>
  #include <ESP8266WiFi.h>
  #include "Firebase.h"
  #include "WaterMonitor.h"

  //get fingerprint from firebaseio.com https://www.grc.com/fingerprints.htm SÓ COLAR A URL DO SITE
  #define FIREBASE_DATABASEURL "https://tcc-unip-4d803-default-rtdb.firebaseio.com/"
  #define FINGERPRINT "50:89:50:57:90:1F:37:E3:B8:F3:5B:02:ED:3A:65:6E:6A:34:DB:93" //para sites HTTPS

  WebSocketsServer webSocket = WebSocketsServer(8081);

  //VALOR SERIAL P/ COMUNICAÇÃO
  #define valSerial 115200

  // Dimensões do recipiente de teste
  float pi = 3.14159;
  float altura = 8;
  float raio =  7;
  float total_volume = 0;
  float volume_water = 0;
  bool first; 

  Firebase firebase;
  WaterMonitor monitor;
  
  char data[5];
  
 //NOME E SENHA DA REDE WI-FI
  const char *ssid ="Jonabru";
  const char *password ="11029701b";

  ESP8266WebServer server(80);// objeto do servidor na porta 80, padrão

  void setup() {
    
  Serial.begin(valSerial);
  webSocket.begin();
  connectWifi();

  firebase.init(FIREBASE_DATABASEURL,FINGERPRINT);
  total_volume = monitor.volume_total(raio, altura, pi);

}

void loop() {
        webSocket.loop();
        String data = firebase.get("led");
        Serial.print(data);
    
//        server.handleClient(); //CHAMANDO REQUISIÇÕES HTTP CONTINUAMENTE 
        
//        float distance = getDistance();
//        float percent = monitor.percent_volume_of_water(distance, altura, raio, total_volume, pi);
//        
//        monitor.alert(percent);
//  
//        Serial.print("Distância em CM: ");
//        Serial.println(distance);
//        Serial.println(percent);
//        sendToSocket(percent);                                   
   }


float getDistance(){
      // CONFIGURANDO O SENSOR DE DISTANCIA ULTRASSONICO
      digitalWrite(trigPin, LOW);
      delay(500);
      digitalWrite(trigPin, HIGH);
      delay(500);
      digitalWrite(trigPin, LOW);
      unsigned long duracao = pulseIn(echoPin, HIGH);
      float distance = (duracao * 0.034)/2;
      return distance;
}

void sendToSocket(float value){
   char *valor = dtostrf(value,4,0,data);
    webSocket.broadcastTXT(valor);
}


void connectWifi()
{
  WiFi.begin(ssid, password);
  Serial.print("Conectando...");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println("Conectado a: ");
  Serial.print(WiFi.localIP());
}
