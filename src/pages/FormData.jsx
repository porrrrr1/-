import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">แบบฟอร์มภาษีเงินได้</h1>
      <form
        onSubmit={submitForm}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg space-y-4"
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-2">เงินเดือน:</label>
          <input
            type="number"
            name="salary"
            id="salary"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">โบนัส:</label>
          <input
            type="number"
            name="bonus"
            id="bonus"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">หักประกันสังคมต่อเดือน:</label>
          <input
            type="number"
            name="social"
            id="social"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">จำนวนบุตร:</label>
          <input
            type="number"
            name="children"
            id="children"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">ค่าเบี้ยประกันชีวิต:</label>
          <input
            type="number"
            name="life"
            id="life"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          ตกลง
        </button>
      </form>
    </div>
  );
};

export default FormData;