const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Create menus directory
const menusDir = path.join(distDir, 'menus');
if (!fs.existsSync(menusDir)) {
    fs.mkdirSync(menusDir);
}

// Read and modify index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace the localStorage code with GitHub-based storage
indexHtml = indexHtml.replace(
    /function generateQR\(\) {[\s\S]*?}/,
    `function generateQR() {
        const restaurantName = document.getElementById('restaurantName').value;
        const restaurantDescription = document.getElementById('restaurantDescription').value;
        
        if (!restaurantName || menuItems.length === 0) {
            alert('Please add restaurant name and at least one menu item');
            return;
        }
        
        const menuId = Date.now().toString(36) + Math.random().toString(36).substr(2);
        const menuData = {
            restaurantName,
            restaurantDescription,
            menuItems
        };
        
        // The menu will be saved as JSON during build
        const shareUrl = \`\${baseUrl}/menu.html?id=\${menuId}\`;
        
        // Generate QR code
        document.getElementById('qrSection').style.display = 'block';
        document.getElementById('qrcode').innerHTML = '';
        new QRCode(document.getElementById('qrcode'), {
            text: shareUrl,
            width: 256,
            height: 256
        });
        
        document.getElementById('shareLink').innerText = shareUrl;
    }`
);

// Save modified index.html
fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);

// Copy menu.html to dist
fs.copyFileSync('menu.html', path.join(distDir, 'menu.html'));

// Create a sample menu
const sampleMenu = {
    restaurantName: "Sample Restaurant",
    restaurantDescription: "A sample restaurant menu",
    menuItems: [
        {
            name: "Sample Item",
            price: "9.99",
            description: "A delicious sample item"
        }
    ]
};

// Save sample menu
fs.writeFileSync(
    path.join(menusDir, 'sample.json'),
    JSON.stringify(sampleMenu, null, 2)
);
