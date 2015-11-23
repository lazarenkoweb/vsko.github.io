function topTask(tasks) {
    var max = 0;
    for (var user in tasks) {

        if (max < tasks[user]) {
            max = tasks[user];
        }
    }

    return max;
}

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

console.log(topTask(tasksCompleted));
