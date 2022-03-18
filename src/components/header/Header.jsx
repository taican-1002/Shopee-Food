import React from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";

import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import logo from "../../asset/logo.png";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useStore } from "../../stored/store";

import { useNavigate } from "react-router-dom";

import { useUserAuth } from "../../context/UserAuthContext";

const headerItem = [
  {
    display: "Đồ ăn",
    path: "/",
  },
  {
    display: "Thực phẩm",
    path: "/fresh",
  },
  {
    display: "Bia",
    path: "/liquor",
  },
  {
    display: "Hoa",
    path: "/flowers",
  },
  {
    display: "Siêu thị",
    path: "/fmcg",
  },
  {
    display: "Thuốc",
    path: "/medicine",
  },
  {
    display: "Thú cưng",
    path: "/pets",
  },
];
const Header = () => {
  const { setUser } = useStore((state) => state);

  const { pathname } = useLocation();
  const active = headerItem.findIndex((e) => e.path === pathname);

  const mobileMenu = document.getElementsByClassName(
    "header__nav__menu-mobile"
  );

  const ul = document.getElementsByClassName("header__nav__item");

  const handleToggleMenu = () => {
    ul[0].classList.toggle("toggle");
  };

  //User login with google
  const user = useStore((state) => state.user);
  //   console.log(auth)
  const logOut = () => {
    setUser(undefined);
  };
  // User login with email & password
  const { users } = useUserAuth();
  {
    console.log(users);
  }

  const modalSearch = document.getElementsByClassName(
    "header__nav__search__modal"
  );
  const handleSearch = () => {
    modalSearch[0].style.display = "block";
  };
  const handleClose = () => {
    modalSearch[0].style.display = "none";
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__nav">
          <Link to="/">
            <img src={logo} alt="" className="header__nav__logo" />
          </Link>
          <div>
            <select className="header__nav__selected">
              <option className="header__nav__selected__item" value="TP.HCM">
                TP.HCM
              </option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Cần Thơ">Cần Thơ</option>
            </select>
          </div>
          <div className="header__nav__menu-mobile" onClick={handleToggleMenu}>
            <i className="bx bx-menu"></i>
          </div>
          <ul className="header__nav__item">
            {headerItem.map((item, index) => (
              <li key={index} className={`${index === active ? "active" : ""}`}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>

          <div className="header__nav__search" onClick={handleSearch}>
            <i className="bx bx-search"></i>
          </div>

          <div className="header__nav__search__modal">
            <div className="overlay" onClick={handleClose}></div>
            <div className="header__nav__search__modal__content">
              <i className="bx bx-x" onClick={handleClose}></i>
              <div className="header__nav__search__modal__content--bg">
                Đặt Thực phẩm, giao hàng từ 20'... có 13550 địa điểm ở TP. HCM
                từ 00:00 - 23:59
              </div>
              <input type="text" autoComplete="off" />
            </div>
          </div>

          {user ? (
            <div className="header-user">
              <img alt="avatar" src={user.photoURL} />
              <i className="bx bxs-down-arrow"></i>
              <ul className="header-user-list">
                <li className="header-user-item">{user.displayName}</li>
                <li className="header-user-item">
                  <Link to="/lich-su-dat-mon">Lịch sử đơn hàng</Link>
                </li>
                <li className="header-user-item">Ví Voucher</li>
                <li className="header-user-item">Cập nhật tài khoản</li>
                {/* <li className="header-user-item">{user.email}</li> */}
                <li className="header-user-item" onClick={logOut}>
                  Đăng xuất
                </li>
              </ul>
            </div>
          ) : (
            <Button
              variant="outlined"
              color="error"
              size="small"
              className="header__nav__btn"
            >
              <Link to="/login">Đăng nhập</Link>
            </Button>
          )}

          {users ? (
            <div className="header-user">
              <ul className="header-user-list">
                <li className="header-user-item">{users.email}</li>
                {/* <li className="header-user-item">{user.email}</li> */}
                <li className="header-user-item">Đăng xuất</li>
              </ul>
            </div>
          ) : (
            <Button
              variant="outlined"
              color="error"
              size="small"
              className="header__nav__btn"
            >
              <Link to="/login">Đăng nhập</Link>
            </Button>
          )}
          <div className="header__nav__languages">
            {/* <div className='header__nav__languages__flag--usa'>
                            <div className='header__nav__languages--usa'></div>
                            <i className='bx bx-caret-down' ></i>
                        </div> */}
            <div className="header__nav__languages__flag--vn">
              <div className="header__nav__languages--vn"></div>
              <i className="bx bx-caret-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
