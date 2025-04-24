// Tastaturmappings
const layouts = {
  qwerty: {
    row1: [
      {main: '^', shift: '°'}, // Fehlende erste Taste hinzufügen
      {main: '1', shift: '!'},
      {main: '2', shift: '"'},
      {main: '3', shift: '§'},
      {main: '4', shift: '$'},
      {main: '5', shift: '%'},
      {main: '6', shift: '&'},
      {main: '7', shift: '/'},
      {main: '8', shift: '('},
      {main: '9', shift: ')'},
      {main: '0', shift: '='},
      {main: 'ß', shift: '?'},
      {main: '´', shift: '`'}
    ],
    row2: [
      {main: 'q', shift: 'Q'},
      {main: 'w', shift: 'W'},
      {main: 'e', shift: 'E'},
      {main: 'r', shift: 'R'},
      {main: 't', shift: 'T'},
      {main: 'z', shift: 'Z'},
      {main: 'u', shift: 'U'},
      {main: 'i', shift: 'I'},
      {main: 'o', shift: 'O'},
      {main: 'p', shift: 'P'},
      {main: 'ü', shift: 'Ü'},
      {main: '+', shift: '*'}
    ],
    row3: [
      {main: 'a', shift: 'A'},
      {main: 's', shift: 'S'},
      {main: 'd', shift: 'D'},
      {main: 'f', shift: 'F'},
      {main: 'g', shift: 'G'},
      {main: 'h', shift: 'H'},
      {main: 'j', shift: 'J'},
      {main: 'k', shift: 'K'},
      {main: 'l', shift: 'L'},
      {main: 'ö', shift: 'Ö'},
      {main: 'ä', shift: 'Ä'},
      {main: '#', shift: '\''}
    ],
    row4: [
      {main: '<', shift: '>'},
      {main: 'y', shift: 'Y'},
      {main: 'x', shift: 'X'},
      {main: 'c', shift: 'C'},
      {main: 'v', shift: 'V'},
      {main: 'b', shift: 'B'},
      {main: 'n', shift: 'N'},
      {main: 'm', shift: 'M'},
      {main: ',', shift: ';'},
      {main: '.', shift: ':'},
      {main: '-', shift: '_'}
    ]
  },
  qwertz: {
    row1: [
      {main: '^', shift: '°'}, // Fehlende erste Taste hinzufügen
      {main: '1', shift: '!'},
      {main: '2', shift: '"'},
      {main: '3', shift: '§'},
      {main: '4', shift: '$'},
      {main: '5', shift: '%'},
      {main: '6', shift: '&'},
      {main: '7', shift: '/'},
      {main: '8', shift: '('},
      {main: '9', shift: ')'},
      {main: '0', shift: '='},
      {main: 'ß', shift: '?'},
      {main: '´', shift: '`'}
    ],
    row2: [
      {main: 'q', shift: 'Q'},
      {main: 'w', shift: 'W'},
      {main: 'e', shift: 'E'},
      {main: 'r', shift: 'R'},
      {main: 't', shift: 'T'},
      {main: 'z', shift: 'Z'},
      {main: 'u', shift: 'U'},
      {main: 'i', shift: 'I'},
      {main: 'o', shift: 'O'},
      {main: 'p', shift: 'P'},
      {main: 'ü', shift: 'Ü'},
      {main: '+', shift: '*'}
    ],
    row3: [
      {main: 'a', shift: 'A'},
      {main: 's', shift: 'S'},
      {main: 'd', shift: 'D'},
      {main: 'f', shift: 'F'},
      {main: 'g', shift: 'G'},
      {main: 'h', shift: 'H'},
      {main: 'j', shift: 'J'},
      {main: 'k', shift: 'K'},
      {main: 'l', shift: 'L'},
      {main: 'ö', shift: 'Ö'},
      {main: 'ä', shift: 'Ä'},
      {main: '#', shift: '\''}
    ],
    row4: [
      {main: '<', shift: '>'},
      {main: 'y', shift: 'Y'},
      {main: 'x', shift: 'X'},
      {main: 'c', shift: 'C'},
      {main: 'v', shift: 'V'},
      {main: 'b', shift: 'B'},
      {main: 'n', shift: 'N'},
      {main: 'm', shift: 'M'},
      {main: ',', shift: ';'},
      {main: '.', shift: ':'},
      {main: '-', shift: '_'}
    ]
  },
  dvorak: {
    row1: [
      // {main: '^', shift: '°'},
      // {main: '1', shift: '!'},
      // {main: '2', shift: '"'},
      // {main: '3', shift: '§'},
      // {main: '4', shift: '$'},
      // {main: '5', shift: '%'},
      // {main: '6', shift: '&'},
      // {main: '7', shift: '/'},
      // {main: '8', shift: '('},
      // {main: '9', shift: ')'},
      // {main: '0', shift: '='},
      // {main: 'ß', shift: '?'},
      // {main: '´', shift: '`'}  // Diese Taste muss mit QWERTY/QWERTZ übereinstimmen
      {main: '^', shift: '°'},
      {main: '1', shift: '!'},
      {main: '2', shift: '"'},
      {main: '3', shift: '§'},
      {main: '4', shift: '$'},
      {main: '5', shift: '%'},
      {main: '6', shift: '&'},
      {main: '7', shift: '/'},
      {main: '8', shift: '('},
      {main: '9', shift: ')'},
      {main: '0', shift: '='},
      {main: '+', shift: '*'},
      {main: '<', shift: '>'}
    ],
    row2: [
      {main: 'ü', shift: 'Ü'},
      {main: ',', shift: ';'},
      {main: '.', shift: ':'},
      {main: 'p', shift: 'P'},
      {main: 'y', shift: 'Y'},
      {main: 'f', shift: 'F'},
      {main: 'g', shift: 'G'},
      {main: 'c', shift: 'C'},
      {main: 't', shift: 'T'},
      {main: 'z', shift: 'Z'},
      {main: '?', shift: '?'},
      {main: '/', shift: '\\'}
    ],
    row3: [
      {main: 'a', shift: 'A'},
      {main: 'o', shift: 'O'},
      {main: 'e', shift: 'E'},
      {main: 'i', shift: 'I'},
      {main: 'u', shift: 'U'},
      {main: 'h', shift: 'H'},
      {main: 'd', shift: 'D'},
      {main: 'r', shift: 'R'},
      {main: 'n', shift: 'N'},
      {main: 's', shift: 'S'},
      {main: 'l', shift: 'L'},
      {main: '-', shift: '_'}
    ],
    row4: [
      {main: 'ä', shift: 'Ä'},
      {main: 'ö', shift: 'Ö'},
      {main: 'q', shift: 'Q'},
      {main: 'j', shift: 'J'},
      {main: 'k', shift: 'K'},
      {main: 'x', shift: 'X'},
      {main: 'b', shift: 'B'},
      {main: 'm', shift: 'M'},
      {main: 'w', shift: 'W'},
      {main: 'v', shift: 'V'},
      {main: '#', shift: '\''}
    ]
  },
};

