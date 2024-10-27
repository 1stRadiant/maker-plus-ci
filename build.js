// File: build.js
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Create menus directory for storing individual menu JSON files
const menusDir = path.join(distDir, 'menus');
if (!fs.existsSync(menusDir)) {
    fs.mkdirSync(menusDir);
}

// Copy and modify index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(
    'const baseUrl = window.location.origin;',
    `const baseUrl = 'https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io/${process.env.GITHUB_REPOSITORY.split('/')[1]}';`
);

// Modify the generateQR function to save menu data to a JSON file
indexHtml = indexHtml.replace(
    /function generateQR\(\) {[\s\S]*?}/,
    `function generateQR() {
        const restaurantName = document.getElementById('restaurantName').value;
        const restaurantDescription = document.getElementById('restaurantDescription').value;
        
        if (!restaurantName || menuItems.length === 0) {
            alert('Please add restaurant name and at least one menu item');
            return;
        }
        
        const menuData = {
            restaurantName,
            restaurantDescription,
            menuItems
        };
        
        const menuId = uuidv4();
        const shareUrl = \`\${baseUrl}/menu.html?id=\${menuId}\`;
        
        // In production, this would make an API call to save the menu
        // For GitHub Pages, we'll save it during the build process
        localStorage.setItem('currentMenu', JSON.stringify({
            id: menuId,
            data: menuData
        }));
        
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

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);
