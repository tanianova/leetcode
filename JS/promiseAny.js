// Promise.any() возвращает первый успешно выполнившийся промис.
// Если все промисы отклонены, возвращается AggregateError со списком ошибок.
function promiseAny(promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) {
            reject(new AggregateError([], "All promises were rejected"));
            return;
        }

        const errors = [];
        let rejectedCount = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(resolve) // Если хотя бы один успешен — сразу resolve
                .catch((error) => {
                    errors[index] = error;
                    rejectedCount++;
                    if (rejectedCount === promises.length) {
                        reject(new AggregateError(errors, "All promises were rejected"));
                    }
                });
        });
    });
}

promiseAny([
    new Promise((resolve) => setTimeout(() => resolve(1), 200)),
    new Promise((resolve) => setTimeout(() => resolve(2), 100)),
    Promise.resolve(3),
]).then(console.log); // 3 (самый быстрый успешный)

promiseAny([
    Promise.reject("Error 1"),
    new Promise((resolve) => setTimeout(() => resolve(2), 100)),
    Promise.reject("Error 3"),
]).then(console.log); // 2

promiseAny([
    Promise.reject("Error 1"),
    Promise.reject("Error 2"),
    Promise.reject("Error 3"),
])
    .catch((error) => {
        console.log(error instanceof AggregateError); // true
        console.log(error.errors); // ["Error 1", "Error 2", "Error 3"]
    });