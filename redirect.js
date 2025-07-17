const configs = [
    // Replace with your own Botpress URLs
    "https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/17/00/20250717000856-7WQCP5FN.json",
    "https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/13/21/20250713211356-BOV2BKB3.json",
  ];
  
  const baseDate = new Date("2025-07-13T00:00:00Z"); // Update as needed
  const today = new Date();
  const diffDays = Math.floor((today - baseDate) / (1000 * 60 * 60 * 24));
  const index = Math.floor(diffDays / 2) % configs.length;
  
  window.location.href = configs[index];
  