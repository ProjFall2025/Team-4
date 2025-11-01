// middleware/role.js
const role = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // read role from req.user (loaded by auth middleware)
    const userRole = req.user.role || 'user';

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    }

    next();
  };
};

module.exports = role;
