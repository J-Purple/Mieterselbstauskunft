// Textarea auto-grow
function autoGrowTextarea(el) {
  if (!el) return;
  el.style.height = 'auto';
  el.style.height = Math.max(el.scrollHeight, 24) + 'px';
  const parent = el.closest('.field-line, .follow-up-line, .sig-line');
  if (parent) parent.style.minHeight = (el.scrollHeight + 4) + 'px';
}

function autoGrowAllTextareas() {
  document.querySelectorAll('textarea[data-field]').forEach(autoGrowTextarea);
}

// Global switchTab for HTML inline handlers
window.switchTab = function (id, btn) {
  document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  var panel = document.getElementById(id);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
};

window.addEventListener('formsLoaded', () => {
  // Input wiring
  document.querySelectorAll('[data-field]').forEach(el => {
    const evt = (el.type === 'radio' || el.classList.contains('decl-dot') || el.classList.contains('chk-box')) ? 'change' : 'input';
    el.addEventListener(evt, window.pushChange);
    // Decl-dot / chk-box click - wire exactly once
    if (el.classList.contains('decl-dot') || el.classList.contains('chk-box')) {
      el.addEventListener('click', (e) => {
        // Only toggle if it's the dot itself, but here the whole container might be clickable or just the dot
        el.classList.toggle('checked');
        window.pushChange();
      });
    }

    if (el.tagName === 'TEXTAREA') {
      ['input', 'change'].forEach(evt => el.addEventListener(evt, () => autoGrowTextarea(el)));
    }
  });

  // Auto-grow init
  setTimeout(autoGrowAllTextareas, 150);
  setInterval(autoGrowAllTextareas, 1200);

  // Share link button
  const copyLinkBtn = document.getElementById('copyLink');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      const url = location.href;
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(() => {
          copyLinkBtn.textContent = '✅ Copied!';
          setTimeout(() => copyLinkBtn.textContent = '🔗 Share Link', 2000);
        });
      } else {
        const ta = document.createElement('textarea');
        ta.value = url;
        ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
        document.body.appendChild(ta);
        ta.focus(); ta.select();
        try {
          document.execCommand('copy');
          copyLinkBtn.textContent = '✅ Copied!';
        } catch(e) {
          prompt('Copy this link:', url);
        }
        document.body.removeChild(ta);
        setTimeout(() => copyLinkBtn.textContent = '🔗 Share Link', 2000);
      }
    });
  }

  // Clear button
  const btnClear = document.getElementById('btnClear');
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (!confirm('Clear all entered values for everyone in this session?')) return;
      window.clearData();
      document.querySelectorAll('[data-field]').forEach(el => {
        if (el.type === 'radio') {
          el.checked = el.value === 'nein';
        } else if (el.classList.contains('decl-dot') || el.classList.contains('chk-box')) {
          el.classList.remove('checked');
        } else {
          el.value = '';
        }
      });
    });
  }

  // Show room ID and make the button clickable
  const roomIdEl = document.getElementById('roomId');
  if (roomIdEl) {
    roomIdEl.textContent = 'Room: ' + window.ROOM;
  }
  
  const btnChangeRoom = document.getElementById('btnChangeRoom');
  if (btnChangeRoom) {
    btnChangeRoom.addEventListener('click', () => {
      const newRoom = prompt('Enter room name to join:', window.ROOM);
      if (newRoom && newRoom.trim() !== '' && newRoom.trim() !== window.ROOM) {
        window.location.hash = newRoom.trim();
        window.location.reload();
      }
    });
  }

  window.initSync();
});
