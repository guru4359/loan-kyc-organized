module.exports.requireSuperadmin = function (req, res, next) {
  // You should set req.user in your auth middleware after JWT verification
  if (req.user && req.user.role === 'superadmin') {
    return next();
  }
  res.status(403).json({ error: 'Superadmin only' });
};