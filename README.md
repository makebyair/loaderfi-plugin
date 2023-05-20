# LoaderFi Plugin

Kevin White, Make By Air™ Research 
<br />Contact: [k.white@makebyair.com](mailto:k.white@makebyair.com)
<br />Department: [research@makebyair.com](mailto:research@makebyair.com)

**Open Source Licensing (MIT):**

- LoaderFi Plugin for ChatGPT
- LoaderFi Google Chrome Extension

LoaderFi Plugin is a powerful file uploader designed specifically for ChatGPT, making it easy to share files seamlessly within the chat interface. This open-source plugin enhances productivity by simplifying the process of uploading various file types, such as code snippets, documents, and data files. With LoaderFi Plugin, you can streamline your file sharing experience in ChatGPT.

## Features

- Simple and stylish interface for easy integration with ChatGPT.
- Progress tracking with a dynamic progress bar.
- Wide file format compatibility, supporting popular file types.
- Seamless integration via the LoaderFi Google Chrome Extension.

## Getting Started

To use LoaderFi Plugin, follow these steps:

1. Install the LoaderFi Google Chrome Extension from the Chrome Web Store.
2. Include the LoaderFi Plugin code in your ChatGPT interface.
3. Customize the plugin's appearance and behavior according to your preferences.
4. Start using LoaderFi to upload files effortlessly within ChatGPT.

## Usage

To upload files using LoaderFi Plugin, simply click the "Submit File" button and select the desired file from your local machine. The progress bar will update dynamically to reflect the upload progress. Once the upload is complete, the file will be available for seamless sharing within ChatGPT.

## Installation

You can find the LoaderFi Plugin code and installation instructions on the [LoaderFi Plugin GitHub repository](https://github.com/makebyair/loaderfi-plugin).

## Contributions

Contributions to the LoaderFi Plugin project are welcome! If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request on the [LoaderFi Plugin GitHub repository](https://github.com/makebyair/loaderfi-plugin).

## License

LoaderFi Plugin is released under the MIT License.

Contact
For any inquiries or questions, please reach out to Kevin White at [k.white@makebyair.com](mailto:k.white@makebyair.com). For research-related matters, contact the Make By Air Research department at [research@makebyair.com](mailto:research@makebyair.com).

Let LoaderFi Plugin revolutionize your file sharing experience in ChatGPT. Try it out today and enhance your productivity!

# LoaderFi Plugin

Introducing LoaderFi: Simplify File Uploads for ChatGPT

Are you tired of the tedious process of sharing files during your ChatGPT conversations? Look no further! LoaderFi is here to revolutionize your file sharing experience within the ChatGPT interface. With its user-friendly features and a convenient Google Chrome Extension, LoaderFi takes file sharing to a whole new level.

## The Power of LoaderFi

LoaderFi is a lightweight and intuitive uploader designed specifically for ChatGPT, providing a seamless and efficient way to share files. Let's explore the remarkable features that make LoaderFi the go-to tool for file uploads.

### Simple and Stylish Interface

LoaderFi offers an elegant and visually pleasing interface that seamlessly integrates with ChatGPT. The submission button is thoughtfully designed with a refreshing green background, contrasting white text, and carefully applied padding and margins. Say goodbye to clunky file uploads and embrace a sleek and user-friendly experience.

### Effortless Progress Tracking

With LoaderFi, monitoring the progress of your file uploads has never been easier. The progress bar, adorned with a soothing blue color, dynamically updates in real-time as your file is uploaded. Each chunk of the file is transmitted and reflected in the progress bar, providing a clear visual representation of the upload's advancement. Sit back, relax, and let LoaderFi handle the heavy lifting for you.

### Wide File Format Compatibility

LoaderFi supports an extensive range of file formats, catering to various needs. Whether you want to share code snippets, documents, or data files, LoaderFi has got you covered. Accepted file types include text files (.txt), JavaScript files (.js), Python files (.py), web files (.html and .css), JSON files (.json), and even comma-separated value files (.csv). LoaderFi ensures compatibility with the file types you use most.

### Seamless Integration via Chrome Extension

LoaderFi goes the extra mile to provide a seamless experience. Its dedicated Google Chrome Extension allows you to access LoaderFi's functionalities with a single click. Say goodbye to juggling multiple tabs or navigating complex procedures—simply install the extension, and you're ready to go.

## How It Works: The Code Behind the Magic

To give you a glimpse into how LoaderFi works, let's take a look at the code:

```javascript
const submitFileButton = document.createElement('button');
submitFileButton.style.backgroundColor = 'green';
submitFileButton.style.color = 'white';
submitFileButton.style.padding = '5px';
submitFileButton.style.border = 'none';
submitFileButton.style.borderRadius = '5px';
submitFileButton.style.margin = '5px';
submitFileButton.textContent = 'Submit File';
```
The code snippet above creates a button element with a visually appealing design. It features a green background, white text, and carefully applied padding and margins. This button will serve as the trigger to upload a file.

```javascript
const progressBarContainer = document.createElement('div');
progressBarContainer.style.width = '99%';
progressBarContainer.style.height = '5px';
progressBarContainer.style.backgroundColor = 'grey';
// Rest of the code...
```
Next, we create a progress bar using two div elements. The progressBarContainer represents the container for the progress bar, styled with a grey background. The progressBar itself is initially empty, representing 0% progress, and has a blue background. This progress bar will dynamically update as the file is being uploaded.

```javascript
const targetElement = document.querySelector('div.relative.flex.h-full.max-w-full.flex-1.overflow-hidden > div > main > div.absolute.bottom-0 > form > div > div:nth-child(1)');
targetElement.insertAdjacentElement('beforebegin', submitFileButton);
targetElement.insertAdjacentElement('beforebegin', progressBarContainer);
// Rest of the code...
```
In this section, we identify the target element within the ChatGPT interface where we want to insert the submit button and the progress bar. Using a query selector, we locate the appropriate DOM element and use the insertAdjacentElement method to add the submit button and progress bar just before the target element.

```javascript
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
```
Once the submit button is clicked, an input element of type 'file' is created. This element allows the user to select a file from their local machine. The accept attribute specifies the allowed file types, including various text-based file extensions. The file input element is hidden (display = 'none'), appended to the document body, and programmatically clicked to trigger the file selection dialog.

When a file is selected, the change event listener is triggered. The code reads the selected file using the FileReader object, reads the file's content as text, and divides it into smaller chunks. Each chunk is submitted as part of the conversation using the submitConversation function. The progress bar's width is updated dynamically to reflect the progress made.

```javascript
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
```
The submitConversation function handles the submission of each chunk of the file as part of the conversation. It retrieves the textarea element from the ChatGPT interface using a query selector. It then creates a keyboard event to simulate pressing the Enter key, populates the textarea with the part number, filename, and chunk of text, and dispatches the Enter key event to simulate sending the message.

The function also includes a loop that waits for ChatGPT to be ready for the next input. It periodically checks for the absence of a loading indicator, indicating that ChatGPT is ready to receive the next message. Once ChatGPT is ready, the loop exits.

With the combination of these code snippets, LoaderFi provides a simple and efficient way to upload files within the ChatGPT interface. The submit button, progress bar, and file upload functionality work seamlessly together, enhancing the file sharing experience for ChatGPT users.

