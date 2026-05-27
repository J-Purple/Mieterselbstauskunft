const app = firebase.initializeApp(window.firebaseConfig);
const db  = firebase.database();
const formRef = db.ref('forms/' + window.ROOM);

let suppressSync = false;

function collectValues() {
  const data = {};
  document.querySelectorAll('[data-field]').forEach(el => {
    const key = el.dataset.field;
    if (el.type === 'radio') {
      if (el.checked) data[key] = el.value;
    } else if (el.classList.contains('decl-dot') || el.classList.contains('chk-box')) {
      data[key] = el.classList.contains('checked') ? 1 : 0;
    } else {
      data[key] = el.value;
    }
  });
  return data;
}

function applyValues(data) {
  suppressSync = true;
  document.querySelectorAll('[data-field]').forEach(el => {
    const key = el.dataset.field;
    if (!(key in data)) return;
    if (el.type === 'radio') {
      el.checked = (el.value === data[key]);
    } else if (el.classList.contains('decl-dot') || el.classList.contains('chk-box')) {
      el.classList.toggle('checked', data[key] == 1 || data[key] === true);
    } else {
      el.value = data[key];
      if (el.tagName === 'TEXTAREA') {
        el.style.height = 'auto';
        el.style.height = Math.max(el.scrollHeight, 22) + 'px';
      }
    }
  });
  suppressSync = false;
}

let debounceTimer;
window.pushChange = function() {
  if (suppressSync) return;
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    formRef.set(collectValues());
  }, 300);
}

window.initSync = function() {
  formRef.on('value', (snapshot) => {
    if (snapshot.exists()) applyValues(snapshot.val());
  });
  formRef.get().then(snap => { if (snap.exists()) applyValues(snap.val()); });
}

window.clearData = function() {
  formRef.set({});
}
