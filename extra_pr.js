


function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
   

    // Success: Script loaded successfully
    script.onload = function() {
        console.log("Script loaded successfully:", src);
        // You can call functions from the loaded script here
    };

    // Error: Failed to load the script
    script.onerror = function() {
        console.error("Failed to load script:", src);
        // Handle the error (e.g., retry, alert user, etc.)
    };

    // Append the script to the document
    document.body.appendChild(script);
}

// Example usage: Load an external script
loadScript("https://code.jquery.com/jquery-3.4.1.slim.min.js"); 

