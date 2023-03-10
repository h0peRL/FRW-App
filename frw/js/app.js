console.log("Hello World");
const appElement = document.getElementById("app");
const inputadd = document.getElementById("inputadd");
let numInputs = 1;

function addInput() {
  numInputs++;
  const newInput = `<div id="newinputadd">
    <input type="text" id="inputField${numInputs}" list="options" placeholder="Text">
    :
    <input type="text" id="inputField${numInputs}" list="options" placeholder="Soll">
    /(an)
    <input type="text" id="inputField${numInputs}" list="options" placeholder="Haben">
    </div>`;

  appElement.insertAdjacentHTML("beforeend", newInput);
}

const inputform = `
<div id="button"> <button onclick="addInput()">Weiteres Feld hinzufügen</button> </div>
<div id="inputadd">
<input type="text" id="inputField1" list="options" placeholder="Text">
:
  <input type="text" id="inputField1" list="options" placeholder="Soll">
/(an)
  <input type="text" id="inputField1" list="options" placeholder="Haben">
 
  <datalist id="options">
<option value="Kasse">Kasse</option>
<option value="Bankguthaben">Bankguthaben</option>
<option value="Wertschriften">Wertschriften</option>
<option value="WB Wertschriften">WB Wertschriften</option>
<option value="Lohndurchlaufkonto">Lohndurchlaufkonto</option>
<option value="Forderungen L+L (Debitoren)">Forderungen L+L (Debitoren)</option>
<option value="Dubiose Forderungen L+L">Dubiose Forderungen L+L</option>
<option value="WB Forderungen L+L (Delkredere)">WB Forderungen L+L (Delkredere)</option>
<option value="Forderungen gegenüber Dritten">Forderungen gegenüber Dritten</option>
<option value="KK Immobilienverwaltung">KK Immobilienverwaltung</option>
<option value="Forderungen gegenüber Eigentümer">Forderungen gegenüber Eigentümer</option>
<option value="Aktionäre">Aktionäre</option>
<option value="Vorsteuer Material, Waren, DL">Vorsteuer Material, Waren, DL</option>
<option value="Vorsteuer Investitionen, übriger Aufwand">Vorsteuer Investitionen, übriger Aufwand</option>
<option value="Vorsteuerkürzungen">Vorsteuerkürzungen</option>
<option value="Vorsteuerkorrekturen">Vorsteuerkorrekturen</option>
<option value="Verrechnungssteuerguthaben">Verrechnungssteuerguthaben</option>
<option value="Lohnvorschüsse">Lohnvorschüsse</option>
<option value="Handelswarenvorrat (Warenvorrat)">Handelswarenvorrat (Warenvorrat)</option>
<option value="Materialvorrat">Materialvorrat</option>
<option value="Fertige Erzeugnisse (Fertigfabrikate)">Fertige Erzeugnisse (Fertigfabrikate)</option>
<option value="Unfertige Erzeugnisse (Fabrikate in Arbeit)">Unfertige Erzeugnisse (Fabrikate in Arbeit)</option>
<option value="Nicht fakturierte Dienstleistungen">Nicht fakturierte Dienstleistungen</option>
<option value="Geleistete Anzahlungen Vorräte">Geleistete Anzahlungen Vorräte</option>
<option value="Aktive Rechnungsabgrenzungen">Aktive Rechnungsabgrenzungen</option>
<option value="Wertschriften des Anlagevermögens">Wertschriften des Anlagevermögens</option>
<option value="WB Wertschriften des Anlagevermögens">WB Wertschriften des Anlagevermögens</option>
<option value="Aktivdarlehen">Aktivdarlehen</option>
<option value="WB Aktivdarlehen">WB Aktivdarlehen</option>
<option value="Beteiligungen">Beteiligungen</option>
<option value="WB Beteiligungen">WB Beteiligungen</option>
<option value="Maschinen">Maschinen</option>
<option value="WB Maschinen">WB Maschinen</option>
<option value="Mobiliar">Mobiliar</option>
<option value="WB Mobiliar">WB Mobiliar</option>
<option value="Fahrzeuge">Fahrzeuge</option>
<option value="WB Fahrzeuge">WB Fahrzeuge</option>
<option value="Geleaste mobile Sachanlagen">Geleaste mobile Sachanlagen</option>
<option value="WB geleaste mobile Sachanlagen">WB geleaste mobile Sachanlagen</option>
<option value="Geleistete Anzahlung mobile SA">Geleistete Anzahlung mobile SA</option>
<option value="Liegenschaften">Liegenschaften</option>
<option value="Baukonto">Baukonto</option>
<option value="WB Liegenschaften">WB Liegenschaften</option>
<option value="Geleistete Anzahlung Liegenschaften">Geleistete Anzahlung Liegenschaften</option>
<option value="Immaterielle Werte">Immaterielle Werte</option>
<option value="WB Immaterielle Werte">WB Immaterielle Werte</option>
<option value="Nicht einbezahltes Grundkapital">Nicht einbezahltes Grundkapital</option>
<option value="Verbindlichkeiten L+L (Kreditoren)">Verbindlichkeiten L+L (Kreditoren)</option>
<option value="Ausstehende Gutscheine">Ausstehende Gutscheine</option>
<option value="Erhaltene Anzahlungen">Erhaltene Anzahlungen</option>
<option value="Bankschuld">Bankschuld</option>
<option value="Kurzfristige Leasingverbindlichkeiten">Kurzfristige Leasingverbindlichkeiten</option>
<option value="Kurzfristige Verbindlichkeiten Dritte">Kurzfristige Verbindlichkeiten Dritte</option>
<option value="Umsatzsteuer">Umsatzsteuer</option>
<option value="Abrechnungskonto MWST">Abrechnungskonto MWST</option>
<option value="Verrechnungssteuerschuld">Verrechnungssteuerschuld</option>
<option value="Verbindlichkeiten Factor">Verbindlichkeiten Factor</option>
<option value="Dividendenschuld">Dividendenschuld</option>
<option value="KK Sozialversicherungen">KK Sozialversicherungen</option>
<option value="Übrige kurzfristige Verbindlichkeiten">Übrige kurzfristige Verbindlichkeiten</option>
<option value="Passive Rechnungsabgrenzungen">Passive Rechnungsabgrenzungen</option>
<option value="Kurzfristige Rückstellungen">Kurzfristige Rückstellungen</option>
<option value="Bankdarlehen">Bankdarlehen</option>
<option value="Hypotheken">Hypotheken</option>
<option value="Baukredit">Baukredit</option>
<option value="Langfristige Leasingverbindlichkeiten">Langfristige Leasingverbindlichkeiten</option>
<option value="Darlehen Dritter">Darlehen Dritter</option>
<option value="Aktionärsdarlehenn">Aktionärsdarlehenn</option>
<option value="Langfristige Rückstellungen">Langfristige Rückstellungen</option>
<option value="Aktienkapital, Stammkapital">Aktienkapital, Stammkapital</option>
<option value="Gesetzliche Kapitalreserve">Gesetzliche Kapitalreserve</option>
<option value="Kapitaleinlagereserven">Kapitaleinlagereserven</option>
<option value="Gesetzliche Gewinnreserve">Gesetzliche Gewinnreserve</option>
<option value="Freiwillige Gewinnreserven">Freiwillige Gewinnreserven</option>
<option value="Gewinnvortrag">Gewinnvortrag</option>
<option value="Eigene Aktien (Minusposten)">Eigene Aktien (Minusposten)</option>
<option value="Eigenkapital">Eigenkapital</option>
<option value="Privat">Privat</option>
<option value="Kapital A">Kapital A</option>
<option value="Kapital B">Kapital B</option>
<option value="Privat A">Privat A</option>
<option value="Privat B">Privat B</option>
<option value="Produktionserlöse">Produktionserlöse</option>
<option value="Konsortialerfolg">Konsortialerfolg</option>
<option value="Warenertrag">Warenertrag</option>
<option value="Dienstleistungsertrag">Dienstleistungsertrag</option>
<option value="Übrige Erlöse L+LEigenleistungen">Übrige Erlöse L+LEigenleistungen</option>
<option value="Naturalbezüge">Naturalbezüge</option>
<option value="Skonti und Rabatte">Skonti und Rabatte</option>
<option value="Veränderung WB Forderungen">Veränderung WB Forderungen</option>
<option value="Verluste Forderungen">Verluste Forderungen</option>
<option value="Kursdifferenzen Verkauf">Kursdifferenzen Verkauf</option>
<option value="MWST Saldosteuersatz">MWST Saldosteuersatz</option>
<option value="Veränderung Garantierückstellungen">Veränderung Garantierückstellungen</option>
<option value="Übrige Erlösminderungen">Übrige Erlösminderungen</option>
<option value="BÄ unfertige Erzeugnisse">BÄ unfertige Erzeugnisse</option>
<option value="BÄ fertige Erzeugnisse">BÄ fertige Erzeugnisse</option>
<option value="BÄ nicht fakturierte Dienstleistungen">BÄ nicht fakturierte Dienstleistungen</option>
<option value="Materialaufwand">Materialaufwand</option>
<option value="Warenaufwand">Warenaufwand</option>
<option value="Dienstleistungsaufwand">Dienstleistungsaufwand</option>
<option value="Beschaffungsaufwand">Beschaffungsaufwand</option>
<option value="Material- und Handelswarenverluste">Material- und Handelswarenverluste</option>
<option value="Skonti und Rabatte">Skonti und Rabatte</option>
<option value="Kursdifferenzen Einkauf">Kursdifferenzen Einkauf</option>
<option value="Preisdifferenzen">Preisdifferenzen</option>
<option value="Lohnaufwand">Lohnaufwand</option>
<option value="Sozialversicherungsaufwand">Sozialversicherungsaufwand</option>
<option value="Übriger Personalaufwand">Übriger Personalaufwand</option>
<option value="Leistungen Dritter">Leistungen Dritter</option>
<option value="Mietzinsaufwand">Mietzinsaufwand</option>
<option value="Eigenmietwert">Eigenmietwert</option>
<option value="Leasingaufwand Immobilien">Leasingaufwand Immobilien</option>
<option value="Übriger Raumaufwand">Übriger Raumaufwand</option>
<option value="Aufwand URE">Aufwand URE</option>
<option value="Maschinenmietaufwand">Maschinenmietaufwand</option>
<option value="Leasingaufwand mobile Sachanlagen">Leasingaufwand mobile Sachanlagen</option>
<option value="Fahrzeugaufwand">Fahrzeugaufwand</option>
<option value="Leasingaufwand Fahrzeuge">Leasingaufwand Fahrzeuge</option>
<option value="Privatanteil Fahrzeugaufwand">Privatanteil Fahrzeugaufwand</option>
<option value="Versicherungsaufwand">Versicherungsaufwand</option>
<option value="Energieaufwand">Energieaufwand</option>
<option value="Entsorgungsaufwand">Entsorgungsaufwand</option>
<option value="Verwaltungsaufwand">Verwaltungsaufwand</option>
<option value="Werbeaufwand">Werbeaufwand</option>
<option value="Reise- und Repräsentationsaufwand">Reise- und Repräsentationsaufwand</option>
<option value="Sonstiger Betriebsaufwand">Sonstiger Betriebsaufwand</option>
<option value="Abschreibungsaufwand">Abschreibungsaufwand</option>
<option value="Wertberichtigungsaufwand">Wertberichtigungsaufwand</option>
<option value="Zinsaufwand">Zinsaufwand</option>
<option value="Bankspesen und Depotgebühren">Bankspesen und Depotgebühren</option>
<option value="Kursverluste Wertschriften">Kursverluste Wertschriften</option>
<option value="Wertberichtigungsaufwand">Wertberichtigungsaufwand</option>
<option value="Währungsverluste">Währungsverluste</option>
<option value="Zinsertrag">Zinsertrag</option>
<option value="Dividenden- und Zinsertrag Wertschriften">Dividenden- und Zinsertrag Wertschriften</option>
<option value="Kursgewinne Wertschriften">Kursgewinne Wertschriften</option>
<option value="Währungsgewinne">Währungsgewinne</option>
<option value="Ertrag Nebenbetrieb">Ertrag Nebenbetrieb</option>
<option value="Aufwand Nebenbetrieb">Aufwand Nebenbetrieb</option>
<option value="Mietzinsertrag">Mietzinsertrag</option>
<option value="Hypothekarzinsaufwand">Hypothekarzinsaufwand</option>
<option value="Abschreibungsaufwand">Abschreibungsaufwand</option>
<option value="Übriger Liegenschaftsaufwand">Übriger Liegenschaftsaufwand</option>
<option value="Betriebsfremder Aufwand">Betriebsfremder Aufwand</option>
<option value="Betriebsfremder Ertrag">Betriebsfremder Ertrag</option>
<option value="Ausserordentlicher Aufwand">Ausserordentlicher Aufwand</option>
<option value="A.o. Verlust aus Veräusserung Sachanlagen">A.o. Verlust aus Veräusserung Sachanlagen</option>
<option value="Ausserordentlicher Ertrag">Ausserordentlicher Ertrag</option>
<option value="A.o. Gewinn aus Veräusserung Sachanlagen">A.o. Gewinn aus Veräusserung Sachanlagen</option>
<option value="Direkte Steuern">Direkte Steuern</option>
<option value="Gewinn Erfolgsrechnung">Gewinn Erfolgsrechnung</option>
  </datalist>
 </div>
`;

const Page = document.getElementById("inputfield");
Page.innerHTML = inputform;
