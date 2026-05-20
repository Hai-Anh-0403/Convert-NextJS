'use client'

import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function TourListPage() {

    const [tours, setTours] = useState([]);

    // lấy dữ liệu
    const fetchTours = async () => {

        try {

            const res = await fetch(
                "http://localhost:5000/api/tours"
            );

            const data = await res.json();

            setTours(data);

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    // xử lý xoá
    const handleDelete = async (id: string) => {

        const confirmDelete = confirm(
            "Bạn có chắc muốn xoá tour này không?"
        );

        if (!confirmDelete) return;

        try {

            const res = await fetch(
                `http://localhost:5000/api/tours/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            if (res.ok) {

                alert(data.message);

                // load lại danh sách
                fetchTours();

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);
            alert("Lỗi khi xoá");

        }
    };

    return (
        <div className={styles.container}>

            <header className={styles.header}>

                <h1 className={styles.logo}>
                    Luxstay Tours
                </h1>

                <div className={styles["header-right"]}>

                    <Link
                        href="/tour/create"
                        className={styles["btn-global-add"]}
                    >
                        + Thêm Tour Mới
                    </Link>

                    <Link
                        href="/"
                        className={styles["btn-home"]}
                    >
                        Trang Chủ
                    </Link>

                </div>

            </header>

            <main>

                <h2 className={styles.title}>
                    Danh sách Tour nổi bật
                </h2>

                <p className={styles.subtitle}>
                    Cùng Luxstay bắt đầu chuyến hành trình
                    chinh phục thế giới của bạn
                </p>

                <div className={styles["tour-grid"]}>

                    {tours.length === 0 ? (

                        <p
                            style={{
                                color: "#868e96",
                                fontSize: "14px",
                                gridColumn: "1/-1",
                                textAlign: "center",
                                padding: "20px 0"
                            }}
                        >
                            Hiện chưa có tour nào trong hệ thống.
                        </p>

                    ) : (

                        tours.map((tour: any) => (

                            <div
                                key={tour._id}
                                className={styles["tour-card"]}
                            >

                                <img
                                    src={
                                        tour.image
                                            ? `/images/${tour.image}`
                                            : "/images/slider2.png"
                                    }
                                    alt={tour.name}
                                    className={styles["tour-image"]}
                                />

                                <h3 className={styles["tour-title"]}>
                                    {tour.name}
                                </h3>

                                <p className={styles["tour-location"]}>
                                    📍 {tour.location}
                                    {tour.days
                                        ? ` (${tour.days} ngày)`
                                        : ""}
                                </p>

                                <p className={styles["tour-price"]}>
                                    {Number(tour.price).toLocaleString("vi-VN")} đ
                                </p>

                                <div className={styles["tour-actions"]}>

                                    <button
                                        className={`${styles.btn} ${styles["btn-edit"]}`}
                                    >
                                        Sửa
                                    </button>

                                    <button
                                        onClick={() => handleDelete(tour._id)}
                                        className={`${styles.btn} ${styles["btn-delete"]}`}
                                    >
                                        Xóa
                                    </button>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </main>

        </div>
    );
}