const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const DECODER = {
    '00': '',
    '10': '.',
    '11': '-',
}

function decodeChar(input) {
    let result = '';
    let encodedPair = '';

    for (const char of input) {
        encodedPair += char;
        if (encodedPair.length === 2) {
            result += DECODER[encodedPair];
            encodedPair = '';
        }
    }
    return result;
}

function decode(expr) {
    let result = '';
    let encodedChar = '';

    for (const char of expr) {
        encodedChar += char;

        if (encodedChar.length === 10) {
            if (encodedChar.includes('*')) {
                result += ' ';
            } else {
                result += MORSE_TABLE[decodeChar(encodedChar)]
            }
            encodedChar = '';
        }
    }

    return result;
}

module.exports = {
    decode
}
