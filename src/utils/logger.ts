const winston = require("winston");
require("winston-daily-rotate-file");

const { combine, timestamp, json } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: "./logs/ats-%DATE%.log",
  datePattern: "YYYY-MM-DD-HH",
  zippedArchive: false,
  maxSize: "20m",
  maxFiles: "30d",
});

const logger = winston.createLogger({
  level: "error",
  format: combine(timestamp(), json()),
  // defaultMeta: { service: "ats-log" },
  transports: [fileRotateTransport],
});

export default logger;
