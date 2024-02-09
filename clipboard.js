document.getElementById("discord-button").addEventListener("click", function() {
    var textarea = document.createElement("textarea");
    textarea.textContent = " Dq2ton#9701";
    
    document.body.appendChild(textarea);
    
    textarea.select();
    
    try {
        if (!navigator.clipboard) {
            throw new Error("Clipboard API isn't supported.");
        }
        navigator.clipboard.writeText(textarea.textContent);
        alert("Discord tag copied to clipboard!");
    } catch (error) {
        console.error("Failed to copy text: ", error);
    } finally {
        document.body.removeChild(textarea);
    }
});
