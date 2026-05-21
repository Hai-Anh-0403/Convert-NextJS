const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('=== Đã kết nối thành công tới MongoDB Local (tourDB) ==='))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err));

const tourSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    days: { type: Number, default: 1 },
    description: { type: String, default: "" },
    image: { type: String, default: "1747622.jpg" }
}, { timestamps: true });

const Tour = mongoose.model('Tour', tourSchema);

// lấy danh sách
app.get('/api/tours', async (req, res) => {
    try {
        const tours = await Tour.find().sort({ createdAt: -1 });
        res.status(200).json(tours);
    } catch (error) {
        res.status(500).json({ message: "Lỗi Backend khi lấy dữ liệu" });
    }
});
//Thêm mới
app.post('/api/tours', async (req, res) => {
    try {
        const { name, location, price, days, description } = req.body;

        const newTour = new Tour({
            name,
            location,
            price: Number(price),
            days: Number(days) || 1,
            description,
            image: "1747622.jpg"
        });

        await newTour.save();
        res.status(201).json({ message: "Đã thêm tour thành công!", tour: newTour });
    } catch (error) {
        res.status(500).json({ message: "Lỗi Backend khi lưu dữ liệu" });
    }
});
//Xoá
app.delete('/api/tours/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTour = await Tour.findByIdAndDelete(id);

        if (!deletedTour) {
            return res.status(404).json({ message: "Không tìm thấy tour này để xóa" });
        }
        res.status(200).json({ message: "Xóa tour thành công!" });
    } catch (error) {
        res.status(500).json({ message: "Lỗi Server khi xóa tour" });
    }
});
//Sửa
app.put('/api/tours/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, location, price, days, description } = req.body;

        const updatedTour = await Tour.findByIdAndUpdate(
            id,
            {
                name,
                location,
                price: Number(price),
                days: Number(days) || 1,
                description
            },
            { new: true }
        );

        if (!updatedTour) {
            return res.status(404).json({ message: "Không tìm thấy tour để sửa" });
        }

        res.status(200).json({ message: "Cập nhật thông tin tour thành công!", tour: updatedTour });
    } catch (error) {
        res.status(500).json({ message: "Lỗi Server khi cập nhật tour" });
    }
});

app.listen(PORT, () => {
    console.log(`Server Backend đang chạy mượt mà tại: http://localhost:${PORT}`);
});