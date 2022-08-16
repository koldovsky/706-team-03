const open = document.getElementById('open');
const integrations_modal_container = document.getElementById('integrations_modalcontainer');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    integrations_modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    integrations_modal_container.classList.remove('show');
});