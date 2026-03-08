// PDFReader Chrome Extension - Background Service Worker

const PDFREADER_URL = 'https://pdf-reader.com/en';

// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    // Create main context menu item
    chrome.contextMenus.create({
        id: 'pdfcraft-open',
        title: 'Open with PDFReader',
        contexts: ['link', 'page']
    });

    // Create submenu for specific tools
    chrome.contextMenus.create({
        id: 'pdfcraft-merge',
        parentId: 'pdfcraft-open',
        title: 'Merge PDFs',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'pdfcraft-compress',
        parentId: 'pdfcraft-open',
        title: 'Compress PDF',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'pdfcraft-convert',
        parentId: 'pdfcraft-open',
        title: 'Convert to PDF',
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'pdfcraft-all-tools',
        parentId: 'pdfcraft-open',
        title: 'All Tools →',
        contexts: ['link', 'page']
    });

    console.log('PDFReader context menus created');
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    let url = PDFREADER_URL;

    switch (info.menuItemId) {
        case 'pdfcraft-merge':
            url = `${PDFREADER_URL}/tools/merge-pdf`;
            break;
        case 'pdfcraft-compress':
            url = `${PDFREADER_URL}/tools/compress-pdf`;
            break;
        case 'pdfcraft-convert':
            url = `${PDFREADER_URL}/tools/jpg-to-pdf`;
            break;
        case 'pdfcraft-all-tools':
        case 'pdfcraft-open':
            url = PDFREADER_URL;
            break;
        default:
            url = PDFREADER_URL;
    }

    // Open PDFReader in a new tab
    chrome.tabs.create({ url: url });
});

// Log when service worker starts
console.log('PDFReader background service worker started');
