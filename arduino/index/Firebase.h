#ifndef MY_FIREBASE_H
#define MY_FIREBASE_H

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>



class Firebase {
    private:
      HTTPClient http;
      String database;
      String FIREBASE_DATABASEURL;
      String FINGERPRINT;
      String geta();
      
    public:
     void init(String dbUrl,String fingerprint);
     String get(String database);
};

#endif
