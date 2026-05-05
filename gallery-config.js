// ═══════════════════════════════════════════════════════
// OWEN WILLIAMS — CLIENT GALLERY CONFIG
// ═══════════════════════════════════════════════════════
// To add a new client:
// 1. Create a folder: images/gallery/CLIENTID/
// 2. Drop their photos in (JPG or WebP, any size)
// 3. Copy one of the client blocks below and fill in their details
// 4. List every photo filename in the "photos" array
// 5. Push to GitHub — done.
// ═══════════════════════════════════════════════════════

var GALLERY_CLIENTS = {

  // ── DEMO CLIENT (for testing) ──
  'demo': {
    password:   'gallery2026',
    name:       'Demo Client',
    event:      'Sample Event · May 2026',
    date:       '1 May 2026',
    info:       'Your edited photos are ready to view. Click any image to view full size. Use the download button below to access full-resolution files.',
    folder:     'images/gallery/demo/',
    photos:     [],                          // e.g. ['001.webp','002.webp','003.webp']
    driveLink:  '',                          // Google Drive folder URL (leave empty to hide button)
    photoCount: 0,                           // Total photos delivered (shown in header)
  },

  // ── ADD NEW CLIENTS BELOW ──
  // 'sarahwedding': {
  //   password:   'spring2026',
  //   name:       'Sarah & James',
  //   event:      'Wedding · 12 April 2026',
  //   date:       '12 April 2026',
  //   info:       'Congratulations again! Your gallery is ready to view. Full-res files are available via the download link below.',
  //   folder:     'images/gallery/sarahwedding/',
  //   photos:     ['001.webp','002.webp','003.webp'],
  //   driveLink:  'https://drive.google.com/drive/folders/YOUR_FOLDER_ID',
  //   photoCount: 312,
  // },

};
