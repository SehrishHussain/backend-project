import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({}, {timestamps: true})

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);






import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema);



const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["m", "F", "O"]
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },

}, {timestamps: true})

export const Patient = mongoose.model("Patient", patientSchema)







const hospitalSchema = new mongoose.Schema({}, {timestamps:true})
 export const Hospital = mongoose.model("Hospital", hospitalSchema);


