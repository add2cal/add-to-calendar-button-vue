import { defineComponent as Le, h as De } from "vue";
/*!
 *  @preserve
 *
 * ++++++++++++++++++++++++++++++++++++++
 * Add to Calendar TimeZones iCal Library
 * ++++++++++++++++++++++++++++++++++++++
 *
 * Version: 1.4.2
 * Creator: Jens Kuerschner (https://jenskuerschner.de)
 * Project: https://github.com/add2cal/timezones-ical-library
 * License: Apache-2.0
 *
 */
const C = { Africa: { Abidjan: ["", 0], Accra: ["Africa/Abidjan", 0], Addis_Ababa: ["Africa/Nairobi", 1], Algiers: ["", 2], Asmara: ["Africa/Nairobi", 1], Asmera: ["Africa/Nairobi", 1], Bamako: ["Africa/Abidjan", 0], Bangui: ["Africa/Lagos", 3], Banjul: ["Africa/Abidjan", 0], Bissau: ["", 0], Blantyre: ["Africa/Maputo", 4], Brazzaville: ["Africa/Lagos", 3], Bujumbura: ["Africa/Maputo", 4], Cairo: ["", 5], Casablanca: ["", 6], Ceuta: ["", 7], Conakry: ["Africa/Abidjan", 0], Dakar: ["Africa/Abidjan", 0], Dar_es_Salaam: ["Africa/Nairobi", 1], Djibouti: ["Africa/Nairobi", 1], Douala: ["Africa/Lagos", 3], El_Aaiun: ["", 6], Freetown: ["Africa/Abidjan", 0], Gaborone: ["Africa/Maputo", 4], Harare: ["Africa/Maputo", 4], Johannesburg: ["", 8], Juba: ["", 4], Kampala: ["Africa/Nairobi", 1], Khartoum: ["", 4], Kigali: ["Africa/Maputo", 4], Kinshasa: ["Africa/Lagos", 3], Lagos: ["", 3], Libreville: ["Africa/Lagos", 3], Lome: ["Africa/Abidjan", 0], Luanda: ["Africa/Lagos", 3], Lubumbashi: ["Africa/Maputo", 4], Lusaka: ["Africa/Maputo", 4], Malabo: ["Africa/Lagos", 3], Maputo: ["", 4], Maseru: ["Africa/Johannesburg", 8], Mbabane: ["Africa/Johannesburg", 8], Mogadishu: ["Africa/Nairobi", 1], Monrovia: ["", 0], Nairobi: ["", 1], Ndjamena: ["", 3], Niamey: ["Africa/Lagos", 3], Nouakchott: ["Africa/Abidjan", 0], Ouagadougou: ["Africa/Abidjan", 0], "Porto-Novo": ["Africa/Lagos", 3], Sao_Tome: ["", 0], Timbuktu: ["Africa/Abidjan", 0], Tripoli: ["", 5], Tunis: ["", 2], Windhoek: ["", 4] }, America: { Adak: ["", 9], Anchorage: ["", 10], Anguilla: ["America/Puerto_Rico", 11], Antigua: ["America/Puerto_Rico", 11], Araguaina: ["", 12], Argentina: { Buenos_Aires: ["", 12], Catamarca: ["", 12], ComodRivadavia: ["America/Argentina/Catamarca", 12], Cordoba: ["", 12], Jujuy: ["", 12], La_Rioja: ["", 12], Mendoza: ["", 12], Rio_Gallegos: ["", 12], Salta: ["", 12], San_Juan: ["", 12], San_Luis: ["", 12], Tucuman: ["", 12], Ushuaia: ["", 12] }, Aruba: ["America/Puerto_Rico", 11], Asuncion: ["", 13], Atikokan: ["America/Panama", 14], Atka: ["America/Adak", 9], Bahia_Banderas: ["", 15], Bahia: ["", 12], Barbados: ["", 11], Belem: ["", 12], Belize: ["", 16], "Blanc-Sablon": ["America/Puerto_Rico", 11], Boa_Vista: ["", 17], Bogota: ["", 18], Boise: ["", 19], Buenos_Aires: ["America/Argentina/Buenos_Aires", 12], Cambridge_Bay: ["", 19], Campo_Grande: ["", 17], Cancun: ["", 14], Caracas: ["", 17], Catamarca: ["America/Argentina/Catamarca", 12], Cayenne: ["", 12], Cayman: ["America/Panama", 14], Chicago: ["", 20], Chihuahua: ["", 21], Coral_Harbour: ["America/Panama", 14], Cordoba: ["America/Argentina/Cordoba", 12], Costa_Rica: ["", 16], Creston: ["America/Phoenix", 22], Cuiaba: ["", 17], Curacao: ["America/Puerto_Rico", 11], Danmarkshavn: ["", 0], Dawson_Creek: ["", 22], Dawson: ["", 22], Denver: ["", 19], Detroit: ["", 23], Dominica: ["America/Puerto_Rico", 11], Edmonton: ["", 19], Eirunepe: ["", 18], El_Salvador: ["", 16], Ensenada: ["America/Tijuana", 24], Fort_Nelson: ["", 22], Fort_Wayne: ["America/Indiana/Indianapolis", 23], Fortaleza: ["", 12], Glace_Bay: ["", 25], Godthab: ["America/Nuuk", 26], Goose_Bay: ["", 27], Grand_Turk: ["", 28], Grenada: ["America/Puerto_Rico", 11], Guadeloupe: ["America/Puerto_Rico", 11], Guatemala: ["", 16], Guayaquil: ["", 18], Guyana: ["", 17], Halifax: ["", 25], Havana: ["", 29], Hermosillo: ["", 22], Indiana: { Indianapolis: ["", 23], Knox: ["", 20], Marengo: ["", 23], Petersburg: ["", 23], Tell_City: ["", 20], Vevay: ["", 23], Vincennes: ["", 23], Winamac: ["", 28] }, Indianapolis: ["America/Indiana/Indianapolis", 23], Inuvik: ["", 19], Iqaluit: ["", 23], Jamaica: ["", 14], Jujuy: ["America/Argentina/Jujuy", 12], Juneau: ["", 10], Kentucky: { Louisville: ["", 23], Monticello: ["", 23] }, Knox_IN: ["America/Indiana/Knox", 20], Kralendijk: ["America/Puerto_Rico", 11], La_Paz: ["", 17], Lima: ["", 18], Los_Angeles: ["", 24], Louisville: ["America/Kentucky/Louisville", 23], Lower_Princes: ["America/Puerto_Rico", 11], Maceio: ["", 12], Managua: ["", 16], Manaus: ["", 17], Marigot: ["America/Puerto_Rico", 11], Martinique: ["", 11], Matamoros: ["", 20], Mazatlan: ["", 21], Mendoza: ["America/Argentina/Mendoza", 12], Menominee: ["", 20], Merida: ["", 30], Metlakatla: ["", 10], Mexico_City: ["", 30], Miquelon: ["", 31], Moncton: ["", 25], Monterrey: ["", 30], Montevideo: ["", 12], Montreal: ["America/Toronto", 23], Montserrat: ["America/Puerto_Rico", 11], Nassau: ["America/Toronto", 23], New_York: ["", 23], Nipigon: ["", 23], Nome: ["", 10], Noronha: ["", 32], North_Dakota: { Beulah: ["", 20], Center: ["", 20], New_Salem: ["", 20] }, Nuuk: ["", 26], Ojinaga: ["", 19], Panama: ["", 14], Pangnirtung: ["", 23], Paramaribo: ["", 12], Phoenix: ["", 22], Port_of_Spain: ["America/Puerto_Rico", 11], "Port-au-Prince": ["", 23], Porto_Acre: ["America/Rio_Branco", 18], Porto_Velho: ["", 17], Puerto_Rico: ["", 11], Punta_Arenas: ["", 12], Rainy_River: ["", 20], Rankin_Inlet: ["", 20], Recife: ["", 12], Regina: ["", 16], Resolute: ["", 33], Rio_Branco: ["", 18], Rosario: ["America/Argentina/Cordoba", 12], Santa_Isabel: ["America/Tijuana", 24], Santarem: ["", 12], Santiago: ["", 34], Santo_Domingo: ["", 11], Sao_Paulo: ["", 12], Scoresbysund: ["", 35], Shiprock: ["America/Denver", 19], Sitka: ["", 10], St_Barthelemy: ["America/Puerto_Rico", 11], St_Johns: ["", 36], St_Kitts: ["America/Puerto_Rico", 11], St_Lucia: ["America/Puerto_Rico", 11], St_Thomas: ["America/Puerto_Rico", 11], St_Vincent: ["America/Puerto_Rico", 11], Swift_Current: ["", 16], Tegucigalpa: ["", 16], Thule: ["", 25], Thunder_Bay: ["", 23], Tijuana: ["", 24], Toronto: ["", 23], Tortola: ["America/Puerto_Rico", 11], Vancouver: ["", 24], Virgin: ["America/Puerto_Rico", 11], Whitehorse: ["", 22], Winnipeg: ["", 20], Yakutat: ["", 10], Yellowknife: ["", 19] }, Antarctica: { Casey: ["", 37], Davis: ["", 38], DumontDUrville: ["Pacific/Port_Moresby", 39], Macquarie: ["", 40], Mawson: ["", 41], McMurdo: ["Pacific/Auckland", 42], Palmer: ["", 12], Rothera: ["", 12], South_Pole: ["Pacific/Auckland", 42], Syowa: ["Asia/Riyadh", 43], Troll: ["", 44], Vostok: ["Asia/Urumqi", 45] }, Arctic: { Longyearbyen: ["Europe/Berlin", 7] }, Asia: { Aden: ["Asia/Riyadh", 43], Almaty: ["", 45], Amman: ["", 43], Anadyr: ["", 46], Aqtau: ["", 41], Aqtobe: ["", 41], Ashgabat: ["", 41], Ashkhabad: ["Asia/Ashgabat", 41], Atyrau: ["", 41], Baghdad: ["", 43], Bahrain: ["Asia/Qatar", 43], Baku: ["", 47], Bangkok: ["", 38], Barnaul: ["", 38], Beirut: ["", 48], Bishkek: ["", 45], Brunei: ["Asia/Kuching", 49], Calcutta: ["Asia/Kolkata", 50], Chita: ["", 51], Choibalsan: ["", 49], Chongqing: ["Asia/Shanghai", 52], Chungking: ["Asia/Shanghai", 52], Colombo: ["", 53], Dacca: ["Asia/Dhaka", 45], Damascus: ["", 43], Dhaka: ["", 45], Dili: ["", 51], Dubai: ["", 47], Dushanbe: ["", 41], Famagusta: ["", 54], Gaza: ["", 55], Harbin: ["Asia/Shanghai", 52], Hebron: ["", 55], Ho_Chi_Minh: ["", 38], Hong_Kong: ["", 56], Hovd: ["", 38], Irkutsk: ["", 49], Istanbul: ["Europe/Istanbul", 43], Jakarta: ["", 57], Jayapura: ["", 58], Jerusalem: ["", 59], Kabul: ["", 60], Kamchatka: ["", 46], Karachi: ["", 61], Kashgar: ["Asia/Urumqi", 45], Kathmandu: ["", 62], Katmandu: ["Asia/Kathmandu", 62], Khandyga: ["", 51], Kolkata: ["", 50], Krasnoyarsk: ["", 38], Kuala_Lumpur: ["Asia/Singapore", 49], Kuching: ["", 49], Kuwait: ["Asia/Riyadh", 43], Macao: ["Asia/Macau", 52], Macau: ["", 52], Magadan: ["", 37], Makassar: ["", 63], Manila: ["", 64], Muscat: ["Asia/Dubai", 47], Nicosia: ["", 65], Novokuznetsk: ["", 38], Novosibirsk: ["", 38], Omsk: ["", 45], Oral: ["", 41], Phnom_Penh: ["Asia/Bangkok", 38], Pontianak: ["", 57], Pyongyang: ["", 66], Qatar: ["", 43], Qostanay: ["", 45], Qyzylorda: ["", 41], Rangoon: ["Asia/Yangon", 67], Riyadh: ["", 43], Saigon: ["Asia/Ho_Chi_Minh", 38], Sakhalin: ["", 37], Samarkand: ["", 41], Seoul: ["", 66], Shanghai: ["", 52], Singapore: ["", 49], Srednekolymsk: ["", 37], Taipei: ["", 52], Tashkent: ["", 41], Tbilisi: ["", 47], Tehran: ["", 68], Tel_Aviv: ["Asia/Jerusalem", 59], Thimbu: ["Asia/Thimphu", 45], Thimphu: ["", 45], Tokyo: ["", 69], Tomsk: ["", 38], Ujung_Pandang: ["Asia/Makassar", 63], Ulaanbaatar: ["", 49], Ulan_Bator: ["Asia/Ulaanbaatar", 49], Urumqi: ["", 45], "Ust-Nera": ["", 39], Vientiane: ["Asia/Bangkok", 38], Vladivostok: ["", 39], Yakutsk: ["", 51], Yangon: ["", 67], Yekaterinburg: ["", 41], Yerevan: ["", 47] }, Atlantic: { Azores: ["", 35], Bermuda: ["", 25], Canary: ["", 70], Cape_Verde: ["", 71], Faeroe: ["Atlantic/Faroe", 70], Faroe: ["", 70], Jan_Mayen: ["Europe/Berlin", 7], Madeira: ["", 70], Reykjavik: ["Africa/Abidjan", 0], South_Georgia: ["", 32], St_Helena: ["Africa/Abidjan", 0], Stanley: ["", 12] }, Australia: { ACT: ["Australia/Sydney", 40], Adelaide: ["", 72], Brisbane: ["", 73], Broken_Hill: ["", 72], Canberra: ["Australia/Sydney", 40], Currie: ["Australia/Hobart", 74], Darwin: ["", 75], Eucla: ["", 76], Hobart: ["", 74], LHI: ["Australia/Lord_Howe", 77], Lindeman: ["", 73], Lord_Howe: ["", 77], Melbourne: ["", 40], North: ["Australia/Darwin", 75], NSW: ["Australia/Sydney", 40], Perth: ["", 78], Queensland: ["Australia/Brisbane", 73], South: ["Australia/Adelaide", 72], Sydney: ["", 40], Tasmania: ["Australia/Hobart", 74], Victoria: ["Australia/Melbourne", 40], West: ["Australia/Perth", 78], Yancowinna: ["Australia/Broken_Hill", 72] }, Brazil: { Acre: ["America/Rio_Branco", 18], DeNoronha: ["America/Noronha", 32], East: ["America/Sao_Paulo", 12], West: ["America/Manaus", 17] }, Canada: { Atlantic: ["America/Halifax", 25], Central: ["America/Winnipeg", 20], Eastern: ["America/Toronto", 23], Mountain: ["America/Edmonton", 19], Newfoundland: ["America/St_Johns", 36], Pacific: ["America/Vancouver", 24], Saskatchewan: ["America/Regina", 16], Yukon: ["America/Whitehorse", 22] }, CET: ["", 7], Chile: { Continental: ["America/Santiago", 34], EasterIsland: ["Pacific/Easter", 79] }, CST6CDT: ["", 20], Cuba: ["America/Havana", 29], EET: ["", 54], Egypt: ["Africa/Cairo", 5], Eire: ["Europe/Dublin", 80], EST: ["", 14], EST5EDT: ["", 23], Etc: { "GMT-0": ["Etc/GMT", 0], "GMT-1": ["", 6], "GMT-10": ["", 39], "GMT-11": ["", 37], "GMT-12": ["", 46], "GMT-13": ["", 81], "GMT-14": ["", 82], "GMT-2": ["", 83], "GMT-3": ["", 43], "GMT-4": ["", 47], "GMT-5": ["", 41], "GMT-6": ["", 45], "GMT-7": ["", 38], "GMT-8": ["", 49], "GMT-9": ["", 51], GMT: ["", 0], "GMT+0": ["Etc/GMT", 0], "GMT+1": ["", 71], "GMT+10": ["", 84], "GMT+11": ["", 85], "GMT+12": ["", 86], "GMT+2": ["", 32], "GMT+3": ["", 12], "GMT+4": ["", 17], "GMT+5": ["", 18], "GMT+6": ["", 87], "GMT+7": ["", 88], "GMT+8": ["", 89], "GMT+9": ["", 90], GMT0: ["Etc/GMT", 0], Greenwich: ["Etc/GMT", 0], UCT: ["Etc/UTC", 91], Universal: ["Etc/UTC", 91], UTC: ["", 91], Zulu: ["Etc/UTC", 91] }, Europe: { Amsterdam: ["Europe/Brussels", 7], Andorra: ["", 7], Astrakhan: ["", 47], Athens: ["", 54], Belfast: ["Europe/London", 92], Belgrade: ["", 7], Berlin: ["", 7], Bratislava: ["Europe/Prague", 7], Brussels: ["", 7], Bucharest: ["", 54], Budapest: ["", 7], Busingen: ["Europe/Zurich", 7], Chisinau: ["", 93], Copenhagen: ["Europe/Berlin", 7], Dublin: ["", 80], Gibraltar: ["", 7], Guernsey: ["Europe/London", 92], Helsinki: ["", 54], Isle_of_Man: ["Europe/London", 92], Istanbul: ["", 43], Jersey: ["Europe/London", 92], Kaliningrad: ["", 5], Kiev: ["Europe/Kyiv", 65], Kirov: ["", 43], Kyiv: ["", 65], Lisbon: ["", 94], Ljubljana: ["Europe/Belgrade", 7], London: ["", 92], Luxembourg: ["Europe/Brussels", 7], Madrid: ["", 7], Malta: ["", 7], Mariehamn: ["Europe/Helsinki", 54], Minsk: ["", 43], Monaco: ["Europe/Paris", 7], Moscow: ["", 95], Nicosia: ["Asia/Nicosia", 65], Oslo: ["Europe/Berlin", 7], Paris: ["", 7], Podgorica: ["Europe/Belgrade", 7], Prague: ["", 7], Riga: ["", 54], Rome: ["", 7], Samara: ["", 47], San_Marino: ["Europe/Rome", 7], Sarajevo: ["Europe/Belgrade", 7], Saratov: ["", 47], Simferopol: ["", 95], Skopje: ["Europe/Belgrade", 7], Sofia: ["", 54], Stockholm: ["Europe/Berlin", 7], Tallinn: ["", 54], Tirane: ["", 7], Tiraspol: ["Europe/Chisinau", 93], Ulyanovsk: ["", 47], Uzhgorod: ["Europe/Kyiv", 65], Vaduz: ["Europe/Zurich", 7], Vatican: ["Europe/Rome", 7], Vienna: ["", 7], Vilnius: ["", 54], Volgograd: ["", 43], Warsaw: ["", 7], Zagreb: ["Europe/Belgrade", 7], Zaporozhye: ["Europe/Kyiv", 65], Zurich: ["", 7] }, "GB-Eire": ["Europe/London", 92], GB: ["Europe/London", 92], "GMT-0": ["Etc/GMT", 0], GMT: ["Etc/GMT", 0], "GMT+0": ["Etc/GMT", 0], GMT0: ["Etc/GMT", 0], Greenwich: ["Etc/GMT", 0], Hongkong: ["Asia/Hong_Kong", 56], HST: ["", 96], Iceland: ["Africa/Abidjan", 0], Indian: { Antananarivo: ["Africa/Nairobi", 1], Chagos: ["", 45], Christmas: ["Asia/Bangkok", 38], Cocos: ["Asia/Yangon", 67], Comoro: ["Africa/Nairobi", 1], Kerguelen: ["Indian/Maldives", 41], Mahe: ["Asia/Dubai", 47], Maldives: ["", 41], Mauritius: ["", 47], Mayotte: ["Africa/Nairobi", 1], Reunion: ["Asia/Dubai", 47] }, Iran: ["Asia/Tehran", 68], Israel: ["Asia/Jerusalem", 59], Jamaica: ["America/Jamaica", 14], Japan: ["Asia/Tokyo", 69], Kwajalein: ["Pacific/Kwajalein", 46], Libya: ["Africa/Tripoli", 5], MET: ["", 97], Mexico: { BajaNorte: ["America/Tijuana", 24], BajaSur: ["America/Mazatlan", 21], General: ["America/Mexico_City", 30] }, MST: ["", 22], MST7MDT: ["", 19], Navajo: ["America/Denver", 19], "NZ-CHAT": ["Pacific/Chatham", 98], NZ: ["Pacific/Auckland", 42], Pacific: { Apia: ["", 81], Auckland: ["", 42], Bougainville: ["", 37], Chatham: ["", 98], Chuuk: ["Pacific/Port_Moresby", 39], Easter: ["", 79], Efate: ["", 37], Enderbury: ["Pacific/Kanton", 81], Fakaofo: ["", 81], Fiji: ["", 99], Funafuti: ["Pacific/Tarawa", 46], Galapagos: ["", 87], Gambier: ["", 90], Guadalcanal: ["", 37], Guam: ["", 100], Honolulu: ["", 96], Johnston: ["Pacific/Honolulu", 96], Kanton: ["", 81], Kiritimati: ["", 82], Kosrae: ["", 37], Kwajalein: ["", 46], Majuro: ["Pacific/Tarawa", 46], Marquesas: ["", 101], Midway: ["Pacific/Pago_Pago", 102], Nauru: ["", 46], Niue: ["", 85], Norfolk: ["", 103], Noumea: ["", 37], Pago_Pago: ["", 102], Palau: ["", 51], Pitcairn: ["", 89], Pohnpei: ["Pacific/Guadalcanal", 37], Ponape: ["Pacific/Guadalcanal", 37], Port_Moresby: ["", 39], Rarotonga: ["", 84], Saipan: ["Pacific/Guam", 100], Samoa: ["Pacific/Pago_Pago", 102], Tahiti: ["", 84], Tarawa: ["", 46], Tongatapu: ["", 81], Truk: ["Pacific/Port_Moresby", 39], Wake: ["Pacific/Tarawa", 46], Wallis: ["Pacific/Tarawa", 46], Yap: ["Pacific/Port_Moresby", 39] }, Poland: ["Europe/Warsaw", 7], Portugal: ["Europe/Lisbon", 94], PRC: ["Asia/Shanghai", 52], PST8PDT: ["", 24], ROC: ["Asia/Taipei", 52], ROK: ["Asia/Seoul", 66], Singapore: ["Asia/Singapore", 49], Turkey: ["Europe/Istanbul", 43], UCT: ["Etc/UTC", 91], Universal: ["Etc/UTC", 91], US: { Alaska: ["America/Anchorage", 10], Aleutian: ["America/Adak", 9], Arizona: ["America/Phoenix", 22], Central: ["America/Chicago", 20], "East-Indiana": ["America/Indiana/Indianapolis", 23], Eastern: ["America/New_York", 23], Hawaii: ["Pacific/Honolulu", 96], "Indiana-Starke": ["America/Indiana/Knox", 20], Michigan: ["America/Detroit", 23], Mountain: ["America/Denver", 19], Pacific: ["America/Los_Angeles", 24], Samoa: ["Pacific/Pago_Pago", 102] }, UTC: ["Etc/UTC", 91], "W-SU": ["Europe/Moscow", 95], WET: ["", 70], Zulu: ["Etc/UTC", 91] }, J = ["20221015T115821Z<n><bs><n><tz>GMT<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>EAT<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>CET<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>WAT<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>CAT<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>EET<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+01<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>CEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>CET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>SAST<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>HDT<n><of>-1000<n><ot>-0900<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>HST<n><of>-0900<n><ot>-1000<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>AKDT<n><of>-0900<n><ot>-0800<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AKST<n><of>-0800<n><ot>-0900<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>AST<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-03<n><of>-0300<n><ot>-0300<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19701004T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700322T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=4SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>EST<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>CST<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-04<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-05<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>MDT<n><of>-0700<n><ot>-0600<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>MST<n><of>-0600<n><ot>-0700<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>MDT<n><of>-0700<n><ot>-0600<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><ed><n><bs><n><tz>MST<n><of>-0600<n><ot>-0700<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>MST<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>PDT<n><of>-0800<n><ot>-0700<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>PST<n><of>-0700<n><ot>-0800<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>-02<n><of>-0300<n><ot>-0200<n><s>19700328T220000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n><bs><n><tz>-03<n><of>-0200<n><ot>-0300<n><s>19701024T230000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA<n><es><n>", "20221015T115821Z<n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>CST<n><of>-0400<n><ot>-0500<n><s>19701101T010000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0500<n><ot>-0400<n><s>19700308T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>", "20221015T115821Z<n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><ed><n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>-02<n><of>-0300<n><ot>-0200<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>-03<n><of>-0200<n><ot>-0300<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>-02<n><of>-0200<n><ot>-0200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700405T000000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19700906T000000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SU<n><ed><n>", "20221015T115821Z<n><bd><n><tz>+00<n><of>-0100<n><ot>+0000<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>-01<n><of>+0000<n><ot>-0100<n><s>19701025T010000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>NST<n><of>-0230<n><ot>-0330<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>NDT<n><of>-0330<n><ot>-0230<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>+11<n><of>+1100<n><ot>+1100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+07<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+10<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>+05<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>NZDT<n><of>+1200<n><ot>+1300<n><s>19700927T020000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>NZST<n><of>+1300<n><ot>+1200<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>+03<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>+02<n><of>+0000<n><ot>+0200<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>+00<n><of>+0200<n><ot>+0000<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>+06<n><of>+0600<n><ot>+0600<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+12<n><of>+1200<n><ot>+1200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+04<n><of>+0400<n><ot>+0400<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>+08<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>IST<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+09<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>CST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0530<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701024T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700328T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n>", "20221015T115821Z<n><bs><n><tz>HKT<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>WIB<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>WIT<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>IDT<n><of>+0200<n><ot>+0300<n><s>19700327T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR<n><ed><n><bs><n><tz>IST<n><of>+0300<n><ot>+0200<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0430<n><of>+0430<n><ot>+0430<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>PKT<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0545<n><of>+0545<n><ot>+0545<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>WITA<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>PST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>KST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0630<n><of>+0630<n><ot>+0630<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0330<n><of>+0330<n><ot>+0330<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>JST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>-01<n><of>-0100<n><ot>-0100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>ACST<n><of>+1030<n><ot>+0930<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>ACDT<n><of>+0930<n><ot>+1030<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>AEST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>ACST<n><of>+0930<n><ot>+0930<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+0845<n><of>+0845<n><ot>+0845<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+1030<n><of>+1100<n><ot>+1030<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>+11<n><of>+1030<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>AWST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-06<n><of>-0500<n><ot>-0600<n><s>19700404T220000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SA<n><es><n><bd><n><tz>-05<n><of>-0600<n><ot>-0500<n><s>19700905T220000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SA<n><ed><n>", "20221015T115821Z<n><bs><n><tz>IST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><es><n><bd><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>+13<n><of>+1300<n><ot>+1300<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+14<n><of>+1400<n><ot>+1400<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>+02<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-10<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-11<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-12<n><of>-1200<n><ot>-1200<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-06<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-07<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-08<n><of>-0800<n><ot>-0800<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-09<n><of>-0900<n><ot>-0900<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>UTC<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>BST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>", "20221015T115821Z<n><bs><n><tz>MSK<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>HST<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>MEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>MET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>+1345<n><of>+1245<n><ot>+1345<n><s>19700927T024500<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>+1245<n><of>+1345<n><ot>+1245<n><s>19700405T034500<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>", "20221015T115821Z<n><bd><n><tz>+13<n><of>+1200<n><ot>+1300<n><s>19701108T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=2SU<n><ed><n><bs><n><tz>+12<n><of>+1300<n><ot>+1200<n><s>19700118T030000<n><r>FREQ=YEARLY;BYMONTH=1;BYDAY=-2SU<n><es><n>", "20221015T115821Z<n><bs><n><tz>ChST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>-0930<n><of>-0930<n><ot>-0930<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bs><n><tz>SST<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>", "20221015T115821Z<n><bd><n><tz>+12<n><of>+1100<n><ot>+1200<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>+11<n><of>+1200<n><ot>+1100<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>"];
function Te(e) {
  const n = e.split("/");
  return n.length === 3 && (!C[`${n[0]}`] || !C[`${n[0]}`][`${n[1]}`] || !C[`${n[0]}`][`${n[1]}`][`${n[2]}`]) || n.length === 2 && (!C[`${n[0]}`] || !C[`${n[0]}`][`${n[1]}`]) || n.length === 1 && !C[`${n[0]}`] ? (console.error("Given timezone not valid."), "") : n.length === 3 ? [
    C[`${n[0]}`][`${n[1]}`][`${n[2]}`][0],
    X(J[C[`${n[0]}`][`${n[1]}`][`${n[2]}`][1]])
  ] : n.length === 2 ? [
    C[`${n[0]}`][`${n[1]}`][0],
    X(J[C[`${n[0]}`][`${n[1]}`][1]])
  ] : [C[`${n[0]}`][0], X(J[C[`${n[0]}`][1]])];
}
function X(e) {
  const n = {
    "<br>": "<n>",
    "TZNAME:": "<tz>",
    "TZOFFSETFROM:": "<of>",
    "TZOFFSETTO:": "<ot>",
    "DTSTART:": "<s>",
    "RRULE:": "<r>",
    "BEGIN:DAYLIGHT": "<bd>",
    "END:DAYLIGHT": "<ed>",
    "BEGIN:STANDARD": "<bs>",
    "END:STANDARD": "<es>"
  };
  for (const [t, i] of Object.entries(n))
    e = e.replaceAll(i, t);
  return e;
}
function _e(e, n = !1) {
  const t = Te(e);
  if (t[1] == null || t[1] == "")
    return "";
  const i = function() {
    return t[0] == "" ? e : t[0];
  }(), o = "TZID=" + i, l = [
    `BEGIN:VTIMEZONE\r
TZID:` + i + `\r
X-LIC-LOCATION:` + i + `\r
LAST-MODIFIED:` + t[1].replace(/[^\w_\-:,;=+/<br>]/g, "").replace(/<br>/g, `\r
`) + "END:VTIMEZONE",
    o
  ];
  return n ? JSON.stringify(l) : l;
}
function ae(e, n, t) {
  const i = Te(e);
  if (i[1] == null || i[1] == "")
    return "";
  if (!n.match(/^\d{4}-\d{2}-\d{2}$/))
    return console.error("offset calculation failed: date misspelled [-> YYYY-MM-DD]"), "";
  if (!t.match(/^\d{2}:\d{2}$/))
    return console.error("offset calculation failed: time misspelled [-> hh:mm]"), "";
  if (!i[1].match(/BEGIN:DAYLIGHT/i))
    return i[1].match(/TZOFFSETTO:([+|-]\d{4})/i)[1];
  const o = n + "T" + t + ":00", l = new Date(o), r = l.getFullYear(), a = l.getMonth() + 1, c = l.getDate(), h = l.getHours(), b = i[1].replace(/[^\w_\-:,;=+/<br>]/g, "").split("<br>"), s = { 1: {}, 2: {} };
  let g = 0;
  for (let d = 0; d < b.length; d++)
    if (b[`${d}`].startsWith("TZOFFSETTO") && (g++, s[`${g}`].offset = b[`${d}`].split(":")[1]), b[`${d}`].startsWith("DTSTART") && (s[`${g}`].hour = parseInt(b[`${d}`].substr(17, 2))), b[`${d}`].startsWith("RRULE")) {
      let y = b[`${d}`].split(";"), Y = parseInt(y[1].split("=")[1]);
      s[`${g}`].month = parseInt(Y), s[`${g}`].day = y[2].split("=")[1];
    }
  if (s[1].month > s[2].month && ([s[1], s[2]] = [s[2], s[1]]), a != s[1].month && a != s[2].month)
    return a < s[1].month || a > s[2].month ? s[2].offset : s[1].offset;
  const T = function() {
    return Object.keys(s).find((d) => s[`${d}`].month == a);
  }(), u = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"], A = new Date(r, a, 0).getDate();
  let m = new Date(r, a - 1, 1).getDay();
  const S = { SU: {}, MO: {}, TU: {}, WE: {}, TH: {}, FR: {}, SA: {} };
  for (let d = 1; d <= A; d++) {
    const y = Object.keys(S[u[`${m}`]]).length + 1;
    S[u[`${m}`]][`${y}`] = d, m++, m == 7 && (m = 0);
  }
  const p = function() {
    if (s[`${T}`].day[0] == "-") {
      const d = s[`${T}`].day.substr(2, 2), y = Object.keys(S[`${d}`]).length + 1 - parseInt(s[`${T}`].day[1]);
      return S[`${d}`][`${y}`];
    } else {
      const d = s[`${T}`].day.substr(1, 2);
      return S[`${d}`][s[`${T}`].day[0]];
    }
  }();
  if (c > p || c == p && h >= s[`${T}`].hour)
    return s[`${T}`].offset;
  const k = function() {
    return T == 1 ? 2 : 1;
  }();
  return s[`${k}`].offset;
}
let Z = [];
function Me(e = !1) {
  return Z.length == 0 && (Z = function() {
    let n = [];
    for (const [t, i] of Object.entries(C))
      if (typeof i == "object" && !Array.isArray(i))
        for (const [o, l] of Object.entries(i))
          if (typeof l == "object" && !Array.isArray(l))
            for (const [r] of Object.entries(l))
              n.push(t + "/" + o + "/" + r);
          else
            n.push(t + "/" + o);
      else
        n.push(t);
    return n;
  }()), e ? JSON.stringify(Z) : Z;
}
/*!
 *  @preserve
 *
 *  ++++++++++++++++++++++
 *  Add to Calendar Button
 *  ++++++++++++++++++++++
 *
 *  Version: 1.18.5
 *  Creator: Jens Kuerschner (https://jenskuerschner.de)
 *  Project: https://github.com/add2cal/add-to-calendar-button
 *  License: Apache-2.0 with “Commons Clause” License Condition v1.0
 *  Note:    DO NOT REMOVE THE COPYRIGHT NOTICE ABOVE!
 *
 */
