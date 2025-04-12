// https://leetcode.com/problems/event-emitter/?envType=study-plan-v2&envId=30-days-of-javascript
// Спроектируйте EventEmitterкласс. Этот интерфейс похож (но с некоторыми отличиями) на тот, что есть в Node.js или интерфейс Event Target DOM. Он EventEmitter должен позволять подписываться на события и отправлять их.
// Ваш EventEmitterкласс должен иметь следующие два метода:
// subscribe - Этот метод принимает два аргумента: имя события в виде строки и функцию обратного вызова.
// Эта функция обратного вызова будет позже вызвана при отправке события.
// Событие должно иметь возможность иметь несколько слушателей для одного и того же события. При отправке события с
// несколькими обратными вызовами каждый должен вызываться в том порядке, в котором они были подписаны. Должен быть возвращен массив результатов. Можно предположить, что ни один из переданных обратных вызовов не  subscribe является ссылочно идентичным.
// Метод subscribe также должен возвращать объект с unsubscribe методом, который позволяет пользователю отписаться. При его вызове обратный вызов должен быть удален из списка подписок и  undefined должен быть возвращен.
// emit - Этот метод принимает два аргумента: имя события в виде строки и необязательный массив аргументов, которые будут переданы в обратный вызов(ы). Если на данное событие не подписаны обратные вызовы, вернуть пустой массив. В противном случае вернуть массив результатов всех вызовов обратных вызовов в порядке их подписки.
//

class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(event, cb) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }

        const listeners = this.events.get(event);
        listeners.push(cb);

        return {
            unsubscribe: () => {
                const index = listeners.indexOf(cb);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }

    emit(event, args = []) {
        if (!this.events.has(event)) {
            return [];
        }

        const listeners = this.events.get(event);
        const results = [];

        for (const listener of listeners) {
            results.push(listener(...args));
        }

        return results;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

