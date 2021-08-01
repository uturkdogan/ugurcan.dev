/**
 * This script aims to convert given numbers into 
 * words in spanish.
 * Probably not the best approach, but oh well.
 * Works upto 199, because that is how much spanish I learned so far..
 */

export const convertNumberToText = (number) => {
    let numbers = {
        0: 'cero',
        1: 'uno',
        2: 'dos',
        3: 'tres',
        4: 'cuatro',
        5: 'cinco',
        6: 'séis',
        7: 'siete',
        8: 'ocho',
        9: 'nueve',
        10: 'diez',
        11: 'once',
        12: 'doce',
        13: 'trece',
        14: 'catorce',
        15: 'quince',
        16: 'dieciséis',
        17: 'diecisiete',
        18: 'dieciocho',
        19: 'diecinueve',
        20: 'viente',
    };
    let tens = {
        3: 'treinta',
        4: 'curenta',
        5: 'cincuenta',
        6: 'sesenta',
        7: 'setenta',
        8: 'ochenta',
        9: 'noventa',
        10: 'cien'
    };

    if (number > 199 || number < 0) {
        return 'Outside of Boundry';
    }

    if (number < 21) {
        return numbers[number];
    }
    else if (number < 30) {
        let remainder = number - 20;
        return 'vienti' + numbers[remainder];
    }
    else if (number < 101) {
        let remainder = number % 10;
        let powTen = Math.floor((number / 10) % 10);
        var result = tens[powTen];
        if (remainder != 0) {
            result = result + ' y ' + numbers[remainder]
        }
        return result;
    }
    else if (number < 200) {
        let remainder = number - 100;
        return 'ciento ' + convertNumberToText(remainder);
    }
}
