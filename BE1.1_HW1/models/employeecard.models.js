const mongoose = require("mongoose");

const employeeCardSchema = new mongoose.Schema({
    employeeProfileImageUrl: String,
    employeeName: String,
    employeeDesignation: String,
    employeeId: String,
    employeeDOB: Date,
    employeeMail: String,
    employeeContact: Number,
    employeeAddress: String,
});

const EmployeeCard = mongoose.model("EmployeeCard", employeeCardSchema);

module.exports = EmployeeCard;