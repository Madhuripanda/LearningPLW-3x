function questionName(input) {

let passed = 0;
let failed = 0;
let skipped = 0;
let totalDuration = 0;
let failedSteps = [];

for (const step of input) {
    totalDuration += step.durationMs;

    if (step.status === "passed") {
        passed++;
    } else if (step.status === "failed") {
        failed++;
        failedSteps.push(step.name);
    } else if (step.status === "skipped") {
        skipped++;
    }
}

let answer = `Total Steps: ${input.length}
Passed: ${passed}
Failed: ${failed}
Skipped: ${skipped}
Total Duration: ${totalDuration}
Failed Steps: ${failedSteps.join(",")}`;

return answer;
}