int pin1, pin2;

void setup() {
  Serial.begin(9600);
  pinMode(pin1, OUTPUT);
  pinMode(pin2, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    String recebido = leStringSerial();

    String tipo = getValue(recebido, '&', 0);

    if (tipo.compareTo("conf") == 0) {

      String conf1 = getValue(recebido, '&', 1);
      String conf2 = getValue(recebido, '&', 2);

      pin1 = conf1.toInt();
      pin2 = conf2.toInt();

      digitalWrite(pin1, HIGH);
      digitalWrite(pin2, HIGH);
      delay(1000);
      digitalWrite(pin1, LOW);
      digitalWrite(pin2, LOW);

    } else {

      if (tipo.compareTo("prog") == 0) {

        int count = 4;

        for (int com = 1; com <= count; com++) {

          Serial.println(com);

          String comando = getValue(recebido, '&', com);

          String motor = getValue(comando, ':', 0);

          Serial.println(motor);

          String posicao = getValue(comando, ':', 1);

          Serial.println(posicao);

          int motint = motor.toInt();
          int posint = posicao.toInt();

          if (motint == 1) {
            if (posint == 0) {
              digitalWrite(pin1, HIGH);
            } else {
              digitalWrite(pin1, LOW);
            }
          }
          if (motint == 2) {
            if (posint == 0) {
              digitalWrite(pin2, HIGH);
            } else {
              digitalWrite(pin2, LOW);
            }
          }
          delay(1000);
        }
      }

    }
  }
}

String leStringSerial() {
  String conteudo = "";
  char caractere;

  while (Serial.available() > 0) {
    caractere = Serial.read();
    if (caractere != '\n' && caractere != 25) {
      conteudo.concat(caractere);
    }
    delay(10);
  }

  Serial.print("Recebi: ");
  Serial.println(conteudo);

  return conteudo;
}

String getValue(String data, char separator, int index) {
  int found = 0;
  int strIndex[] = { 0, -1 };
  int maxIndex = data.length() - 1;

  for (int i = 0; i <= maxIndex && found <= index; i++) {
    if (data.charAt(i) == separator || i == maxIndex) {
      found++;
      strIndex[0] = strIndex[1] + 1;
      strIndex[1] = (i == maxIndex) ? i + 1 : i;
    }
  }
  return found > index ? data.substring(strIndex[0], strIndex[1]) : "";
}
