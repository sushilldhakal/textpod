import mongoose from "mongoose";
import dbConfig from "./db";

// mongoose.connect(dbConfig.uriMongo, { useNewUrlParser: true }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Connect to MongoDB successfully');
//   }
// });

mongoose
  .connect(dbConfig.uriMongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
