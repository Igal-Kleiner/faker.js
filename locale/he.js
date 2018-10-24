var Faker = require('../lib');
var faker = new Faker({ locale: 'he', localeFallback: 'en' });
faker.locales['it'] = require('../lib/locales/he');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
