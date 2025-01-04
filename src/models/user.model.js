import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            lowercase: true,
            index: true
        },
        avatar: {
            type: String, //cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // Cloudinary url
        
        },
        watchHistory: [
            {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
        ],
        password: {
            type: String,
            required: ['true', 'Password is required']
        },
        refreshToken:{
            type: String

        }


    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {  // password encrypted
    if (this.isModified("password")) {
    this.password = brcypt.hash(this.password, 10)
    next()
    }
    else next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
   return await bcrypt.compare(password, this.password) // this.password is encrypted one
}

export const User = mongoose.model("User", userSchema)

// json web token = jwt and bcrypt for password hashing