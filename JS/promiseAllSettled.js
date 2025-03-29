// Напишите функцию promiseAllSettled(promises), которая принимает массив промисов и возвращает новый промис.
// Этот промис должен разрешаться, когда все переданные промисы завершатся (успешно или с ошибкой).
// Результатом должен быть массив объектов с полями status ("fulfilled" или "rejected") и value (если успешно) или reason (если ошибка).
function promiseAllSettled(promises) {
    return new Promise((resolve) => {
        const results = [];
        let count = 0;

        if (promises.length === 0) {
            resolve(results);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = { status: 'fulfilled', value };
                })
                .catch((reason) => {
                    results[index] = { status: 'rejected', reason };
                })
                .finally(() => {
                    count++;
                    if (count === promises.length) {
                        resolve(results);
                    }
                });
        });
    });
}

promiseAllSettled([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(result => {
    console.log(result);
    // [
    //   { status: 'fulfilled', value: 1 },
    //   { status: 'fulfilled', value: 2 },
    //   { status: 'fulfilled', value: 3 }
    // ]
});

promiseAllSettled([
    Promise.resolve(1),
    Promise.reject("Error 404"),
    Promise.resolve(3)
]).then(result => {
    console.log(result);
    // [
    //   { status: 'fulfilled', value: 1 },
    //   { status: 'rejected', reason: 'Error 404' },
    //   { status: 'fulfilled', value: 3 }
    // ]
});