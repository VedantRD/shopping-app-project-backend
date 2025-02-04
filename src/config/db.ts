import mongoose from 'mongoose';

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {});
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err);
        process.exit(1); // Exit process with failure
    }
};
// username - vedantdebadwar
// password - 1QIr8hMiB8tDthA5
// mongo uri - mongodb+srv://vedantdebadwar:1QIr8hMiB8tDthA5@cluster0.l6yhz.mongodb.net/

export default connectDB;