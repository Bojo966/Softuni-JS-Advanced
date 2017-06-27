function composeObject(name, age, weight, height) {
    let bmi = Math.round(weight / Math.pow(height / 100, 2))

    let bmiStatus

    if (bmi < 18.5) {
        bmiStatus = 'underweight'
    } else if (bmi < 25) {
        bmiStatus = 'normal'
    } else if (bmi < 30) {
        bmiStatus = 'overweight'
    } else {
        bmiStatus = 'obese'
    }

    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: bmiStatus
    }

    if (obj.status === 'obese') {
        obj['recommendation'] = 'admission required'
    }

    return obj
}

console.log(composeObject('Peter', 29, 75, 182))