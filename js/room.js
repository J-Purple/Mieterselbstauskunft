window.getRoomId = function() {
  let id = location.hash.replace('#', '').trim();
  if (!id) {
    id = Math.random().toString(36).slice(2, 9);
    location.hash = id;
  }
  return id;
};

window.ROOM = window.getRoomId();
