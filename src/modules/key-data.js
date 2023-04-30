const KEYS_DATA = [
  {
    code: 'Backquote',
    en: {
      lowerCase: '`',
      caps: '`',
      shift: '~',
      capsShift: '~',
    },
    ru: {
      lowerCase: 'ё',
      caps: 'Ё',
      shift: 'Ё',
      capsShift: 'ё',
    },
  },
  {
    code: 'Digit1',
    en: {
      lowerCase: '1',
      caps: '1',
      shift: '!',
      capsShift: '!',
    },
    ru: {
      lowerCase: '1',
      caps: '1',
      shift: '!',
      capsShift: '!',
    },
  },
  {
    code: 'Digit2',
    en: {
      lowerCase: '2',
      caps: '2',
      shift: '@',
      capsShift: '@',
    },
    ru: {
      lowerCase: '2',
      caps: '2',
      shift: '"',
      capsShift: '"',
    },
  },
  {
    code: 'Digit3',
    en: {
      lowerCase: '3`',
      caps: '3',
      shift: '#',
      capsShift: '#',
    },
    ru: {
      lowerCase: '3',
      caps: '3',
      shift: '№',
      capsShift: '№',
    },
  },
  {
    code: 'Digit4',
    en: {
      lowerCase: '4',
      caps: '4',
      shift: '$',
      capsShift: '$',
    },
    ru: {
      lowerCase: '4',
      caps: '4',
      shift: ';',
      capsShift: ';',
    },
  },
  {
    code: 'Digit5',
    en: {
      lowerCase: '5',
      caps: '5',
      shift: '%',
      capsShift: '%',
    },
    ru: {
      lowerCase: '5',
      caps: '5',
      shift: '%',
      capsShift: '%',
    },
  },
  {
    code: 'Digit6',
    en: {
      lowerCase: '6',
      caps: '6',
      shift: '^',
      capsShift: '^',
    },
    ru: {
      lowerCase: '6',
      caps: '6',
      shift: ':',
      capsShift: ':',
    },
  },
  {
    code: 'Digit7',
    en: {
      lowerCase: '7',
      caps: '7',
      shift: '&',
      capsShift: '&',
    },
    ru: {
      lowerCase: '7',
      caps: '7',
      shift: '?',
      capsShift: '?',
    },
  },
  {
    code: 'Digit8',
    en: {
      lowerCase: '8',
      caps: '8',
      shift: '*',
      capsShift: '*',
    },
    ru: {
      lowerCase: '8',
      caps: '8',
      shift: '*',
      capsShift: '*',
    },
  },
  {
    code: 'Digit9',
    en: {
      lowerCase: '9',
      caps: '9',
      shift: '(',
      capsShift: '(',
    },
    ru: {
      lowerCase: '9',
      caps: '9',
      shift: '(',
      capsShift: '(',
    },
  },
  {
    code: 'Digit0',
    en: {
      lowerCase: '0',
      caps: '0',
      shift: ')',
      capsShift: ')',
    },
    ru: {
      lowerCase: '0',
      caps: '0',
      shift: ')',
      capsShift: ')',
    },
  },
  {
    code: 'Minus',
    en: {
      lowerCase: '-',
      caps: '-',
      shift: '_',
      capsShift: '_',
    },
    ru: {
      lowerCase: '-',
      caps: '-',
      shift: '_',
      capsShift: '_',
    },
  },
  {
    code: 'Equal',
    en: {
      lowerCase: '=',
      caps: '=',
      shift: '+',
      capsShift: '+',
    },
    ru: {
      lowerCase: '=',
      caps: '=',
      shift: '+',
      capsShift: '+',
    },
  },
  {
    code: 'Backspace',
    en: {
      lowerCase: 'Backspace',
      caps: 'Backspace',
      shift: 'Backspace',
      capsShift: 'Backspace',
    },
    ru: {
      lowerCase: 'Backspace',
      caps: 'Backspace',
      shift: 'Backspace',
      capsShift: 'Backspace',
    },
  },
  {
    code: 'Tab',
    en: {
      lowerCase: 'Tab',
      caps: 'Tab',
      shift: 'Tab',
      capsShift: 'Tab',
    },
    ru: {
      lowerCase: 'Tab',
      caps: 'Tab',
      shift: 'Tab',
      capsShift: 'Tab',
    },
  },
  {
    code: 'KeyQ',
    en: {
      lowerCase: 'q',
      caps: 'Q',
      shift: 'Q',
      capsShift: 'q',
    },
    ru: {
      lowerCase: 'й',
      caps: 'Й',
      shift: 'Й',
      capsShift: 'й',
    },
  },
  {
    code: 'KeyW',
    en: {
      lowerCase: 'w',
      caps: 'W',
      shift: 'W',
      capsShift: 'w',
    },
    ru: {
      lowerCase: 'ц',
      caps: 'Ц',
      shift: 'Ц',
      capsShift: 'ц',
    },
  },
  {
    code: 'KeyE',
    en: {
      lowerCase: 'e',
      caps: 'E',
      shift: 'E',
      capsShift: 'e',
    },
    ru: {
      lowerCase: 'у',
      caps: 'У',
      shift: 'У',
      capsShift: 'У',
    },
  },
  {
    code: 'KeyR',
    en: {
      lowerCase: 'r',
      caps: 'R',
      shift: 'R',
      capsShift: 'r',
    },
    ru: {
      lowerCase: 'к',
      caps: 'К',
      shift: 'К',
      capsShift: 'к',
    },
  },
  {
    code: 'KeyT',
    en: {
      lowerCase: 't',
      caps: 'T',
      shift: 'T',
      capsShift: 't',
    },
    ru: {
      lowerCase: 'е',
      caps: 'Е',
      shift: 'Е',
      capsShift: 'е',
    },
  },
  {
    code: 'KeyY',
    en: {
      lowerCase: 'y',
      caps: 'Y',
      shift: 'Y',
      capsShift: 'y',
    },
    ru: {
      lowerCase: 'н',
      caps: 'Н',
      shift: 'Н',
      capsShift: 'н',
    },
  },
  {
    code: 'KeyU',
    en: {
      lowerCase: 'u',
      caps: 'U',
      shift: 'U',
      capsShift: 'u',
    },
    ru: {
      lowerCase: 'г',
      caps: 'Г',
      shift: 'Г',
      capsShift: 'г',
    },
  },
  {
    code: 'KeyI',
    en: {
      lowerCase: 'i',
      caps: 'I',
      shift: 'I',
      capsShift: 'i',
    },
    ru: {
      lowerCase: 'ш',
      caps: 'Ш',
      shift: 'Ш',
      capsShift: 'ш',
    },
  },
  {
    code: 'KeyO',
    en: {
      lowerCase: 'o',
      caps: 'O',
      shift: 'O',
      capsShift: 'o',
    },
    ru: {
      lowerCase: 'щ',
      caps: 'Щ',
      shift: 'Щ',
      capsShift: 'щ',
    },
  },
  {
    code: 'KeyP',
    en: {
      lowerCase: 'p',
      caps: 'P',
      shift: 'P',
      capsShift: 'p',
    },
    ru: {
      lowerCase: 'з',
      caps: 'З',
      shift: 'З',
      capsShift: 'з',
    },
  },
  {
    code: 'BracketLeft',
    en: {
      lowerCase: '[',
      caps: '[',
      shift: '{',
      capsShift: '{',
    },
    ru: {
      lowerCase: 'х',
      caps: 'Х',
      shift: 'Х',
      capsShift: 'х',
    },
  },
  {
    code: 'BracketRight',
    en: {
      lowerCase: ']',
      caps: ']',
      shift: '}',
      capsShift: '}',
    },
    ru: {
      lowerCase: 'ъ',
      caps: 'Ъ',
      shift: 'Ъ',
      capsShift: 'ъ',
    },
  },
  {
    code: 'Backslash',
    en: {
      lowerCase: '\\',
      caps: '\\',
      shift: '|',
      capsShift: '|',
    },
    ru: {
      lowerCase: '\\',
      caps: '\\',
      shift: '/',
      capsShift: '/',
    },
  },
  {
    code: 'Delete',
    en: {
      lowerCase: 'Delete',
      caps: 'Delete',
      shift: 'Delete',
      capsShift: 'Delete',
    },
    ru: {
      lowerCase: 'Delete',
      caps: 'Delete',
      shift: 'Delete',
      capsShift: 'Delete',
    },
  },
  {
    code: 'CapsLock',
    en: {
      lowerCase: 'Caps Lock',
      caps: 'Caps Lock',
      shift: 'Caps Lock',
      capsShift: 'Caps Lock',
    },
    ru: {
      lowerCase: 'Caps Lock',
      caps: 'Caps Lock',
      shift: 'Caps Lock',
      capsShift: 'Caps Lock',
    },
  },
  {
    code: 'KeyA',
    en: {
      lowerCase: 'a',
      caps: 'A',
      shift: 'A',
      capsShift: 'a',
    },
    ru: {
      lowerCase: 'ф',
      caps: 'Ф',
      shift: 'Ф',
      capsShift: 'ф',
    },
  },
  {
    code: 'KeyS',
    en: {
      lowerCase: 's',
      caps: 'S',
      shift: 'S',
      capsShift: 's',
    },
    ru: {
      lowerCase: 'ы',
      caps: 'Ы',
      shift: 'Ы',
      capsShift: 'ы',
    },
  },
  {
    code: 'KeyD',
    en: {
      lowerCase: 'd',
      caps: 'D',
      shift: 'D',
      capsShift: 'd',
    },
    ru: {
      lowerCase: 'в',
      caps: 'В',
      shift: 'В',
      capsShift: 'в',
    },
  },
  {
    code: 'KeyF',
    en: {
      lowerCase: 'f',
      caps: 'F',
      shift: 'F',
      capsShift: 'f',
    },
    ru: {
      lowerCase: 'а',
      caps: 'А',
      shift: 'А',
      capsShift: 'а',
    },
  },
  {
    code: 'KeyG',
    en: {
      lowerCase: 'g',
      caps: 'G',
      shift: 'G',
      capsShift: 'g',
    },
    ru: {
      lowerCase: 'п',
      caps: 'П',
      shift: 'П',
      capsShift: 'п',
    },
  },
  {
    code: 'KeyH',
    en: {
      lowerCase: 'h',
      caps: 'H',
      shift: 'H',
      capsShift: 'h',
    },
    ru: {
      lowerCase: 'р',
      caps: 'Р',
      shift: 'Р',
      capsShift: 'р',
    },
  },
  {
    code: 'KeyJ',
    en: {
      lowerCase: 'j',
      caps: 'J',
      shift: 'J',
      capsShift: 'j',
    },
    ru: {
      lowerCase: 'о',
      caps: 'О',
      shift: 'О',
      capsShift: 'о',
    },
  },
  {
    code: 'KeyK',
    en: {
      lowerCase: 'k',
      caps: 'K',
      shift: 'K',
      capsShift: 'k',
    },
    ru: {
      lowerCase: 'л',
      caps: 'Л',
      shift: 'Л',
      capsShift: 'л',
    },
  },
  {
    code: 'KeyL',
    en: {
      lowerCase: 'l',
      caps: 'L',
      shift: 'L',
      capsShift: 'l',
    },
    ru: {
      lowerCase: 'д',
      caps: 'Д',
      shift: 'Д',
      capsShift: 'д',
    },
  },
  {
    code: 'Semicolon',
    en: {
      lowerCase: ';',
      caps: ';',
      shift: ':',
      capsShift: ':',
    },
    ru: {
      lowerCase: 'ж',
      caps: 'Ж',
      shift: 'Ж',
      capsShift: 'ж',
    },
  },
  {
    code: 'Quote',
    en: {
      lowerCase: '\'',
      caps: '\'',
      shift: '"',
      capsShift: '"',
    },
    ru: {
      lowerCase: 'э',
      caps: 'Э',
      shift: 'Э',
      capsShift: 'э',
    },
  },
  {
    code: 'Enter',
    en: {
      lowerCase: 'Enter',
      caps: 'Enter',
      shift: 'Enter',
      capsShift: 'Enter',
    },
    ru: {
      lowerCase: 'Enter',
      caps: 'Enter',
      shift: 'Enter',
      capsShift: 'Enter',
    },
  },
  {
    code: 'ShiftLeft',
    en: {
      lowerCase: 'Shift',
      caps: 'Shift',
      shift: 'Shift',
      capsShift: 'Shift',
    },
    ru: {
      lowerCase: 'Shift',
      caps: 'Shift',
      shift: 'Shift',
      capsShift: 'Shift',
    },
  },
  {
    code: 'KeyZ',
    en: {
      lowerCase: 'z',
      caps: 'Z',
      shift: 'Z',
      capsShift: 'z',
    },
    ru: {
      lowerCase: 'я',
      caps: 'Я',
      shift: 'Я',
      capsShift: 'я',
    },
  },
  {
    code: 'KeyX',
    en: {
      lowerCase: 'x',
      caps: 'X',
      shift: 'X',
      capsShift: 'x',
    },
    ru: {
      lowerCase: 'ч',
      caps: 'Ч',
      shift: 'Ч',
      capsShift: 'ч',
    },
  },
  {
    code: 'KeyC',
    en: {
      lowerCase: 'c',
      caps: 'C',
      shift: 'C',
      capsShift: 'c',
    },
    ru: {
      lowerCase: 'с',
      caps: 'С',
      shift: 'С',
      capsShift: 'с',
    },
  },
  {
    code: 'KeyV',
    en: {
      lowerCase: 'v',
      caps: 'V',
      shift: 'V',
      capsShift: 'v',
    },
    ru: {
      lowerCase: 'м',
      caps: 'М',
      shift: 'М',
      capsShift: 'м',
    },
  },
  {
    code: 'KeyB',
    en: {
      lowerCase: 'b',
      caps: 'B',
      shift: 'B',
      capsShift: 'b',
    },
    ru: {
      lowerCase: 'и',
      caps: 'И',
      shift: 'И',
      capsShift: 'и',
    },
  },
  {
    code: 'KeyN',
    en: {
      lowerCase: 'n',
      caps: 'N',
      shift: 'N',
      capsShift: 'n',
    },
    ru: {
      lowerCase: 'т',
      caps: 'Т',
      shift: 'Т',
      capsShift: 'т',
    },
  },
  {
    code: 'KeyM',
    en: {
      lowerCase: 'm',
      caps: 'M',
      shift: 'M',
      capsShift: 'm',
    },
    ru: {
      lowerCase: 'ь',
      caps: 'Ь',
      shift: 'Ь',
      capsShift: 'ь',
    },
  },
  {
    code: 'Comma',
    en: {
      lowerCase: ',',
      caps: ',',
      shift: '<',
      capsShift: '<',
    },
    ru: {
      lowerCase: 'б',
      caps: 'Б',
      shift: 'Б',
      capsShift: 'б',
    },
  },
  {
    code: 'Period',
    en: {
      lowerCase: '.',
      caps: '.',
      shift: '>',
      capsShift: '>',
    },
    ru: {
      lowerCase: 'ю',
      caps: 'Ю',
      shift: 'Ю',
      capsShift: 'ю',
    },
  },
  {
    code: 'Slash',
    en: {
      lowerCase: '/',
      caps: '/',
      shift: '?',
      capsShift: '?',
    },
    ru: {
      lowerCase: '.',
      caps: '.',
      shift: ',',
      capsShift: ',',
    },
  },
  {
    code: 'ArrowUp',
    en: {
      lowerCase: '&#x25B2;',
      caps: '&#x25B2;',
      shift: '&#x25B2;',
      capsShift: '&#x25B2;',
    },
    ru: {
      lowerCase: '&#x25B2;',
      caps: '&#x25B2;',
      shift: '&#x25B2;',
      capsShift: '&#x25B2;',
    },
  },
  {
    code: 'ShiftRight',
    en: {
      lowerCase: 'Shift',
      caps: 'Shift',
      shift: 'Shift',
      capsShift: 'Shift',
    },
    ru: {
      lowerCase: 'Shift',
      caps: 'Shift',
      shift: 'Shift',
      capsShift: 'Shift',
    },
  },
  {
    code: 'ControlLeft',
    en: {
      lowerCase: 'Ctrl',
      caps: 'Ctrl',
      shift: 'Ctrl',
      capsShift: 'Ctrl',
    },
    ru: {
      lowerCase: 'Ctrl',
      caps: 'Ctrl',
      shift: 'Ctrl',
      capsShift: 'Ctrl',
    },
  },
  {
    code: 'MetaLeft',
    en: {
      lowerCase: 'Win',
      caps: 'Win',
      shift: 'Win',
      capsShift: 'Win',
    },
    ru: {
      lowerCase: 'Win',
      caps: 'Win',
      shift: 'Win',
      capsShift: 'Win',
    },
  },
  {
    code: 'AltLeft',
    en: {
      lowerCase: 'Alt',
      caps: 'Alt',
      shift: 'Alt',
      capsShift: 'Alt',
    },
    ru: {
      lowerCase: 'Alt',
      caps: 'Alt',
      shift: 'Alt',
      capsShift: 'Alt',
    },
  },
  {
    code: 'Space',
    en: {
      lowerCase: '',
      caps: '',
      shift: '',
      capsShift: '',
    },
    ru: {
      lowerCase: '',
      caps: '',
      shift: '',
      capsShift: '',
    },
  },
  {
    code: 'AltRight',
    en: {
      lowerCase: 'Alt',
      caps: 'Alt',
      shift: 'Alt',
      capsShift: 'Alt',
    },
    ru: {
      lowerCase: 'Alt',
      caps: 'Alt',
      shift: 'Alt',
      capsShift: 'Alt',
    },
  },
  {
    code: 'ArrowLeft',
    en: {
      lowerCase: '&#x25C4;',
      caps: '&#x25C4;',
      shift: '&#x25C4;',
      capsShift: '&#x25C4;',
    },
    ru: {
      lowerCase: '&#x25C4;',
      caps: '&#x25C4;',
      shift: '&#x25C4;',
      capsShift: '&#x25C4;',
    },
  },
  {
    code: 'ArrowDown',
    en: {
      lowerCase: '&#x25BC;',
      caps: '&#x25BC;',
      shift: '&#x25BC;',
      capsShift: '&#x25BC;',
    },
    ru: {
      lowerCase: '&#x25BC;',
      caps: '&#x25BC;',
      shift: '&#x25BC;',
      capsShift: '&#x25BC;',
    },
  },
  {
    code: 'ArrowRight',
    en: {
      lowerCase: '&#x25BA;',
      caps: '&#x25BA;',
      shift: '&#x25BA;',
      capsShift: '&#x25BA;',
    },
    ru: {
      lowerCase: '&#x25BA;',
      caps: '&#x25BA;',
      shift: '&#x25BA;',
      capsShift: '&#x25BA;',
    },
  },
  {
    code: 'ControlRight',
    en: {
      lowerCase: 'Ctrl',
      caps: 'Ctrl',
      shift: 'Ctrl',
      capsShift: 'Ctrl',
    },
    ru: {
      lowerCase: 'Ctrl',
      caps: 'Ctrl',
      shift: 'Ctrl',
      capsShift: 'Ctrl',
    },
  },
];

export default KEYS_DATA;