// Mapping für Tastatureingaben umwandeln
const qwertyToDvorak = {};
const dvorakToQwerty = {};
const qwertzToDvorak = {};
const dvorakToQwertz = {};

let activeText = '';

// Erkennen, ob der Benutzer auf macOS oder Windows ist
const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

// Mapping erstellen
function createMappings() {
  // QWERTY zu DVORAK Mapping für alle Reihen
  for (const row of ['row1', 'row2', 'row3', 'row4']) {
    const qwertyRow = layouts.qwerty[row] || [];
    const dvorakRow = layouts.dvorak[row] || [];

    // Wir gehen durch beide Layouts und erstellen ein Mapping basierend auf der Position
    for (let i = 0; i < qwertyRow.length; i++) {
      if (qwertyRow[i] && i < dvorakRow.length) {
        // Main keys
        qwertyToDvorak[qwertyRow[i].main] = dvorakRow[i].main;
        dvorakToQwerty[dvorakRow[i].main] = qwertyRow[i].main;

        // Shift keys
        qwertyToDvorak[qwertyRow[i].shift] = dvorakRow[i].shift;
        dvorakToQwerty[dvorakRow[i].shift] = qwertyRow[i].shift;
      }
    }
  }

  // QWERTZ zu DVORAK Mapping für alle Reihen
  for (const row of ['row1', 'row2', 'row3', 'row4']) {
    const qwertzRow = layouts.qwertz[row] || [];
    const dvorakRow = layouts.dvorak[row] || [];

    // Wir gehen durch beide Layouts und erstellen ein Mapping basierend auf der Position
    for (let i = 0; i < qwertzRow.length; i++) {
      if (qwertzRow[i] && i < dvorakRow.length) {
        // Main keys
        qwertzToDvorak[qwertzRow[i].main] = dvorakRow[i].main;
        dvorakToQwertz[dvorakRow[i].main] = qwertzRow[i].main;

        // Shift keys
        qwertzToDvorak[qwertzRow[i].shift] = dvorakRow[i].shift;
        dvorakToQwertz[dvorakRow[i].shift] = qwertzRow[i].shift;
      }
    }
  }
}

