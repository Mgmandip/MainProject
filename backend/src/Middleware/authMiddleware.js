// // const jwt = require('jsonwebtoken');
// // const dotenv = require('dotenv');

// // dotenv.config();

// // module.exports = function (req, res, next) {
// //   const token = req.header('x-auth-token');

// //   if (!token) {
// //     return res.status(401).json({ msg: 'No token, authorization denied' });
// //   }

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = decoded.user;
// //     next();
// //   } catch (err) {
// //     res.status(401).json({ msg: 'Token is not valid' });
// //   }
// // };

// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config();

// const authMiddleware = (req, res, next) => {
//   const token = req.header('Authorization').replace('Bearer ', '');

//   if (!token) {
//     return res.status(401).json({ msg: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(decoded)
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };


// module.exports = authMiddleware;


// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config();

// const authMiddleware = (req, res, next) => {
//   const token = req.header('Authorization').replace('Bearer ', '');

//   if (!token) {
//     return res.status(401).json({ msg: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(decoded.user)
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };

// module.exports = authMiddleware;

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function (req, res, next) {
  const authHeader = req.header('Authorization');
  
  if (!authHeader) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded user from token:', decoded.user); // Log decoded user for debugging
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('JWT verification error:', err); // Log token verification error
    res.status(401).json({ msg: 'Token is not valid' });
  }
};