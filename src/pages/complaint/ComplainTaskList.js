import React, { useState } from "react";
import ComplaintHeader from "../../components/complaintHeader/ComplaintHeader";

const ComplainTaskList = () => {
  const [showComplaint, setShowComplaint] = useState(true); // Use a boolean state for toggle
  const [activeButton, setActiveButton] = useState("Mobile Number"); // Initialize state

  const handleComplaint = () => {
    setShowComplaint((prevState) => !prevState); // Toggle between true and false
  };

  return (
    <div>
      <ComplaintHeader />
      <div className="py-2 bg-gray-200 m-8 rounded-lg">
        {/* Toggle Button */}

        {/* Conditionally Render Complaint Form */}
        {showComplaint ? (
          <div>
            <div className="flex justify-center mb-4">
              <button
                onClick={handleComplaint}
                className="px-4 text-sm border rounded-md text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
              >
                General Complaint
              </button>
            </div>

            <div className="mt-4 flex gap-4 justify-end pr-16">
              <div>
                <select className="ml-4 border rounded px-3 py-1 text-sm outline-none focus:ring-2 text-[#30879f] bg-white border-[#30879f]">
                  <option value="All">Select Department</option>
                  <option value="ACCOUNTS_DEPARTMENT">Accounts Dept</option>
                  <option value="ADMISSION_DEPARTMENT">Admission Dept</option>
                  <option value="AMBULANCE_DEPARTMENT">Ambulance Dept</option>
                  <option value="BILLING_AND_INSURANCE">
                    Billing / Insurance Dept
                  </option>
                  <option value="BILLING_DEPARTMENT">Billing Dept</option>
                  <option value="BIO_MEDICAL_DEPARTMENT">
                    Bio-medical Dept
                  </option>
                  <option value="BLOOD_BANK_DEPARTMENT">Blood Bank Dept</option>
                  <option value="CARDIOLOGY_DEPARTMENT">Cardiology Dept</option>
                  <option value="CARPENTRY">Carpentry Dept</option>
                  <option value="CASUALTY_DEPARTMENT">Casualty Dept</option>
                  <option value="CATH_LAB_DEPARTMENT">Cath Lab Dept</option>
                  <option value="CLINICAL_CARE_DEPARTMENT">
                    Clinical Care Dept
                  </option>
                  <option value="CENTERAL_STERILE_SERVICES">Css Dept</option>
                  <option value="CUSTOMER_CARE_DEPARTMENT">
                    Customer Care Dept
                  </option>
                  <option value="DIAGNOSTICS">Diagnostics Dept</option>
                  <option value="DIALYSIS_DEPARTMENT">
                    Dialysis Department
                  </option>
                  <option value="DIETIAN_DEPARTMENT">Dietary Dept</option>
                  <option value="DISCHARGE">Discharge Dept</option>
                  <option value="ELECTRICAL">Electrical Dept</option>
                  <option value="ENGG_WORK_REQUEST">Eng-work Req Dept</option>
                  <option value="ENGG_AND_MAINT_DEPARTMENT">
                    Engg And Maintenance Dept
                  </option>
                  <option value="EMERGENCY_DEPARTMENT">Er Dept</option>
                  <option value="FINANCE_DEPARTMENT">Finance Dept</option>
                  <option value="FNB_DEPARTMENT">Fnb Dept</option>
                  <option value="FO_DEPARTMENT">Fo Dept</option>
                  <option value="PATIENT_TRANSFER_DEPARTMENT">
                    Gd Department
                  </option>
                  <option value="PATIENT_SERVICE">Gd Dept</option>
                  <option value="GUEST_RELATION_DEPARTMENT">Gr Dept</option>
                  <option value="HEALTH_CHECK_UP_DEPARTMENT">Hc Dept</option>
                  <option value="HOUSEKEEPING_DEPARTMENT">
                    Housekeeping Dept
                  </option>
                  <option value="IC_DEPARTMENT">Ic Dept</option>
                  <option value="INSURANCE_DEPARTMENT">Insurance Dept</option>
                  <option value="INTERIOR_DESIGNING">
                    Interior Designing Dept
                  </option>
                  <option value="IP_DEPARTMENT">Ip Dept</option>
                  <option value="IT_DEPARTMENT">It Dept</option>
                  <option value="IT_CHANGE_REQUEST">It-cr Dept</option>
                  <option value="LAB_DEPARTMENT">Lab Dept</option>
                  <option value="LINEN_N_LAUNDRY_DEPARTMENT">
                    Linen N Laundry Dept
                  </option>
                  <option value="MARKETING_DEPARTMENT">Marketing Dept</option>
                  <option value="DOCTORS_DEPARTMENT">Medical</option>
                  <option value="MRD_DEPARTMENT">Mrd Dept</option>
                  <option value="NURSING_DEPARTMENT">Nursing Dept</option>
                  <option value="OPD_DEPARTMENT">Opd Dept</option>
                  <option value="OT_DEPARTMENT">Ot Dept</option>
                  <option value="PHARMACY_DEPARTMENT">Pharmacy Dept</option>
                  <option value="PHYSIOTHERAPY_DEPARTMENT">
                    Physiotherapy Dept
                  </option>
                  <option value="PLUMBING">Plumbing Dept</option>
                  <option value="PORTER_DEPARTMENT">Porter Dept</option>
                  <option value="PRD_DEPARTMENT">Pr Dept</option>
                  <option value="PREGGO_AND_VAS_SERVICES">
                    Preggo / Vas Services Dept
                  </option>
                  <option value="PURCHASE_DEPARTMENT">Purchase Dept</option>
                  <option value="IMAGING_DEPARTMENT">Radiology Dept</option>
                  <option value="REHABILITATION_AND_THERAPISTS">
                    Rehabilitation / Therapists Dept
                  </option>
                  <option value="SECURITY_DEPARTMENT">Security Dept</option>
                  <option value="TELECOM_DEPARTMENT">Telecom Dept</option>
                  <option value="TRANSPORTER_DEPARTMENT">
                    Transporter Dept
                  </option>
                </select>
              </div>
              <div>
                <button className="px-2 text-sm border rounded-md text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]">
                  Refresh
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-end mr-4">
              {/* 'Back' Button will only be visible when showComplaint is false */}
              <button
                onClick={handleComplaint}
                className="px-2 text-sm border rounded-md text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
              >
                Back
              </button>
            </div>
            <div className="flex justify-center space-x-8">
              <p>Patient's Info :</p>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveButton("Mobile Number")}
                  className={`px-2 text-sm border rounded-md  ${
                    activeButton === "Mobile Number"
                      ? "text-white bg-[#30879f]"
                      : "text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
                  }`}
                  aria-label="Tasks Mobile Number"
                >
                  Mobile Number
                </button>
                <button
                  onClick={() => setActiveButton("Email")}
                  className={`px-2 text-sm border rounded-md ${
                    activeButton === "Email"
                      ? "text-white bg-[#30879f]"
                      : "text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
                  }`}
                  aria-label="Tasks Email"
                >
                  Email
                </button>
                <button
                  onClick={() => setActiveButton("HH No./UHID")}
                  className={`px-2 text-sm border rounded-md ${
                    activeButton === "HH No./UHID"
                      ? "text-white bg-[#30879f]"
                      : "text-[#30879f] bg-white border-[#30879f] hover:bg-[#f0fafa]"
                  }`}
                  aria-label="HH No./UHID"
                >
                  HH No./UHID
                </button>
              </div>
            </div>

            {/* mobile */}

            {activeButton === "Email" && (
              <div className="w-[40%] mx-auto p-6">
                <div className="mb-4 flex items-center space-x-8">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    Email:
                  </label>
                  <input
                    type="email"
                   
                    className="w-[70%] p-1 focus:outline-none border-gray-300"
                  />
                </div>
                {/* Name Field */}
                <div className="mb-4 space-x-8 flex items-center">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-[70%] p-1 focus:outline-none border-gray-300"
                  />
                </div>
                {/* Mobile Number Field */}
                <div className="mb-4 flex items-center space-x-8">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    Mobile Number:
                  </label>
                  <div className="flex items-center border rounded-md w-[70%]">
                    <span className="p-1 bg-white border-r text-gray-400">
                      ISD
                    </span>
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        className="w-full p-1 focus:outline-none border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                {/* UHID Field */}
                <div className="mb-4 flex items-center space-x-8">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    HH No. / UHID:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter UHID"
                    className="w-[70%] p-1 focus:outline-none border-gray-300"
                  />
                </div>
              </div>
            )}
            {activeButton === "Mobile Number" && (
              <div className="w-[40%] mx-auto p-6">
                {/* Mobile Number Field */}
                <div className="mb-4 flex items-center space-x-8">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    Mobile Number:
                  </label>
                  <div className="flex items-center border rounded-md w-[70%]">
                    <span className="p-1 bg-white border-r text-gray-700">
                      +91
                    </span>
                    <div className="relative flex-1">
                      <input
                        type="text"
                        
                        className="w-full p-1 focus:outline-none border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Name Field */}
                <div className="mb-4 space-x-8 flex items-center">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-[70%] p-1 focus:outline-none border-gray-300"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4 flex items-center space-x-8">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Enter EmailId"
                    className="w-[70%] p-1 focus:outline-none border-gray-300"
                  />
                </div>

                {/* UHID Field */}
                <div className="mb-4 flex items-center space-x-8">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    HH No. / UHID:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter UHID"
                    className="w-[70%] p-1 focus:outline-none border-gray-300"
                  />
                </div>
              </div>
            )}

            {activeButton === "HH No./UHID" && (
              <div className="w-[40%] mx-auto p-6">
                {/* UHID Field */}
                <div className="mb-4 flex items-center space-x-8">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    HH No. / UHID:
                  </label>
                  <input
                    type="text"
                    
                    className="w-[70%] p-1 focus:outline-none border-gray-300"
                  />
                </div>

                {/* Name Field */}
                <div className="mb-4 space-x-8 flex items-center">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-[70%] p-1 focus:outline-none border-gray-300"
                  />
                </div>
                {/* Mobile Number Field */}
                <div className="mb-4 flex items-center space-x-8">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    Mobile Number:
                  </label>
                  <div className="flex items-center border rounded-md w-[70%]">
                    <span className="p-1 bg-white border-r text-gray-700">
                      ISD
                    </span>
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        className="w-full p-1 focus:outline-none border-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4 flex items-center space-x-8">
                  <label className="block text-gray-700 mb-1 w-[30%]">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Enter EmailId"
                    className="w-[70%] p-1 focus:outline-none border-gray-300"
                  />
                </div>
              </div>
            )}
               <div className="rounded mx-4 border-2 border-[#008080] mb-8 "></div>
          </div>
          
        )}
      
      </div>
     
    </div>
  );
};

export default ComplainTaskList;
