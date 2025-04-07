// напиши обёртку если пришла ошибка от fetch, чтобы она могла retry
// Если fetch не прошёл, тогда нужен быть ещё один retry, пока retriesCount не станет -1

async function fetchWithRetry(retriesCount, ...fetchArgs) {// 3
    try {
        const response = await fetch(...fetchArgs);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);

        }
        return response
    } catch (err) {
        if (retriesCount === 0) {
            console.log('Error')
            throw new Error(`Failed after all attempts: ${err.message}`);
        }
        return fetchWithRetry(retriesCount - 1, ...fetchArgs)
    }
}
