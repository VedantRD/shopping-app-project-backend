import mongoose from 'mongoose';

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {});
        console.log("MongoDB connected ");
    } catch (err) {
        console.error(err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;