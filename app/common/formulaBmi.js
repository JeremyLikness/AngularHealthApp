function formulaBmi (profile) {

    // BMI = (weight in pound * 703) / (height in inches)^2
    var bmi = (profile.weight * 703) / (profile.height * profile.height);

    // round it
    return Math.round(bmi * 10.0)/10.0;
}