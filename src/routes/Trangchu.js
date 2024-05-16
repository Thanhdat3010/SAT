import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Gioithieu from "../components/Gioithieu";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Layout } from "antd";
import "./Trangchu.css"; // Tạo một tệp CSS mới cho Trangchu nếu cần

function Trangchu(props) {
    const [showGioithieu, setShowGioithieu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            if (position > 500) {
                setShowGioithieu(true);
            } else {
                setShowGioithieu(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Layout>
            <Navbar />
            <Hero
                cName="hero"
                title="SAT CHEMISTRY HỖ TRỢ TRONG VIỆC PHÁT TRIỂN "
                text="NĂNG LỰC HỌC SINH"
                buttonText="Tìm hiểu thêm"
                url="/"
                btnClass="show"
            />
            <div className={`gioithieu ${showGioithieu ? 'show' : ''}`}>
                <Gioithieu />
            </div>
            <Footer />
        </Layout>
    );
}

export default Trangchu;