// Virtuelle Tastatur erstellen
function createVirtualKeyboard(layout) {
  const container = document.getElementById('keyboard-container');
  container.innerHTML = '';

  // Zeilen erstellen
  ['row1', 'row2', 'row3', 'row4'].forEach(row => {
    const rowElement = createKeyboardRow(layouts[layout][row]);
    container.appendChild(rowElement);
  });
}

// Tastaturzeile erstellen
function createKeyboardRow(keys) {
  const row = document.createElement('div');
  row.className = 'keyboard-row';

  keys.forEach(key => {
    const keyElement = document.createElement('div');
    keyElement.className = 'key';

    // Hauptzeichen
    const mainChar = document.createElement('span');
    mainChar.className = 'main-char';
    mainChar.textContent = key.main;
    keyElement.appendChild(mainChar);

    // Shift-Zeichen
    if (key.shift) {
      const shiftChar = document.createElement('span');
      shiftChar.className = 'shift-char';
      shiftChar.textContent = key.shift;
      keyElement.appendChild(shiftChar);
    }

    row.appendChild(keyElement);
  });

  return row;
}

// Umwandlung von Eingabetexten zwischen den Layouts
function convertText(text, fromLayout, toLayout) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (fromLayout === 'qwerty' && toLayout === 'dvorak') {
      result += qwertyToDvorak[char] || char;
    } else if (fromLayout === 'dvorak' && toLayout === 'qwerty') {
      result += dvorakToQwerty[char] || char;
    } else if (fromLayout === 'qwertz' && toLayout === 'dvorak') {
      result += qwertzToDvorak[char] || char;
    } else if (fromLayout === 'dvorak' && toLayout === 'qwertz') {
      result += dvorakToQwertz[char] || char;
    } else {
      result += char; // Keine Umwandlung nötig
    }
  }
  return result;
}

// Eine Taste auf der virtuellen Tastatur hervorheben
function highlightKey(key, layout) {
  // Alle Tasten zurücksetzen
  const keys = document.querySelectorAll('.key');
  keys.forEach(k => k.classList.remove('active'));

  // Der eingegebene Key entspricht dem physischen Layout (QWERTZ)
  // Wir müssen den Key daher in das virtuelle Layout umwandeln
  let keyToHighlight = key;

  // Für Dvorak müssen wir die physische QWERTZ-Taste auf das virtuelle Dvorak-Layout mappen
  if (layout === 'dvorak') {
    // Wenn z.B. 'f' gedrückt wird, zeigen wir auf dem virtuellen Dvorak 'u' an
    for (const row of ['row1', 'row2', 'row3', 'row4']) {
      for (let i = 0; i < layouts.qwertz[row].length; i++) {
        if (layouts.qwertz[row][i].main === key) {
          // Die entsprechende Position im Dvorak-Layout verwenden
          if (i < layouts.dvorak[row].length) {
            keyToHighlight = layouts.dvorak[row][i].main;
          }
          break;
        } else if (layouts.qwertz[row][i].shift === key) {
          // Für Shift-Zeichen
          if (i < layouts.dvorak[row].length) {
            keyToHighlight = layouts.dvorak[row][i].shift;
          }
          break;
        }
      }
    }
  }

  // Finde die Taste auf der virtuellen Tastatur und aktiviere sie
  keys.forEach(k => {
    const mainChar = k.querySelector('.main-char')?.textContent;
    const shiftChar = k.querySelector('.shift-char')?.textContent;

    if (mainChar === keyToHighlight || shiftChar === keyToHighlight) {
      k.classList.add('active');
    }
  });
}

// Modifiertasten verwalten
let isShiftPressed = false;

// Aktualisiert das Ausgabefeld
function updateOutput(text, layout) {
  const outputDiv = document.getElementById('output-text');

  // Debugging-Ausgabe zur Fehlersuche
  console.log("updateOutput aufgerufen mit:", text, layout);

  // Sicherstellen, dass der Text nicht null oder undefined ist
  if (!text) {
    outputDiv.textContent = '';
    return;
  }

  // Optimierte Konvertierungslogik
  let convertedText = '';

  // Wir gehen davon aus, dass die physische Tastatur QWERTZ ist
  // und konvertieren entsprechend dem ausgewählten Layout
  if (layout === 'dvorak') {
    // Bei DVORAK-Layout konvertieren wir von QWERTZ nach DVORAK
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      convertedText += qwertzToDvorak[char] || char;
    }
  } else if (layout === 'qwertz') {
    // Bei QWERTZ muss keine Konvertierung erfolgen
    convertedText = text;
  } else {
    // Fallback: Text unverändert übernehmen
    convertedText = text;
  }

  console.log("Konvertiertes Ergebnis:", convertedText);

  // Ausgabe aktualisieren
  outputDiv.textContent = convertedText;

  updateHighlighting(convertedText);

  // Für Debugging-Zwecke eine Kopie im localStorage speichern
  try {
    localStorage.setItem('lastConvertedText', convertedText);
  } catch (e) {
    console.warn("localStorage nicht verfügbar:", e);
  }
}

