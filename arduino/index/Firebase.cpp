#include "Firebase.h"

String Firebase::get(String database) {
  connect(database);

  int status = http.GET();
  validStatus(status);
  
  String data = http.getString();
  http.end();
  return data;
  
}

void Firebase::create(String database, String value) {
    connect(database);
    
    int status = http.POST(value);
    validStatus(status);
    Serial.print(http.getString());
}

void Firebase::connect(String database){
   http.begin(FIREBASE_DATABASEURL + database+ ".json", FINGERPRINT);
}

String Firebase::validStatus(int status) {
  if(status <=0){
    http.end();
    return "HTTP error: %s\n",http.errorToString(status).c_str();
  }
  return "success";
}

void Firebase::init(String dbUrl, String fingerprint){
   FIREBASE_DATABASEURL = dbUrl;
   FINGERPRINT = fingerprint;
}
