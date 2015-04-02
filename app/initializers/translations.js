import Ember from 'ember';
import ENV from 'myloans-ember/config/environment';

var TRANSLATIONS = {
  en: {
    other_lang: 'sv',
    main: {
      title: "My loans",
      description: "My loans - Gothenburg University Library"
    },
    login: {
      title: "Log in",
      username: "User name",
      password: "Password",
      login_action: "Log in"
    },
    menu: {
      checkouts: "Checked Out",
      requests: "Requests",
      fines: "Fines",
      contactinfo: "Contact information",
      logout: "Logout",
      delayeds_info: "Overdue",
      pickups_info: "Pick-up"
    },
    checkouts: {
      title: "Title",
      delayed_checkouts: "Overdue", //kolla
      current_checkouts: "Checked Out", //kolla
      due_date: "Due Date",
      recallable_by: "Recallable Date",
      status: "Status",
      renew: "Renew",
      barcode: "Barcode",
      statuses: {
        checkedOut: 'Checked Out',
        overdue: 'Overdue',
        billed: 'Billed',
        recall: 'Requested',
        recallOverdue: 'Overdue/Requested'
      },
      confirm_renew: "Are you sure you want to renew the checkout?", // ?
      renew_success: "Checkout renewed.", // ?
      renew_error: "Checkout renewal error." // ?
    },
    requests: {
      pickup_requests: "Pick-up",
      ordered_requests: "Requests", //Kolla
      title: "Title",
      queue: "Place in Queue",
      status: "Status",
      remove: "Cancel", //Eller remove?
      pickup_location: "Pick-up Location",
      expiration_date: "Last needed date",
      statuses: {
        pickup: "Pick-up",
        pending: "Pending",
        intransit: "Pending" //?
      },
      confirm_delete: "Are you sure you want to cancel the request?" //Hittat på
    },
    fines: {
      fines: "Fines",
      title: "Title",
      type: "Fee Type",
      added: "Posted",
      amount: "Balance",
      total_fine: "Total Balance", //Summa?
      types: {
        billed_overdue: "Billed",
        checked_out_overdue: "Overdue",
        late_renewal: "Late Renewal",
        late_return: "Late Return",
        processing_fee: "Processing Fee",
        overdue: "Overdue",
        recalled_overdue: "Overdue"
      }
    },
    user: {
      address: "Address",
      phone_nr: "Telephone",
      mobile_nr: "Cell Phone",
      email: "E-mail",
      communication_preference: "Communication Preference",
      preferred_language: "Preferred Language",
      communication_preferences: {
        0: "Paper",
        1: "E-mail",
        2: "Text msg",
        3: "Text msg and E-mail"
      },
      languages: {
        swe: "Swedish",
        eng: "English"
      },
      card_nr: "GU card/library card number",
      expiration_date: "Expiration Date",
      user_type: "Patron Type",
      street: "Street",
      postal_code: "Postal code",
      city: "City",
      phones: "Phone numbers and e-mail",
      communication: "Communication from the library",
      save: "Save",
      cancel: "Cancel",
      edit: "Edit",
      errors: {
        email: "You have to assign a valid e-mail address",
        mobile: "You have to assign a valid mobile phone number",
        email_and_mobile: "You have to assign a valid e-mail and mobile phone number"
      }
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
      username: "Lånekortsnummer",
      password: "Personnummer",
      login_action: "Logga in",
      info: "Logga in för att se dina lån och förseningsavgifter. Här kan du också  hantera dina kontaktuppgifter. "
    },
    menu: {
      checkouts: "Lånade",
      requests: "Beställda",
      fines: "Avgifter",
      contactinfo: "Kontaktuppgifter",
      logout: "Logga ut",
      delayeds_info: "försenade",
      pickups_info: "för hämtning"
    },
    checkouts: {
      title: "Titel",
      delayed_checkouts: "Försenade lån",
      current_checkouts: "Lånade",
      due_date: "Återlämnas",
      recallable_by: "Kravbar",
      status: "Status",
      renew: "Förnya",
      barcode: "Streckkod",
      statuses: {
        checkedOut: 'Lånad',
        overdue: 'Försenad',
        billed: 'Räkning',
        recall: 'Kö finns',
        recallOverdue: 'Försenad/Kö finns'
      },
      confirm_renew: "Är du säker på att du vill förnya lånet?",
      renew_success: "Lånet förnyades.",
      renew_error: "Förnyande av lån misslyckades."
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
      fines: "Avgifter",
      title: "Titel",
      type: "Typ av avgift",
      added: "Tillagd",
      amount: "Belopp",
      total_fine: "Summa",
      types: {
        billed_overdue: "Räkning",
        checked_out_overdue: "Försenad",
        late_renewal: "Förnyad för sent",
        late_return: "Återlämnad för sent",
        processing_fee: "Arbetskostnad",
        overdue: "Försenad",
        recalled_overdue: "Försenad"
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
      user_type: "Låntagarkategori",
      street: "Gatuadress",
      postal_code: "Postnummer",
      city: "Ort",
      phones: "Telefonnummer och e-post",
      communication: "Kommunikation från biblioteket",
      save: "Spara",
      cancel: "Avbryt",
      edit: "Ändra",
      errors: {
        email: "Du måste ange en giltig e-post adress",
        mobile: "Du måste ange ett giltigt mobilnummer",
        email_and_mobile: "Du måste ange en giltig e-post och mobilnummer"
      }
    }
  }
};

// Adds support for translatable properties, i.e. placeholderTranslation='key'
Ember.View.reopen(Ember.I18n.TranslateableAttributes);

// Initializes language support
var i18nInitializer = {
  name: 'i18n',
  initialize: function() {
    var rootElement = Ember.$(ENV.APP.rootElement);
    var lang = rootElement.data().lang;
    if(!lang || lang !== 'sv') {
      lang = 'en';
    }
    moment.locale(lang);
    var translation = Ember.$.extend(true, {}, TRANSLATIONS)[lang];
    Ember.I18n.translations = translation;
    Ember.I18n.allTranslations = TRANSLATIONS;
    Ember.FEATURES.I18N_TRANSLATE_HELPER_SPAN = false;
    Ember.ENV.I18N_COMPILE_WITHOUT_HANDLEBARS = true;
  }
};
export default i18nInitializer;
