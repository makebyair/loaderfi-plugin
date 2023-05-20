// content.js from loaderfi-plugin.js 

// To use: 
// (1) Install the LoaderFi Google Chrome Extension
// OR
// (2) Open ChatGpt, then copy and paste this code into the console area of: "Page Inspect" > Console.
// Conversely you can access the console by right-clicking the page or pressing f12 [PC] or, fn + f12 [Mac].

// The code for the Chrome Extension:

const submitFileButton = document.createElement('button');
submitFileButton.style.backgroundColor = 'green';
submitFileButton.style.color = 'white';
submitFileButton.style.padding = '5px';
submitFileButton.style.border = 'none';
submitFileButton.style.borderRadius = '5px';
submitFileButton.style.margin = '5px';
submitFileButton.textContent = 'Submit File';

const progressBarContainer = document.createElement('div');
progressBarContainer.style.width = '99%';
progressBarContainer.style.height = '5px';
progressBarContainer.style.backgroundColor = 'grey';

const progressBar = document.createElement('div');
progressBar.style.width = '0%';
progressBar.style.height = '100%';
progressBar.style.backgroundColor = 'blue';

progressBarContainer.appendChild(progressBar);

const targetElement = document.querySelector('div.relative.flex.h-full.max-w-full.flex-1.overflow-hidden > div > main > div.absolute.bottom-0 > form > div > div:nth-child(1)');
targetElement.insertAdjacentElement('beforebegin', submitFileButton);
targetElement.insertAdjacentElement('beforebegin', progressBarContainer);

submitFileButton.addEventListener('click', async () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt,.js,.py,.html,.css,.json,.csv';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
    fileInput.click();

    fileInput.addEventListener('change', async () => {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        
        reader.onload = async () => {
            const text = reader.result;
            const chunkSize = 15000;
            const numChunks = Math.ceil(text.length / chunkSize);
            for(let i = 0; i < numChunks; i++) {
                const chunk = text.slice(i * chunkSize, (i + 1) * chunkSize);
                await submitConversation(chunk, i + 1, file.name);

                progressBar.style.width = `${((i + 1) / numChunks) * 100}%`;
            }
            progressBar.style.backgroundColor = 'green';
        }
    });
});

async function submitConversation(text, part, filename) {
    const textarea = document.querySelector("textarea[tabindex='0']");
    const enterKeyEvent = new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      keyCode: 13,
    });
    textarea.value = `Part ${part} of ${filename}: \n\n ${text}`;
    textarea.dispatchEvent(enterKeyEvent);

    let chatgptReady = false;
    while (!chatgptReady) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        chatgptReady = !document.querySelector(".text-2xl > span:not(.invisible)");
    }
}
