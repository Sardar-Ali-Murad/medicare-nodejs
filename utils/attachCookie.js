const attachCookie = ({ res, token }) => {
  // const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    // expires: new Date(Date.now() + oneDay),
    // secure: process.env.NODE_ENV === 'production',
    // httpOnly: true,
    path: "/",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
  });
};

export default attachCookie;
