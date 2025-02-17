import jwt from "jsonwebtoken";

export const checkAuth = (request, response, next) => {
  if (request.headers.authorization) {
    const token = request.headers.authorization.split(" ")[1];
    jwt.verify(token, "123456", (error, data) => {
      console.log(error);
      if (error) {
        if (error.name == "TokenExpiredError") {
          return response.json({ message: "Token het han!" });
        } else if (error.name == "JsonWebToken") {
          return response.json({ message: "Token ko hop le!" });
        }
      }
      next();
    });
  }
};
