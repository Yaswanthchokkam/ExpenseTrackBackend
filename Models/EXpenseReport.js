const mongoose=require('mongoose');
const ReportSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    expenseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"expenses",
        required:true
    },
    // details:{
    //     itemName:String,
    //     Amount:Number,
    //     Category:String
    // },
    expenseDate:{
        type:String,
         default:new Date().toLocaleDateString(),
        required:true
    }

},{timestamps:true})
const ExpenseReportModel=mongoose.model('expensesReports',ReportSchema)
module.exports=ExpenseReportModel