const PRINT_BTN_SELECTOR = '#print';

setTimeout(() => {
    const printBtn = document.querySelector(PRINT_BTN_SELECTOR);
    printBtn?.click();
}, 1000);