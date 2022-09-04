const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

//variable to hold the prompt event for later use by the install button
let deferredPrompt;

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    //trigger the saved prompt
    deferredPrompt.prompt();
    deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //hide install button
    butInstall.style.display= 'none';
    //clear the saved prompt
    deferredPrompt = null;
    console.log('installed', 'appinstalled', event);
});
