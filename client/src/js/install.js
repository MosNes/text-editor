const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

//variable to hold the prompt event for later use by the install button
let deferredPrompt;

//hide install button by default
butInstall.style.display= 'none';

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //prevent install dialogue from appearing
    event.preventDefault();

    //save the prompt to deferredPrompt
    deferredPrompt = event;

    //show the install button if the beforeinstallprompt event occurs
    butInstall.style.display = 'block';
    
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    //trigger the saved prompt
    deferredPrompt.prompt();
    deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clear the saved prompt
    deferredPrompt = null;
    //hide the install button again
    butInstall.style.display= 'none';
    console.log('installed', 'appinstalled', event);
});
