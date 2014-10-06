function formulaBmr (profile) {

    // Women - 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years)
    function woman(weight, height, age) {
        return Math.floor(655 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
    }

    // Men - 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years )
    function man(weight, height, age) {
        return Math.floor(66 + (6.23 * weight) + (12.7 * height) - (6.8 * age));
    }

    return profile.isMale ? man(profile.weight, profile.height, profile.age) :
        woman(profile.weight, profile.height, profile.age);
}