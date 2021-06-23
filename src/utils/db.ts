import mongoose from "mongoose";

const dbUrl = "mongodb://localhost:27017/paynas-logs";

export const connect = (url = dbUrl, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};
