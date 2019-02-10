/*global systemDictionary:true */
'use strict';

systemDictionary = {
    "Auto": {                                        "en": "Auto",                                            "de": "Auto",                                            "ru": "Авто",                                            "pt": "Auto",                                            "nl": "Auto",                                            "fr": "Auto",                                            "it": "Auto",                                            "es": "Auto",                                            "pl": "Auto",                                            "zh-cn": "汽车"},
    "Manual": {                                      "en": "Manual",                                          "de": "Manuell",                                         "ru": "Руководство",                                     "pt": "Manual",                                          "nl": "Handleiding",                                     "fr": "Manuel",                                          "it": "Manuale",                                         "es": "Manual",                                          "pl": "Podręcznik",                                      "zh-cn": "手册"},
    "autoupd": {                                     "en": "Periodic state updates",                          "de": "Periodische Statusaktualisierungen",              "ru": "Периодического обновления состояния",             "pt": "Periódicas atualizações de estado de",            "nl": "Periodieke status updates",                       "fr": "Périodique de l'état des mises à jour",           "it": "Periodico di aggiornamenti di stato",             "es": "Periódico del estado de las actualizaciones",     "pl": "Okresowe aktualizacje stanu",                     "zh-cn": "周期性状态的更新"},
    "host_cb": {                                     "en": "Use Callback",                                    "de": "Benutze Callback",                                "ru": "Использование Обратного Вызова",                  "pt": "Utilizar A Chamada De Retorno",                   "nl": "Terugbellen Gebruik.",                            "fr": "L'Utilisation De Rappel",                         "it": "Richiamata",                                      "es": "El Uso De Devolución De Llamada",                 "pl": "Korzystanie Z Oddzwonienia",                      "zh-cn": "使用回调"},
    "host_port": {                                   "en": "Callback port in ioBroker",                       "de": "Callback-Port in ioBroker",                       "ru": "Порт обратного вызова в ioBroker",                "pt": "Porta de retorno de chamada em ioBroker",         "nl": "Callback-poort in ioBroker",                      "fr": "Rappel de port en ioBroker",                      "it": "Richiamata la porta in ioBroker",                 "es": "Devolución de llamada de puerto en ioBroker",     "pl": "Port oddzwonienia w ioBroker",                    "zh-cn": "回港口ioBroker"},
    "interval": {                                    "en": "Update interval (in minutes)",                    "de": "Aktualisierungsintervall (in Minuten)",           "ru": "Интервал обновления (в минутах)",                 "pt": "Intervalo de atualização (em minutos)",           "nl": "Update-interval (in minuten)",                    "fr": "Intervalle de mise à jour (en minutes)",          "it": "Aggiornamento intervallo di tempo (in minuti)",   "es": "Intervalo de actualización (en minutos)",         "pl": "Odstęp czasu (w minutach)",                       "zh-cn": "更新的时间间隔(在分钟)"},
    "ip": {                                          "en": "IP address of the Nuki bridge",                   "de": "IP-Adresse der Nuki Bridge",                      "ru": "IP-адрес моста Нуки ",                            "pt": "Endereço IP do Nuki ponte",                       "nl": "IP-adres van de Nuki brug",                       "fr": "Adresse IP de l'Nuki pont",                       "it": "L'indirizzo IP di Nuki ponte",                    "es": "Dirección IP del puente de Nuki",                 "pl": "Adres IP mostu Нуки ",                            "zh-cn": "IP地址Nuki桥"},
    "ipeg": {                                        "en": "e.g. 192.168.1.50",                               "de": "z.B. 192.168.1.50",                               "ru": "например 192.168.1.50",                           "pt": "e.g. 192.168.1.50",                               "nl": "bijvoorbeeld 192.168.1.50",                       "fr": "par exemple, 192.168.1.50",                       "it": "ad esempio, 192.168.1.50",                        "es": "por ejemplo, 192.168.1.50",                       "pl": "na przykład 192.168.1.50",                        "zh-cn": "例如192.168.1.50"},
    "name": {                                        "en": "Name of the Nuki bridge",                         "de": "Name der Nuki Bridge",                            "ru": "Название моста Нуки ",                            "pt": "Nome do Nuki ponte",                              "nl": "Naam van de brug Nuki",                           "fr": "Nom de la Nuki pont",                             "it": "Nome del Nuki ponte",                             "es": "Nombre de la Nuki puente",                        "pl": "Nazwa mostu Нуки ",                               "zh-cn": "名称的Nuki桥"},
    "nuki_port": {                                   "en": "Port of the Nuki bridge",                         "de": "Port der Nuki Bridge",                            "ru": "Порт моста Нуки ",                                "pt": "A porta do Nuki ponte",                           "nl": "De haven van de Nuki brug",                       "fr": "Le Port de la Nuki pont",                         "it": "La porta del ponte Nuki",                         "es": "Puerto de la Nuki puente",                        "pl": "Port mostu Нуки ",                                "zh-cn": "港口的Nuki桥"},
    "on save adapter restarts with new config immediately": {"en": "on save adapter restarts with new config immediately", "de": "Beim Speichern der Einstellungen wird der Adapter sofort neu gestartet.", "ru": "сохранить адаптера перезагрузки с новый конфиг сразу", "pt": "em salvar adaptador reinicia com nova configuração e imediatamente", "nl": "op bespaar adapter opnieuw met nieuwe config onmiddellijk", "fr": "sur enregistrer l'adaptateur redémarre avec la nouvelle configuration, immédiatement", "it": "salva adattatore riavvia con la nuova config immediatamente", "es": "en guardar adaptador se reinicia con la nueva config de inmediato", "pl": "zapisz ponownym uruchomieniu zasilacza z nowy konfig raz", "zh-cn": "在保存适配器重新启动与新的配置立即"},
    "settings": {                                    "en": "Nuki adapter settings",                           "de": "Nuki Adaptereinstellungen",                       "ru": "Параметров адаптера Нуки ",                       "pt": "Nuki as configurações do adaptador",              "nl": "Nuki adapter instellingen",                       "fr": "Nuki les paramètres de la carte",                 "it": "Nuki impostazioni della scheda di",               "es": "Nuki configuración del adaptador",                "pl": "Ustawienia karty sieciowej Нуки ",                "zh-cn": "Nuki设置适配器"},
    "token": {                                       "en": "Token",                                           "de": "Token",                                           "ru": "Маркер",                                          "pt": "Token",                                           "nl": "Token",                                           "fr": "Jeton",                                           "it": "Token",                                           "es": "Token",                                           "pl": "Marker",                                          "zh-cn": "令牌"},
};