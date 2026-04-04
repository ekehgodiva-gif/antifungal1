// ============================================================
//  STORAGE UTILITIES — Safe localStorage wrappers
//  Must be loaded BEFORE all other app scripts
// ============================================================

function safeGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn('localStorage.getItem failed for key:', key, e);
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn('localStorage.setItem failed for key:', key, e);
  }
}

function safeRemoveItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.warn('localStorage.removeItem failed for key:', key, e);
  }
}
