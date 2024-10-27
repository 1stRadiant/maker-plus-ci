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

// Create menu.html
const menuHtml = `
<!DOCTYPE html>
<html>
<head>
    <title>Restaurant Menu</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }
        
        .menu-container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .menu-item {
            margin: 20px 0;
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        
        .item-price {
            float: right;
            font-weight: bold;
        }
        
        .item-description {
            color: #666;
            font-size: 0.9em;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <div class="menu-container">
        <h1 id="restaurantName"></h1>
        <p id="restaurantDescription"></p>
        <div id="menuItems"></div>
    </div>
    
    <script>
        async function loadMenu() {
            const urlParams = new URLSearchParams(window.location.search);
            const menuId = urlParams.get('id');
            
            if (!menuId) {
                document.body.innerHTML = '<h1>Menu not found</h1>';
                return;
            }
            
            try {
                const response = await fetch(\`menus/\${menuId}.json\`);
                if (!response.ok) {
                    throw new Error('Menu not found');
                }
                const menuData = await response.json();
                
                document.getElementById('restaurantName').textContent = menuData.restaurantName;
                document.getElementById('restaurantDescription').textContent = menuData.restaurantDescription;
                
                const menuItemsHtml = menuData.menuItems.map(item => \`
                    <div class="menu-item">
                        <div class="item-price">$\${item.price}</div>
                        <h3>\${item.name}</h3>
                        \${item.description ? \`<p class="item-description">\${item.description}</p>\` : ''}
                    </div>
                \`).join('');
                
                document.getElementById('menuItems').innerHTML = menuItemsHtml;
            } catch (error) {
                document.body.innerHTML = '<h1>Error loading menu</h1>';
            }
        }
        
        loadMenu();
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'menu.html'), menuHtml);
