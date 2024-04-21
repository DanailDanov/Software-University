function extractText() {

    const extractItems = document.getElementById('items');
    const textArea = document.getElementById('result');
    textArea.textContent = extractItems.textContent;
}