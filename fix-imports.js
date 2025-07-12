const fs = require('fs');
const path = require('path');

function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove version numbers from imports
    content = content.replace(/@[0-9]+\.[0-9]+\.[0-9]+/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixImportsInFile(filePath);
    }
  }
}

// Start processing from src/components/ui
processDirectory('./src/components/ui');
console.log('Finished fixing imports!');
