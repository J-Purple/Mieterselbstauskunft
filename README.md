# Mieterselbstauskunft Modularization

This project contains the modularized version of the Mieterselbstauskunft app.

## File Structure

```text
mieterselbstauskunft/
├── index.html
├── css/
│   ├── base.css
│   ├── toolbar.css
│   ├── page.css
│   ├── tabs.css
│   ├── form-a.css
│   ├── form-b.css
│   ├── responsive.css
│   └── print.css
├── js/
│   ├── firebase-config.js
│   ├── room.js
│   ├── sync.js
│   ├── ui.js
│   └── setup-check.js
├── forms/
│   ├── form-a.html
│   └── form-b.html
└── README.md
```

## Known Fixes Implemented
- Checkbox logic accepts `1` and `true`.
- The `index.html` file dynamically fetches the forms, and listeners are attached post-load.
