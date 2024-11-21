import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  // เงินได้ทั้งหมด
  let salary = parseInt(formData.salary);
  let salaryOfYear = salary * 12;
  let bonus = parseInt(formData.bonus);
  let totalSalary = salaryOfYear + bonus;
  let expenses = totalSalary * 0.5 <= 100000 ? totalSalary * 0.5 : 100000;

  // ค่าลดหย่อน
  let me = 60000;
  let children =
    parseInt(formData.children) * 30000 <= 60000
      ? parseInt(formData.children) * 30000
      : 60000;
  let social = parseInt(formData.social);
  let socialOfyear = social * 12 <= 30000 ? social * 12 : 30000;
  let life = parseInt(formData.life) <= 100000 ? parseInt(formData.life) : 100000;
  let deduction = me + children + socialOfyear + life;

  // เงินได้พึงประเมิน
  let income = totalSalary - expenses - deduction;

  // อัตราภาษี
  let taxRate = 0;
  if (income <= 100000) {
    taxRate = 0;
  } else if (income <= 300000) {
    taxRate = 0.05;
  } else if (income <= 1000000) {
    taxRate = 0.1;
  } else {
    taxRate = 0.15;
  }

  // ภาษีที่ต้องชำระ
  let taxPay = taxRate * income;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-green-100 to-teal-200 p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">ผลการคำนวณ</h1>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg space-y-4">
        <p className="text-lg font-semibold text-gray-700">
          <strong>เงินได้ทั้งปี:</strong> {salaryOfYear} บาท
        </p>
        <p className="text-lg font-semibold text-gray-700">
          <strong>ค่าใช้จ่าย:</strong> {expenses} บาท
        </p>
        <p className="text-lg font-semibold text-gray-700">
          <strong>ค่าลดหย่อน:</strong> {deduction} บาท
        </p>
        <p className="text-lg font-semibold text-gray-700">
          <strong>เงินได้พึงประเมินสุทธิ:</strong> {income} บาท
        </p>
        <p className="text-lg font-semibold text-gray-700">
          <strong>อัตราภาษี:</strong> {taxRate * 100}%
        </p>
        <p className="text-lg font-semibold text-gray-700">
          <strong>ภาษีที่ต้องชำระ:</strong> {taxPay} บาท
        </p>
      </div>
    </div>
  );
};

export default Results;