import * as $ from 'jquery';

function createAnalics() {
    let counter = 0;
    let destroyed = false;


    console.log('test')
    const listener = () => counter++;

    $(document).on('click', listener);

    return {
        destroy() {
            $(document).off('click', listener);
            destroyed = true;
        },
        getClicks() {
            if (destroyed) {
                return 'Analytics is destroyed. Total clicks = ' + counter;
            }
            return counter;
        }
    }
}

window.analytics = createAnalics();