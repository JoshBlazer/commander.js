// buggies-smoke.js - first live review smoke test for the buggies reviewer.
// A tiny self-contained helper; the point is to exercise the full
// webhook -> review -> check-run path on a Node repo.
module.exports = function addSmoke(a, b) {
  return a + b;
};
