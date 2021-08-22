#include "Firebase.h"

String Firebase::get(String database) {
 http.begin(FIREBASE_DATABASEURL + database+ ".json", FINGERPRINT);
 
  int status = http.GET();
  
  
  if (status <= 0) {
    http.end();
    return "HTTP error: %s\n",http.errorToString(status).c_str();
  }

  String data = http.getString();
  http.end();
  return data;
  
}

void Firebase::init(String dbUrl, String fingerprint){
   FIREBASE_DATABASEURL = dbUrl;
   FINGERPRINT = fingerprint;
}
