const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});



// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    console.log(`User response to the install prompt: ${outcome}`);

    butInstall.style.display = 'none';
    
    // Reset the deferredPrompt variable
    deferredPrompt = null;
  }});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {window.deferredPrompt = null; alert('The app was successfully installed!');
});
