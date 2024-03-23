function numbbers(input) {
    let sequence = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let commandArgs = input[i].split(' ');
        let command = commandArgs[0];
        let value = commandArgs[1];
        let replacement = commandArgs[2];

        switch (command) {
            case 'Add':
                sequence.push(Number(value));
                break;
            case 'Remove':
                let indexToRemove = sequence.indexOf(Number(value));
                if (indexToRemove !== -1) {
                    sequence.splice(indexToRemove, 1);
                }
                break;
            case 'Replace':
                let indexToReplace = sequence.indexOf(Number(value));
                if (indexToReplace !== -1) {
                    sequence[indexToReplace] = Number(replacement);
                }
                break;
            case 'Collapse':
                sequence = sequence.filter(num => num >= Number(value));
                break;
            case 'Finish':
                console.log(sequence.join(' '));
                return;
            default:
                break;
        }
    }
}


numbbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]); // Output: 1 5 19 1
manipulateSequence(["1 20 -1 10", "Collapse 8", "Finish"]); // Output: 20 10
manipulateSequence(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]); // Output: 5 10 70 -56 9
