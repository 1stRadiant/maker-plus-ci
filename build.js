// File: build.js
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { Octokit } = require('@octokit/rest');

// Initialize Octokit with GitHub token
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

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

// Modify index.html for GitHub storage
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace the baseUrl configuration
indexHtml = indexHtml.replace(
    'const baseUrl = window.location.origin;',
    `const baseUrl = 'https://${process.env.REPOSITORY_OWNER}.github.io/${process.env.REPOSITORY_NAME}';`
);

// Replace the generateQR function with GitHub storage version
indexHtml = indexHtml.replace(
    /function generateQR\(\) {[\s\S]*?}/,
    `async function generateQR() {
        try {
            const restaurantName = document.getElementById('restaurantName').value;
            const restaurantDescription = document.getElementById('restaurantDescription').value;
            
            if (!restaurantName || menuItems.length === 0) {
                alert('Please add restaurant name and at least one menu item');
                return;
            }
            
            const menuId = uuidv4();
            const menuData = {
                restaurantName,
                restaurantDescription,
                menuItems,
                createdAt: new Date().toISOString()
            };
            
            // Save menu data to file
            const menuFilePath = \`menus/\${menuId}.json\`;
            const response = await fetch('/api/save-menu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    menuId,
                    menuData
                })
            });

            if (!response.ok) {
                throw new Error('Failed to save menu');
            }
            
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
        } catch (error) {
            console.error('Error generating menu:', error);
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('errorMessage').innerText = 'Error generating menu: ' + error.message;
        }
    }`
);

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);

// Create API endpoints for menu operations
const apiDir = path.join(distDir, 'api');
if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir);
}

// Function to save menu to GitHub
async function saveMenuToGitHub(menuId, menuData) {
    try {
        const content = Buffer.from(JSON.stringify(menuData, null, 2)).toString('base64');
        
        await octokit.repos.createOrUpdateFileContents({
            owner: process.env.REPOSITORY_OWNER,
            repo: process.env.REPOSITORY_NAME,
            path: `menus/${menuId}.json`,
            message: `Add menu ${menuId}`,
            content,
            branch: 'gh-pages'
        });
        
        return true;
    } catch (error) {
        console.error('Error saving menu to GitHub:', error);
        return false;
    }
}

// Modified menu.html
const menuHtml = `
<!DOCTYPE html>
<html>
<head>
    <title>Restaurant Menu</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/menu.css">
</head>
<body>
    <div class="menu-container">
        <div id="content">
            <div class="loading">Loading menu...</div>
        </div>
    </div>

    <script>
        async function loadMenu() {
            const urlParams = new URLSearchParams(window.location.search);
            const menuId = urlParams.get('id');
            
            if (!menuId) {
                displayError('No menu ID provided');
                return;
            }

            try {
                const response = await fetch(\`menus/\${menuId}.json\`);
                if (!response.ok) {
                    throw new Error('Menu not found');
                }
                
                const menuData = await response.json();
                displayMenu(menuData);
            } catch (error) {
                displayError('Error loading menu: ' + error.message);
                console.error('Error:', error);
            }
        }

        function displayMenu(menuData) {
            const content = document.getElementById('content');
            
            let html = \`
                <h1 class="restaurant-name">\${menuData.restaurantName}</h1>
                \${menuData.restaurantDescription ? \`<p class="restaurant-description">\${menuData.restaurantDescription}</p>\` : ''}
            \`;

            html += menuData.menuItems.map(item => \`
                <div class="menu-item">
                    <div class="item-header">
                        <h3 class="item-name">\${item.name}</h3>
                        <span class="item-price">$\${item.price}</span>
                    </div>
                    \${item.description ? \`<p class="item-description">\${item.description}</p>\` : ''}
                </div>
            \`).join('');

            content.innerHTML = html;
        }

        function displayError(message) {
            document.getElementById('content').innerHTML = \`
                <div class="error-message">\${message}</div>
            \`;
        }

        window.addEventListener('load', loadMenu);
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'menu.html'), menuHtml);

// Write the new menu data to the menus directory during build
const demoMenu = {
    restaurantName: "Demo Restaurant",
    restaurantDescription: "Welcome to our demo restaurant",
    menuItems: [
        {
            name: "Demo Item",
            price: "9.99",
            description: "A delicious demo item"
        }
    ]
};

fs.writeFileSync(
    path.join(menusDir, 'demo.json'),
    JSON.stringify(demoMenu, null, 2)
);
