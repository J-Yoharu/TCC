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
      void connect(String database);
      String validStatus(int status);
      
      
    public:
     void init(String dbUrl,String fingerprint);
     String get(String database);
     void create(String database, String value);
     
};

#endif
