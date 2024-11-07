// Import các hàm calculateBMI và classifyBMI từ bmi.js
const { calculateBMI, classifyBMI } = require("../models/bmi");
// Hàm getBMI xử lý yêu cầu từ client
const getBMI = (req, res) => {
  // Lấy dữ liệu cân nặng và chiều cao từ yêu cầu
  const weight = req.body.weight;
  const height = req.body.height;

  // Kiểm tra nếu không có weight hoặc height
  if (!weight || !height) {
    return res
      .status(400)
      .json({ error: "Vui lòng cung cấp cả cân nặng và chiều cao." });
  }

  // Tính toán BMI và phân loại
  const bmi = calculateBMI(parseFloat(weight), parseFloat(height));
  const classification = classifyBMI(bmi);

  // Trả về JSON chứa bmi và classification
  res.json({
    bmi: bmi,
    classification: classification,
  });
};

// Xuất hàm getBMI
module.exports = { getBMI };

// Lưu ý: Tham khảo mã trong tệp nameController.js
