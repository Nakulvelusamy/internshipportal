import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import Employee from '../models/employeeModel.js';

// DESC     Login for the employee
// ROUTE    POST /employee/login
// ACCESS   Public
export const employeeLogin = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingEmployee = await Employee.findOne({ email });

    if (!existingEmployee) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await existingEmployee.matchPassword(password);
    
    if (isMatch) {
      let token = jwt.sign(
        { user: existingEmployee._id },
        process.env.JWT_SECRET || 'fallbacksecret' // Fallback secret in case env variable is missing
      );

      res
        .cookie('token', token, {
          maxAge: 90000,
          httpOnly: true,
        })
        .json({
          _id: existingEmployee._id,
          username: existingEmployee.username,
          email: existingEmployee.email,
          companyInfo: existingEmployee.companyInfo,
        });
    } else {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: error.message });
  }
});

// DESC     Register a new employee
// ROUTE    POST /employee
// ACCESS   Public

export const registerEmployee = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const employee = await Employee.findOne({ email });
    if (employee) {
      throw new Error('The employee with this email already exists');
    }

    // Create a new employee with the password
    let newEmployee = new Employee({
      username,
      email,
      passwordHash: password, // This will be hashed in the pre-save hook
    });

    newEmployee = await newEmployee.save();
    res.status(201).json({ 
      _id: newEmployee._id,
      username: newEmployee.username,
      email: newEmployee.email
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: error.message });
  }
});

// DESC     To get the employee details
// ROUTE    GET /employee/profile/:id
// ACCESS   Private

export const getEmployeeDetails = asyncHandler(async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      res.status(404);
      throw new Error('The user with this id does not exists');
    }
    res.json({ employee: employee });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// DESC     Update employee details
// ROUTE    PATCH /employee/profile/:id
// ACCESS   Private

export const updateEmployeeProfile = asyncHandler(async (req, res) => {
  try {
    const { companyInfo, jobsPosted } = req.body;
    
    // Find the employee first
    const employee = await Employee.findById(req.params.id);
    
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    
    // Prepare update object
    const updateObj = {};
    
    // Update company info if provided
    if (companyInfo) {
      updateObj.companyInfo = {
        ...employee.companyInfo,
        ...companyInfo
      };
    }
    
    // Update jobs posted if provided
    if (jobsPosted) {
      // Extract job ID from the jobInfo field if it exists
      let jobId;
      if (Array.isArray(jobsPosted) && jobsPosted.length > 0) {
        if (jobsPosted[0].jobInfo) {
          jobId = jobsPosted[0].jobInfo;
        } else if (typeof jobsPosted[0] === 'string') {
          jobId = jobsPosted[0];
        }
      } else if (typeof jobsPosted === 'string') {
        jobId = jobsPosted;
      }
      
      if (jobId) {
        // Use $push to add the job ID to the jobsPosted array
        const updatedEmployee = await Employee.findByIdAndUpdate(
          req.params.id,
          { 
            $push: { jobsPosted: jobId },
            $set: updateObj 
          },
          { new: true } // Return the updated document
        );
        
        return res.status(200).json({ 
          success: true,
          employee: updatedEmployee 
        });
      }
    }
    
    // If no job ID was found, just update the other fields
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { $set: updateObj },
      { new: true } // Return the updated document
    );

    res.status(200).json({ 
      success: true,
      employee: updatedEmployee 
    });
  } catch (error) {
    console.error("Error updating employee profile:", error);
    res.status(500).json({ error: error.message, stack: error.stack });
  }
});
