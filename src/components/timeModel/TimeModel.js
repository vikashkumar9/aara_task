import React, { useState } from "react";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";

const TimeModel = ({ showTimeModel, setShowTimeModel }) => {
    const [value, setValue] = useState(new Date());

  const handleSave = () => {
    console.log("Selected Date & Time:", value);
    onClose();
  };

  const onClose = () => {
    setShowTimeModel(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 pt-20">
      <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 text-center">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label="Select Date and Time"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
        <div className="flex justify-center mt-2 space-x-4">
          <button
            className="px-4 py-1 text-sm text-[#30879f] rounded border-[#30879f] border-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="px-4 py-1 text-sm text-[#30879f]  border-[#30879f] rounded border-2 "
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeModel;
