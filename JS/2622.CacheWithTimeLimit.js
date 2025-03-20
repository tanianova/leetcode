// https://leetcode.com/problems/cache-with-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Напишите класс, позволяющий получать и задавать пары ключ-значение, однако   с каждым ключом будет связано время до истечения срока действия .
// Класс имеет три публичных метода:
// set(key, value, duration): принимает целое число  key, целое число  value и a duration в миллисекундах. После того, как  duration истечет , ключ должен стать недоступным. Метод должен возвращать значение,  true если такой же неистекший ключ уже существует, и false в противном случае. И значение, и длительность должны быть перезаписаны, если ключ уже существует.
// get(key): если существует неистекший ключ, он должен вернуть связанное значение. В противном случае он должен вернуть  -1.
// count(): возвращает количество неистекших ключей.

const TimeLimitedCache = function () {
    this.cache = {}
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    if (this.cache?.[key]?.timer) {
        clearTimeout(this.cache[key].timer)
        this.cache[key].value = value
        this.cache[key].timer = setTimeout(() => {
            this.remove(key)
        }, duration)
        return true
    } else {
        this.cache[key] = {
            value,
            timer: setTimeout(() => {
                this.remove(key)
            }, duration)
        }
        return false
    }
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.cache?.[key]?.timer) {
        return this.cache[key].value
    } else {
        return -1
    }

};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let count = 0;
    for (const key in this.cache) {
        if (this.cache[key].timer) {
            count++
        }
    }
    return count
};

TimeLimitedCache.prototype.remove = function (key) {
    delete this.cache[key];
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */