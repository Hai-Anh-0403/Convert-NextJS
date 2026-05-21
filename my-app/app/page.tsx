"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    "/images/slider2.png",
    "/images/png-clipart-flag-of-vietnam-vietnam-flag-flag-image-file-formats-thumbnail.png",
    "/images/qr-code.png"
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className={styles.layout}>
      {/* header */}
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles["header-logo"]}>Luxstay</div>

          <div className={styles["header-search"]}>
            <div className={styles["header-search-input"]}>
              <div className={styles["option-item"]}>
                <div className={styles["search-input"]}>
                  <i className={styles["input-search-icon"]}>🔍</i>
                  <input type="text" placeholder="Tìm kiếm" />
                </div>
              </div>
            </div>

            <div className={styles["header-search-option"]}>
              <div className={styles["option-item"]}>
                <div className={styles["item-day"]}>
                  <i className={styles["icon-date"]}>Direct📆</i> ngày
                </div>
              </div>
              <div className={styles["option-item"]}>
                <div className={styles["item-user"]}>
                  <i>👤</i> Khách hàng
                </div>
              </div>
            </div>

            <div className={styles["header-search-submit"]}>
              <button className={styles["btn-search"]}>🔍</button>
            </div>
          </div>

          <div className={styles["header-nav"]}>
            <ul className={styles["header-nav-list"]}>
              <li className={styles["header-nav-link"]}><Link href="#">Guide</Link></li>
              <li className={styles["header-nav-link"]}><Link href="#">Host</Link></li>
              <li className={styles["header-nav-link"]}><Link href="#">Đăng ký</Link></li>
              <li className={styles["header-nav-link"]}><Link href="/login">Đăng nhập</Link></li>
              <li className={styles["header-nav-link"]}>
                <div className={styles["header-language"]}>
                  <img
                    src="/images/png-clipart-flag-of-vietnam-vietnam-flag-flag-image-file-formats-thumbnail.png"
                    alt="anh vn"
                  />
                  <p className={styles["language-name"]}>VND</p>
                </div>
              </li>
            </ul>
          </div>
        </div>


        <div className={styles["navigation-links"]}>
          <Link href="/tour/create" className={styles["nav-action-btn"]}>+ Thêm tour du lịch</Link>
          <Link href="/tour" className={styles["nav-action-btn"]}>Danh Sách Tour</Link>
        </div>

        {/* BANNER SLIDER */}
        <div className={styles.slider}>
          <button className={styles.prev} onClick={prevSlide}>&lt;</button>
          <img
            className={styles.slide}
            src={slides[activeSlide]}
            alt="Luxstay Banner"
          />
          <button className={styles.next} onClick={nextSlide}>&gt;</button>
        </div>
      </div>


      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles["content-welcome"]}>
            <h3 className={styles["content-welcome-heading"]}>Chào mừng đến với Luxstay!</h3>
            <p className={styles["content-decription"]}>
              <br />
              Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Luxstay <br />
              <Link href="/login" className={styles["content-welcome-link"]}>Đăng nhập</Link> hoặc{" "}
              <Link href="#" className={styles["content-welcome-link"]}>Đăng ký</Link> Để trải nghiệm
            </p>
          </div>

          <div className={styles["content-container"]}>
            <div className={styles["content-location"]}>
              <p className={styles["content-title"]}>Địa điểm nổi bật</p>
              <p className={styles["content-decription"]}>Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn</p>
            </div>
          </div>
          <div className={styles["content-slider"]}></div>

          <div className={styles["content-container"]}>
            <div className={styles["content-promotion"]}>
              <p className={styles["content-title"]}>Ưu đãi độc quyền</p>
              <p className={styles["content-decription"]}>Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!</p>
            </div>
            <div className={styles["content-slider"]}></div>
          </div>

          <div className={styles["content-container"]}>
            <div className={styles["content-suggest"]}>
              <p className={styles["content-title"]}>Gợi ý từ Luxstay</p>
              <p>Những địa điểm thường đến mà Luxstay gợi ý dành cho bạn</p>
              <div className={styles["content-slider"]}></div>
            </div>
          </div>

          <div className={styles["content-container"]}>
            <div className={styles["content-explore"]}>
              <p className={styles["content-title"]}>Gợi ý Khám phá</p>
              <p>Để mỗi chuyến đi là một hành trình truyền cảm hứng, mỗi căn phòng là một khoảng trời an yên</p>
              <div className={styles["content-slider"]}></div>
            </div>
          </div>

          <div className={styles["content-container"]}>
            <div className={styles["content-tutorial"]}>
              <p className={styles["content-title"]}>Hướng dẫn sử dụng</p>
              <p>Đặt chỗ nhanh, thanh toán đơn giản, sử dụng dễ dàng</p>
              <div className={styles["content-slider"]}></div>
            </div>
          </div>
        </div>
      </div>


      <div className={styles["download-app"]}>
        <div className={styles["download-app-container"]}>
          <div className={styles.row}>
            <div className={styles["download-app-introduce"]}>
              <div className={styles["download-app-logo"]}>
                <p>Luxstay</p>
              </div>
              <div className={styles["download-app-content"]}>
                <h2 className={styles["download-app-content-heading"]}>TÌM KIẾM CHỖ Ở GIÁ TỐI NHẤT</h2>
                <p className={styles["download-app-content-description"]}>
                  Luxstay hiện là nền tảng đặt phòng trực tuyến #1 Việt Nam. Đồng hành cùng chúng tôi, bạn có những chuyến đi mang đầy trải nghiệm. Với Luxstay, việc đặt chỗ ở, biệt thự nghỉ dưỡng, khách sạn, nhà riêng, chung cư... trở nên nhanh chóng, thuận tiện và dễ dàng.
                </p>
              </div>

              <div className={styles["download-app-image"]}>
                <div className={styles.row}>
                  <div className={styles["col-6"]}>
                    <div className={styles["download-app-qrcode"]}>
                      <img className={styles["download-app-qrcde-img"]} src="/images/qr-code.png" alt="anh qr" />
                    </div>
                  </div>
                  <div className={styles["col-6"]}>
                    <div className={styles["download-app--app"]}>
                      <Link href="#" className={styles["download-app-by-store"]}>
                        <img src="/images/google-play.svg" alt="google play" />
                      </Link>
                      <Link href="#" className={styles["download-app-by-store"]}>
                        <img src="/images/apple-store.svg" alt="apple store" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className={styles["download-app-picture"]}>
            <img src="/images/home-02.png" alt="home app" />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className={styles.footer}>
        <div className={styles.container}></div>
      </div>
    </div>
  );
}