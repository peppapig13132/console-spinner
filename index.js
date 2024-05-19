const spinner = ['-', '\\', '|', '/'];
const totalIterations = 100; // Total number of iterations

function spin() {
    let i = 0;
    const interval = setInterval(() => {
        const percentage = Math.floor((i / totalIterations) * 100);
        process.stdout.write(`\r${spinner[i % spinner.length]} ${percentage}%`);
        i++;

        if (i > totalIterations) {
            clearInterval(interval);
            process.stdout.write('\nDone!\n');
        }
    }, 100); // Adjust the interval time as needed (in milliseconds)
}

spin();
