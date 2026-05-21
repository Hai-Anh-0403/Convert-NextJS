"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./create.module.css";

export default function CreateTourPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [days, setDays] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5001/api/tours", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    location,
                    price: Number(price),
                    days: Number(days),
                    description
                }),
            });

            if (response.ok) {
                alert("Thêm tour du lịch mới thành công!");
                router.push("/tour");
                router.refresh();
            } else {
                const errorData = await response.json();
                alert("Lỗi: " + errorData.message);
            }
        } catch (error) {
            alert("Không thể kết nối tới Backend.");
        }
    };

    return (
        <div className={styles["form-container"]}>
            <div className={styles["form-card"]}>
                <h2> Thêm Tour Du Lịch Mới</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles["form-group"]}>
                        <label>Tên tour du lịch</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ví dụ: Tour du lịch Đà Lạt"
                            required
                        />
                    </div>

                    <div className={styles["form-group"]}>
                        <label>Địa điểm điểm đến</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Ví dụ: Đà Lạt"
                            required
                        />
                    </div>

                    <div className={styles["form-group"]}>
                        <label>Giá tiền hiển thị (VND)</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Ví dụ: 3000000"
                            required
                        />
                    </div>


                    <div className={styles["form-group"]}>
                        <label>Số ngày đi (Ví dụ: 3, 4)</label>
                        <input
                            type="number"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            placeholder="Ví dụ: 3"
                        />
                    </div>

                    <div className={styles["form-group"]}>
                        <label>Mô tả chi tiết lịch trình</label>
                        <textarea
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Mô tả thông tin..."
                        />
                    </div>

                    <button type="submit" className={styles["btn-save"]}>Lưu</button>
                </form>
                <Link href="/tour" className={styles["btn-back"]}>Hủy bỏ và quay lại</Link>
            </div>
        </div>
    );
}