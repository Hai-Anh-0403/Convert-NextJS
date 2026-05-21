"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Đăng nhập thành công với tài khoản: ${email}`);
    };

    return (
        <div className={styles["login-wrapper"]}>
            <div className={styles["login-box"]}>
                <h2>Đăng nhập Luxstay</h2>
                <form onSubmit={handleLogin}>
                    <div className={styles["input-group"]}>
                        <label>Email hoặc số điện thoại</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập email của bạn"
                            required
                        />
                    </div>
                    <div className={styles["input-group"]}>
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nhập mật khẩu"
                            required
                        />
                    </div>
                    <button type="submit" className={styles["btn-submit"]}>Đăng nhập</button>
                </form>
                <p className={styles["redirect-text"]}>
                    Chưa có tài khoản? <Link href="#">Đăng ký</Link>
                </p>
                <Link href="/" className={styles["back-home"]}>Trang chủ</Link>
            </div>
        </div>
    );
}