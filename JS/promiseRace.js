// Promise.race() возвращает первый завершившийся промис (неважно, успешно или с ошибкой).
function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) {
            return; // Если массив пуст, промис никогда не завершится (как в спецификации)
        }

        promises.forEach((promise) => {
            Promise.resolve(promise)
                .then(resolve)  // Первый успех — resolve
                .catch(reject); // Первая ошибка — reject
        });
    });
}

promiseRace([
    new Promise((resolve) => setTimeout(() => resolve(1), 200)),
    new Promise((resolve) => setTimeout(() => resolve(2), 100)),
]).then(console.log); // 2 (первый завершившийся)

promiseRace([
    new Promise((_, reject) => setTimeout(() => reject("Error 1"), 50)),
    new Promise((resolve) => setTimeout(() => resolve(2), 100)),
]).catch(console.log); // "Error 1" (первый завершившийся)

promiseRace([
    42,
    new Promise((resolve) => setTimeout(() => resolve(2), 100)),
]).then(console.log); // 42 (не-промис завершается сразу)