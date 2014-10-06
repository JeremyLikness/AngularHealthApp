function formulaThr (age) {

    // max heart rate = 220 - age;
    var max = 220.0 - Number(age);

    // min range = 50%
    var min = Math.round(5.0 * max) / 10.0;

    // max range = 85%
    var maxRate = Math.round(8.5 * max) / 10.0;

    return {
        min: min,
        max: maxRate
    };
}