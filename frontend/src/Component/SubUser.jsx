import React, { useState } from "react";
import Table from "../assets/Table";
import { useNavigate } from "react-router-dom";
import FormModal from "../assets/FormModal";

function SubUser() {
  const navigate = useNavigate();
  const columns = ["No", "Name", "Age", "Email"];
  const initialData = [
    ["John Doe", 30, "john@example.com"],
    ["Jane Smith", 25, "jane@example.com"],
    ["Bob Johnson", 35, "bob@example.com"],
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = initialData
    .filter((row) =>
      row.some((cell) =>
        cell.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .map((row, index) => [index + 1, ...row]);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (formData) => {
    // Handle form submission here
    console.log(formData);
  };

  const fields = [
    { name: "fullName", label: "Full Name", type: "text", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "userId", label: "User ID", type: "text", required: true },
    { name: "password", label: "Password", type: "password", required: true },
    { name: "userRole", label: "User Role", type: "text", required: false },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 py-5 bg-slate-100">
      <div className="block md:flex items-center justify-between mb-4 bg-white p-6">
        <h1 className="text-2xl font-bold text-gray-600 mb-2 md:mb-0 md:mr-4">
          Sub User
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <input
            type="text"
            className="bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-1 px-3 mb-2 sm:mb-0 sm:mr-4"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            onClick={openModal}
          >
            + Add New
          </button>
          <FormModal
            isOpen={isOpen}
            onClose={closeModal}
            onSubmit={handleSubmit}
            title="Add New Item"
            fields={fields}
          />
        </div>
      </div>
      <div className="">
        <Table columns={columns} data={filteredData} />
      </div>
    </div>
  );
}

export default SubUser;