const Ae = "1.18.5", z = () => !(typeof window > "u"), L = z() ? () => !!(/iPad|iPhone|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) : () => !1, ye = z() ? () => !!(/android/i.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream) : () => !1, ve = z() ? () => !!/chrome|chromium|crios/i.test(navigator.userAgent) : () => !1, Se = () => !!(ye() || L()), ee = z() ? () => !!/(; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(navigator.userAgent || navigator.vendor) : () => !1, ze = z() ? () => !!/(Instagram)/i.test(navigator.userAgent || navigator.vendor || window.opera) : () => !1, ie = ee() ? "_system" : "_blank", Re = ["apple", "google", "ical", "ms365", "outlookcom", "msteams", "yahoo"], Be = ["apple", "google", "ical"], Ue = ["msteams"], $e = ["ical"], _ = [], $ = {
  trigger: '<span class="atcb-icon-trigger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-5.941 123.747c2.979 0 5.404 2.425 5.404 5.404s-2.425 5.404-5.404 5.404l-21.077-.065-.065 21.045c0 2.979-2.425 5.404-5.404 5.404s-5.404-2.425-5.404-5.404l.065-21.061-21.045-.081c-2.979 0-5.404-2.425-5.404-5.404s2.425-5.404 5.404-5.404l21.061.065.065-21.045c0-2.979 2.425-5.404 5.404-5.404s5.404 2.425 5.404 5.404l-.065 21.077 21.061.065zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.167V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.171c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.988 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
  apple: '<span class="atcb-icon-apple"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 245.657"><path d="M167.084 130.514c-.308-31.099 25.364-46.022 26.511-46.761-14.429-21.107-36.91-24.008-44.921-24.335-19.13-1.931-37.323 11.27-47.042 11.27-9.692 0-24.67-10.98-40.532-10.689-20.849.308-40.07 12.126-50.818 30.799-21.661 37.581-5.54 93.281 15.572 123.754 10.313 14.923 22.612 31.688 38.764 31.089 15.549-.612 21.433-10.073 40.242-10.073s24.086 10.073 40.546 9.751c16.737-.308 27.34-15.214 37.585-30.187 11.855-17.318 16.714-34.064 17.009-34.925-.372-.168-32.635-12.525-32.962-49.68l.045-.013zm-30.917-91.287C144.735 28.832 150.524 14.402 148.942 0c-12.344.503-27.313 8.228-36.176 18.609-7.956 9.216-14.906 23.904-13.047 38.011 13.786 1.075 27.862-7.004 36.434-17.376z"/></svg></span>',
  google: '<span class="atcb-icon-google"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M152.637 47.363H47.363v105.273h105.273z" fill="#fff"/><path d="M152.637 200L200 152.637h-47.363z" fill="#f72a25"/><path d="M200 47.363h-47.363v105.273H200z" fill="#fbbc04"/><path d="M152.637 152.637H47.363V200h105.273z" fill="#34a853"/><path d="M0 152.637v31.576A15.788 15.788 0 0 0 15.788 200h31.576v-47.363z" fill="#188038"/><path d="M200 47.363V15.788A15.79 15.79 0 0 0 184.212 0h-31.575v47.363z" fill="#1967d2"/><path d="M15.788 0A15.79 15.79 0 0 0 0 15.788v136.849h47.363V47.363h105.274V0z" fill="#4285f4"/><path d="M68.962 129.02c-3.939-2.653-6.657-6.543-8.138-11.67l9.131-3.76c.83 3.158 2.279 5.599 4.346 7.341 2.051 1.742 4.557 2.588 7.471 2.588 2.995 0 5.55-.911 7.699-2.718 2.148-1.823 3.223-4.134 3.223-6.934 0-2.865-1.139-5.208-3.402-7.031s-5.111-2.718-8.496-2.718h-5.273v-9.033h4.736c2.913 0 5.387-.781 7.389-2.376 2.002-1.579 2.995-3.743 2.995-6.494 0-2.441-.895-4.395-2.686-5.859s-4.053-2.197-6.803-2.197c-2.686 0-4.818.716-6.396 2.148s-2.767 3.255-3.451 5.273l-9.033-3.76c1.204-3.402 3.402-6.396 6.624-8.984s7.34-3.89 12.337-3.89c3.695 0 7.031.716 9.977 2.148s5.257 3.418 6.934 5.941c1.676 2.539 2.507 5.387 2.507 8.545 0 3.223-.781 5.941-2.327 8.187-1.546 2.23-3.467 3.955-5.729 5.143v.537a17.39 17.39 0 0 1 7.34 5.729c1.904 2.572 2.865 5.632 2.865 9.212s-.911 6.771-2.718 9.57c-1.823 2.799-4.329 5.013-7.52 6.624s-6.787 2.425-10.775 2.425c-4.622 0-8.887-1.318-12.826-3.988zm56.087-45.312l-10.026 7.243-5.013-7.601 17.985-12.972h6.901v61.198h-9.847z" fill="#1a73e8"/></svg></span>',
  ical: '<span class="atcb-icon-ical"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-25.228 161.263c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm-81.803-59.766c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 139.079c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 168.962c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.15V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.155c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.971 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
  msteams: '<span class="atcb-icon-msteams"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 186.047"><path d="M195.349 39.535a20.93 20.93 0 1 1-41.86 0 20.93 20.93 0 1 1 41.86 0zm-55.847 30.233h51.66A8.84 8.84 0 0 1 200 78.605v47.056c0 17.938-14.541 32.479-32.479 32.479h0-.154c-17.938.003-32.481-14.537-32.484-32.474v-.005-51.274a4.62 4.62 0 0 1 4.619-4.619z" fill="#5059c9"/><path d="M149.614 69.767H64.34c-4.823.119-8.637 4.122-8.526 8.944v53.67c-.673 28.941 22.223 52.957 51.163 53.665 28.94-.708 51.836-24.725 51.163-53.665v-53.67c.112-4.823-3.703-8.825-8.526-8.944zm-10.079-39.535a30.233 30.233 0 0 1-60.465 0 30.233 30.233 0 0 1 60.465 0z" fill="#7b83eb"/><path opacity=".1" d="M111.628 69.767v75.209c-.023 3.449-2.113 6.547-5.302 7.86-1.015.43-2.107.651-3.209.651H59.907l-1.628-4.651c-1.628-5.337-2.459-10.885-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M106.977 69.767v79.86a8.241 8.241 0 0 1-.651 3.209c-1.313 3.189-4.412 5.279-7.86 5.302H62.093l-2.186-4.651a46.13 46.13 0 0 1-1.628-4.651 56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M102.326 69.767v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".1" d="M111.628 45.721v14.651l-2.326.093c-.791 0-1.535-.046-2.326-.093-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767 25.845 25.845 0 0 1-1.488-4.651h23.209c4.693.018 8.494 3.818 8.512 8.512z"/><use xlink:href="#B" opacity=".2" transform="scale(.08973306)"/><path d="M106.977 50.372v10c-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767h17.07c4.693.018 8.494 3.818 8.512 8.512zm0 19.395v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z" opacity=".2"/><path opacity=".2" d="M102.326 50.372v9.256a30.233 30.233 0 0 1-20.93-17.767h12.419c4.693.018 8.494 3.818 8.512 8.512z"/><linearGradient id="A" gradientUnits="userSpaceOnUse" x1="17.776" y1="35.199" x2="84.55" y2="150.848"><stop offset="0" stop-color="#5a62c3"/><stop offset=".5" stop-color="#4d55bd"/><stop offset="1" stop-color="#3940ab"/></linearGradient><path fill="url(#A)" d="M8.526 41.86H93.8a8.53 8.53 0 0 1 8.526 8.526v85.274a8.53 8.53 0 0 1-8.526 8.526H8.526A8.53 8.53 0 0 1 0 135.66V50.386a8.53 8.53 0 0 1 8.526-8.526z"/><path fill="#fff" d="M73.6 74.316H56.553v46.419h-10.86V74.316H28.726v-9.005H73.6z"/><defs><path id="B" d="M1192.167 561.355v111.442c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 0 1-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z"/></defs></svg></span>',
  ms365: '<span class="atcb-icon-ms365"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 239.766"><path d="M200 219.785l-.021-.012V20.591L128.615 0 .322 48.172 0 48.234.016 192.257l43.78-17.134V57.943l84.819-20.279-.012 172.285L.088 192.257l128.515 47.456v.053l71.376-19.753v-.227z"/></svg></span>',
  outlookcom: '<span class="atcb-icon-outlookcom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 175"><path d="M178.725 0H71.275A8.775 8.775 0 0 0 62.5 8.775v9.975l60.563 18.75L187.5 18.75V8.775A8.775 8.775 0 0 0 178.725 0z" fill="#0364b8"/><path d="M197.813 96.281c.915-2.878 2.187-5.855 2.187-8.781-.002-1.485-.795-2.857-1.491-3.26l-68.434-38.99a9.37 9.37 0 0 0-9.244-.519c-.312.154-.614.325-.906.512l-67.737 38.6-.025.013-.075.044a4.16 4.16 0 0 0-2.088 3.6c.541 2.971 1.272 5.904 2.188 8.781l71.825 52.532z" fill="#0a2767"/><path d="M150 18.75h-43.75L93.619 37.5l12.631 18.75L150 93.75h37.5v-37.5z" fill="#28a8ea"/><path d="M150 18.75h37.5v37.5H150z" fill="#50d9ff"/><path d="M150 93.75l-43.75-37.5H62.5v37.5l43.75 37.5 67.7 11.05z" fill="#0364b8"/><path d="M106.25 56.25v37.5H150v-37.5zM150 93.75v37.5h37.5v-37.5zm-87.5-75h43.75v37.5H62.5z" fill="#0078d4"/><path d="M62.5 93.75h43.75v37.5H62.5z" fill="#064a8c"/><path d="M126.188 145.113l-73.706-53.75 3.094-5.438 68.181 38.825a3.3 3.3 0 0 0 2.625-.075l68.331-38.937 3.1 5.431z" fill="#0a2767" opacity=".5"/><path d="M197.919 91.106l-.088.05-.019.013-67.738 38.588c-2.736 1.764-6.192 1.979-9.125.569l23.588 31.631 51.588 11.257v-.001c2.434-1.761 3.876-4.583 3.875-7.587V87.5c.001 1.488-.793 2.862-2.081 3.606z" fill="#1490df"/><path d="M200 165.625v-4.613l-62.394-35.55-7.531 4.294a9.356 9.356 0 0 1-9.125.569l23.588 31.631 51.588 11.231v.025a9.362 9.362 0 0 0 3.875-7.588z" opacity=".05"/><path d="M199.688 168.019l-68.394-38.956-1.219.688c-2.734 1.766-6.19 1.984-9.125.575l23.588 31.631 51.587 11.256v.001a9.38 9.38 0 0 0 3.562-5.187z" opacity=".1"/><path d="M51.455 90.721c-.733-.467-1.468-1.795-1.455-3.221v78.125c-.007 5.181 4.194 9.382 9.375 9.375h131.25c1.395-.015 2.614-.366 3.813-.813.638-.258 1.252-.652 1.687-.974z" fill="#28a8ea"/><path d="M112.5 141.669V39.581a8.356 8.356 0 0 0-8.331-8.331H62.687v46.6l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031V150h54.169a8.356 8.356 0 0 0 8.331-8.331z" opacity=".1"/><path d="M106.25 147.919V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 68.75h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M106.25 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M100 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h41.669a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M8.331 37.5h83.337A8.331 8.331 0 0 1 100 45.831v83.338a8.331 8.331 0 0 1-8.331 8.331H8.331A8.331 8.331 0 0 1 0 129.169V45.831A8.331 8.331 0 0 1 8.331 37.5z" fill="#0078d4"/><path d="M24.169 71.675a26.131 26.131 0 0 1 10.263-11.337 31.031 31.031 0 0 1 16.313-4.087 28.856 28.856 0 0 1 15.081 3.875 25.875 25.875 0 0 1 9.988 10.831 34.981 34.981 0 0 1 3.5 15.938 36.881 36.881 0 0 1-3.606 16.662 26.494 26.494 0 0 1-10.281 11.213 30 30 0 0 1-15.656 3.981 29.556 29.556 0 0 1-15.425-3.919 26.275 26.275 0 0 1-10.112-10.85 34.119 34.119 0 0 1-3.544-15.744 37.844 37.844 0 0 1 3.481-16.563zm10.938 26.613a16.975 16.975 0 0 0 5.769 7.463 15.069 15.069 0 0 0 9.019 2.719 15.831 15.831 0 0 0 9.631-2.806 16.269 16.269 0 0 0 5.606-7.481 28.913 28.913 0 0 0 1.787-10.406 31.644 31.644 0 0 0-1.687-10.538 16.681 16.681 0 0 0-5.413-7.75 14.919 14.919 0 0 0-9.544-2.956 15.581 15.581 0 0 0-9.231 2.744 17.131 17.131 0 0 0-5.9 7.519 29.85 29.85 0 0 0-.044 21.5z" fill="#fff"/></svg></span>',
  yahoo: '<span class="atcb-icon-yahoo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 177.803"><path d="M0 43.284h38.144l22.211 56.822 22.5-56.822h37.135L64.071 177.803H26.694l15.308-35.645L.001 43.284zm163.235 45.403H121.64L158.558 0 200 .002zm-30.699 8.488c12.762 0 23.108 10.346 23.108 23.106s-10.345 23.106-23.108 23.106a23.11 23.11 0 0 1-23.104-23.106 23.11 23.11 0 0 1 23.104-23.106z"/></svg></span>',
  atcb: '<svg version="1.1" viewBox="0 0 150 8.5002" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="matrix(1.3333 0 0 -1.3333 -2427.5 1757.9)"><g transform="matrix(.22189 0 0 -.22189 1822.6 1374.6)" fill="#9a9a9a" style="paint-order:stroke markers fill;shape-inside:url(#rect2441);white-space:pre" aria-label="Add-to-Calendar-PRO.com"><path d="m-1.2773 253.99h12.148l7.9688 27.5h-9.4141l-1.0547-5.2734h-7.1094l-1.1328 5.2734h-9.0234zm8.7109 17.305-2.6172-12.031-2.6953 12.031z" style="paint-order:stroke markers fill"/><path d="m29.66 261.16q2.2656 0 3.9062 0.9375t2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3477-1.3867 3.1055-2.168 1.7773-0.80078 3.7305-0.80078zm6.5625 10.176q-0.03906-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52734 0.54687-0.83984 1.2695-0.29297 0.72266-0.29297 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.87891 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203 0.72266-0.33203 1.25-0.8789 0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m57.551 261.16q2.2656 0 3.9062 0.9375t2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3477-1.3867 3.1055-2.168 1.7773-0.80078 3.7305-0.80078zm6.5625 10.176q-0.03906-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52734 0.54687-0.83984 1.2695-0.29297 0.72266-0.29297 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.87891 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203 0.72266-0.33203 1.25-0.8789 0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m76.496 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m104.8 280.44q-2.7148 1.3672-6.0156 1.3672-1.6992 0-3.0273-0.54688-1.3281-0.5664-2.2461-1.6016-0.89844-1.0547-1.3672-2.5195-0.46875-1.4844-0.46875-3.3398l0.03906-7.3828h-2.5391v-4.9609h3.1641l3.7109-7.5781h4.0625v7.5781h4.6094v4.9609h-4.6094v6.7969q0 1.0547 0.68359 1.582t1.8555 0.52734q0.91797 0 1.8359-0.46875z" style="paint-order:stroke markers fill"/><path d="m114.62 271.45q0 1.0938 0.3125 1.9141 0.33204 0.82031 0.85938 1.3672 0.52734 0.54687 1.2109 0.82031 0.68359 0.27344 1.3867 0.27344 0.70312 0 1.3672-0.27344 0.6836-0.27344 1.2109-0.82031 0.54688-0.54688 0.85938-1.3672 0.33203-0.82031 0.33203-1.9141t-0.33203-1.9141q-0.3125-0.82031-0.85938-1.3476-0.52734-0.54688-1.2109-0.82032-0.66406-0.27343-1.3672-0.27343-0.70313 0-1.3867 0.27343-0.6836 0.27344-1.2109 0.82032-0.52734 0.52734-0.85938 1.3476-0.3125 0.82032-0.3125 1.9141zm-7.8125 0q0.0977-2.5195 1.0352-4.4336 0.95703-1.9141 2.5195-3.2226 1.5625-1.3086 3.6133-1.9727 2.0703-0.66406 4.3945-0.66406 2.5391 0 4.6484 0.76172 2.1094 0.76171 3.6328 2.1289 1.5234 1.3477 2.3633 3.2422 0.83985 1.8945 0.83985 4.1602 0 1.8359-0.48828 3.3203-0.46875 1.4844-1.2891 2.6367-0.82031 1.1328-1.9336 1.9726-1.1133 0.83985-2.4023 1.3867-1.2891 0.52735-2.6758 0.78125-1.3672 0.25391-2.7344 0.25391-2.5781 0-4.707-0.74219-2.1094-0.76172-3.6328-2.1289-1.5234-1.3672-2.3633-3.2617-0.82032-1.9141-0.82032-4.2188z" style="paint-order:stroke markers fill"/><path d="m132.73 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m162.41 274.89q0.6836 0 1.2695-0.0586 0.58594-0.0781 1.1524-0.21484 0.58593-0.13672 1.1914-0.35156 0.60547-0.21485 1.3477-0.50782l1.0938 6.3477q-3.4766 2.0117-7.5781 2.0117-5.8008 0-9.9414-3.9062-4.3359-4.0625-4.3945-10.488 0-3.125 1.0742-5.7617 1.0742-2.6367 2.9688-4.5312 1.8945-1.9141 4.4726-2.9688 2.5781-1.0742 5.5859-1.0742 4.2773 0 7.7734 1.9922l-1.0547 6.2109q-2.8711-1.0938-5.1953-1.0938-3.2617 0-4.9609 1.8945-1.6797 1.875-1.6797 5.293 0 1.6992 0.44922 3.0469 0.46875 1.3281 1.3477 2.2656 0.8789 0.91797 2.1484 1.4062 1.2891 0.48829 2.9297 0.48829z" style="paint-order:stroke markers fill"/><path d="m186.52 277.78q-0.9375 1.9531-2.5391 2.9883-1.6016 1.0352-4.0234 1.0352-1.9531 0-3.7305-0.78125-1.7774-0.80078-3.125-2.1875-1.3477-1.4062-2.1484-3.3203-0.80078-1.9141-0.80078-4.1602 0-2.2266 0.80078-4.1016 0.82031-1.875 2.168-3.2227 1.3672-1.3672 3.125-2.1094 1.7773-0.76172 3.7109-0.76172 0.9961 0 1.9531 0.27343 0.97656 0.25391 1.8359 0.83985 0.8789 0.5664 1.582 1.4453 0.72265 0.87891 1.1914 2.1094v-4.668h8.3984v20.332h-8.3984zm0-6.4453q-0.0391-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70313-0.3125-1.4648-0.3125-0.85937 0-1.6016 0.33203-0.72266 0.3125-1.2695 0.85938-0.52735 0.52734-0.83985 1.25t-0.3125 1.543q0 0.85937 0.33204 1.6016 0.33203 0.72266 0.8789 1.25 0.56641 0.52734 1.2891 0.83984 0.72266 0.29297 1.5234 0.29297 0.82031 0 1.5234-0.3125 0.70312-0.3125 1.2305-0.83984 0.52734-0.52734 0.83984-1.2109 0.3125-0.70312 0.35156-1.4648z" style="paint-order:stroke markers fill"/><path d="m212.02 280.44q-2.7148 1.3672-6.0156 1.3672-1.6992 0-3.0273-0.54688-1.3281-0.5664-2.2461-1.6016-0.89843-1.0547-1.3672-2.5195-0.46875-1.4844-0.46875-3.3398v-18.672l8.4375-1.25v19.336q0 1.0742 0.68359 1.6016 0.68359 0.50781 1.8555 0.50781 0.89844 0 1.8359-0.46875z" style="paint-order:stroke markers fill"/><path d="m225.71 276.2q2.7344 0 5.8984-1.4062l0.97656 5.3711q-3.6328 1.6406-8.1641 1.6406-2.5195 0-4.6094-0.76172-2.0703-0.78125-3.5742-2.1484-1.4844-1.3867-2.3242-3.2812-0.82031-1.8945-0.82031-4.1211 0-2.3438 0.85937-4.2383 0.87891-1.9141 2.3828-3.2617 1.5039-1.3672 3.5156-2.0898 2.0117-0.74218 4.2969-0.74218 2.3047 0 4.043 0.78125 1.7383 0.76172 2.8906 2.1094 1.1719 1.3281 1.7383 3.125 0.58594 1.7774 0.58594 3.8086 0 0.27343-0.0195 0.52734t-0.0586 0.48828l-11.992 1.5625q0.46875 1.4062 1.5625 2.0312 1.0938 0.60547 2.8125 0.60547zm1.4844-7.6758q-0.6836-2.5-3.0469-2.5-0.74218 0-1.3281 0.29297t-0.9961 0.82031q-0.39062 0.50781-0.60546 1.2305-0.21485 0.70312-0.23438 1.5234z" style="paint-order:stroke markers fill"/><path d="m236.3 261.75h8.0469v4.082q1.1719-2.3633 3.0078-3.5156 1.8555-1.1523 4.3359-1.1523 1.9922 0 3.5156 0.74218 1.5234 0.74219 2.5586 2.1094 1.0547 1.3477 1.582 3.2617 0.54687 1.8945 0.54687 4.2188v10h-8.3984v-10.82q0-0.78125-0.15625-1.4453-0.13672-0.66406-0.46875-1.1328-0.3125-0.48828-0.80078-0.74219-0.48828-0.27343-1.1914-0.27343-0.85938 0-1.582 0.42968-0.72265 0.41016-1.2695 1.0156-0.52734 0.60547-0.85937 1.2695-0.33203 0.64453-0.42969 1.1133v10.586h-8.4375z" style="paint-order:stroke markers fill"/><path d="m272.59 261.16q2.2656 0 3.9062 0.9375 1.6406 0.9375 2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3476-1.3867 3.1055-2.168 1.7774-0.80078 3.7305-0.80078zm6.5625 10.176q-0.0391-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85937 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52735 0.54687-0.83985 1.2695-0.29296 0.72266-0.29296 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.8789 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203t1.25-0.8789q0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m307.06 277.78q-0.9375 1.9531-2.5391 2.9883-1.6016 1.0352-4.0234 1.0352-1.9531 0-3.7305-0.78125-1.7773-0.80078-3.125-2.1875-1.3477-1.4062-2.1484-3.3203-0.80078-1.9141-0.80078-4.1602 0-2.2266 0.80078-4.1016 0.82032-1.875 2.168-3.2227 1.3672-1.3672 3.125-2.1094 1.7774-0.76172 3.7109-0.76172 0.99609 0 1.9531 0.27343 0.97657 0.25391 1.8359 0.83985 0.87891 0.5664 1.582 1.4453 0.72266 0.87891 1.1914 2.1094v-4.668h8.3984v20.332h-8.3984zm0-6.4453q-0.0391-0.78125-0.37109-1.4844-0.33204-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72265 0.3125-1.2695 0.85938-0.52734 0.52734-0.83984 1.25t-0.3125 1.543q0 0.85937 0.33203 1.6016 0.33203 0.72266 0.87891 1.25 0.5664 0.52734 1.2891 0.83984 0.72266 0.29297 1.5234 0.29297 0.82031 0 1.5234-0.3125 0.70313-0.3125 1.2305-0.83984 0.52735-0.52734 0.83985-1.2109 0.3125-0.70312 0.35156-1.4648z" style="paint-order:stroke markers fill"/><path d="m319.5 261.75h8.4375v4.082q0.95703-2.4219 2.5391-3.5352 1.6016-1.1328 3.6719-1.1328l1.1719 6.543q-3.8086 0-5.6055 0.82031-1.7773 0.80078-1.7773 2.5781v10.391h-8.4375z" style="paint-order:stroke markers fill"/><path d="m337.22 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m352.43 253.99h9.9219q3.0859 0 5.4883 0.60547t4.043 1.7773q1.6406 1.1719 2.5 2.8711 0.85937 1.6797 0.85937 3.8477 0 2.1094-0.97656 3.7695-0.97656 1.6602-2.6758 2.832-1.6992 1.1524-3.9844 1.7774-2.2656 0.60547-4.8633 0.60547h-1.6797v9.4141h-8.6328zm10.352 12.539q2.0703 0 3.2422-0.85937 1.1719-0.85938 1.1719-2.5781 0-0.83984-0.35156-1.4648-0.33204-0.625-0.9375-1.0352-0.58594-0.42969-1.3867-0.64453t-1.7383-0.21484h-1.7188v6.7188q0.27343 0.0391 0.70312 0.0586t1.0156 0.0195z" style="paint-order:stroke markers fill"/><path d="m402.92 281.41q-2.5586 0.70313-3.6914 0.70313-7.2461 0-9.1016-6.6016l-1.0938-4.4531h-1.875v10.43h-8.75v-27.5h12.227q2.3828 0 4.4726 0.54687 2.0898 0.52735 3.6328 1.5625 1.5625 1.0156 2.4414 2.5195 0.89844 1.5039 0.89844 3.457 0 1.4453-0.37109 2.5976-0.35157 1.1328-1.0352 2.0508-0.68359 0.89844-1.6797 1.6016-0.97656 0.70312-2.2266 1.25l0.17578 0.95703q0.0586 0.33203 0.11719 0.5664 0.0586 0.23438 0.0977 0.39063l0.21484 0.83984q0.23437 0.74219 0.52734 1.2695 0.3125 0.50782 0.78125 0.83985 0.46875 0.3125 1.1524 0.46875 0.70312 0.13672 1.6992 0.13672 0.15625 0 0.48828-0.0391 0.35156-0.0391 0.89843-0.11718zm-8.8476-18.945q0-0.76172-0.33203-1.25-0.3125-0.50781-0.87891-0.78125-0.56641-0.29297-1.3281-0.39062-0.76172-0.11719-1.6406-0.11719h-2.7344v5.5078h1.5234l1.2891-0.0586q0.76171-0.0586 1.4844-0.19532 0.74219-0.15625 1.3281-0.46875 0.58593-0.33203 0.9375-0.85937 0.35156-0.54688 0.35156-1.3867z" style="paint-order:stroke markers fill"/><path d="m404.76 267.78q0-5.957 3.7891-10.039 4.043-4.3555 10.938-4.3555 3.3594 0 6.0742 1.0938 2.7148 1.0742 4.6289 2.9883t2.9492 4.5703q1.0352 2.6367 1.0352 5.7422 0 1.875-0.42968 3.6719-0.42969 1.7969-1.2891 3.3984-0.83984 1.582-2.0898 2.9297-1.25 1.3281-2.8906 2.3047-1.6211 0.95703-3.6328 1.4844-1.9922 0.54688-4.3555 0.54688-2.4219 0-4.4531-0.54688-2.0117-0.54687-3.6523-1.5234-1.6406-0.97657-2.8906-2.3242-1.2305-1.3477-2.0703-2.9297-0.82031-1.6016-1.25-3.3789-0.41016-1.7773-0.41016-3.6328zm14.727 7.0703q1.543 0 2.6172-0.64453 1.0938-0.66406 1.7774-1.6797 0.70312-1.0352 1.0156-2.3047 0.33203-1.2695 0.33203-2.4805 0-1.582-0.41015-2.8906-0.39063-1.3281-1.1524-2.2852-0.74219-0.97657-1.8164-1.543-1.0547-0.56641-2.3633-0.625-1.5625 0.0391-2.6562 0.70312-1.0938 0.66407-1.7969 1.7188-0.68359 1.0352-1.0156 2.3438-0.3125 1.2891-0.3125 2.5781 0 1.5234 0.39063 2.832 0.41016 1.2891 1.1523 2.2461 0.76172 0.9375 1.8359 1.4844 1.0742 0.54687 2.4023 0.54687z" style="paint-order:stroke markers fill"/><path d="m436.18 279.2q0-0.58594 0.2474-1.0807 0.26042-0.49479 0.67708-0.84636 0.41667-0.35156 0.95053-0.54687 0.54687-0.20834 1.1198-0.20834 0.59896 0 1.1458 0.22136 0.54688 0.20833 0.95053 0.58594 0.41666 0.36458 0.65104 0.84635 0.2474 0.48177 0.2474 1.0286 0 0.61198-0.26042 1.1068-0.2474 0.49479-0.66407 0.85938-0.41666 0.35156-0.96354 0.54687-0.53385 0.19531-1.1068 0.19531-0.625 0-1.1719-0.20833-0.54687-0.20833-0.95052-0.57292-0.40365-0.36458-0.63802-0.85937-0.23438-0.49479-0.23438-1.0677z" style="paint-order:stroke markers fill"/><path d="m454.38 272.56q-1.4062-0.4427-2.6042-0.4427-0.61198 0-1.1068 0.19531-0.48177 0.19531-0.83333 0.54687-0.33855 0.35157-0.53386 0.85938-0.18229 0.49479-0.18229 1.1068t0.18229 1.1198q0.19531 0.49479 0.54688 0.85937 0.35156 0.36459 0.84635 0.5599 0.50782 0.19531 1.1328 0.19531 1.1849 0 2.5-0.44271l0.52083 3.724q-1.0026 0.52083-1.9661 0.6901-0.95053 0.16927-2.0703 0.16927-1.5755 0-2.9036-0.49479t-2.2917-1.3932-1.5104-2.1615q-0.53385-1.276-0.53385-2.8255t0.58594-2.8125q0.58593-1.276 1.5755-2.1745 1.0026-0.91146 2.3177-1.4062 1.3151-0.4948 2.7604-0.4948 0.63802 0 1.1458 0.0521 0.52084 0.0391 0.98959 0.16927 0.46875 0.11718 0.9375 0.32552 0.46875 0.20833 1.0156 0.53385z" style="paint-order:stroke markers fill"/><path d="m461.18 274.8q0 0.72917 0.20833 1.276 0.22136 0.54688 0.57292 0.91146 0.35157 0.36459 0.80729 0.54688 0.45573 0.18229 0.92449 0.18229 0.46875 0 0.91145-0.18229 0.45573-0.18229 0.8073-0.54688 0.36458-0.36458 0.57291-0.91146 0.22136-0.54687 0.22136-1.276t-0.22136-1.276q-0.20833-0.54688-0.57291-0.89844-0.35157-0.36458-0.8073-0.54688-0.4427-0.18229-0.91145-0.18229-0.46876 0-0.92449 0.18229-0.45572 0.1823-0.80729 0.54688-0.35156 0.35156-0.57292 0.89844-0.20833 0.54687-0.20833 1.276zm-5.2083 0q0.0651-1.6797 0.69011-2.9557 0.63802-1.276 1.6797-2.1484 1.0417-0.8724 2.4088-1.3151 1.3802-0.44271 2.9297-0.44271 1.6927 0 3.099 0.50782 1.4062 0.50781 2.4219 1.4193 1.0156 0.89844 1.5755 2.1615 0.55989 1.263 0.55989 2.7734 0 1.224-0.32552 2.2136-0.3125 0.98958-0.85937 1.7578-0.54688 0.75521-1.2891 1.3151-0.74219 0.55989-1.6016 0.92448-0.85938 0.35156-1.7839 0.52083-0.91146 0.16927-1.8229 0.16927-1.7188 0-3.138-0.49479-1.4062-0.50781-2.4219-1.4193t-1.5755-2.1745q-0.54688-1.276-0.54688-2.8125z" style="paint-order:stroke markers fill"/><path d="m488.16 271.26q0.54688-1.6536 1.7578-2.487 1.2109-0.83334 3.138-0.83334 1.0938 0 2.0182 0.50782 0.92448 0.50781 1.6016 1.4193 0.67708 0.91146 1.0547 2.1745 0.3776 1.263 0.3776 2.7865v6.6667h-5.625v-6.6667q0-0.55989-0.13021-1.0286-0.11718-0.48178-0.35156-0.83334-0.23437-0.35156-0.57292-0.54687-0.33854-0.19532-0.76823-0.19532-0.55989 0-0.96354 0.26042-0.40364 0.2474-0.66406 0.63802-0.26042 0.37761-0.39063 0.84636-0.11718 0.45573-0.11718 0.85937v6.6667h-5.5729v-6.6667q0-0.54687-0.13021-1.0156-0.11718-0.48178-0.36458-0.83334-0.23438-0.35156-0.58594-0.54687-0.35156-0.20834-0.79427-0.20834-0.48177 0-0.8724 0.19532-0.3776 0.19531-0.65104 0.54687-0.27344 0.33854-0.42969 0.79427-0.14323 0.45573-0.15625 0.96355v6.7708h-5.625v-13.164h5.625v2.7214q0.74219-1.6536 1.875-2.3828 1.1458-0.72917 2.6823-0.72917 0.74219 0 1.4323 0.19532 0.69011 0.18229 1.2891 0.58593 0.61198 0.40365 1.0938 1.0417 0.49479 0.625 0.82031 1.4974z" style="paint-order:stroke markers fill"/></g></g></svg>',
  close: '<span class="atcb-icon-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M2.321 13.529a7.927 7.927 0 0 1 0-11.208 7.927 7.927 0 0 1 11.208 0l86.471 86.471L186.47 2.321a7.927 7.927 0 0 1 11.209 0 7.927 7.927 0 0 1 0 11.208l-86.474 86.469 86.472 86.473a7.927 7.927 0 0 1-11.209 11.208l-86.471-86.471-86.469 86.471a7.927 7.927 0 0 1-11.208-11.208l86.471-86.473z"/></svg></span>',
  location: '<span class="atcb-icon-location"><svg viewBox="0 0 200 266.42" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m148.54 230.43c-12.12 13.291-26.234 25.193-42.083 34.82-1.9513 1.431-4.5964 1.6044-6.7645 0.21681-23.416-14.895-43.08-32.782-58.539-52.23-21.334-26.755-34.755-56.414-39.351-84.99-4.6831-28.966-0.30354-56.848 14.114-79.505 5.6805-8.9543 12.944-17.106 21.79-24.153 20.337-16.196 43.557-24.76 66.713-24.586 22.288 0.17345 44.295 8.4773 63.309 25.844 6.6778 6.0707 12.293 13.03 16.89 20.575 15.502 25.54 18.841 58.105 12.033 91.104-6.7212 32.608-23.416 65.737-48.11 92.839zm-48.544-178.91c27.492 0 49.758 22.288 49.758 49.758 0 27.492-22.288 49.758-49.758 49.758-27.492 0-49.758-22.267-49.758-49.758-0.02168-27.492 22.267-49.758 49.758-49.758z" stroke-width="2.1681"/></svg></span>',
  warning: '<span class="atcb-icon-warning"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="m100 0c27.613 0 52.613 11.195 70.711 29.293 18.094 18.094 29.289 43.098 29.289 70.707 0 27.613-11.195 52.613-29.289 70.711-18.098 18.094-43.098 29.289-70.711 29.289-27.609 0-52.613-11.195-70.707-29.289-18.098-18.098-29.293-43.098-29.293-70.711 0-27.609 11.195-52.613 29.293-70.707 18.094-18.098 43.098-29.293 70.707-29.293zm57.66 42.34c-14.758-14.754-35.145-23.883-57.66-23.883-22.516 0-42.902 9.1289-57.66 23.883-14.754 14.758-23.883 35.145-23.883 57.66 0 22.516 9.1289 42.902 23.883 57.66 14.758 14.754 35.145 23.883 57.66 23.883 22.516 0 42.902-9.1289 57.66-23.883 14.754-14.758 23.883-35.145 23.883-57.66 0-22.516-9.1289-42.902-23.883-57.66z" fill="#f44336" fill-rule="nonzero" stroke-width=".39062"/><g transform="matrix(3.8384 0 0 3.8384 2277.8 -576.85)" style="shape-inside:url(#rect7396);white-space:pre" aria-label="!"><path d="m-563.8 161.59-0.65341 20.185h-5.8381l-0.65341-20.185zm-3.5796 29.503q-1.5199 0-2.6136-1.0795-1.0796-1.0796-1.0796-2.6136 0-1.5057 1.0796-2.571 1.0938-1.0796 2.6136-1.0796 1.4631 0 2.571 1.0796 1.1222 1.0653 1.1222 2.571 0 1.0227-0.52557 1.8608-0.51137 0.83807-1.3494 1.3352-0.82387 0.49715-1.8182 0.49715z"/></g></svg></span>',
  checkmark: '<span class="atcb-icon-checkmark"><svg viewBox="0 0 122.88 122.87" xmlns="http://www.w3.org/2000/svg"><path fill:#39B54A; d="m33.666 50.046s6.0748-0.59297 17.413 4.2983c9.3883 4.5751 11.891 8.3955 11.891 8.3955 5.38-8.65 11.11-16.6 17.16-23.9 10.412-12.578 24.613-22.448 24.613-22.448l14.257-0.012228s-19.308 19.294-32.483 38.51c-13.175 19.216-22.877 41.21-22.877 41.21s-9.3948-18.164-14.53-24.53-10.77-11.59-17.52-16.22z" fill="#45b555"/><path fill:#3C3C3C; d="m61.44 0c9.53 0 18.55 2.17 26.61 6.04-3.3 2.61-6.36 5.11-9.21 7.53-5.43-1.97-11.28-3.05-17.39-3.05-14.06 0-26.79 5.7-36 14.92s-14.92 21.94-14.92 36 5.7 26.78 14.92 36 21.94 14.92 36 14.92 26.79-5.7 36-14.92c9.22-9.22 14.91-21.94 14.91-36 0-3.34-0.32-6.62-0.94-9.78 2.64-3.44 5.35-6.88 8.11-10.28 2.17 6.28 3.35 13.04 3.35 20.06 0 16.96-6.88 32.33-17.99 43.44-11.12 11.12-26.48 18-43.44 18s-32.32-6.88-43.44-18c-11.13-11.12-18.01-26.48-18.01-43.44 0-16.97 6.88-32.33 17.99-43.44 11.12-11.12 26.48-18 43.45-18z"/></svg></span>'
};
function Oe(e) {
  e.event != null && (Object.keys(e.event).forEach((t) => {
    t.charAt(0) !== "@" && (e[`${t}`] = e.event[`${t}`]);
  }), delete e.event);
  const n = {
    title: "name",
    dateStart: "startDate",
    dateEnd: "endDate",
    timeStart: "startTime",
    timeEnd: "endTime"
  };
  return Object.keys(n).forEach((t) => {
    e[n[`${t}`]] == null && e[`${t}`] != null && (e[n[`${t}`]] = e[`${t}`]);
  }), e;
}
function Ne(e) {
  return e = Fe(e), e.subscribe = He(e), e = Ze(e), e = xe(e), e.richData = Ie(e), e.checkmark = Pe(e), e.background = qe(e), e.mindScrolling = Qe(e), e.branding = je(e), e = Ge(e), e = Ke(e), e = Ve(e), e = We(e), e = Xe(e), e;
}
function Fe(e) {
  return e.identifier != null && e.identifier != "" && (e.identifier = "atcb-btn-" + e.identifier, /^[\w-]+$/.test(e.identifier) || (e.identifier = "", console.warn("Add to Calendar Button generation: identifier invalid - using auto numbers instead"))), e;
}
function He(e) {
  return e.subscribe != null && e.subscribe == !0;
}
function Ze(e) {
  if (e.recurrence != null && e.recurrence != "")
    if (e.recurrence = e.recurrence.replace(/\s+/g, "").toUpperCase(), !/^(RRULE:[\w=;,:+-/\\]+|daily|weekly|monthly|yearly)$/im.test(e.recurrence))
      e.recurrence = "!wrong rrule format!";
    else if (/^RRULE:/i.test(e.recurrence)) {
      const n = e.recurrence.substr(6).split(";"), t = new Object();
      n.forEach(function(i) {
        t[i.split("=")[0]] = i.split("=")[1];
      }), e.recurrence_until = t.UNTIL ? t.UNTIL : "", e.recurrence_count = t.COUNT ? t.COUNT : "", e.recurrence_byDay = t.BYDAY ? t.BYDAY : "", e.recurrence_byMonth = t.BYMONTH ? t.BYMONTH : "", e.recurrence_byMonthDay = t.BYMONTHDAY ? t.BYMONTHDAY : "", e.recurrence_interval = t.INTERVAL ? t.INTERVAL : 1, e.recurrence_frequency = t.FREQ ? t.FREQ : "";
    } else
      (e.recurrence_interval == null || e.recurrence_interval == "") && (e.recurrence_interval = 1), (e.recurrence_weekstart == null || e.recurrence_weekstart == "" | e.recurrence_weekstart.length > 2) && (e.recurrence_weekstart = "MO"), e.recurrence_frequency = e.recurrence, e.recurrence = "RRULE:FREQ=" + e.recurrence + ";WKST=" + e.recurrence_weekstart + ";INTERVAL=" + e.recurrence_interval, e.recurrence_until != null && e.recurrence_until != "" && (e.endTime != null && e.endTime != "" ? e.recurrence = e.recurrence + ";UNTIL=" + e.recurrence_until.replace(/-/g, "").slice(0, 8) + "T" + e.endTime.replace(":", "") + "00" : e.recurrence = e.recurrence + ";UNTIL=" + e.recurrence_until.replace(/-/g, "").slice(0, 8)), e.recurrence_count != null && e.recurrence_count != "" && (e.recurrence = e.recurrence + ";COUNT=" + e.recurrence_count), e.recurrence_byDay != null && e.recurrence_byDay != "" && (e.recurrence = e.recurrence + ";BYDAY=" + e.recurrence_byDay), e.recurrence_byMonth != null && e.recurrence_byMonth != "" && (e.recurrence = e.recurrence + ";BYMONTH=" + e.recurrence_byMonth), e.recurrence_byMonthDay != null && e.recurrence_byMonthDay != "" && (e.recurrence = e.recurrence + ";BYMONTHDAY=" + e.recurrence_byMonthDay);
  return e;
}
function xe(e) {
  L() && e.options.includes("ical") && !e.options.includes("apple") && e.options.push("apple");
  const n = [];
  e.optionLabels = [];
  for (let t = 0; t < e.options.length; t++) {
    const i = e.options[`${t}`].split("|"), o = i[0].toLowerCase().replace("microsoft", "ms").replace(".", ""), l = function() {
      return i[1] != null ? i[1] : "";
    }();
    L() && $e.includes(o) || e.recurrence != null && e.recurrence != "" && (!Be.includes(o) || e.recurrence_until != null && e.recurrence_until != "" && (o == "apple" || o == "ical")) || e.subscribe && Ue.includes(o) || (n.push(o), e.optionLabels.push(l));
  }
  return e.options = n, e;
}
function Ie(e) {
  return !(e.richData != null && e.richData == !1);
}
function Pe(e) {
  return !(e.checkmark != null && e.checkmark == !1);
}
function qe(e) {
  return !(e.background != null && e.background == !1);
}
function je(e) {
  return e.branding != null && e.branding == !1, !1;
}
function Qe(e) {
  return e.mindScrolling != null && e.mindScrolling == !0;
}
function Ge(e) {
  if ((e.listStyle == null || e.listStyle == "") && (e.listStyle = "dropdown"), e.listStyle === "modal" && (e.trigger = "click"), e.buttonStyle != null && e.buttonStyle != "" && e.buttonStyle != "default" ? ((e.buttonStyle == "bubble" || e.buttonStyle == "text" || e.buttonStyle == "date") && (e.trigger = "click"), e.buttonStyle == "date" && e.listStyle == "dropdown" && (e.listStyle = "overlay")) : e.buttonStyle = "", e.sizes = [], e.sizes.l = e.sizes.m = e.sizes.s = 16, e.size != null && e.size != "") {
    const n = e.size.split("|");
    for (let t = 0; t < n.length; t++)
      n[`${t}`] = parseInt(n[`${t}`]);
    n[0] >= 0 && n[0] < 11 && (e.sizes.l = 10 + n[0]), n.length > 2 ? (n[1] >= 0 && n[1] < 11 && (e.sizes.m = 10 + n[1]), n[2] >= 0 && n[2] < 11 && (e.sizes.s = 10 + n[2])) : n.length == 2 && n[1] >= 0 && n[1] < 11 && (e.sizes.m = e.sizes.s = 10 + n[1]);
  }
  if (e.lightMode == null || e.lightMode == "")
    e.lightMode = "light";
  else if (e.lightMode != null && e.lightMode != "") {
    const n = window.matchMedia("(prefers-color-scheme: dark)");
    switch (e.lightMode) {
      case "system":
        n.matches ? e.lightMode = "dark" : e.lightMode = "light";
        break;
      case "bodyScheme":
      case "dark":
        break;
      default:
        e.lightMode = "light";
        break;
    }
  }
  if (e.iconButton = !0, e.iconList = !0, e.iconModal = !0, e.icons != null && (e.icons = String(e.icons), e.icons != "")) {
    const n = e.icons.split("|");
    n[0] == "false" && (e.iconButton = !1), n[1] != null && n[1] == "false" && (e.iconList = !1), n[2] != null && n[2] == "false" && (e.iconModal = !1);
  }
  if (e.textLabelButton = !0, e.textLabelList = !0, e.textLabels != null && (e.textLabels = String(e.textLabels), e.textLabels != "")) {
    const n = e.textLabels.split("|");
    n[0] == "false" && (e.textLabelButton = !1), n[1] != null && n[1] == "false" && (e.textLabelList = !1);
  }
  return e;
}
function Ke(e) {
  return (e.language == null || e.language == "") && (e.language = "en"), e.language == "ar" ? e.rtl = !0 : e.rtl = !1, e;
}
function Ve(e) {
  if (e.dates != null && e.dates.length > 0)
    for (let t = 0; t < e.dates.length; t++) {
      e.dates[`${t}`].timeZone == null && e.timeZone != null && (e.dates[`${t}`].timeZone = e.timeZone);
      const i = se(e.dates[`${t}`]);
      e.dates[`${t}`].startTime = i.startTime, e.dates[`${t}`].endTime = i.endTime, e.dates[`${t}`].timeZone = i.timeZone, e.dates[`${t}`].timestamp = i.startTimestamp, e.dates[`${t}`].startDate = x(i.startDate), e.dates[`${t}`].endDate = x(i.endDate);
    }
  else {
    const t = se(e);
    e.dates = [], e.dates[0] = new Object(), e.startTime = e.dates[0].startTime = t.startTime, e.endTime = e.dates[0].endTime = t.endTime, e.timeZone = e.dates[0].timeZone = t.timeZone, e.startDate = e.dates[0].startDate = x(t.startDate), e.endDate = e.dates[0].endDate = x(t.endDate);
  }
  const n = new Date();
  return (e.created == null || e.created == "") && (e.created = w(n, "clean", !0)), (e.updated == null || e.updated == "") && (e.updated = w(n, "clean", !0)), e;
}
function We(e) {
  return (e.status == null || e.status == "") && (e.status = "CONFIRMED"), (e.sequence == null || e.sequence == "") && (e.sequence = 0), e;
}
function Je(e, n) {
  return e.dates[`${n}`].description != null && e.dates[`${n}`].description != "" ? (e.dates[`${n}`].descriptionHtmlFree = N(e.dates[`${n}`].description, !0), e.dates[`${n}`].description = N(e.dates[`${n}`].description)) : e.dates[`${n}`].description == null && e.description != null && e.description != "" ? (e.dates[`${n}`].descriptionHtmlFree = N(e.description, !0), e.dates[`${n}`].description = N(e.description)) : e.dates[`${n}`].descriptionHtmlFree = e.dates[`${n}`].description = "", e;
}
function Xe(e) {
  for (let n = 0; n < e.dates.length; n++)
    e = Je(e, n), (e.dates[`${n}`].name == null || e.dates[`${n}`].name == "") && (e.dates[`${n}`].name = e.name), e.dates[`${n}`].status == null ? e.dates[`${n}`].status = e.status.toUpperCase() : e.dates[`${n}`].status = e.dates[`${n}`].status.toUpperCase(), e.dates[`${n}`].sequence == null && (e.dates[`${n}`].sequence = e.sequence), e.dates[`${n}`].location == null && e.location != null && (e.dates[`${n}`].location = e.location), e.dates[`${n}`].organizer == null && e.organizer != null && (e.dates[`${n}`].organizer = e.organizer), e.dates[`${n}`].availability == null && e.availability != null ? e.dates[`${n}`].availability = e.availability.toLowerCase() : e.dates[`${n}`].availability != null && (e.dates[`${n}`].availability = e.dates[`${n}`].availability.toLowerCase()), e.dates[`${n}`].uid == null && (e.dates[`${n}`].uid = we());
  return e.recurrence != null && e.recurrence != "" && (e.dates[0].recurrence = e.recurrence), e.dates.length > 1 && e.dates.sort((n, t) => n.timestamp - t.timestamp), e;
}
function se(e) {
  return (e.endDate == null || e.endDate == "") && (e.endDate = e.startDate), ["start", "end"].forEach(function(t) {
    if (e[t + "Date"] != null) {
      e[t + "Date"] = e[t + "Date"].replace(/\.\d{3}/, "").replace("Z", "");
      const o = e[t + "Date"].split("T");
      o[1] != null && (e[t + "Date"] = o[0], e[t + "Time"] = o[1]);
    }
    if (e[t + "Time"] != null && e[t + "Time"].length === 8) {
      const o = e[t + "Time"];
      e[t + "Time"] = o.substring(0, o.length - 3);
    }
    e.timeZone == "currentBrowser" && (e.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone);
    let i;
    e[t + "Time"] != null ? i = new Date(e[t + "Date"] + " " + e[t + "Time"]) : i = new Date(e[t + "Date"]), e[t + "Timestamp"] = i.getTime();
  }), e;
}
function x(e) {
  const n = new Date(), t = n.getUTCFullYear() + "-" + (n.getUTCMonth() + 1) + "-" + n.getUTCDate();
  e = e.replace(/today/gi, t);
  const i = e.split("+"), o = i[0].split("-");
  let l = function() {
    return o[0].length < 4 ? new Date(Date.UTC(o[2], o[0] - 1, o[1])) : new Date(Date.UTC(o[0], o[1] - 1, o[2]));
  }();
  return i[1] != null && i[1] > 0 && l.setDate(l.getDate() + parseInt(i[1])), l.toISOString().replace(/T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g, "");
}
function en(e) {
  if (e.options == null || e.options.length < 1)
    return console.error("Add to Calendar Button generation failed: no valid options set"), !1;
  if (e.name == null || e.name == "")
    return console.error("Add to Calendar Button generation failed: required name information missing"), !1;
  if (e.dates != null && e.dates.length > 0) {
    const n = ["name", "startDate"], t = ["name"];
    return n.every(function(i) {
      for (let o = 0; o < e.dates.length; o++)
        if (!t.includes(`${i}`) && (e.dates[`${o}`][`${i}`] == null || e.dates[`${o}`][`${i}`] == "") || t.includes(`${i}`) && (e.dates[`${o}`][`${i}`] == null || e.dates[`${o}`][`${i}`] == "") && (e[`${i}`] == null || e[`${i}`] == ""))
          return console.error(
            "Add to Calendar Button generation failed: required setting missing [dates array object #" + (o + 1) + "/" + e.dates.length + "] => [" + i + "]"
          ), !1;
      return !0;
    });
  } else
    return ["startDate"].every(function(t) {
      return e[`${t}`] == null || e[`${t}`] == "" ? (console.error("Add to Calendar Button generation failed: required setting missing [" + t + "]"), !1) : !0;
    });
}
function nn(e) {
  const n = "Add to Calendar Button generation (" + e.identifier + ")";
  return !(!ke(e, n) || !tn(e, n) || !on(e, n) || !ln(e, n) || !rn(e, n) || !an(e, n) || !pn(e, n));
}
function ke(e, n, t = "", i = "") {
  const o = function() {
    return t != "" && e.dates[`${t}`].icsFile != null ? e.dates[`${t}`].icsFile : t == "" && e.icsFile != null ? e.icsFile : "";
  }();
  return o != "" && (!oe(o, !1) || !/^https:\/\/(.)*\.ics$/m.test(e.icsFile) && !e.subscribe || !e.icsFile.startsWith("https://") && e.subscribe) ? (console.error(n + " failed: explicit ics file path not valid" + i), !1) : !0;
}
function tn(e, n) {
  return e.subscribe == !0 && (e.icsFile == null || e.icsFile == "") ? (console.error(n + " failed: a subscription calendar requires a valid explicit ics file as well"), !1) : !0;
}
function on(e, n) {
  return /^\d{8}T\d{6}Z$/.test(e.created) ? !0 : (console.error(
    n + " failed: created date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ"
  ), !1);
}
function ln(e, n) {
  return /^\d{8}T\d{6}Z$/.test(e.updated) ? !0 : (console.error(
    n + " failed: updated date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ"
  ), !1);
}
function rn(e, n) {
  return !!e.options.every(function(t) {
    return Re.includes(t) ? !0 : (console.error(n + " failed: invalid option [" + t + "]"), !1);
  });
}
function an(e, n) {
  for (let t = 0; t < e.dates.length; t++) {
    const i = function() {
      return e.dates.length == 1 ? "" : " [dates array object #" + (t + 1) + "/" + e.dates.length + "] ";
    }();
    if (!ke(e, n, t, i) || !sn(e, n, t, i) || !cn(e, n, t, i) || !un(e, n, t, i) || (dn(e, n, t, i), mn(e, n, t, i), !fn(e, n, t, i)) || !hn(e, n, t, i))
      return !1;
  }
  return !0;
}
function sn(e, n, t, i) {
  return e.dates[`${t}`].status != "TENTATIVE" && e.dates[`${t}`].status != "CONFIRMED" && e.dates[`${t}`].status != "CANCELLED" ? (console.error(
    n + " failed: event status needs to be TENTATIVE, CONFIRMED, or CANCELLED" + i
  ), !1) : !0;
}
function cn(e, n, t, i) {
  return e.dates[`${t}`].availability != null && e.dates[`${t}`].availability != "" && e.dates[`${t}`].availability != "free" && e.dates[`${t}`].availability != "busy" ? (console.error(n + ' failed: event availability needs to be "free" or "busy"' + i), !1) : !0;
}
function un(e, n, t, i) {
  if (e.dates[`${t}`].organizer != null && e.dates[`${t}`].organizer != "") {
    const o = e.dates[`${t}`].organizer.split("|");
    if (o.length != 2 || o[0].length > 50 || o[1].length > 80 || !zn(o[1]))
      return console.error(
        n + ' failed: organizer needs to match the schema "NAME|EMAIL" with a valid email address' + i
      ), !1;
  }
  return !0;
}
function dn(e, n, t, i) {
  return /^(\w|-){1,254}$/.test(e.dates[`${t}`].uid) || (console.warn(
    n + ": UID not valid. May only contain alpha, digits, and dashes; and be less than 255 characters. Falling back to an automated value!" + i
  ), e.dates[`${t}`].uid = we()), /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    e.dates[`${t}`].uid
  ) || console.warn(
    n + ": UID is highly recommended to be a hex-encoded random Universally Unique Identifier (UUID)!" + i
  ), !0;
}
function mn(e, n, t, i) {
  return /^\d+$/.test(e.dates[`${t}`].sequence) || (console.log(n + ": sequence needs to be a number. Used the default 0 instead" + i), e.dates[`${t}`].sequence = 0), !0;
}
function fn(e, n, t, i) {
  return e.dates[`${t}`].timeZone != null && e.dates[`${t}`].timeZone != "" && !Me().includes(e.dates[`${t}`].timeZone) ? (console.error(n + " failed: invalid time zone given" + i), !1) : !0;
}
function hn(e, n, t, i) {
  const o = ["startDate", "endDate"], l = o;
  return !o.every(function(a) {
    if (e.dates[`${t}`][`${a}`].length !== 10)
      return console.error(n + " failed: date misspelled [-> YYYY-MM-DD]" + i), !1;
    const c = e.dates[`${t}`][`${a}`].split("-");
    return c.length < 3 || c.length > 3 ? (console.error(
      n + " failed: date misspelled [" + a + ": " + e.dates[`${t}`][`${a}`] + "]" + i
    ), !1) : (l[`${a}`] = new Date(c[0], c[1] - 1, c[2]), !0);
  }) || !["startTime", "endTime"].every(function(a) {
    if (e.dates[`${t}`][`${a}`] != null) {
      if (e.dates[`${t}`][`${a}`].length !== 5)
        return console.error(n + " failed: time misspelled [-> HH:MM]" + i), !1;
      const c = e.dates[`${t}`][`${a}`].split(":");
      if (c.length < 2 || c.length > 2)
        return console.error(
          n + " failed: time misspelled [" + a + ": " + e.dates[`${t}`][`${a}`] + "]" + i
        ), !1;
      if (c[0] > 23)
        return console.error(
          n + " failed: time misspelled - hours number too high [" + a + ": " + c[0] + "]" + i
        ), !1;
      if (c[1] > 59)
        return console.error(
          n + " failed: time misspelled - minutes number too high [" + a + ": " + c[1] + "]" + i
        ), !1;
      a == "startTime" && (l.startDate = new Date(
        l.startDate.getTime() + c[0] * 36e5 + c[1] * 6e4
      )), a == "endTime" && (l.endDate = new Date(
        l.endDate.getTime() + c[0] * 36e5 + c[1] * 6e4
      ));
    }
    return !0;
  }) ? !1 : e.dates[`${t}`].startTime != null && e.dates[`${t}`].endTime == null || e.dates[`${t}`].startTime == null && e.dates[`${t}`].endTime != null ? (console.error(
    n + " failed: if you set a starting time, you also need to define an end time" + i
  ), !1) : l.endDate < l.startDate ? (console.error(n + " failed: end date before start date" + i), !1) : !0;
}
function pn(e, n) {
  return e.recurrence != null && e.recurrence != "" && e.dates.length > 1 ? (console.error(n + " failed: RRULE and multi-date set at the same time"), !1) : e.recurrence != null && e.recurrence != "" && !/^RRULE:[\w=;,:+-/\\]+$/i.test(e.recurrence) ? (console.error(n + " failed: RRULE data misspelled"), !1) : e.recurrence_interval != null && e.recurrence_interval != "" && !/^\d+$/.test(e.recurrence_interval) ? (console.error(n + " failed: recurrence data (interval) misspelled"), !1) : e.recurrence_until != null && e.recurrence_until != "" && !/^(\d|-|:)+$/i.test(e.recurrence_until) ? (console.error(n + " failed: recurrence data (until) misspelled"), !1) : e.recurrence_count != null && e.recurrence_count != "" && !/^\d+$/.test(e.recurrence_count) ? (console.error(n + " failed: recurrence data (interval) misspelled"), !1) : e.recurrence_byMonth != null && e.recurrence_byMonth != "" && !/^(\d|,)+$/.test(e.recurrence_byMonth) ? (console.error(n + " failed: recurrence data (byMonth) misspelled"), !1) : e.recurrence_byMonthDay != null && e.recurrence_byMonthDay != "" && !/^(\d|,)+$/.test(e.recurrence_byMonthDay) ? (console.error(n + " failed: recurrence data (byMonthDay) misspelled"), !1) : e.recurrence_byDay != null && e.recurrence_byDay != "" && !/^(\d|-|MO|TU|WE|TH|FR|SA|SU|,)+$/im.test(e.recurrence_byDay) ? (console.error(n + " failed: recurrence data (byDay) misspelled"), !1) : e.recurrence_weekstart != null && e.recurrence_weekstart != "" && !/^(MO|TU|WE|TH|FR|SA|SU)$/im.test(e.recurrence_weekstart) ? (console.error(n + " failed: recurrence data (weekstart) misspelled"), !1) : !0;
}
function v(e, n = "", t = "", i = !1, o = !1) {
  e == "open" ? ce(n, t, i, o) : e == "close" || t.classList.contains("atcb-active") || document.querySelector(".atcb-active-modal") ? I(i) : ce(n, t, i, o);
}
function ce(e, n, t = !1, i = !1) {
  if (document.querySelector(".atcb-list") || document.querySelector(".atcb-modal"))
    return;
  const o = yn(e), l = document.createElement("div");
  l.classList.add("atcb-list-wrapper"), e.textLabelList == !1 && l.classList.add("atcb-no-text"), n ? (n.classList.add("atcb-active"), e.listStyle === "modal" ? (n.classList.add("atcb-modal-style"), o.classList.add("atcb-modal")) : (l.appendChild(o), l.classList.add("atcb-dropdown"), e.listStyle === "overlay" && l.classList.add("atcb-dropoverlay"), e.mindScrolling && l.classList.add("atcb-mind-scrolling")), i && o.classList.add("atcb-generated-button")) : o.classList.add("atcb-modal");
  const r = Ce(e.listStyle, e.trigger, e.lightMode, e.background);
  if (e.listStyle === "modal")
    document.body.appendChild(r), r.appendChild(o), e.branding, Q(o, e.sizes), le();
  else {
    const a = document.createElement("div");
    a.id = "atcb-pos-wrapper", a.style.position = "absolute", a.style.top = "0", a.style.bottom = "0", a.style.width = "100%", document.body.appendChild(a), a.appendChild(l), l.appendChild(o), e.buttonStyle != "" && l.classList.add("atcb-style-" + e.buttonStyle), e.branding, document.body.appendChild(r), Q(o, e.sizes), l.style.display = "none", setTimeout(function() {
      l.style.display = "block", e.listStyle === "dropdown-static" ? j(n, l, !0) : j(n, l);
    }, 5);
  }
  re(r), t ? o.firstChild.focus() : o.firstChild.focus({ preventScroll: !0 }), o.firstChild.blur();
}
function I(e = !1) {
  const n = document.querySelectorAll(".atcb-modal[data-modal-nr]");
  if (n.length > 1) {
    document.querySelectorAll('.atcb-modal[data-modal-nr="' + n.length + '"]')[0].remove();
    const t = document.querySelectorAll(
      '.atcb-modal[data-modal-nr="' + (n.length - 1) + '"]'
    )[0];
    t.style.display = "block";
    let i = t;
    const o = t.getElementsByTagName("button");
    o.length > 0 && (i = o[0]), i.focus(), e || i.blur();
  } else {
    const t = document.querySelector(".atcb-active, .atcb-active-modal");
    t && (t.focus({ preventScroll: !0 }), e || t.blur()), Array.from(document.querySelectorAll(".atcb-active")).forEach((i) => {
      i.classList.remove("atcb-active");
    }), Array.from(document.querySelectorAll(".atcb-active-modal")).forEach((i) => {
      i.classList.remove("atcb-active-modal");
    }), document.body.classList.remove("atcb-modal-no-scroll"), Array.from(document.querySelectorAll(".atcb-list-wrapper")).concat(Array.from(document.querySelectorAll(".atcb-list"))).concat(Array.from(document.querySelectorAll(".atcb-modal[data-modal-nr]"))).concat(Array.from(document.querySelectorAll("#add-to-calendar-button-reference"))).concat(Array.from(document.querySelectorAll("#atcb-pos-wrapper"))).concat(Array.from(document.querySelectorAll("#atcb-bgoverlay"))).forEach((i) => i.remove());
  }
}
function P(e, n, t, i = !1, o = "", l = !1) {
  switch (t) {
    case "trigger":
    default:
      n.id = e.identifier, e.trigger === "click" ? n.addEventListener("click", (r) => {
        r.preventDefault(), v("auto", e, n, !1, !0);
      }) : (n.addEventListener("touchend", (r) => {
        r.preventDefault(), v("auto", e, n, !1, !0);
      }), n.addEventListener(
        "mouseenter",
        F((r) => {
          r.preventDefault(), v("open", e, n, !1, !0);
        })
      )), n.addEventListener("keyup", function(r) {
        r.key == "Enter" && (r.preventDefault(), v("auto", e, n, !0, !0));
      });
      break;
    case "apple":
    case "google":
    case "ical":
    case "msteams":
    case "ms365":
    case "outlookcom":
    case "yahoo":
      n.id = e.identifier + "-" + t, n.addEventListener(
        "click",
        M(() => {
          l ? n.blur() : v("close"), q(t, e);
        })
      ), n.addEventListener("keyup", function(r) {
        r.key == "Enter" && (r.preventDefault(), l ? n.blur() : v("close"), q(t, e, "all", !0));
      });
      break;
    case "close":
      n.id = e.identifier + "-close", n.addEventListener(
        "click",
        M(() => {
          v("close");
        })
      ), n.addEventListener("keyup", function(r) {
        r.key == "Enter" && (r.preventDefault(), v("close", e, "all", !0));
      });
      break;
  }
  l && (n.id = e.identifier), bn(e, n, t, i, o, l);
}
function bn(e, n, t, i, o, l) {
  const r = f("Add to Calendar", e);
  switch (l && o == "" && (o = r), t) {
    case "trigger":
    default:
      o = o || r;
      break;
    case "apple":
      o = o || "Apple";
      break;
    case "google":
      o = o || "Google";
      break;
    case "ical":
      o = o || f("iCal File", e);
      break;
    case "msteams":
      o = o || "Microsoft Teams";
      break;
    case "ms365":
      o = o || "Microsoft 365";
      break;
    case "outlookcom":
      o = o || "Outlook.com";
      break;
    case "yahoo":
      o = o || "Yahoo";
      break;
    case "close":
      o = f("Close", e);
      break;
  }
  if (!(e.buttonStyle == "date" && (t == "trigger" || l))) {
    if (i) {
      const a = document.createElement("span");
      a.classList.add("atcb-icon"), a.innerHTML = $[`${t}`], n.appendChild(a);
    }
    if (t == "trigger" && e.textLabelButton == !0 || t != "trigger" && e.textLabelList == !0) {
      const a = document.createElement("span");
      a.classList.add("atcb-text"), a.textContent = o, n.appendChild(a);
    }
  }
}
function gn(e, n) {
  e.textContent = "", n.richData && n.name && n.dates[0].location && n.dates[0].startDate && Tn(n, e);
  const t = document.createElement("div");
  t.classList.add("atcb-button-wrapper"), t.classList.add("atcb-" + n.lightMode), n.rtl && t.classList.add("atcb-rtl"), e.appendChild(t), Q(t, n.sizes);
  const i = document.createElement("button");
  if (i.classList.add("atcb-button"), n.textLabelButton == !1 && i.classList.add("atcb-no-text"), n.trigger === "click" && i.classList.add("atcb-click"), n.listStyle === "overlay" && i.classList.add("atcb-dropoverlay"), i.type = "button", t.appendChild(i), n.buttonStyle == "date" && Ye(n, i), n.options.length === 1)
    i.classList.add("atcb-single"), P(n, i, n.options[0], n.iconButton, n.label, !0);
  else {
    P(n, i, "trigger", n.iconButton, n.label);
    const o = document.createElement("div");
    o.classList.add("atcb-dropdown-anchor"), i.appendChild(o);
  }
  if (n.checkmark) {
    const o = document.createElement("div");
    o.classList.add("atcb-checkmark"), o.innerHTML = $.checkmark, i.appendChild(o);
  }
  e.classList.remove("atcb"), e.classList.add("atcb-initialized"), n.inline ? e.style.display = "inline-block" : e.style.display = "block", console.log('Add to Calendar Button "' + n.identifier + '" created');
}
function Tn(e, n) {
  const t = document.createElement("script");
  t.type = "application/ld+json";
  const i = [];
  if (e.dates.length > 1) {
    const l = [];
    l.push('"@context":"https://schema.org"'), l.push('"@type":"EventSeries"'), l.push('"@id":"' + e.name.replace(/\s/g, "") + '"'), l.push('"name":"' + e.name + '",'), i.push(`{\r
` + l.join(`,\r
`) + `\r
`);
  }
  const o = [];
  for (let l = 0; l < e.dates.length; l++) {
    const r = [];
    r.push('"@context":"https://schema.org"'), r.push('"@type":"Event"'), e.dates.length > 1 && r.push('"@id":"' + e.name.replace(/\s/g, "") + "-" + (l + 1) + '"'), e.dates[`${l}`].status == "CANCELLED" && r.push('"eventStatus":"https://schema.org/EventCancelled"'), r.push('"name":"' + e.dates[`${l}`].name + '"'), e.dates[`${l}`].descriptionHtmlFree && r.push('"description":"' + e.dates[`${l}`].descriptionHtmlFree + '"');
    const a = D(e.dates[`${l}`], "delimiters", "general", !0);
    if (r.push('"startDate":"' + a.start + '"'), a.duration != null && r.push('"duration":"' + a.duration + '"'), r.push(
      e.dates[`${l}`].location.startsWith("http") ? `"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",\r
"location": {\r
"@type":"VirtualLocation",\r
"url":"` + e.dates[`${l}`].location + `"\r
}` : '"location":"' + e.dates[`${l}`].location + '"'
    ), e.recurrence != null && e.recurrence != "" ? r.push(...An(e, a)) : r.push('"endDate":"' + a.end + '"'), e.dates[`${l}`].organizer != null && e.dates[`${l}`].organizer != "") {
      const h = e.dates[`${l}`].organizer.split("|");
      r.push(
        `"organizer":{\r
"@type":"Person",\r
"name":"` + h[0] + `",\r
"email":"` + h[1] + `"\r
}`
      );
    }
    const c = [];
    if (e.images != null) {
      if (Array.isArray(e.images))
        for (let h = 0; h < e.images.length; h++)
          oe(e.images[`${h}`]) && e.images[`${h}`].startsWith("http") && c.push('"' + e.images[`${h}`] + '"');
    } else
      c.push('"https://add-to-calendar-button.com/demo_assets/img/1x1.png"'), c.push('"https://add-to-calendar-button.com/demo_assets/img/4x3.png"'), c.push('"https://add-to-calendar-button.com/demo_assets/img/16x9.png"');
    c.length > 0 && r.push(`"image":[\r
` + c.join(`,\r
`) + "]"), o.push(`{\r
` + r.join(`,\r
`) + `\r
}`);
  }
  e.dates.length > 1 ? t.textContent = i.join(`,\r
`) + `"subEvents":[\r
` + o.join(`,\r
`) + `\r
]\r
}` : t.textContent = o[0], n.appendChild(t);
}
function An(e, n) {
  const t = [];
  t.push('"eventSchedule": { "@type": "Schedule"'), e.dates[0].timeZone != null && e.dates[0].timeZone != "" && t.push('"scheduleTimezone":"' + e.dates[0].timeZone + '"');
  const i = "P" + e.recurrence_interval + e.recurrence_frequency.substr(0, 1);
  if (t.push('"repeatFrequency":"' + i + '"'), e.recurrence_byDay != null && e.recurrence_byDay != "") {
    const o = function() {
      if (/\d/.test(e.recurrence_byDay))
        return '"' + e.recurrence_byDay + '"';
      {
        const l = e.recurrence_byDay.split(","), r = {
          MO: "https://schema.org/Monday",
          TU: "https://schema.org/Tuesday",
          WE: "https://schema.org/Wednesday",
          TH: "https://schema.org/Thursday",
          FR: "https://schema.org/Friday",
          SA: "https://schema.org/Saturday",
          SU: "https://schema.org/Sunday"
        }, a = [];
        for (let c = 0; c < l.length; c++)
          a.push('"' + r[l[`${c}`]] + '"');
        return "[" + a.join(",") + "]";
      }
    }();
    t.push('"byDay":' + o);
  }
  if (e.recurrence_byMonth != null && e.recurrence_byMonth != "") {
    const o = e.recurrence_byMonth.includes(",") ? "[" + e.recurrence_byMonth + "]" : e.recurrence_byMonth;
    t.push('"byMonth":"' + o + '"');
  }
  if (e.recurrence_byMonthDay != null && e.recurrence_byMonthDay != "") {
    const o = e.recurrence_byMonthDay.includes(",") ? "[" + e.recurrence_byMonthDay + "]" : e.recurrence_byMonthDay;
    t.push('"byMonthDay":"' + o + '"');
  }
  return e.recurrence_count != null && e.recurrence_count != "" && t.push('"repeatCount":"' + e.recurrence_count + '"'), e.recurrence_until != null && e.recurrence_until != "" && t.push('"endDate":"' + e.recurrence_until + '"'), e.startTime != null && e.startTime != "" && e.endTime != null && e.endTime != "" && (t.push('"startTime":"' + e.startTime + ':00"'), t.push('"endTime":"' + e.endTime + ':00"'), t.push('"duration":"' + n.duration + '"')), t.push('"startDate":"' + e.startDate + '" }'), t;
}
function yn(e) {
  const n = document.createElement("div");
  n.classList.add("atcb-list"), n.classList.add("atcb-" + e.lightMode), e.rtl && n.classList.add("atcb-rtl");
  let t = 0;
  if (e.options.forEach(function(i) {
    const o = document.createElement("div");
    o.classList.add("atcb-list-item"), o.tabIndex = 0, t++, o.dataset.optionNumber = t, n.appendChild(o), P(e, o, i, e.iconList, e.optionLabels[t - 1]);
  }), e.listStyle === "modal") {
    const i = document.createElement("div");
    i.classList.add("atcb-list-item", "atcb-list-item-close"), i.tabIndex = 0, n.appendChild(i), P(e, i, "close", e.iconList);
  }
  return n;
}
function Ce(e = "dropdown", n = "", t = "light", i = !0) {
  const o = document.createElement("div");
  o.id = "atcb-bgoverlay", e !== "modal" && i && o.classList.add("atcb-animate-bg"), i || o.classList.add("atcb-no-bg"), o.classList.add("atcb-" + t), o.tabIndex = 0, o.addEventListener(
    "click",
    M((r) => {
      r.target === r.currentTarget && v("close");
    })
  );
  let l = !1;
  return o.addEventListener(
    "touchstart",
    F(() => l = !1),
    { passive: !0 }
  ), o.addEventListener(
    "touchmove",
    F(() => l = !0),
    { passive: !0 }
  ), o.addEventListener(
    "touchend",
    M((r) => {
      l !== !1 || r.target !== r.currentTarget || v("close");
    }),
    { passive: !0 }
  ), o.addEventListener(
    "focus",
    F((r) => {
      r.target === r.currentTarget && v("close");
    })
  ), n !== "click" ? o.addEventListener(
    "mousemove",
    F((r) => {
      r.target === r.currentTarget && v("close");
    })
  ) : o.classList.add("atcb-click"), o;
}
function O(e, n = "", t, i = "", o = [], l = [], r = !1) {
  const a = function() {
    const u = document.getElementById("atcb-bgoverlay");
    return u || Ce("modal", "click", e.lightMode, e.background);
  }();
  a.classList.add("atcb-no-animation"), document.body.appendChild(a);
  const c = document.createElement("div");
  c.classList.add("atcb-modal"), a.appendChild(c);
  const h = document.querySelectorAll(".atcb-modal").length;
  c.dataset.modalNr = h, c.tabIndex = 0, c.focus({ preventScroll: !0 }), c.blur();
  const b = document.getElementById(e.identifier);
  b != null && b.classList.add("atcb-active-modal");
  const s = document.createElement("div");
  if (s.classList.add("atcb-modal-box"), s.classList.add("atcb-" + e.lightMode), e.rtl && s.classList.add("atcb-rtl"), c.appendChild(s), Q(s, e.sizes), re(a), n != "" && e.iconModal == !0) {
    const u = document.createElement("div");
    u.classList.add("atcb-modal-icon"), u.innerHTML = $[`${n}`], s.appendChild(u);
  }
  const g = document.createElement("div");
  if (g.classList.add("atcb-modal-headline"), g.textContent = t, s.appendChild(g), i != "") {
    const u = document.createElement("div");
    u.classList.add("atcb-modal-content"), u.innerHTML = i, s.appendChild(u);
  }
  if (l.length > 1) {
    e.branding;
    const u = document.createElement("div");
    u.classList.add("atcb-modal-content"), s.appendChild(u);
    for (let A = 1; A < l.length; A++) {
      const m = document.createElement("button");
      switch (m.type = "button", m.id = e.identifier + "-" + l[0] + "-" + A, _[`${e.identifier}`][`${l[0]}`][A - 1] > 0 && m.classList.add("atcb-saved"), m.classList.add("atcb-subevent-btn"), u.appendChild(m), Ye(e, m, A), A == 1 && r && m.focus(), l[0]) {
        case "apple":
        case "google":
        case "ical":
        case "msteams":
        case "ms365":
        case "outlookcom":
        case "yahoo":
          m.addEventListener(
            "click",
            M(() => {
              q(l[0], e, l[`${A}`], r, !0);
            })
          );
          break;
      }
    }
  }
  o.length == 0 && o.push({ type: "close", label: f("Close", e) });
  const T = document.createElement("div");
  if (T.classList.add("atcb-modal-buttons"), s.appendChild(T), o.forEach((u, A) => {
    let m;
    switch (u.href != null && u.href != "" ? (m = document.createElement("a"), m.setAttribute("target", ie), m.setAttribute("href", u.href), m.setAttribute("rel", "noopener")) : (m = document.createElement("button"), m.type = "button"), m.classList.add("atcb-modal-btn"), u.primary && m.classList.add("atcb-modal-btn-primary"), (u.label == null || u.label == "") && (u.label = f("Click me", e)), m.textContent = u.label, T.appendChild(m), A == 0 && l.length < 2 && r && m.focus(), u.type) {
      default:
      case "close":
        m.addEventListener(
          "click",
          M(() => I())
        ), m.addEventListener("keyup", function(S) {
          S.key == "Enter" && v("close", "", "", !0);
        });
        break;
      case "yahoo2nd":
        m.addEventListener(
          "click",
          M(() => {
            I(), ue(e);
          })
        ), m.addEventListener("keyup", function(S) {
          S.key == "Enter" && (v("close", "", "", !0), ue(e, r));
        });
        break;
      case "none":
        break;
    }
  }), h > 1) {
    const u = document.querySelectorAll('.atcb-modal[data-modal-nr="' + (h - 1) + '"]')[0];
    u.style.display = "none";
  }
  le(c);
}
function ue(e, n) {
  G(e.identifier), q("yahoo2nd", e, "all", n);
}
function Ye(e, n, t = "all") {
  t != "all" ? t = parseInt(t) - 1 : e.dates.length == 1 && (t = 0);
  const i = function() {
    let p, k, d, y, Y = {}, B = {};
    t == "all" ? (Y = D(e.dates[0]), B = D(e.dates[e.dates.length - 1]), d = e.dates[0].timeZone, y = e.dates[e.dates.length - 1].timeZone) : (Y = D(e.dates[`${t}`]), B = Y, d = e.dates[`${t}`].timeZone, y = d), p = new Date(Y.start), k = new Date(B.end), (d == null || d == "" || Y.allday) && (d = "UTC"), (y == null || y == "" || B.allday) && (y = "UTC");
    let E = "", K = "", V = "";
    !Y.allday && Intl.DateTimeFormat().resolvedOptions().timeZone != d && d != y && (K = " (" + d + ")"), (!B.allday && Intl.DateTimeFormat().resolvedOptions().timeZone != y || d != y) && (V = " (" + y + ")");
    const H = de(d), W = de(y);
    return p.getFullYear() === k.getFullYear() && p.getMonth() === k.getMonth() && p.getDate() === k.getDate() ? Y.allday ? E = p.toLocaleDateString(e.language, H.DateShort) : E = p.toLocaleString(e.language, H.DateTimeShort) + K + " - " + k.toLocaleTimeString(e.language, W.Time) + V : (Y.allday ? E = p.toLocaleDateString(e.language, H.DateShort) : E = p.toLocaleString(e.language, H.DateTimeShort), E += K + " - ", B.allday ? E += k.toLocaleDateString(e.language, W.DateLong) : E += k.toLocaleString(e.language, W.DateTimeLong), E += V), E;
  }(), o = function() {
    return t != "all" && e.dates[`${t}`].status == "CANCELLED" ? f("Cancelled Date", e) + "<br>" + f("Delete from Calendar", e) : "+ " + f("Add to Calendar", e);
  }(), l = function() {
    return t != "all" && e.dates[`${t}`].status == "CANCELLED" ? f("Cancelled Date", e) : "";
  }();
  t == "all" && (t = 0);
  const r = new Date(e.dates[`${t}`].startDate), a = function() {
    return e.dates[`${t}`].timeZone != null && e.dates[`${t}`].timeZone != "" ? e.dates[`${t}`].timeZone : "UTC";
  }(), c = document.createElement("div");
  c.classList.add("atcb-date-btn-left"), n.appendChild(c);
  const h = document.createElement("div");
  h.classList.add("atcb-date-btn-day"), c.appendChild(h);
  const b = document.createElement("div");
  b.classList.add("atcb-date-btn-month"), h.textContent = r.toLocaleString(e.language, {
    day: "numeric",
    timeZone: a
  }), b.textContent = r.toLocaleString(e.language, {
    month: "short",
    timeZone: a
  }), c.appendChild(b);
  const s = document.createElement("div");
  s.classList.add("atcb-date-btn-right"), n.appendChild(s);
  const g = document.createElement("div");
  g.classList.add("atcb-date-btn-details"), s.appendChild(g);
  const T = document.createElement("div");
  if (T.classList.add("atcb-date-btn-headline"), T.textContent = e.dates[`${t}`].name, g.appendChild(T), e.location != null && e.location != "" || l != "") {
    const p = document.createElement("div");
    if (p.classList.add("atcb-date-btn-content"), g.appendChild(p), l != "")
      p.textContent = l, p.style.fontWeight = "600", p.style.color = "#9c1a23";
    else {
      p.classList.add("atcb-date-btn-content-location");
      const k = document.createElement("span");
      k.classList.add("atcb-date-btn-content-icon"), k.innerHTML = $.location, p.appendChild(k);
      const d = document.createElement("span");
      d.textContent = e.location, p.appendChild(d);
    }
  }
  const u = document.createElement("div");
  u.classList.add("atcb-date-btn-content"), g.appendChild(u);
  const A = document.createElement("span");
  A.classList.add("atcb-date-btn-content-icon"), A.innerHTML = $.ical, u.appendChild(A);
  const m = document.createElement("span");
  if (m.textContent = i, u.appendChild(m), e.recurrence != null && e.recurrence != "") {
    const p = document.createElement("span");
    p.classList.add("atcb-date-btn-content-recurr-icon"), u.appendChild(p), p.innerHTML = "&#x27F3;";
  }
  const S = document.createElement("div");
  if (S.classList.add("atcb-date-btn-hover"), S.innerHTML = o, s.appendChild(S), e.checkmark) {
    const p = document.createElement("div");
    p.classList.add("atcb-checkmark"), p.innerHTML = $.checkmark, n.appendChild(p);
  }
}
function de(e) {
  return {
    DateShort: {
      timeZone: e,
      year: "numeric"
    },
    DateLong: {
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    DateTimeShort: {
      timeZone: e,
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hourCycle: "h23"
    },
    DateTimeLong: {
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hourCycle: "h23"
    },
    Time: {
      timeZone: e,
      hour: "numeric",
      minute: "2-digit",
      hourCycle: "h23"
    }
  };
}
function q(e, n, t = "all", i = !1, o = !1) {
  if (t != "all" ? t = parseInt(t) - 1 : n.dates.length == 1 && (t = 0), n.subscribe) {
    Sn(e, n, i);
    return;
  }
  if (Se() && (e == "msteams" || e == "ms365" || e == "outlookcom") && (e = "ical"), t != "all") {
    if (n.dates[`${t}`].status == "CANCELLED" && e != "apple" && e != "ical")
      O(
        n,
        "warning",
        f("Cancelled Date", n),
        f("Delete from Calendar", n),
        [],
        [],
        i
      );
    else
      switch (e) {
        case "apple":
        case "ical":
          Ee(n, t, i);
          break;
        case "google":
          Yn(n.dates[`${t}`]);
          break;
        case "msteams":
          wn(n.dates[`${t}`]);
          break;
        case "ms365":
          fe(n.dates[`${t}`]);
          break;
        case "outlookcom":
          fe(n.dates[`${t}`], "outlook");
          break;
        case "yahoo":
          En(n.dates[`${t}`]);
          break;
      }
    const l = document.getElementById(n.identifier + "-" + e + "-" + (t + 1));
    l && l.classList.add("atcb-saved"), _[`${n.identifier}`][`${e}`][`${t}`]++, _[`${n.identifier}`][`${e}`].filter(function(a) {
      return a < 1;
    }).length == 0 && G(n.identifier, o);
    return;
  }
  vn(e, n, i, o);
}
function vn(e, n, t, i) {
  if ((e == "ical" || e == "apple") && n.dates.every(function(o) {
    return !(o.status == "CANCELLED" || o.organizer != null && o.organizer != "");
  })) {
    Ee(n, "all", t);
    for (let o = 0; o < _[`${n.identifier}`][`${e}`].length; o++)
      _[`${n.identifier}`][`${e}`][`${o}`]++;
    G(n.identifier, i);
    return;
  }
  if (!i) {
    const o = [e];
    for (let l = 0; l < n.dates.length; l++)
      o.push(l + 1);
    O(
      n,
      e,
      f("modal.multidate.h", n),
      f("modal.multidate.text", n),
      [],
      o,
      t
    );
  }
}
function Sn(e, n, t) {
  const i = n.icsFile.replace("https://", "webcal://");
  switch (e) {
    case "apple":
    case "ical":
      kn(i);
      break;
    case "google":
      Cn(n.icsFile);
      break;
    case "ms365":
      me(n.icsFile, n.name);
      break;
    case "outlookcom":
      me(n.icsFile, n.name, "outlook");
      break;
    case "yahoo":
      ne(n.icsFile), O(
        n,
        "yahoo",
        f("modal.subscribe.yahoo.h", n),
        f("modal.clipboard.text", n) + "<br>" + f("modal.subscribe.yahoo.text", n),
        [
          {
            label: f("Open Yahoo Calendar", n),
            primary: !0,
            type: "yahoo2nd",
            href: "https://www.yahoo.com/calendar"
          },
          { label: f("Cancel", n) }
        ],
        [],
        t
      );
      return;
    case "yahoo2nd":
      ne(n.icsFile), O(
        n,
        "yahoo",
        f("modal.subscribe.yahoo.h", n),
        f("modal.clipboard.text", n) + "<br>" + f("modal.subscribe.yahoo.text", n),
        [
          {
            label: f("Open Yahoo Calendar", n),
            type: "none",
            href: "https://www.yahoo.com/calendar"
          },
          { label: f("Cancel", n) }
        ],
        [],
        t
      );
      return;
  }
  G(n.identifier);
}
function G(e, n) {
  const t = document.getElementById(e);
  t && t.classList.add("atcb-saved"), _n(), n && document.querySelectorAll(".atcb-modal[data-modal-nr]").length < 2 && v("close");
}
function kn(e) {
  R(e);
}
function Cn(e) {
  R("https://calendar.google.com/calendar/r?cid=" + e);
}
function me(e, n, t = "365") {
  const i = [], o = function() {
    return t == "outlook" ? "https://outlook.live.com/calendar/0/addfromweb/?" : "https://outlook.office.com/calendar/0/addfromweb/?";
  }();
  i.push("url=" + encodeURIComponent(e)), i.push("name=" + encodeURIComponent(n)), R(o + i.join("&"));
}
function Yn(e) {
  const n = [];
  n.push("https://calendar.google.com/calendar/render?action=TEMPLATE");
  const t = D(e, "clean", "google");
  n.push(
    "dates=" + encodeURIComponent(t.start) + "%2F" + encodeURIComponent(t.end)
  ), e.timeZone != null && e.timeZone != "" && !/(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(
    e.timeZone
  ) && n.push("ctz=" + e.timeZone), e.name != null && e.name != "" && n.push("text=" + encodeURIComponent(e.name));
  const i = [];
  if (e.description != null && e.description != "" && i.push(e.description), e.location != null && e.location != "" && (n.push("location=" + encodeURIComponent(e.location)), L() && (i.length > 0 && i.push("<br><br>"), i.push("&#128205;: " + e.location))), i.length > 0 && n.push("details=" + encodeURIComponent(i.join())), e.recurrence != null && e.recurrence != "" && n.push("recur=" + encodeURIComponent(e.recurrence)), e.availability != null && e.availability != "") {
    const o = function() {
      return e.availability == "free" ? "crm=AVAILABLE&trp=false" : "crm=BUSY&trp=true";
    }();
    n.push(o);
  }
  n.push("uid=" + encodeURIComponent(e.uid)), R(n.join("&"));
}
function En(e) {
  const n = [];
  n.push("https://calendar.yahoo.com/?v=60");
  const t = D(e, "clean");
  n.push(
    "st=" + encodeURIComponent(t.start) + "&et=" + encodeURIComponent(t.end)
  ), t.allday && n.push("dur=allday"), e.name != null && e.name != "" && n.push("title=" + encodeURIComponent(e.name)), e.location != null && e.location != "" && n.push("in_loc=" + encodeURIComponent(e.location)), e.descriptionHtmlFree != null && e.descriptionHtmlFree != "" && n.push("desc=" + encodeURIComponent(e.descriptionHtmlFree)), R(n.join("&"));
}
function fe(e, n = "365") {
  const t = [], i = "/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent", o = function() {
    return n == "outlook" ? "https://outlook.live.com" + i : "https://outlook.office.com" + i;
  }();
  t.push(o);
  const l = D(e, "delimiters", "microsoft");
  t.push("startdt=" + encodeURIComponent(l.start)), t.push("enddt=" + encodeURIComponent(l.end)), l.allday && t.push("allday=true"), e.name != null && e.name != "" && t.push("subject=" + encodeURIComponent(e.name)), e.location != null && e.location != "" && t.push("location=" + encodeURIComponent(e.location)), e.description != null && e.description != "" && t.push("body=" + encodeURIComponent(e.description.replace(/\n/g, "<br>"))), t.push("uid=" + encodeURIComponent(e.uid)), R(t.join("&"));
}
function wn(e) {
  const n = [], t = "https://teams.microsoft.com/l/meeting/new?", i = D(e, "delimiters", "microsoft");
  n.push("startTime=" + encodeURIComponent(i.start)), n.push("endTime=" + encodeURIComponent(i.end)), e.name != null && e.name != "" && n.push("subject=" + encodeURIComponent(e.name));
  let o = "";
  e.location != null && e.location != "" && (o = encodeURIComponent(e.location), n.push("location=" + o), o += " // "), e.descriptionHtmlFree != null && e.descriptionHtmlFree != "" && n.push("content=" + o + encodeURIComponent(e.descriptionHtmlFree)), n.push("uid=" + encodeURIComponent(e.uid)), R(t + n.join("&"));
}
function R(e, n = "") {
  n == "" && (n = ie), oe(e) && window.open(e, n).focus();
}
function Ee(e, n = "all", t = !1) {
  n != "all" && (n = parseInt(n));
  const i = Ln(e, n), o = function() {
    return n != "all" && e.dates[`${n}`].icsFile != null && e.dates[`${n}`].icsFile != "" ? e.dates[`${n}`].icsFile : e.icsFile != null && e.icsFile != "" ? e.icsFile : "";
  }();
  if (o != "" && (!L() || !ee())) {
    he(o, i);
    return;
  }
  const l = new Date(), r = ["BEGIN:VCALENDAR", "VERSION:2.0"];
  r.push("PRODID:-// https://add-to-calendar-pro.com // button v" + Ae + " //EN"), r.push("CALSCALE:GREGORIAN"), n == "all" ? r.push("METHOD:PUBLISH") : e.dates[`${n}`].status != null && e.dates[`${n}`].status == "CANCELLED" ? r.push("METHOD:CANCEL") : e.dates[`${n}`].organizer != null && e.dates[`${n}`].organizer != "" ? r.push("METHOD:REQUEST") : r.push("METHOD:PUBLISH");
  const a = [], c = function() {
    return n != "all" ? n : 0;
  }(), h = function() {
    return n != "all" ? n : e.dates.length - 1;
  }();
  for (let s = c; s <= h; s++) {
    const g = D(e.dates[`${s}`], "clean", "ical"), T = function() {
      if (g.allday)
        return ";VALUE=DATE";
      if (e.dates[`${s}`].timeZone != null && e.dates[`${s}`].timeZone != "") {
        const u = _e(e.dates[`${s}`].timeZone);
        return a.includes(e.dates[`${s}`].timeZone) || r.push(u[0]), a.push(e.dates[`${s}`].timeZone), ";" + u[1];
      }
    }();
    if (r.push("BEGIN:VEVENT"), r.push("UID:" + e.dates[`${s}`].uid), r.push("DTSTAMP:" + w(l, "clean", !0)), r.push("DTSTART" + T + ":" + g.start), r.push("DTEND" + T + ":" + g.end), r.push("SUMMARY:" + e.dates[`${s}`].name.replace(/.{65}/g, `$&\r
 `)), e.dates[`${s}`].descriptionHtmlFree != null && e.dates[`${s}`].descriptionHtmlFree != "" && r.push(
      "DESCRIPTION:" + e.dates[`${s}`].descriptionHtmlFree.replace(/\n/g, "\\n").replace(/.{60}/g, `$&\r
 `)
    ), e.dates[`${s}`].description != null && e.dates[`${s}`].description != "" && r.push(
      `X-ALT-DESC;FMTTYPE=text/html:\r
 <!DOCTYPE HTML PUBLIC ""-//W3C//DTD HTML 3.2//EN"">\r
 <HTML><BODY>\r
 ` + e.dates[`${s}`].description.replace(/\n/g, "<br>").replace(/.{60}/g, `$&\r
 `) + `\r
 </BODY></HTML>`
    ), e.dates[`${s}`].location != null && e.dates[`${s}`].location != "" && r.push("LOCATION:" + e.dates[`${s}`].location), e.dates[`${s}`].organizer != null && e.dates[`${s}`].organizer != "") {
      const u = e.dates[`${s}`].organizer.split("|");
      r.push("ORGANIZER;CN=" + u[0] + ":MAILTO:" + u[1]);
    }
    if (e.recurrence != null && e.recurrence != "" && r.push(e.recurrence), e.dates[`${s}`].availability != null && e.dates[`${s}`].availability != "") {
      const u = function() {
        return e.dates[`${s}`].availability == "free" ? "TRANSPARENT" : "OPAQUE";
      }();
      r.push("TRANSP:" + u);
    }
    r.push("SEQUENCE:" + e.dates[`${s}`].sequence), r.push("STATUS:" + e.dates[`${s}`].status), r.push("CREATED:" + e.created), r.push("LAST-MODIFIED:" + e.updated), r.push("END:VEVENT");
  }
  r.push("END:VCALENDAR");
  const b = function() {
    return o != "" ? o : "data:text/calendar;charset=utf-8," + encodeURIComponent(r.join(`\r
`));
  }();
  if (L() && ve() || ee() && (L() || ye() && ze())) {
    Dn(b, e, t);
    return;
  }
  he(b, i);
}
function Ln(e, n) {
  const t = function() {
    return n != "all" && n != 0 ? "-" + parseInt(n) + 1 : "";
  }();
  if (e.iCalFileName != null && e.iCalFileName != "")
    return e.iCalFileName + t;
  if (e.icsFile != null && e.icsFile != "") {
    const i = e.icsFile.split("/").pop().split(".")[0];
    if (i != "")
      return i + t;
  }
  return "event-to-save-in-my-calendar" + t;
}
function Dn(e, n, t) {
  if (ne(e), L() && ve()) {
    O(
      n,
      "warning",
      f("modal.crios.ical.h", n),
      f("modal.crios.ical.text", n) + "<br>" + f("modal.clipboard.text", n) + "<br>" + f("modal.crios.ical.steps", n),
      [],
      [],
      t
    );
    return;
  }
  O(
    n,
    "warning",
    f("modal.webview.ical.h", n),
    f("modal.webview.ical.text", n) + "<br>" + f("modal.clipboard.text", n) + "<br>" + f("modal.webview.ical.steps", n),
    [],
    [],
    t
  );
}
function _n() {
  console.log("Event saved. Looking forward to it!");
}
function he(e, n) {
  try {
    const t = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    t.rel = "noopener", t.href = e, Se() ? t.target = "_self" : t.target = "_blank", t.download = n + ".ics";
    const i = new MouseEvent("click", {
      view: window,
      button: 0,
      bubbles: !0,
      cancelable: !1
    });
    t.dispatchEvent(i), (window.URL || window.webkitURL).revokeObjectURL(t.href);
  } catch (t) {
    console.error(t);
  }
}
function D(e, n = "delimiters", t = "general", i = !1) {
  if (e.startTime != null && e.startTime != "" && e.endTime != null && e.endTime != "") {
    const o = new Date(e.startDate + "T" + e.startTime + ":00.000+00:00"), l = new Date(e.endDate + "T" + e.endTime + ":00.000+00:00"), r = l - o, a = Math.floor(r / 1e3 / 60 / 60), c = Math.floor((r - a * 60 * 60 * 1e3) / 1e3 / 60 % 60), h = function() {
      return a < 10 ? "0" + a + ":" + ("0" + c).slice(-2) : a + ":" + ("0" + c).slice(-2);
    }();
    if ((e.timeZone == null || e.timeZone != null && e.timeZone == "") && i)
      return {
        start: o.toISOString().replace(".000Z", "+00:00"),
        end: l.toISOString().replace(".000Z", "+00:00"),
        duration: h,
        allday: !1
      };
    if (e.timeZone != null && e.timeZone != "") {
      if (t == "ical" || t == "google" && !/(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(
        e.timeZone
      ))
        return {
          start: w(o, "clean", !0, !0),
          end: w(l, "clean", !0, !0),
          duration: h,
          allday: !1
        };
      const b = ae(e.timeZone, e.startDate, e.startTime), s = ae(e.timeZone, e.endDate, e.endTime);
      if (i) {
        const u = b.slice(0, 3) + ":" + b.slice(3), A = s.slice(0, 3) + ":" + s.slice(3);
        return {
          start: o.toISOString().replace(".000Z", u),
          end: l.toISOString().replace(".000Z", A),
          duration: h,
          allday: !1
        };
      }
      const g = parseInt(b[0] + 1) * -1 * ((parseInt(b.substr(1, 2)) * 60 + parseInt(b.substr(3, 2))) * 60 * 1e3), T = parseInt(s[0] + 1) * -1 * ((parseInt(s.substr(1, 2)) * 60 + parseInt(s.substr(3, 2))) * 60 * 1e3);
      o.setTime(o.getTime() + g), l.setTime(l.getTime() + T);
    }
    return {
      start: w(o, n),
      end: w(l, n),
      duration: h,
      allday: !1
    };
  } else {
    const o = e.startDate.split("-"), l = e.endDate.split("-"), r = new Date(Date.UTC(o[0], o[1] - 1, o[2], 12, 0, 0)), a = new Date(Date.UTC(l[0], l[1] - 1, l[2], 12, 0, 0));
    return (t == "google" || t == "microsoft" || t == "ical") && a.setDate(a.getDate() + 1), {
      start: w(r, n, !1),
      end: w(a, n, !1),
      allday: !0
    };
  }
}
function w(e, n = "delimiters", t = !0, i = !1) {
  const o = function() {
    return t ? n == "clean" ? /(-|:|(\.\d{3}))/g : /(\.\d{3})/g : n == "clean" ? /(-|T(\d{2}:\d{2}:\d{2}\.\d{3})Z)/g : /T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g;
  }();
  return i ? e.toISOString().replace(o, "").replace("Z", "") : e.toISOString().replace(o, "");
}
function Mn(e, n = !0) {
  const i = (n ? JSON.stringify(e) : e).replace(/(<(?!br)([^>]+)>)/gi, "");
  return n ? JSON.parse(i) : i;
}
function oe(e, n = !0) {
  return e.match(
    /((\.\.\/)|(\.\.\\)|(%2e%2e%2f)|(%252e%252e%252f)|(%2e%2e\/)|(%252e%252e\/)|(\.\.%2f)|(\.\.%252f)|(%2e%2e%5c)|(%252e%252e%255c)|(%2e%2e\\)|(%252e%252e\\)|(\.\.%5c)|(\.\.%255c)|(\.\.%c0%af)|(\.\.%25c0%25af)|(\.\.%c1%9c)|(\.\.%25c1%259c))/gi
  ) ? (n && console.error(
    "Seems like the generated URL includes at least one security issue and got blocked. Please check the calendar button parameters!"
  ), !1) : !0;
}
function zn(e, n = !1) {
  return /^.{0,70}@.{1,30}\.[\w.]{2,9}$/.test(e) ? (n && console.log("Testing for MX records not yet available"), !0) : !1;
}
function N(e, n = !1) {
  return e = e.replace(/<br\s*\/?>/gi, `
`), n ? e = e.replace(/\[(|\/)(url|br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]|((\|.*)\[\/url\])/gi, "") : (e = e.replace(/\[(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]/gi, "<$1$2>"), e = e.replace(/\[url\]([\w&$+.,:;=~!*'?@^%#|\s\-()/]*)\[\/url\]/gi, function(t, i) {
    const o = i.split("|"), l = function() {
      return o.length > 1 && o[1] != "" ? o[1] : o[0];
    }();
    return '<a href="' + o[0] + '" target="' + ie + '" rel="noopener">' + l + "</a>";
  })), e;
}
function j(e, n, t = !1, i = !1) {
  let o = !1;
  const l = e;
  e.querySelector(".atcb-dropdown-anchor") !== null && (e = e.querySelector(".atcb-dropdown-anchor"), o = !0);
  let r = e.getBoundingClientRect(), a = n.getBoundingClientRect();
  const c = l.getBoundingClientRect(), h = document.documentElement.clientHeight, b = document.getElementById("atcb-pos-wrapper");
  b !== null && (b.style.height = h + "px"), o === !0 && !n.classList.contains("atcb-dropoverlay") ? (n.classList.contains("atcb-dropup") && i || !t && !i && r.top + a.height > h - 20 && 2 * c.top + c.height - r.top - a.height > 20 ? (l.classList.add("atcb-dropup"), n.classList.add("atcb-dropup"), n.style.bottom = 2 * h - (h + (c.top + (c.top + c.height - r.top))) - window.scrollY + "px") : (n.style.top = window.scrollY + r.top + "px", l.classList.contains("atcb-dropup") && l.classList.remove("atcb-dropup")), r = e.getBoundingClientRect(), n.classList.contains("atcb-style-bubble") || n.classList.contains("atcb-style-text") ? n.style.minWidth = r.width + "px" : n.style.width = r.width + "px", a = n.getBoundingClientRect(), n.style.left = r.left - (a.width - r.width) / 2 + "px") : (n.style.minWidth = c.width + 20 + "px", a = n.getBoundingClientRect(), n.style.top = window.scrollY + c.top + c.height / 2 - a.height / 2 + "px", n.style.left = c.left - (a.width - c.width) / 2 + "px");
  const s = document.getElementById("add-to-calendar-button-reference");
  s && (l.classList.contains("atcb-dropup") ? (s.style.top = window.scrollY + c.top + c.height + "px", s.style.left = c.left + (c.width - 150) / 2 + "px") : (a = n.getBoundingClientRect(), l.classList.contains("atcb-dropoverlay") || !o ? s.style.top = window.scrollY + a.top + a.height + "px" : s.style.top = window.scrollY + r.top + a.height + "px", s.style.left = a.left + (a.width - 150) / 2 + "px"));
}
function le(e = null) {
  const n = function() {
    if (e != null)
      return e;
    {
      const i = document.querySelectorAll(".atcb-modal");
      return i.length == 0 ? null : i[i.length - 1];
    }
  }();
  if (n == null)
    return;
  n.getBoundingClientRect().height + 100 > window.innerHeight ? document.body.classList.add("atcb-modal-no-scroll") : document.body.classList.remove("atcb-modal-no-scroll");
}
function re(e) {
  e.style.width = window.innerWidth + "px", e.style.height = window.innerHeight + 100 + "px";
}
function Q(e, n) {
  e.style.setProperty("--base-font-size-l", n.l + "px"), e.style.setProperty("--base-font-size-m", n.m + "px"), e.style.setProperty("--base-font-size-s", n.s + "px");
}
function we() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
  );
}
function ne(e) {
  const n = document.createElement("input");
  document.body.appendChild(n);
  const t = n.contentEditable, i = n.readOnly;
  if (n.value = e, n.contentEditable = !0, n.readOnly = !1, L()) {
    var o = document.createRange();
    o.selectNodeContents(n);
    var l = window.getSelection();
    l.removeAllRanges(), l.addRange(o), n.setSelectionRange(0, 999999);
  } else
    navigator.clipboard.writeText(e), n.select();
  n.contentEditable = t, n.readOnly = i, document.execCommand("copy"), n.remove();
}
function M(e, n = 200) {
  let t;
  return (...i) => {
    clearTimeout(t), t = setTimeout(() => {
      e.apply(this, i);
    }, n);
  };
}
function F(e, n = 300) {
  let t;
  return (...i) => {
    t || e.apply(this, i), clearTimeout(t), t = setTimeout(() => {
      t = void 0;
    }, n);
  };
}
function pe(e, n = 10) {
  let t, i = null, o = 0, l = (...r) => {
    o = Date.now(), i = null, t = e.apply(this, r);
  };
  return (...r) => {
    let a = Date.now(), c = n - (a - o);
    return c <= 0 || c > n ? (i && (clearTimeout(i), i = null), o = a, t = e.apply(this, r)) : i || (i = setTimeout(l, c)), t;
  };
}
const be = {
  en: {
    "Add to Calendar": "Add to Calendar",
    "iCal File": "iCal File",
    Close: "Close",
    "Close Selection": "Close Selection",
    "Click me": "Click me",
    "modal.webview.ical.h": "Open your browser",
    "modal.webview.ical.text": "Unfortunately, in-app browsers have problems with the way we generate the calendar file.",
    "modal.clipboard.text": "We automatically copied a magical URL into your clipboard.",
    "modal.webview.ical.steps": "<ol><li><strong>Open another browser</strong> on your phone, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>",
    "modal.crios.ical.h": "Open Safari",
    "modal.crios.ical.text": "Unfortunately, Chrome on iOS has problems with the way we generate the calendar file.",
    "modal.crios.ical.steps": "<ol><li><strong>Open Safari</strong>, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>",
    "modal.multidate.h": "This is an event series",
    "modal.multidate.text": "Add the individual events one by one:",
    Event: "Event",
    "Cancelled Date": "This date got cancelled.",
    "Delete from Calendar": "Please update your calendar!",
    "modal.subscribe.yahoo.h": "Add Calendar to Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Open now the Yahoo Calendar.</li><li>Click the "Actions" tab.</li><li>Hit "Follow Other Calendars".</li><li>Set a name and past the clipboard content into the url field.</li></ol>',
    Cancel: "Cancel"
  },
  de: {
    "Add to Calendar": "Im Kalender speichern",
    "iCal File": "iCal-Datei",
    Close: "Schlie\xDFen",
    "Close Selection": "Auswahl schlie\xDFen",
    "Click me": "Klick mich",
    "modal.webview.ical.h": "\xD6ffne deinen Browser",
    "modal.webview.ical.text": "Leider haben In-App-Browser Probleme mit der Art, wie wir Kalender-Dateien erzeugen.",
    "modal.clipboard.text": "Wir haben automatisch eine magische URL in deine Zwischenablage kopiert.",
    "modal.webview.ical.steps": "<ol><li><strong>\xD6ffne einen anderen Browser</strong> auf deinem Smartphone, ...</li><li>Nutze die <strong>Einf\xFCgen</strong>-Funktion, um fortzufahren.</li></ol>",
    "modal.crios.ical.h": "\xD6ffne Safari",
    "modal.crios.ical.text": "Leider Chrome unter iOS Probleme mit der Art, wie wir Kalender-Dateien erzeugen.",
    "modal.crios.ical.steps": "<ol><li><strong>\xD6ffne Safari</strong>, ...</li><li>Nutze die <strong>Einf\xFCgen</strong>-Funktion, um fortzufahren.</li></ol>",
    "modal.multidate.h": "Dies is eine Termin-Reihe",
    "modal.multidate.text": "F\xFCge die einzelnen Termine der Reihe nach deinem Kalender hinzu:",
    Event: "Termin",
    "Cancelled Date": "Dieser Termin wurde abgesagt.",
    "Delete from Calendar": "Bitte aktualisiere deinen Kalender!",
    "modal.subscribe.yahoo.h": "Kalender zu Yahoo hinzuf\xFCgen",
    "modal.subscribe.yahoo.text": '<ol><li>\xD6ffne den Yahoo Kalender.</li><li>Klicke auf den "Aktionen" Tab.</li><li>W\xE4hle "Weiteren Kalendern folgen".</li><li>W\xE4hle einen Namen und f\xFCge die URL aus deiner Zwischenablage in das URL-Feld ein.</li></ol>',
    Cancel: "Abbrechen"
  },
  es: {
    "Add to Calendar": "A\xF1adir al Calendario",
    "iCal File": "iCal Ficha",
    Close: "Ci\xE9rralo",
    "Close Selection": "Cerrar Selecci\xF3n",
    "Click me": "Haz clic m\xED",
    "modal.webview.ical.h": "Abra su browser",
    "modal.webview.ical.text": "Lamentablemente, los browsers in-app tienen problemas con la forma en que generamos el archivo del calendario.",
    "modal.clipboard.text": "Hemos copiado autom\xE1ticamente una URL m\xE1gica en su portapapeles.",
    "modal.webview.ical.steps": "<ol><li><strong>Abre otro browser</strong> en tu smartphone, ...</li><li>Utilice la funci\xF3n de <strong>pegar</strong> para continuar.</li></ol>",
    "modal.crios.ical.h": "Abrir Safari",
    "modal.crios.ical.text": "Lamentablemente, Chrome en iOS tiene problemas con la forma de generar el archivo de calendario.",
    "modal.crios.ical.steps": "<ol><li><strong>Abrir Safari</strong>, ...</li><li>Utilice la funci\xF3n de <strong>pegar</strong> para continuar.</li></ol>",
    "modal.multidate.h": "Esta es una serie de fechas",
    "modal.multidate.text": "A\xF1ada las fechas individuales a su calendario en orden:",
    Event: "T\xE9rmino",
    "Cancelled Date": "Esta fecha fue cancelada.",
    "Delete from Calendar": "Actualice su calendario!",
    "modal.subscribe.yahoo.h": "A\xF1adir calendario a Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Abra el calendario de Yahoo.</li><li>Haga clic en la pesta\xF1a "Acciones".</li><li>Seleccione "Seguir otros calendarios".</li><li>Elige un nombre y pega la URL de tu portapapeles en el campo URL.</li></ol>',
    Cancel: "Cancelar"
  },
  pt: {
    "Add to Calendar": "Incluir no Calend\xE1rio",
    "iCal File": "Ficheiro iCal",
    Close: "Fechar",
    "Close Selection": "Fechar selec\xE7\xE3o",
    "Click me": "Clicar-me",
    "modal.webview.ical.h": "Abra o seu browser",
    "modal.webview.ical.text": "Infelizmente, os navegadores em tampas t\xEAm problemas com a forma como geramos o ficheiro de calend\xE1rio.",
    "modal.clipboard.text": "Copi\xE1mos automaticamente um URL m\xE1gico para a sua \xE1rea de transfer\xEAncia.",
    "modal.webview.ical.steps": "<ol><li><strong>Abrir outro browser</strong> en tu smartphone, ...</li><li>Use a fun\xE7\xE3o <forte>colar</strong> para continuar.</li></ol>",
    "modal.crios.ical.h": "Safari aberto",
    "modal.crios.ical.text": "Infelizmente, o cromado no iOS tem problemas com a forma como geramos o ficheiro do calend\xE1rio.",
    "modal.crios.ical.steps": "<ol><li><strong>Safari aberto</strong>, ...</li><li>Use a fun\xE7\xE3o <forte>colar</strong> para continuar.</li></ol>",
    "modal.multidate.h": "Esta \xE9 uma s\xE9rie de datas",
    "modal.multidate.text": "Adicione as datas individuais ao seu calend\xE1rio, por ordem:",
    Event: "Termo",
    "Cancelled Date": "Esta data foi cancelada.",
    "Delete from Calendar": "Actualize o seu calend\xE1rio!",
    "modal.subscribe.yahoo.h": "Adicionar calend\xE1rio ao Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Abrir o calend\xE1rio do Yahoo.</li><li>Clique no separador "Ac\xE7\xF5es".</li><li>Seleccione "Seguir outros calend\xE1rios".</li><li>Escolha um nome e cole o URL da sua \xE1rea de transfer\xEAncia no campo URL.</li></ol>',
    Cancel: "Cancelar"
  },
  fr: {
    "Add to Calendar": "Ajout au Agenda",
    "iCal File": "iCal Fichier",
    Close: "Fermez",
    "Close Selection": "Fermez la s\xE9lection",
    "Click me": "Cliquez-moi",
    "modal.webview.ical.h": "Ouvrez votre navigateur",
    "modal.webview.ical.text": "Malheureusement, les navigateurs in-app ont des probl\xE8mes avec la mani\xE8re dont nous cr\xE9ons les fichiers de agenda.",
    "modal.clipboard.text": "Nous avons automatiquement copi\xE9 une URL magique dans ton presse-papiers.",
    "modal.webview.ical.steps": "<ol><li><strong>Ouvre un autre navigateur</strong> sur ton smartphone, ...</li><li>Utilise la fonction <strong>ins\xE9rer</strong> pour continuer.</li></ol>",
    "modal.crios.ical.h": "Ouvre Safari",
    "modal.crios.ical.text": "Malheureusement, Chrome sur iOS a des probl\xE8mes avec la fa\xE7on dont nous g\xE9n\xE9rons le fichier du agenda.",
    "modal.crios.ical.steps": "<ol><li><strong>Ouvre Safari</strong>, ...</li><li>Utilise la fonction <strong>ins\xE9rer</strong> pour continuer.</li></ol>",
    "modal.multidate.h": "Il s'agit d'une s\xE9rie d'\xE9v\xE9nements",
    "modal.multidate.text": "Ajoute les diff\xE9rents rendez-vous dans l'ordre \xE0 ton agenda:",
    Event: "Terminaison",
    "Cancelled Date": "Cette date est annul\xE9e.",
    "Delete from Calendar": "Actualisez votre agenda!",
    "modal.subscribe.yahoo.h": "Ajouter un agenda \xE0 Yahoo",
    "modal.subscribe.yahoo.text": `<ol><li>Ouvre le Yahoo calendar.</li><li>Clique sur l'onglet "Actions".</li><li>S\xE9lectionne "Suivre d'autres agendas".</li><li>Choisis un nom et colle l'URL de ton presse-papiers dans le champ URL.</li></ol>`,
    Cancel: "Annuler"
  },
  nl: {
    "Add to Calendar": "Opslaan in Agenda",
    "iCal File": "iCal File",
    Close: "Sluiten",
    "Close Selection": "Sluit selectie",
    "Click me": "Klik me",
    "modal.webview.ical.h": "Open uw browser",
    "modal.webview.ical.text": "Helaas hebben in-app browsers problemen met de manier waarop wij kalenderbestanden maken.",
    "modal.clipboard.text": "We hebben automatisch een magische URL naar je klembord gekopieerd.",
    "modal.webview.ical.steps": "<ol><li><strong>Open een andere browser</strong> op uw smartphone, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>",
    "modal.crios.ical.h": "Open Safari",
    "modal.crios.ical.text": "Helaas heeft Chrome op iOS problemen met de manier waarop we het kalenderbestand genereren.",
    "modal.crios.ical.steps": "<ol><li><strong>Open Safari</strong>, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>",
    "modal.multidate.h": "Dit is een reeks data",
    "modal.multidate.text": "Voeg de afzonderlijke delen \xE9\xE9n voor \xE9\xE9n toe:",
    Event: "Termin",
    "Cancelled Date": "Deze datum is geannuleerd.",
    "Delete from Calendar": "Uw agenda bijwerken!",
    "modal.subscribe.yahoo.h": "Toevoegen aan Yahoo",
    "modal.subscribe.yahoo.text": `<ol><li>Open de Yahoo calendar.</li><li>Klik op de "Acties" tab.</li><li>Selecteer "Volg Andere Agenda's".</li><li>Kies een naam en plak de URL van uw klembord in het URL-veld.</li></ol>`,
    Cancel: "Annuleren"
  },
  tr: {
    "Add to Calendar": "Takvime Ekle",
    "iCal File": "iCal Dosyas\u0131",
    Close: "Kapat",
    "Close Selection": "Se\xE7imi kapat",
    "Click me": "Beni t\u0131klay\u0131n",
    "modal.webview.ical.h": "Taray\u0131c\u0131n\u0131z\u0131 a\xE7\u0131n",
    "modal.webview.ical.text": "Ne yaz\u0131k ki, uygulama i\xE7i taray\u0131c\u0131lar takvim dosyalar\u0131n\u0131 olu\u015Fturma \u015Feklimizle ilgili sorunlar ya\u015F\u0131yor.",
    "modal.clipboard.text": "Panonuza otomatik olarak sihirli bir URL kopyalad\u0131k.",
    "modal.webview.ical.steps": "<ol><li><strong>Ak\u0131ll\u0131 telefonunuzda ba\u015Fka bir taray\u0131c\u0131 a\xE7\u0131n</strong>, ...</li><li>Devam etmek i\xE7in <strong>insert</strong> fonksiyonunu kullan\u0131n.</li></ol>",
    "modal.crios.ical.h": "A\xE7\u0131k Safari",
    "modal.crios.ical.text": "Ne yaz\u0131k ki iOS'ta Chrome'un takvim dosyas\u0131 olu\u015Fturma y\xF6ntemiyle ilgili sorunlar\u0131 var.",
    "modal.crios.ical.steps": "<ol><li><strong>A\xE7\u0131k Safari</strong>, ...</li><li>Devam etmek i\xE7in <strong>insert</strong> fonksiyonunu kullan\u0131n.</li></ol>",
    "modal.multidate.h": "Bu bir etkinlik serisidir",
    "modal.multidate.text": "Par\xE7alar\u0131 teker teker ekleyin:",
    Event: "Etkinlik",
    "Cancelled Date": "Bu tarih iptal edildi.",
    "Delete from Calendar": "L\xFCtfen takviminizi g\xFCncelleyin!",
    "modal.subscribe.yahoo.h": "Yahoo'ya takvim ekleme",
    "modal.subscribe.yahoo.text": `<ol><li>Yahoo takvimini a\xE7\u0131n.</li><li>"Eylemler" sekmesine t\u0131klay\u0131n.</li><li>"Di\u011Fer Takvimleri Takip Et" \xF6\u011Fesini se\xE7in.</li><li>Bir ad se\xE7in ve URL'yi panonuzdan URL alan\u0131na yap\u0131\u015Ft\u0131r\u0131n.</li></ol>`,
    Cancel: "\u0130ptal"
  },
  zh: {
    "Add to Calendar": "\u6DFB\u52A0\u5230\u65E5\u5386",
    "iCal File": "iCal \u6587\u4EF6",
    Close: "\u5173",
    "Close Selection": "\u5173\u95ED\u9009\u62E9",
    "Click me": "\u70B9\u6211",
    "modal.webview.ical.h": "\u6253\u5F00\u6D4F\u89C8\u5668",
    "modal.webview.ical.text": "\u4E0D\u5E78\u7684\u662F\uFF0C\u5E94\u7528\u5185\u6D4F\u89C8\u5668\u5728\u6211\u4EEC\u751F\u6210\u65E5\u5386\u6587\u4EF6\u7684\u65B9\u5F0F\u4E0A\u5B58\u5728\u95EE\u9898\u3002",
    "modal.clipboard.text": "\u6211\u4EEC\u81EA\u52A8\u5C06\u9B54\u672F URL \u590D\u5236\u5230\u60A8\u7684\u526A\u8D34\u677F\u3002",
    "modal.webview.ical.steps": "<ol><li>\u6253\u5F00\u624B\u673A\u4E0A\u7684\u4EFB\u4F55\u5176\u4ED6\u6D4F\u89C8\u5668, ...</li><li>\u7C98\u8D34\u526A\u8D34\u677F\u5185\u5BB9\u5E76\u5F00\u59CB\u3002</li></ol>",
    "modal.crios.ical.h": "\u6253\u5F00 Safari",
    "modal.crios.ical.text": "\u4E0D\u5E78\u7684\u662F\uFF0CiOS \u4E0A\u7684 Chrome \u5728\u6211\u4EEC\u751F\u6210\u65E5\u5386\u6587\u4EF6\u7684\u65B9\u5F0F\u4E0A\u5B58\u5728\u95EE\u9898\u3002",
    "modal.crios.ical.steps": "<ol><li><strong>\u6253\u5F00 Safari</strong>, ...</li><li>\u7C98\u8D34\u526A\u8D34\u677F\u5185\u5BB9\u5E76\u5F00\u59CB\u3002</li></ol>",
    "modal.multidate.h": "\u8FD9\u662F\u4E00\u4E2A\u6D3B\u52A8\u7CFB\u5217",
    "modal.multidate.text": "\u9010\u4E2A\u6DFB\u52A0\u5404\u4E2A\u90E8\u5206:",
    Event: "\u4E8B\u4EF6",
    "Cancelled Date": "\u6B64\u65E5\u671F\u5DF2\u53D6\u6D88\u3002",
    "Delete from Calendar": "\u8BF7\u66F4\u65B0\u60A8\u7684\u65E5\u5386!",
    "modal.subscribe.yahoo.h": "\u5C06\u65E5\u5386\u6DFB\u52A0\u5230 Yahoo",
    "modal.subscribe.yahoo.text": "<ol><li>\u6253\u5F00 Yahoo \u65E5\u5386\u3002</li><li>\u70B9\u51FB\u201C\u64CD\u4F5C\u201D\u6807\u7B7E\u3002</li><li>\u9009\u62E9\u201C\u5173\u6CE8\u5176\u4ED6\u65E5\u5386\u201D\u3002</li><li>\u9009\u62E9\u4E00\u4E2A\u540D\u79F0\u5E76\u5C06\u526A\u8D34\u677F\u4E2D\u7684 URL \u7C98\u8D34\u5230 URL \u5B57\u6BB5\u4E2D\u3002</li></ol>",
    Cancel: "\u4E2D\u6B62"
  },
  ar: {
    "Add to Calendar": "\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u062A\u0642\u0648\u064A\u0645",
    "iCal File": "\u0645\u0644\u0641 iCal",
    Close: "\u0642\u0631\u064A\u0628",
    "Close Selection": "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u062A\u062D\u062F\u064A\u062F",
    "Click me": "\u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0644\u064A",
    "modal.webview.ical.h": "\u0627\u0641\u062A\u062D \u0627\u0644\u0645\u0633\u062A\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643",
    "modal.webview.ical.text": "\u0644\u0633\u0648\u0621 \u0627\u0644\u062D\u0638 \u060C \u062A\u0648\u0627\u062C\u0647 \u0627\u0644\u0645\u062A\u0635\u0641\u062D\u0627\u062A \u062F\u0627\u062E\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0645\u0634\u0627\u0643\u0644 \u0641\u064A \u0637\u0631\u064A\u0642\u0629 \u0625\u0646\u0634\u0627\u0621 \u0645\u0644\u0641 \u0627\u0644\u062A\u0642\u0648\u064A\u0645.",
    "modal.clipboard.text": "\u0642\u0645\u0646\u0627 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0628\u0646\u0633\u062E \u0639\u0646\u0648\u0627\u0646 URL \u0633\u062D\u0631\u064A \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643.",
    "modal.webview.ical.steps": "<ol><li>\u0627\u0641\u062A\u062D \u0623\u064A \u0645\u062A\u0635\u0641\u062D \u0622\u062E\u0631 \u0639\u0644\u0649 \u0647\u0627\u062A\u0641\u0643 \u0627\u0644\u0630\u0643\u064A, ...</li><li>.\u0627\u0644\u0635\u0642 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629 \u0648\u0627\u0630\u0647\u0628</li></ol>",
    "modal.crios.ical.h": "\u0627\u0641\u062A\u062D Safari",
    "modal.crios.ical.text": "\u0644\u0633\u0648\u0621 \u0627\u0644\u062D\u0638 \u060C \u064A\u0648\u0627\u062C\u0647 Chrome \u0639\u0644\u0649 iOS \u0645\u0634\u0627\u0643\u0644 \u0641\u064A \u0637\u0631\u064A\u0642\u0629 \u0625\u0646\u0634\u0627\u0621 \u0645\u0644\u0641 \u0627\u0644\u062A\u0642\u0648\u064A\u0645",
    "modal.crios.ical.steps": "<ol><li><strong>\u0627\u0641\u062A\u062D Safari</strong>, ...</li><li>\u0627\u0644\u0635\u0642 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629 \u0648\u0627\u0630\u0647\u0628.</li></ol>",
    "modal.multidate.h": "\u0647\u0630\u0647 \u0633\u0644\u0633\u0644\u0629 \u0623\u062D\u062F\u0627\u062B",
    "modal.multidate.text": "\u0623\u0636\u0641 \u0627\u0644\u0623\u062C\u0632\u0627\u0621 \u0627\u0644\u0641\u0631\u062F\u064A\u0629 \u0648\u0627\u062D\u062F\u0629 \u062A\u0644\u0648 \u0627\u0644\u0623\u062E\u0631\u0649:",
    Event: "\u062D\u062F\u062B",
    "Cancelled Date": "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u062A\u0627\u0631\u064A\u062E.",
    "Delete from Calendar": "\u0627\u0644\u0631\u062C\u0627\u0621 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643!",
    "modal.subscribe.yahoo.h": "\u0623\u0636\u0641 \u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0625\u0644\u0649 Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>\u0627\u0641\u062A\u062D \u062A\u0642\u0648\u064A\u0645 Yahoo.</li><li>\u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u0628\u0648\u064A\u0628 "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A".</li><li>\u062D\u062F\u062F "\u0645\u062A\u0627\u0628\u0639\u0629 \u062A\u0642\u0648\u064A\u0645\u0627\u062A \u0623\u062E\u0631\u0649".</li><li>\u0627\u062E\u062A\u0631 \u0627\u0633\u0645\u064B\u0627 \u0648\u0627\u0644\u0635\u0642 \u0639\u0646\u0648\u0627\u0646 URL \u0645\u0646 \u0627\u0644\u062D\u0627\u0641\u0638\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 \u0641\u064A \u062D\u0642\u0644 URL.</li></ol>',
    Cancel: "\u0625\u062D\u0628\u0627\u0637"
  },
  hi: {
    "Add to Calendar": "\u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902",
    "iCal File": "iCal \u092B\u093C\u093E\u0907\u0932",
    Close: "\u092C\u0902\u0926 \u0915\u0930\u0928\u093E",
    "Close Selection": "\u091A\u092F\u0928 \u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
    "Click me": "\u092E\u0941\u091D\u0947 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902",
    "modal.webview.ical.h": "\u0905\u092A\u0928\u093E \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u0916\u094B\u0932\u0947\u0902",
    "modal.webview.ical.text": "\u0926\u0941\u0930\u094D\u092D\u093E\u0917\u094D\u092F \u0938\u0947, \u0907\u0928-\u0910\u092A \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u092E\u0947\u0902 \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092B\u093C\u093E\u0907\u0932 \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0924\u0930\u0940\u0915\u0947 \u092E\u0947\u0902 \u0938\u092E\u0938\u094D\u092F\u093E\u090F\u0901 \u0939\u0948\u0902\u0964",
    "modal.clipboard.text": "\u0939\u092E\u0928\u0947 \u0906\u092A\u0915\u0947 \u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u092A\u0930 \u0938\u094D\u0935\u091A\u093E\u0932\u093F\u0924 \u0930\u0942\u092A \u0938\u0947 \u090F\u0915 \u091C\u093E\u0926\u0941\u0908 URL \u0915\u0949\u092A\u0940 \u0915\u0930 \u0932\u093F\u092F\u093E \u0939\u0948\u0964",
    "modal.webview.ical.steps": "<ol><li>\u0905\u092A\u0928\u0947 \u092B\u093C\u094B\u0928 \u092A\u0930 <strong>\u0926\u0942\u0938\u0930\u093E \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u0916\u094B\u0932\u0947\u0902</strong>, ...</li><li>\u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 <strong>\u091A\u093F\u092A\u0915\u093E\u090F\u0902</strong> \u0914\u0930 \u091C\u093E\u090F\u0902\u0964</li></ol>",
    "modal.crios.ical.h": "\u0938\u092B\u093E\u0930\u0940 \u0916\u094B\u0932\u0947\u0902",
    "modal.crios.ical.text": "\u0926\u0941\u0930\u094D\u092D\u093E\u0917\u094D\u092F \u0938\u0947, iOS \u092A\u0930 Chrome \u0915\u094B \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092B\u093C\u093E\u0907\u0932 \u091C\u0947\u0928\u0930\u0947\u091F \u0915\u0930\u0928\u0947 \u0915\u0947 \u0939\u092E\u093E\u0930\u0947 \u0924\u0930\u0940\u0915\u0947 \u092E\u0947\u0902 \u0938\u092E\u0938\u094D\u092F\u093E \u0939\u0948\u0964",
    "modal.crios.ical.steps": "<ol><li><strong>\u0938\u092B\u093E\u0930\u0940 \u0916\u094B\u0932\u0947\u0902</strong>, ...</li><li>\u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 <strong>\u091A\u093F\u092A\u0915\u093E\u090F\u0902</strong> \u0914\u0930 \u091C\u093E\u090F\u0902\u0964</li></ol>",
    "modal.multidate.h": "\u092F\u0939 \u090F\u0915 \u0907\u0935\u0947\u0902\u091F \u0938\u0940\u0930\u0940\u091C\u093C \u0939\u0948",
    "modal.multidate.text": "\u0905\u0932\u0917-\u0905\u0932\u0917 \u0939\u093F\u0938\u094D\u0938\u094B\u0902 \u0915\u094B \u090F\u0915-\u090F\u0915 \u0915\u0930\u0915\u0947 \u091C\u094B\u0921\u093C\u0947\u0902:",
    Event: "\u0906\u092F\u094B\u091C\u0928",
    "Cancelled Date": "\u092F\u0939 \u0924\u093F\u0925\u093F \u0930\u0926\u094D\u0926 \u0939\u094B \u0917\u0908\u0964",
    "Delete from Calendar": "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u0905\u092A\u0921\u0947\u091F \u0915\u0930\u0947\u0902!",
    "modal.subscribe.yahoo.h": "Yahoo . \u092E\u0947\u0902 \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u091C\u094B\u0921\u093C\u0947\u0902",
    "modal.subscribe.yahoo.text": '<ol><li>Yahoo \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u0916\u094B\u0932\u0947\u0902\u0964</li><li>"\u0915\u0943\u0924\u0940" \u091F\u0948\u092C \u092A\u0930 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902\u0964</li><li>"\u0907\u0924\u0930 \u0915\u0945\u0932\u0947\u0902\u0921\u0930\u094D\u0938\u091A\u0947 \u0905\u0928\u0941\u0938\u0930\u0923 \u0915\u0930\u093E" \u091A\u0941\u0928\u0947\u0902\u0964</li><li>\u090F\u0915 \u0928\u093E\u092E \u091A\u0941\u0928\u0947\u0902 \u0914\u0930 \u0905\u092A\u0928\u0947 \u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u0938\u0947 URL \u0915\u094B URL \u092B\u093C\u0940\u0932\u094D\u0921 \u092E\u0947\u0902 \u092A\u0947\u0938\u094D\u091F \u0915\u0930\u0947\u0902\u0964</li></ol>',
    Cancel: "\u0930\u0926\u094D\u0926 \u0915\u0930\u0928\u093E"
  },
  pl: {
    "Add to Calendar": "Dodaj do kalendarza",
    "iCal File": "Plik iCal",
    Close: "Zamknij",
    "Close Selection": "Zamknij wyb\xF3r",
    "Click me": "Kliknij mnie",
    "modal.webview.ical.h": "Otw\xF3rz przegl\u0105dark\u0119",
    "modal.webview.ical.text": "Niestety, przegl\u0105darki in-app maj\u0105 problemy ze sposobem, w jaki generujemy plik kalendarza.",
    "modal.clipboard.text": "Automatycznie skopiowali\u015Bmy magiczny adres URL do schowka.",
    "modal.webview.ical.steps": "<ol><li><strong>Otw\xF3rz inn\u0105 przegl\u0105dark\u0119</strong> w swoim telefonie, ...</li><li><strong>Wklej</strong> zawarto\u015B\u0107 schowka i ruszaj.</li></ol>",
    "modal.crios.ical.h": "Otw\xF3rz Safari",
    "modal.crios.ical.text": "Niestety, Chrome na iOS ma problemy ze sposobem generowania pliku kalendarza.",
    "modal.crios.ical.steps": "<ol><li><strong>Otw\xF3rz Safari</strong>, ...</li><li><strong>Wklej</strong> zawarto\u015B\u0107 schowka i ruszaj.</li></ol>",
    "modal.multidate.h": "To jest cykl imprez",
    "modal.multidate.text": "Dodawa\u0107 po kolei poszczeg\xF3lne cz\u0119\u015Bci:",
    Event: "Wydarzenie",
    "Cancelled Date": "Ta data zosta\u0142a odwo\u0142ana.",
    "Delete from Calendar": "Zaktualizuj sw\xF3j kalendarz!",
    "modal.subscribe.yahoo.h": "Dodaj kalendarz do Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Otw\xF3rz kalendarz Yahoo.</li><li>Kliknij na zak\u0142adk\u0119 "Czynno\u015Bci".</li><li>Wybierz "Obserwuj inne kalendarze".</li><li>Wybierz nazw\u0119 i wklej adres URL ze schowka w polu URL.</li></ol>',
    Cancel: "Anuluj"
  },
  id: {
    "Add to Calendar": "Tambahkan ke Kalender",
    "iCal File": "File iCal",
    Close: "Tutup",
    "Close Selection": "Seleksi Tutup",
    "Click me": "Klik saya",
    "modal.webview.ical.h": "Buka browser Anda",
    "modal.webview.ical.text": "Sayangnya, browser dalam aplikasi memiliki masalah dengan cara kami menghasilkan file kalender.",
    "modal.clipboard.text": "Kami telah secara otomatis menyalin URL ajaib ke clipboard Anda.",
    "modal.webview.ical.steps": "<ol><li><strong>Buka peramban lain</strong> pada ponsel Anda, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>",
    "modal.crios.ical.h": "Buka Safari",
    "modal.crios.ical.text": "Sayangnya, Chrome di iOS memiliki masalah dengan cara kami menghasilkan file kalender.",
    "modal.crios.ical.steps": "<ol><li><strong>Buka Safari</strong>, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>",
    "modal.multidate.h": "Ini adalah rangkaian acara",
    "modal.multidate.text": "Tambahkan masing-masing bagian satu per satu:",
    Event: "Acara",
    "Cancelled Date": "Tanggal ini dibatalkan.",
    "Delete from Calendar": "Perbarui kalender Anda!",
    "modal.subscribe.yahoo.h": "Tambahkan kalender ke Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Buka kalender Yahoo.</li><li>Klik pada tab "Tindakan".</li><li>Pilih "Ikuti Kalender Lain".</li><li>Pilih nama dan tempelkan URL dari clipboard Anda ke bidang URL.</li></ol>',
    Cancel: "Batal"
  },
  no: {
    "Add to Calendar": "Legg til i kalenderen",
    "iCal File": "iCal-fil",
    Close: "Lukk",
    "Close Selection": "Lukk utvalg",
    "Click me": "Klikk p\xE5 meg",
    "modal.webview.ical.h": "\xC5pne nettleseren din",
    "modal.webview.ical.text": "Dessverre har nettlesere i appen problemer med m\xE5ten vi genererer kalenderfilen p\xE5.",
    "modal.clipboard.text": "Vi kopierte automatisk en magisk URL til utklippstavlen din.",
    "modal.webview.ical.steps": "<ol><li><strong>\xC5pne en annen nettleser</strong> p\xE5 telefonen, ...</li><li><strong>Lim inn</strong> innholdet p\xE5 utklippstavlen og g\xE5.</li></ol>",
    "modal.crios.ical.h": "\xC5pne Safari",
    "modal.crios.ical.text": "Dessverre har Chrome p\xE5 iOS problemer med m\xE5ten vi genererer kalenderfilen p\xE5.",
    "modal.crios.ical.steps": "<ol><li><strong>\xC5pne Safari</strong>, ...</li><li><strong>Lim inn</strong> innholdet p\xE5 utklippstavlen og g\xE5.</li></ol>",
    "modal.multidate.h": "Dette er en avtaleserie",
    "modal.multidate.text": "Legg til de enkelte datoene i kalenderen din i rekkef\xF8lge:",
    Event: "M\xF8te",
    "Cancelled Date": "Denne datoen ble avlyst.",
    "Delete from Calendar": "Oppdater kalenderen din!",
    "modal.subscribe.yahoo.h": "Legg til kalender til Yahoo",
    "modal.subscribe.yahoo.text": "<ol><li>\xC5pne Yahoo-kalenderen.</li><li>Klikk p\xE5 \xABHandlinger\xBB-fanen.</li><li>Velg \xABF\xF8lg andre kalendere\xBB.</li><li>Velg et navn og lim inn URL-en fra utklippstavlen i URL-feltet.</li></ol>",
    Cancel: "Avbryt"
  },
  fi: {
    "Add to Calendar": "Lis\xE4\xE4 kalenteriin",
    "iCal File": "iCal-tiedosto",
    Close: "Sulje",
    "Close Selection": "Sulje valinta",
    "Click me": "Klikkaa minua",
    "modal.webview.ical.h": "Avaa selain",
    "modal.webview.ical.text": "Valitettavasti sovelluksen sis\xE4isill\xE4 selaimilla on ongelmia kalenteritiedoston luomisessa.",
    "modal.clipboard.text": "Olemme automaattisesti kopioineet maagisen URL-osoitteen leikep\xF6yd\xE4llesi.",
    "modal.webview.ical.steps": "<ol><li><strong>Avaa toinen selain</strong> puhelimessasi., ...</li><li><strong>liit\xE4</strong> leikep\xF6yd\xE4n sis\xE4lt\xF6 ja l\xE4hde.</li></ol>",
    "modal.crios.ical.h": "Avaa Safari",
    "modal.crios.ical.text": "Valitettavasti iOS:n Chromessa on ongelmia kalenteritiedoston luomisessa.",
    "modal.crios.ical.steps": "<ol><li><strong>Avaa Safari</strong>, ...</li><li><strong>liit\xE4</strong> leikep\xF6yd\xE4n sis\xE4lt\xF6 ja l\xE4hde.</li></ol>",
    "modal.multidate.h": "T\xE4m\xE4 on tapahtumasarja",
    "modal.multidate.text": "Lis\xE4\xE4 yksitt\xE4iset osat yksi kerrallaan:",
    Event: "Tapahtuma",
    "Cancelled Date": "T\xE4m\xE4 p\xE4iv\xE4m\xE4\xE4r\xE4 peruttiin.",
    "Delete from Calendar": "P\xE4ivit\xE4 kalenterisi!",
    "modal.subscribe.yahoo.h": "Lis\xE4\xE4 kalenteri Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Avaa Yahoo-kalenteri.</li><li>Napsauta "Toiminnot"-v\xE4lilehte\xE4.</li><li>Valitse "Seuraa muiden kalentereita".</li><li>Valitse nimi ja liit\xE4 URL-osoite leikep\xF6yd\xE4lt\xE4si URL-kentt\xE4\xE4n.</li></ol>',
    Cancel: "Peruuta"
  },
  sv: {
    "Add to Calendar": "L\xE4gg till i kalender",
    "iCal File": "iCal-fil",
    Close: "St\xE4ng",
    "Close Selection": "St\xE4ng urvalet",
    "Click me": "Klicka p\xE5 mig",
    "modal.webview.ical.h": "\xD6ppna din webbl\xE4sare",
    "modal.webview.ical.text": "Tyv\xE4rr har webbl\xE4sare i appen problem med hur vi genererar kalenderfilen.",
    "modal.clipboard.text": "Vi har automatiskt kopierat en magisk URL till ditt klippblock.",
    "modal.webview.ical.steps": "<ol><li><strong>\xD6ppna en annan webbl\xE4sare</strong> p\xE5 telefonen, ...</li><li><strong>Ins\xE4tt</strong> inneh\xE5llet i klippbordet och k\xF6r.</li></ol>",
    "modal.crios.ical.h": "\xD6ppna Safari",
    "modal.crios.ical.text": "Tyv\xE4rr har Chrome p\xE5 iOS problem med hur vi genererar kalenderfilen.",
    "modal.crios.ical.steps": "<ol><li><strong>\xD6ppna Safari</strong>, ...</li><li><strong>Ins\xE4tt</strong> inneh\xE5llet i klippbordet och k\xF6r.</li></ol>",
    "modal.multidate.h": "Detta \xE4r en evenemangsserie",
    "modal.multidate.text": "L\xE4gg till de enskilda delarna en efter en:",
    Event: "Evenemang",
    "Cancelled Date": "Detta datum har st\xE4llts in.",
    "Delete from Calendar": "Uppdatera din kalender!",
    "modal.subscribe.yahoo.h": "L\xE4gg till kalender i Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>\xD6ppna Yahoo-kalendern.</li><li>Klicka p\xE5 fliken "\xC5tg\xE4rder".</li><li>V\xE4lj "F\xF6lj andra kalendrar".</li><li>V\xE4lj ett namn och klistra in URL:en fr\xE5n klippbordet i URL-f\xE4ltet.</li></ol>',
    Cancel: "Avbryt"
  },
  cs: {
    "Add to Calendar": "P\u0159idat do kalend\xE1\u0159e",
    "iCal File": "Soubor iCal",
    Close: "Zav\u0159\xEDt",
    "Close Selection": "Zav\u0159\xEDt v\xFDb\u011Br",
    "Click me": "Klikn\u011Bte na m\u011B",
    "modal.webview.ical.h": "Otev\u0159ete prohl\xED\u017Ee\u010D",
    "modal.webview.ical.text": "Prohl\xED\u017Ee\u010De v aplikac\xEDch maj\xED bohu\u017Eel probl\xE9my se zp\u016Fsobem generov\xE1n\xED souboru kalend\xE1\u0159e.",
    "modal.clipboard.text": "Do schr\xE1nky jsme automaticky zkop\xEDrovali kouzelnou adresu URL.",
    "modal.webview.ical.steps": "<ol><li><strong>Otev\u0159en\xED jin\xE9ho prohl\xED\u017Ee\u010De</strong> v telefonu, ...</li><li><strong>Vlo\u017Ete</strong> obsah schr\xE1nky a p\u0159ejd\u011Bte.</li></ol>",
    "modal.crios.ical.h": "Otev\u0159\xEDt Safari",
    "modal.crios.ical.text": "Chrome v syst\xE9mu iOS m\xE1 bohu\u017Eel probl\xE9my se zp\u016Fsobem generov\xE1n\xED souboru kalend\xE1\u0159e.",
    "modal.crios.ical.steps": "<ol><li><strong>Otev\u0159\xEDt Safari</strong>, ...</li><li><strong>Vlo\u017Ete</strong> obsah schr\xE1nky a p\u0159ejd\u011Bte.</li></ol>",
    "modal.multidate.h": "Jedn\xE1 se o s\xE9rii ud\xE1lost\xED",
    "modal.multidate.text": "P\u0159id\xE1vejte jednotliv\xE9 d\xEDly jeden po druh\xE9m:",
    Event: "Ud\xE1lost",
    "Cancelled Date": "Toto datum bylo zru\u0161eno.",
    "Delete from Calendar": "Aktualizujte sv\u016Fj kalend\xE1\u0159!",
    "modal.subscribe.yahoo.h": "P\u0159idat kalend\xE1\u0159 do Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Otev\u0159ete kalend\xE1\u0159 Yahoo.</li><li>Klikn\u011Bte na kartu "Akce".</li><li>Vyberte mo\u017Enost "Sledovat dal\u0161\xED kalend\xE1\u0159e".</li><li>Vyberte n\xE1zev a vlo\u017Ete adresu URL ze schr\xE1nky do pole URL.</li></ol>',
    Cancel: "Storno"
  },
  ja: {
    "Add to Calendar": "\u30AB\u30EC\u30F3\u30C0\u30FC\u306B\u8FFD\u52A0",
    "iCal File": "iCal\u30D5\u30A1\u30A4\u30EB",
    Close: "\u9589\u3058\u308B",
    "Close Selection": "\u30AF\u30ED\u30FC\u30BA\u9078\u629E",
    "Click me": "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044",
    "modal.webview.ical.h": "\u30D6\u30E9\u30A6\u30B6\u3092\u8D77\u52D5\u3059\u308B",
    "modal.webview.ical.text": "\u6B8B\u5FF5\u306A\u304C\u3089\u3001\u30A2\u30D7\u30EA\u5185\u30D6\u30E9\u30A6\u30B6\u306F\u3001\u30AB\u30EC\u30F3\u30C0\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u751F\u6210\u65B9\u6CD5\u306B\u554F\u984C\u304C\u3042\u308A\u307E\u3059\u3002",
    "modal.clipboard.text": "\u9B54\u6CD5\u306EURL\u3092\u81EA\u52D5\u7684\u306B\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u3066\u3044\u307E\u3059\u3002",
    "modal.webview.ical.steps": "<ol><li>\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3\u3067\u5225\u306E\u30D6\u30E9\u30A6\u30B6\u3092\u8D77\u52D5\u3059\u308B, ...</li><li>\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306E\u5185\u5BB9\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u884C\u304F\u3002</li></ol>",
    "modal.crios.ical.h": "\u30AA\u30FC\u30D7\u30F3Safari",
    "modal.crios.ical.text": "\u6B8B\u5FF5\u306A\u304C\u3089\u3001iOS\u7248Chrome\u3067\u306F\u3001\u30AB\u30EC\u30F3\u30C0\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u751F\u6210\u65B9\u6CD5\u306B\u554F\u984C\u304C\u3042\u308A\u307E\u3059\u3002",
    "modal.crios.ical.steps": "<ol><li><strong>\u30AA\u30FC\u30D7\u30F3Safari</strong>, ...</li><li>\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306E\u5185\u5BB9\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u884C\u304F\u3002</li></ol>",
    "modal.multidate.h": "\u30A4\u30D9\u30F3\u30C8\u30B7\u30EA\u30FC\u30BA\u3067\u3059",
    "modal.multidate.text": "\u500B\u3005\u306E\u30D1\u30FC\u30C4\u3092\u4E00\u3064\u305A\u3064\u8FFD\u52A0\u3057\u3066\u3044\u304F:",
    Event: "\u30A4\u30D9\u30F3\u30C8",
    "Cancelled Date": "\u3053\u306E\u65E5\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u306B\u306A\u308A\u307E\u3057\u305F\u3002",
    "Delete from Calendar": "\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u66F4\u65B0\u3059\u308B!",
    "modal.subscribe.yahoo.h": "Yahoo\u306B\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u8FFD\u52A0\u3059\u308B",
    "modal.subscribe.yahoo.text": "<ol><li>Yahoo\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u958B\u304F\u3002</li><li>[\u5B9F\u884C] \u30BF\u30D6\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002</li><li>[\u305D\u306E\u4ED6\u306E\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u30D5\u30A9\u30ED\u30FC] \u3092\u9078\u629E\u3057\u307E\u3059\u3002</li><li>\u540D\u524D\u3092\u6C7A\u3081\u3066\u3001\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u3042\u308BURL\u3092URL\u6B04\u306B\u8CBC\u308A\u4ED8\u3051\u307E\u3059\u3002</li></ol>",
    Cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB"
  },
  it: {
    "Add to Calendar": "Aggiungi al calendario",
    "iCal File": "File iCal",
    Close: "Chiudere",
    "Close Selection": "Chiudere la selezione",
    "Click me": "Clicca su di me",
    "modal.webview.ical.h": "Aprire il browser",
    "modal.webview.ical.text": "Purtroppo i browser in-app hanno problemi con il modo in cui generiamo il file del calendario.",
    "modal.clipboard.text": "Abbiamo copiato automaticamente un URL magico negli appunti.",
    "modal.webview.ical.steps": "<ol><li><strong>Aprire un altro browser</strong> sul cellulare, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>",
    "modal.crios.ical.h": "Aprire Safari",
    "modal.crios.ical.text": "Purtroppo, Chrome su iOS ha problemi con il modo in cui generiamo il file del calendario.",
    "modal.crios.ical.steps": "<ol><li><strong>Aprire Safari</strong>, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>",
    "modal.multidate.h": "Questa \xE8 una serie di eventi",
    "modal.multidate.text": "Aggiungere le singole parti una per una:",
    Event: "Evento",
    "Cancelled Date": "La data \xE8 stata annullata.",
    "Delete from Calendar": "Aggiornare il calendario!",
    "modal.subscribe.yahoo.h": "Aggiungi il calendario a Yahoo",
    "modal.subscribe.yahoo.text": `<ol><li>Aprire il calendario di Yahoo.</li><li>Fare clic sulla scheda "Azioni".</li><li>Selezionare "Segui altri calendari".</li><li>Scegliere un nome e incollare l'URL dagli appunti nel campo URL.</li></ol>`,
    Cancel: "Annulla"
  },
  ko: {
    "Add to Calendar": "\uCE98\uB9B0\uB354\uC5D0 \uCD94\uAC00",
    "iCal File": "iCal \uD30C\uC77C",
    Close: "\uB2EB\uB2E4",
    "Close Selection": "\uC120\uD0DD \uB2EB\uAE30",
    "Click me": "\uD074\uB9AD \uD574\uC8FC\uC138\uC694",
    "modal.webview.ical.h": "\uBE0C\uB77C\uC6B0\uC800 \uC5F4\uAE30",
    "modal.webview.ical.text": "\uBD88\uD589\uD788\uB3C4 \uC778\uC571 \uBE0C\uB77C\uC6B0\uC800\uB294 \uCE98\uB9B0\uB354 \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uB294 \uBC29\uC2DD\uC5D0 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",
    "modal.clipboard.text": "\uB9E4\uC9C1 URL\uC744 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uC790\uB3D9\uC73C\uB85C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.",
    "modal.webview.ical.steps": "<ol><li>\uD734\uB300\uC804\uD654\uC5D0\uC11C \uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800 \uC5F4\uAE30, ...</li><li>\uD074\uB9BD\uBCF4\uB4DC \uB0B4\uC6A9\uC744 \uBD99\uC5EC\uB123\uACE0 \uC774\uB3D9\uD569\uB2C8\uB2E4.</li></ol>",
    "modal.crios.ical.h": "Safari \uC5F4\uAE30",
    "modal.crios.ical.text": "\uBD88\uD589\uD788\uB3C4 iOS\uC758 Chrome\uC740 \uCE98\uB9B0\uB354 \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uB294 \uBC29\uC2DD\uC5D0 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",
    "modal.crios.ical.steps": "<ol><li><strong>Safari \uC5F4\uAE30</strong>, ...</li><li>\uD074\uB9BD\uBCF4\uB4DC \uB0B4\uC6A9\uC744 \uBD99\uC5EC\uB123\uACE0 \uC774\uB3D9\uD569\uB2C8\uB2E4.</li></ol>",
    "modal.multidate.h": "\uC774\uBCA4\uD2B8 \uC2DC\uB9AC\uC988\uC785\uB2C8\uB2E4",
    "modal.multidate.text": "\uAC1C\uBCC4 \uBD80\uD488\uC744 \uD558\uB098\uC529 \uCD94\uAC00:",
    Event: "\uC774\uBCA4\uD2B8",
    "Cancelled Date": "\uC774 \uB0A0\uC9DC\uB294 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
    "Delete from Calendar": "\uCE98\uB9B0\uB354\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC138\uC694!",
    "modal.subscribe.yahoo.h": "Yahoo\uC5D0 \uCE98\uB9B0\uB354 \uCD94\uAC00",
    "modal.subscribe.yahoo.text": '<ol><li>Yahoo \uCE98\uB9B0\uB354\uB97C \uC5FD\uB2C8\uB2E4.</li><li>"\uB3D9\uC791" \uD0ED\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4.</li><li>"\uB2E4\uB978 \uC77C\uC815\uAD00\uB9AC \uD314\uB85C\uC6B0"\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.</li><li>\uC774\uB984\uC744 \uC120\uD0DD\uD558\uACE0 \uD074\uB9BD\uBCF4\uB4DC\uC758 URL\uC744 URL \uD544\uB4DC\uC5D0 \uBD99\uC5EC\uB123\uC2B5\uB2C8\uB2E4.</li></ol>',
    Cancel: "\uCDE8\uC18C"
  },
  vi: {
    "Add to Calendar": "Th\xEAm v\xE0o L\u1ECBch",
    "iCal File": "T\u1EC7p iCal",
    Close: "\u0110\xF3ng",
    "Close Selection": "\u0110\xF3ng l\u1EF1a ch\u1ECDn",
    "Click me": "Nh\u1EA5p v\xE0o \u0111\xE2y",
    "modal.webview.ical.h": "M\u1EDF tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n",
    "modal.webview.ical.text": "R\u1EA5t ti\u1EBFc, c\xE1c tr\xECnh duy\u1EC7t trong \u1EE9ng d\u1EE5ng g\u1EB7p s\u1EF1 c\u1ED1 v\u1EDBi c\xE1ch ch\xFAng t\xF4i t\u1EA1o t\u1EC7p l\u1ECBch.",
    "modal.clipboard.text": "Ch\xFAng t\xF4i \u0111\xE3 t\u1EF1 \u0111\u1ED9ng sao ch\xE9p m\u1ED9t URL ma thu\u1EADt v\xE0o khay nh\u1EDB t\u1EA1m c\u1EE7a b\u1EA1n.",
    "modal.webview.ical.steps": "<ol><li><strong> M\u1EDF tr\xECnh duy\u1EC7t kh\xE1c </strong> tr\xEAn \u0111i\u1EC7n tho\u1EA1i c\u1EE7a b\u1EA1n, ...</li><li><strong> D\xE1n </strong> n\u1ED9i dung khay nh\u1EDB t\u1EA1m v\xE0 b\u1EAFt \u0111\u1EA7u.</li></ol>",
    "modal.crios.ical.h": "M\u1EDF Safari",
    "modal.crios.ical.text": "R\u1EA5t ti\u1EBFc, Chrome tr\xEAn iOS g\u1EB7p s\u1EF1 c\u1ED1 v\u1EDBi c\xE1ch ch\xFAng t\xF4i t\u1EA1o t\u1EC7p l\u1ECBch.",
    "modal.crios.ical.steps": "<ol><li><strong>M\u1EDF Safari</strong>, ...</li><li><strong> D\xE1n </strong> n\u1ED9i dung khay nh\u1EDB t\u1EA1m v\xE0 b\u1EAFt \u0111\u1EA7u.</li></ol>",
    "modal.multidate.h": "\u0110\xE2y l\xE0 m\u1ED9t chu\u1ED7i s\u1EF1 ki\u1EC7n",
    "modal.multidate.text": "Th\xEAm t\u1EEBng ph\u1EA7n ri\xEAng l\u1EBB m\u1ED9t:",
    Event: "Bi\u1EBFn c\u1ED1",
    "Cancelled Date": "Ng\xE0y n\xE0y \u0111\xE3 b\u1ECB h\u1EE7y.",
    "Delete from Calendar": "C\u1EADp nh\u1EADt l\u1ECBch c\u1EE7a b\u1EA1n!",
    "modal.subscribe.yahoo.h": "Th\xEAm l\u1ECBch v\xE0o Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>M\u1EDF L\u1ECBch Yahoo.</li><li>Nh\u1EA5p v\xE0o tab "H\xE0nh \u0111\u1ED9ng".</li><li>Ch\u1ECDn "Theo d\xF5i c\xE1c L\u1ECBch kh\xE1c".</li><li>Ch\u1ECDn t\xEAn v\xE0 d\xE1n URL t\u1EEB khay nh\u1EDB t\u1EA1m c\u1EE7a b\u1EA1n v\xE0o tr\u01B0\u1EDDng URL.</li></ol>',
    Cancel: "H\u1EE7y b\u1ECF"
  }
};
function f(e, n) {
  const t = e.replace(/\s+/g, "").toLowerCase();
  return n.customLabels != null && n.customLabels[`${t}`] != null && n.customLabels[`${t}`] != "" ? N(n.customLabels[`${t}`]) : Rn(e, n.language);
}
function Rn(e, n) {
  return n || (n = "en"), be[`${n}`][`${e}`] ? be[`${n}`][`${e}`] : e;
}
let te = !1;
function ge() {
  if (te || Nn(), $n(), !z()) {
    console.error("no further initialization due to wrong environment (no browser)");
    return;
  }
  const e = document.querySelectorAll(".atcb"), n = [];
  if (e.length > 0) {
    const t = document.querySelectorAll(".atcb-initialized");
    for (let i = 0; i < e.length; i++) {
      if (e[parseInt(i)].classList.contains("atcb-initialized"))
        continue;
      const o = function() {
        try {
          return JSON.parse(
            Mn(e[parseInt(i)].innerHTML.replace(/(\r\n|\n|\r)/g, ""), !1)
          );
        } catch (a) {
          return console.error(
            `Add to Calendar Button generation failed: JSON content provided, but badly formatted (in doubt, try some tool like https://jsonformatter.org/ to validate).\r
Error message: ` + a
          ), "";
        }
      }(), l = Oe(o), r = On(l);
      if (r.length != 0 && en(r)) {
        const a = Ne(r);
        (a.identifier == null || a.identifier == "") && (a.identifier = "atcb-btn-" + (i + t.length + 1)), nn(a) && (gn(e[parseInt(i)], a), Un(a), n.push(a.identifier));
      }
    }
  }
  return n;
}
function Bn(e) {
  I();
  const n = document.getElementById(e);
  return _[`${e}`] == null || !n ? (console.error("Add to Calendar Button could not be destroyed! ID unknown."), !1) : (delete _[`${e}`], n.parentElement.parentElement.classList.contains("atcb-initialized") ? n.parentElement.parentElement.remove() : n.remove(), console.log('Add to Calendar Button "' + e + '" destroyed'), !0);
}
function Un(e) {
  const n = [];
  for (let t = 0; t < e.options.length; t++) {
    n[e.options[`${t}`]] = [];
    for (let i = 1; i <= e.dates.length; i++)
      n[e.options[`${t}`]].push(0);
  }
  _[e.identifier] = n;
}
function $n() {
  te || (console.log("Add to Calendar Button Script initialized (version " + Ae + ")"), console.log("See https://github.com/add2cal/add-to-calendar-button for details"), te = !0);
}
function On(e) {
  return e.proKey != null && e.proKey != "" ? (console.error("Add to Calendar Button generation failed: proKey invalid!"), []) : e;
}
function Nn() {
  !z() || (document.addEventListener("keyup", function(e) {
    e.key === "Escape" && v("close", "", "", !0);
  }), document.addEventListener("keydown", (e) => {
    if (document.querySelector(".atcb-list") && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Tab")) {
      let n = 0, t = document.activeElement;
      const i = document.querySelectorAll(".atcb-list-item").length;
      if (t.classList.contains("atcb-list-item"))
        e.key === "ArrowDown" && t.dataset.optionNumber < i ? (e.preventDefault(), n = parseInt(t.dataset.optionNumber) + 1) : e.key === "ArrowUp" && t.dataset.optionNumber >= 1 && (e.preventDefault(), n = parseInt(t.dataset.optionNumber) - 1), n > 0 && document.querySelector('.atcb-list-item[data-option-number="' + n + '"]').focus();
      else
        switch (e.preventDefault(), e.key) {
          case "ArrowDown":
            document.querySelector('.atcb-list-item[data-option-number="1"]').focus();
            break;
          case "ArrowUp":
            document.querySelector('.atcb-list-item[data-option-number="' + i + '"]').focus();
            break;
          default:
            document.querySelector('.atcb-list-item[data-option-number="1"]').focus();
            break;
        }
    }
  }), window.addEventListener(
    "resize",
    pe(() => {
      const e = document.getElementById("atcb-bgoverlay");
      e != null && (re(e), le());
      const n = document.querySelector(".atcb-active");
      if (n != null) {
        const t = document.querySelector(".atcb-dropdown");
        t != null && j(n, t, !1, !0);
      }
    })
  ), window.addEventListener(
    "scroll",
    pe(() => {
      const e = document.querySelector(".atcb-active");
      if (e != null) {
        const n = document.querySelector(".atcb-dropdown");
        n != null && n.classList.contains("atcb-mind-scrolling") && j(e, n, !1, !0);
      }
    }, 20)
  ));
}
let U = [];
const Fn = {
  name: "add-to-calendar-button",
  props: {
    proKey: String,
    name: String,
    dates: Array,
    description: String,
    startDate: String,
    startTime: String,
    endDate: String,
    endTime: String,
    timeZone: String,
    location: String,
    status: String,
    sequence: Number,
    uid: String,
    organizer: String,
    icsFile: String,
    images: Array,
    recurrence: String,
    recurrence_interval: Number,
    recurrence_until: String,
    recurrence_count: String,
    recurrence_byDay: String,
    recurrence_byMonth: String,
    recurrence_byMonthDay: String,
    recurrence_weekstart: String,
    availability: String,
    created: String,
    updated: String,
    identifier: String,
    subscribe: String,
    options: Array,
    iCalFileName: String,
    listStyle: String,
    buttonStyle: String,
    trigger: String,
    icons: String,
    textLabels: String,
    background: String,
    checkmark: String,
    mindScrolling: String,
    branding: String,
    size: String,
    label: String,
    customLabels: Object,
    lightMode: String,
    language: String,
    richData: String
  },
  data() {
    return {
      instance: 1
    };
  },
  methods: {
    setStyle() {
      let e = "https://cdn.jsdelivr.net/npm/add-to-calendar-button@1/assets/css/atcb.min.css";
      this.buttonStyle != null && this.buttonStyle != "" && this.buttonStyle != "default" && (e = "https://cdn.jsdelivr.net/npm/add-to-calendar-button@1/assets/css/atcb-" + this.buttonStyle + ".min.css");
      const n = document.getElementById("atcb-style-file");
      n != null && n.remove();
      let t = document.createElement("link");
      t.rel = "stylesheet", t.href = e, t.id = "atcb-style-file", document.head.appendChild(t);
    }
  },
  render() {
    let e = JSON.stringify({
      proKey: this.proKey,
      name: this.name,
      dates: this.dates,
      description: this.description,
      startDate: this.startDate,
      startTime: this.startTime,
      endDate: this.endDate,
      endTime: this.endTime,
      timeZone: this.timeZone,
      location: this.location,
      status: this.status,
      sequence: this.sequence,
      uid: this.uid,
      organizer: this.organizer,
      icsFile: this.icsFile,
      images: this.images,
      recurrence: this.recurrence,
      recurrence_interval: this.recurrence_interval,
      recurrence_until: this.recurrence_until,
      recurrence_count: this.recurrence_count,
      recurrence_byDay: this.recurrence_byDay,
      recurrence_byMonth: this.recurrence_byMonth,
      recurrence_byMonthDay: this.recurrence_byMonthDay,
      recurrence_weekstart: this.recurrence_weekstart,
      availability: this.availability,
      created: this.created,
      updated: this.updated,
      identifier: this.identifier,
      subscribe: this.subscribe,
      options: this.options,
      iCalFileName: this.iCalFileName,
      listStyle: this.listStyle,
      buttonStyle: this.buttonStyle,
      trigger: this.trigger,
      icons: this.icons,
      textLabels: this.textLabels,
      background: this.background,
      checkmark: this.checkmark,
      mindScrolling: this.mindScrolling,
      branding: this.branding,
      size: this.size,
      label: this.label,
      customLabels: this.customLabels,
      lightMode: this.lightMode,
      language: this.language,
      richData: this.richData
    });
    return De("div", {
      ".:key": "instance",
      innerHTML: '<div class="atcb" style="display:none;">' + e + "</div>"
    });
  },
  mounted() {
    this.setStyle(), U = ge();
  },
  beforeUpdate() {
    U[0] != null && document.getElementById(U[0]) != null && (Bn(U[0]), this.setStyle(), this.instance++);
  },
  updated() {
    U = ge();
  }
}, Zn = /* @__PURE__ */ Le({
  ...Fn,
  setup(e) {
    return { initializedButtons: U };
  }
});
export {
  Zn as default
};
