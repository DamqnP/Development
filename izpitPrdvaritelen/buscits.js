function biscuits(input) {
    let [biscuitsPerDay, workerCount, competingProduction] = input.map(Number);

    let normalProduction = biscuitsPerDay * workerCount * 30;
    let totalProduction = 0;

    for (let day = 1; day <= 30; day++) {
        let dailyProduction = biscuitsPerDay * workerCount;
        if (day % 3 === 0) {
            dailyProduction *= 0.75;
        }
        totalProduction += Math.floor(dailyProduction);
    }

    let percentageDifference = ((totalProduction - competingProduction) / competingProduction) * 100;

    console.log(`You have produced ${totalProduction} biscuits for the past month.`);

    if (totalProduction > competingProduction) {
        console.log(`You produce ${percentageDifference.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${Math.abs(percentageDifference).toFixed(2)} percent less biscuits.`);
    }
}


biscuits(["78", "8", "16000"]);

