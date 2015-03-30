import Ember from 'ember';
//import ENV from '../config/environment';
var TRANSLATIONS = {
  en: {
    other_lang: 'sv',
    main: {
      title: "Ember Demo Application",
      description: "Write description text here"
    }
  },
  sv: {
    other_lang: 'en',
    main: {
      title: "Mina lån",
      description: "Mina lån - Göteborgs Universitetsbibliotek"
    }, 
    login: {
      title: "Logga in",
      username: "Användarnamn",
      password: "Lösenord",
      login_action: "Logga in"
    },
    menu: {
      checkouts: "Lånade",
      requests: "Beställda",
      fines: "Förseningsavgifter",
      contactinfo: "Kontaktuppgifter",
      logout: "Logga ut"
    },
    checkouts: {
      title: "Titel",
      delayed_checkouts: "Försenade lån",
      current_checkouts: "Lånade",
      due_date: "Återlämnas",
      recallable_by: "Kravbar",
      status: "Status",
      renew: "Förnya",
      statuses: {
        checkedOut: 'Lånad',
        overdue: 'Försenad',
        billed: 'Räkning',
        recall: 'Kö finns',
        recallOverdue: 'Försenad/Kö finns'
      }
    },
    requests: {
      pickup_requests: "För hämtning",
      ordered_requests: "Beställda",
      title: "Titel",
      queue: "Plats i kö",
      status: "Status",
      remove: "Ta bort",
      pickup_location: "Hämtas på",
      expiration_date: "Bortfaller",
      statuses: {
        pickup: "För hämtning",
        pending: "Beställd",
        intransit: "Beställd"
      },
      confirm_delete: "Är du säker på att du vill radera beställningen?"
    },
    fines: {
      fines: "Förseningsavgifter",
      title: "Titel",
      type: "Typ av avgift",
      added: "Tillagd",
      amount: "Belopp",
      types: {
        billed_overdue: "Räkning",
        checked_out_overdue: "Försenad",
        late_renewal: "Förnyad för sent",
        late_return: "Återlämnad för sent",
        processing_fee: "Arbetskostnad"
      }
    },
    user: {
      address: "Adress",
      phone_nr: "Telefonnummer",
      mobile_nr: "Mobilnummer",
      email: "E-post",
      communication_preference: "Jag vill ha utskick till",
      preferred_language: "Jag vill ha utskick på",
      communication_preferences: {
        0: "Papper",
        1: "E-post",
        2: "SMS",
        3: "SMS & E-post"
      },
      languages: {
        swe: "Svenska",
        eng: "Engelska"
      },
      card_nr: "Kortnummer",
      expiration_date: "Ditt kort är giltigt till",
      user_type: "Låntagarkategori"
    }
  }
};

// Initializes language support
var i18nInitializer = {
  name: 'i18n',
  initialize: function() {
    var lang = 'sv';
    var translation = Ember.$.extend(true, {}, TRANSLATIONS)[lang];
    Ember.I18n.translations = translation;
    Ember.I18n.allTranslations = TRANSLATIONS;
    Ember.FEATURES.I18N_TRANSLATE_HELPER_SPAN = false;
    Ember.ENV.I18N_COMPILE_WITHOUT_HANDLEBARS = true;
  }
};
export default i18nInitializer;