// Logik zum Hervorheben von Buchstaben während der Eingabe
function updateHighlighting(inputText) {
  const activeTextElement = document.getElementById('active-text');
  const activeText = document.getElementById('active-text').textContent;
  let highlightedContent = '';

  for (let i = 0; i < activeText.length; i++) {
    if (i < inputText.length) {
      if (inputText[i] === activeText[i]) {
        highlightedContent += `<span class="correct-char">${activeText[i]}</span>`;
      } else {
        highlightedContent += `<span class="incorrect-char">${activeText[i]}</span>`;
      }
    } else {
      highlightedContent += activeText[i];
    }
  }

  activeTextElement.innerHTML = highlightedContent;
}

// Hauptfunktion zum Initialisieren
function init() {
  // Mappings erstellen
  createMappings();

  // Standard-Layout laden
  const layoutSelect = document.getElementById('layout-select');
  const currentLayout = layoutSelect.value;
  createVirtualKeyboard(currentLayout);

  // Text-Eingabefeld
  const inputField = document.getElementById('input-field');

  // Aktiver Text Element
  const activeTextElement = document.getElementById('active-text');

  // Text-Eingabefeld initial fokussieren
  inputField.focus();

  // Event-Listener für Layout-Auswahl
  layoutSelect.addEventListener('change', function () {
    const selectedLayout = this.value;
    createVirtualKeyboard(selectedLayout);

    // Text-Umwandlung aktualisieren
    updateOutput(inputField.value, selectedLayout);

    // Focus zurück auf Eingabefeld setzen
    inputField.focus();
  });

  // Event-Listener für Tastatureingabe
  let lastKeyPressed = '';

  inputField.addEventListener('keydown', function (e) {
    const selectedLayout = document.getElementById('layout-select').value;

    // Aktuelle Taste speichern
    lastKeyPressed = e.key;

    // Shift-Status überprüfen
    if (e.key === 'Shift') {
      isShiftPressed = true;
      document.body.classList.add('shift-pressed');
    } else {
      // Taste auf dem virtuellen Keyboard hervorheben
      highlightKey(e.key, selectedLayout);
    }
  });

  inputField.addEventListener('keyup', function (e) {
    if (e.key === 'Shift') {
      isShiftPressed = false;
      document.body.classList.remove('shift-pressed');
    } else {
      // Nach kurzer Zeit alle Hervorhebungen entfernen
      setTimeout(() => {
        const keys = document.querySelectorAll('.key');
        keys.forEach(k => k.classList.remove('active'));
      }, 100); // Von 200ms auf 100ms reduziert
    }

    // Hier hinzugefügt: Ausgabe aktualisieren bei jeder Tasteneingabe
    updateOutput(inputField.value, document.getElementById('layout-select').value);
  });

  // Auch bei Input-Event die Ausgabe aktualisieren (wichtig für Paste-Operationen)
  inputField.addEventListener('input', function () {
    const activeText = document.getElementById('active-text').textContent;
    const inputText = this.value;

    // updateHighlighting(inputText, activeText);
    updateOutput(inputText, document.getElementById('layout-select').value);
  });

  // Event-Listener für "Als aktiven Text setzen"-Buttons (frühere "Kopieren"-Buttons)
  document.querySelectorAll('.set-active-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const text = this.getAttribute('data-text');

      // Text als aktiven Text setzen
      activeTextElement.textContent = text;

      // Das Eingabefeld leeren und fokussieren
      inputField.value = '';
      updateOutput('', document.getElementById('layout-select').value);
      inputField.focus();

      // Text-Feedback für den Button
      const originalText = this.textContent;
      this.textContent = 'Aktiv gesetzt!';
      setTimeout(() => {
        this.textContent = originalText;
      }, 1000);
    });
  });

  // Statusanzeige für Modifiertasten erstellen
  const container = document.querySelector('.virtual-keyboard');
  const modifierStatus = document.createElement('div');
  modifierStatus.className = 'modifier-status';

  // Mac-spezifischen Text für die Status-Anzeige verwenden
  if (isMac) {
    modifierStatus.innerHTML = '<span class="shift-status">Shift: Aus</span>';
  } else {
    modifierStatus.innerHTML = '<span class="shift-status">Shift: Aus</span>';
  }

  container.appendChild(modifierStatus);

  // Erste Ausgabe aktualisieren
  updateOutput(inputField.value, currentLayout);
}

// Starten der Anwendung, wenn DOM geladen ist
document.addEventListener('DOMContentLoaded', init);

