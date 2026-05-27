import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useContent } from "../context/ContentContext";
import PremiumHeroHighlight from "./PremiumHeroHighlight";
import VideoReel from "./VideoReel";
import ChaiBisketCarousel from "./ChaiBisketCarousel";
import LanguageTickerBlock from "./LanguageTickerBlock";
import "./StorytellingAnimation.css";

export default function Section1() {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();
  const { content } = useContent();
  return (
    <>
      {isLoggedIn && (
        <button
          onClick={() => {
            logout();
            navigate('/');
          }}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 10000,
            backgroundColor: 'rgba(252, 205, 8, 0.95)',
            color: '#000',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '999px',
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}
        >
          Logout
        </button>
      )}
      <div
        data-framer-root=""
        className="framer-MFySU framer-xjLTu framer-psSip framer-zzHWb framer-KCpEu framer-U3CLE framer-Pm9xD framer-Mrvqo framer-xmru3t"
        style={{ minHeight: "100vh", width: "auto" }}
      >
        <div className="ssr-variant">
          <div className="framer-1lfhyu-container hidden-6bv0bu">
            <nav
              className="framer-jIy18 framer-kcjcxy framer-v-kcjcxy"
              data-framer-name="Desktop"
              style={{ width: "100%" }}
            >
              <div className="framer-15wv3c" data-framer-name="Logo">
                <a
                  as="a"
                  className="framer-1k0bykm framer-199dtsq"
                  href="./"
                  data-framer-page-link-current="true"
                >
                  <div
                    style={{
                      position: "absolute",
                      borderRadius: "inherit",
                      cornerShape: "inherit",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    }}
                    data-framer-background-image-wrapper="true"
                  >
                    <img
                      decoding="async"
                      width="1572"
                      height="800"
                      sizes="(min-width: 1200px) max(182px, 123px), (max-width: 809.98px) max(182px, 123px), (min-width: 810px) and (max-width: 1199.98px) max(182px, 123px)"
                      srcset="/assets/X4yL7thgvQaBz1hOKTxv8NcIU.png?scale-down-to=512&amp;width=1572&amp;height=800 512w,/assets/X4yL7thgvQaBz1hOKTxv8NcIU.png?scale-down-to=1024&amp;width=1572&amp;height=800 1024w,/assets/X4yL7thgvQaBz1hOKTxv8NcIU.png?width=1572&amp;height=800 1572w"
                      src="/assets/X4yL7thgvQaBz1hOKTxv8NcIU.png?width=1572&amp;height=800"
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        cornerShape: "inherit",
                        objectPosition: "center",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </a>
              </div>
              <div
                className="framer-l64ixq-container"
                id="undefined-l64ixq"
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <button
                  className="framer-iLplY framer-187lvdg framer-v-187lvdg"
                  data-framer-name="Button"
                  data-highlight="true"
                  data-reset="button"
                  tabindex="0"
                  style={{
                    backgroundColor: "rgb(253, 205, 8)",
                    borderRadius: "999px",
                  }}
                >
                  <div
                    className="framer-1c6vnq2"
                    data-framer-component-type="RichTextContainer"
                    style={{
                      "-ExtractedR6o4lv":
                        "var(--variable-reference-FwI_rhNnE-jB2BADCLb)",
                      "-FramerLinkTextColor": "rgb(0, 153, 255)",
                      "-FramerLinkTextDecoration": "underline",
                      "-VariableReference-FwI_rhNnEJB2BADCLb": "rgb(0, 0, 0)",
                      transform: "none",
                    }}
                  >
                    <p
                      className="framer-text"
                      style={{
                        "-FontSelector": "SW50ZXItTWVkaXVt",
                        "-FramerFontFamily": "&quot",
                        "-FramerFontSize": "15px",
                        "-FramerFontWeight": "500",
                        "-FramerLetterSpacing": "-0.03em",
                        "-FramerLineHeight": "1.3em",
                        "-FramerTextAlignment": "left",
                        "-FramerTextColor":
                          "var(--extracted-r6o4lv, var(--variable-reference-FwI_rhNnE-jB2BADCLb))",
                      }}
                    >
                      Available for iOS &amp; Android
                    </p>
                  </div>
                </button>
                {!isLoggedIn && (
                  <>
                    <button
                      className="custom-admin-btn"
                      onClick={() => navigate('/admin-login')}
                      style={{
                        backgroundColor: "transparent",
                        color: "#ff4d4d",
                        border: "1px solid #ff4d4d",
                        borderRadius: "999px",
                        padding: "10px 24px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255, 77, 77, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      Admin Login
                    </button>

                    <button
                      className="custom-signup-btn framer-iLplY framer-187lvdg framer-v-187lvdg"
                      data-framer-name="Button"
                      data-highlight="true"
                      data-reset="button"
                      tabindex="0"
                      onClick={() => navigate('/signup')}
                  style={{
                    backgroundColor: "rgb(253, 205, 8)",
                    color: "#000",
                    border: "none",
                    borderRadius: "999px",
                    padding: "10px 24px",
                    fontWeight: "600",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.backgroundColor = "#ffdb4d";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.backgroundColor = "rgb(253, 205, 8)";
                  }}
                >
                  <div
                    className="framer-1c6vnq2"
                    data-framer-component-type="RichTextContainer"
                    style={{ transform: "none" }}
                  >
                    <p
                      className="framer-text"
                      style={{
                        "-FontSelector": "SW50ZXItTWVkaXVt",
                        "-FramerFontFamily": "&quot",
                        "-FramerFontSize": "15px",
                        "-FramerFontWeight": "500",
                        "-FramerLetterSpacing": "-0.03em",
                        "-FramerLineHeight": "1.3em",
                        "-FramerTextAlignment": "left",
                        color: "inherit",
                      }}
                    >
                      Signup
                    </p>
                  </div>
                    </button>
                  </>
                )}
                {isLoggedIn && (
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                    Welcome, {user?.email || 'User'}
                  </span>
                  <button
                    className="logout-btn"
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                    style={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.3)",
                      borderRadius: "999px",
                      padding: "8px 20px",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                      e.currentTarget.style.borderColor = "rgba(255, 0, 0, 0.5)";
                      e.currentTarget.style.color = "#ff6b6b";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                      e.currentTarget.style.color = "#fff";
                    }}
                  >
                    Logout
                  </button>
                </div>
                )}
              </div>
            </nav>
          </div>
        </div>
        <main className="framer-lc7a7w" data-framer-name="Main">
          <section className="framer-bnfk96" data-framer-name="Hero">
            <div className="ssr-variant">
              <div className="framer-124sfb-container hidden-xmru3t hidden-1eu3j9">
                <nav
                  className="framer-jIy18 framer-kcjcxy framer-v-1tc1xay"
                  data-framer-name="Phone"
                  style={{ width: "100%" }}
                >
                  <div className="framer-15wv3c" data-framer-name="Logo">
                    <a
                      as="a"
                      className="framer-1k0bykm framer-199dtsq"
                      href="./"
                      data-framer-page-link-current="true"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="1572"
                          height="800"
                          sizes="(min-width: 1200px) max(182px, 123px), (max-width: 809.98px) max(182px, 123px), (min-width: 810px) and (max-width: 1199.98px) max(182px, 123px)"
                          srcset="/assets/X4yL7thgvQaBz1hOKTxv8NcIU.png?scale-down-to=512&amp;width=1572&amp;height=800 512w,/assets/X4yL7thgvQaBz1hOKTxv8NcIU.png?scale-down-to=1024&amp;width=1572&amp;height=800 1024w,/assets/X4yL7thgvQaBz1hOKTxv8NcIU.png?width=1572&amp;height=800 1572w"
                          src="/assets/X4yL7thgvQaBz1hOKTxv8NcIU.png?width=1572&amp;height=800"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div
                    className="framer-l64ixq-container"
                    id="undefined-l64ixq"
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="framer-iLplY framer-187lvdg framer-v-187lvdg"
                      data-framer-name="Button"
                      data-highlight="true"
                      data-reset="button"
                      tabindex="0"
                      style={{
                        backgroundColor: "rgb(253, 205, 8)",
                        borderBottomLeftRadius: "16px",
                        borderBottomRightRadius: "16px",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                      }}
                    >
                      <div
                        className="framer-1c6vnq2"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--variable-reference-FwI_rhNnE-jB2BADCLb)",
                          "-FramerLinkTextColor": "rgb(0, 153, 255)",
                          "-FramerLinkTextDecoration": "underline",
                          "-VariableReference-FwI_rhNnEJB2BADCLb":
                            "rgb(0, 0, 0)",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItTWVkaXVt",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "15px",
                            "-FramerFontWeight": "500",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerLineHeight": "1.3em",
                            "-FramerTextAlignment": "left",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--variable-reference-FwI_rhNnE-jB2BADCLb))",
                          }}
                        >
                          Get the app
                        </p>
                      </div>
                    </button>
                    {!isLoggedIn && (
                      <>
                        <button
                          className="custom-admin-btn"
                          onClick={() => navigate('/admin-login')}
                          style={{
                            backgroundColor: "transparent",
                            color: "#ff4d4d",
                            border: "1px solid #ff4d4d",
                            borderBottomLeftRadius: "16px",
                            borderBottomRightRadius: "16px",
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                            padding: "6px 16px",
                            fontWeight: "600",
                            cursor: "pointer",
                            fontSize: "12px",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255, 77, 77, 0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                          }}
                        >
                          Admin Login
                        </button>

                        <button
                          className="custom-signup-btn framer-iLplY framer-187lvdg framer-v-187lvdg"
                          data-framer-name="Button"
                          data-highlight="true"
                          data-reset="button"
                          tabindex="0"
                          onClick={() => navigate('/signup')}
                      style={{
                        backgroundColor: "rgb(25, 25, 25)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderBottomLeftRadius: "16px",
                        borderBottomRightRadius: "16px",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                        boxShadow: "0 4px 15px rgba(0, 255, 255, 0.15)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 20px rgba(0, 255, 255, 0.3)";
                        e.currentTarget.style.backgroundColor = "#00ffff";
                        e.currentTarget.style.color = "#000";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 15px rgba(0, 255, 255, 0.15)";
                        e.currentTarget.style.backgroundColor =
                          "rgb(25, 25, 25)";
                        e.currentTarget.style.color = "#fff";
                      }}
                    >
                      <div
                        className="framer-1c6vnq2"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItTWVkaXVt",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "15px",
                            "-FramerFontWeight": "500",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerLineHeight": "1.3em",
                            "-FramerTextAlignment": "left",
                            color: "inherit",
                          }}
                        >
                          Signup
                        </p>
                      </div>
                        </button>
                      </>
                    )}
                    {isLoggedIn && (
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
                        {user?.email || 'User'}
                      </span>
                      <button
                        className="logout-btn-mobile"
                        onClick={() => {
                          logout();
                          navigate('/');
                        }}
                        style={{
                          backgroundColor: "transparent",
                          color: "#fff",
                          border: "1px solid rgba(255,255,255,0.3)",
                          borderBottomLeftRadius: "16px",
                          borderBottomRightRadius: "16px",
                          borderTopLeftRadius: "16px",
                          borderTopRightRadius: "16px",
                          padding: "6px 16px",
                          fontWeight: "600",
                          cursor: "pointer",
                          fontSize: "12px",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                          e.currentTarget.style.borderColor = "rgba(255, 0, 0, 0.5)";
                          e.currentTarget.style.color = "#ff6b6b";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                          e.currentTarget.style.color = "#fff";
                        }}
                      >
                        Logout
                      </button>
                    </div>
                    )}
                  </div>
                </nav>
              </div>
            </div>
            <div className="framer-1qp0jzf">
              <div className="ssr-variant hidden-6bv0bu">
                <div
                  className="framer-1gpdsst"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <h1
                    className="framer-text framer-styles-preset-11r0vn9"
                    data-styles-preset="pza6alzI0"
                  >
                    Regional Stories. Short Series. Full High.
                  </h1>
                </div>
              </div>
              <div className="ssr-variant hidden-1eu3j9 hidden-xmru3t">
                <div
                  className="framer-1gpdsst"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <h1
                    className="framer-text framer-styles-preset-11r0vn9"
                    data-styles-preset="pza6alzI0"
                    style={{ "-FramerTextAlignment": "center" }}
                  >
                    Regional Stories. <br className="framer-text" />
                    Short Series. <br className="framer-text" />
                    Full High.
                  </h1>
                </div>
              </div>
            </div>
            <div className="framer-1st4p85" data-framer-name="Devices">

                <div className="ssr-variant">
                  <div
                    className="framer-1f3cz6b-container"
                    style={{
                      willChange: "transform",
                      opacity: "1",
                      transform: "translateY(160px)",
                    }}
                  >
                    <div
                      className="framer-DctWk framer-irqwcz framer-v-irqwcz floating-device float-anim-device"
                      data-framer-name="Mockup"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <div className="framer-1a59jhm" data-framer-name="Shadow">
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="2292"
                            height="3366"
                            sizes="(min-width: 1200px) max(calc(280px * 1.6186), calc(330px * 1.6186)), (max-width: 809.98px) max(calc(280px * 1.6186), calc(210px * 1.6186)), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 1.6186)"
                            srcset="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=1024&amp;width=2292&amp;height=3366 697w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=2048&amp;width=2292&amp;height=3366 1394w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366 2292w"
                            src="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366"
                            alt=""
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              objectPosition: "center",
                              objectFit: "fill",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-b1om7b"
                        data-framer-name="Screen"
                        style={{
                          borderBottomLeftRadius: "22px",
                          borderBottomRightRadius: "22px",
                          borderTopLeftRadius: "22px",
                          borderTopRightRadius: "22px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="533"
                            height="1159"
                            sizes="(min-width: 1200px) calc(280px * 0.9), (max-width: 809.98px) calc(280px * 0.9), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 0.9)"
                            srcset="/assets/8eKX0BzqfGpgP6Lzd75KkaDBc5k.jpg?width=533&amp;height=1159 533w"
                            src="/assets/8eKX0BzqfGpgP6Lzd75KkaDBc5k.jpg?width=533&amp;height=1159"
                            alt=""
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              objectPosition: "center",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-w6ia9i"
                        data-framer-name="iPhone Borders"
                      >
                        <div
                          style={{
                            position: "absolute",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                          }}
                          data-framer-background-image-wrapper="true"
                        >
                          <img
                            decoding="async"
                            width="1888"
                            height="3832"
                            sizes="(min-width: 1200px) max(280px, 330px), (max-width: 809.98px) max(280px, 210px), (min-width: 810px) and (max-width: 1199.98px) 280px"
                            srcset="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?scale-down-to=2048&amp;width=1888&amp;height=3832 1009w,/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832 1888w"
                            src="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832"
                            alt=""
                            style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              objectPosition: "center",
                              objectFit: "fill",
                            }}
                          />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div
                  className="framer-ryy847-container"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "translateY(160px)",
                  }}
                >
                  <div
                    className="framer-DctWk framer-irqwcz framer-v-irqwcz floating-device float-anim-device"
                    data-framer-name="Mockup"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <div className="framer-1a59jhm" data-framer-name="Shadow">
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="2292"
                          height="3366"
                          sizes="(min-width: 1200px) max(calc(280px * 1.6186), calc(330px * 1.6186)), (max-width: 809.98px) max(calc(280px * 1.6186), calc(210px * 1.6186)), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 1.6186)"
                          srcset="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=1024&amp;width=2292&amp;height=3366 697w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=2048&amp;width=2292&amp;height=3366 1394w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366 2292w"
                          src="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-b1om7b"
                      data-framer-name="Screen"
                      style={{
                        borderBottomLeftRadius: "22px",
                        borderBottomRightRadius: "22px",
                        borderTopLeftRadius: "22px",
                        borderTopRightRadius: "22px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="533"
                          height="1159"
                          sizes="(min-width: 1200px) calc(280px * 0.9), (max-width: 809.98px) calc(280px * 0.9), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 0.9)"
                          srcset="/assets/jbwjq0kbWtHfAfO9w6Yhdk6nL9A.jpg?width=533&amp;height=1159 533w"
                          src="/assets/jbwjq0kbWtHfAfO9w6Yhdk6nL9A.jpg?width=533&amp;height=1159"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-w6ia9i"
                      data-framer-name="iPhone Borders"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="1888"
                          height="3832"
                          sizes="(min-width: 1200px) max(280px, 330px), (max-width: 809.98px) max(280px, 210px), (min-width: 810px) and (max-width: 1199.98px) 280px"
                          srcset="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?scale-down-to=2048&amp;width=1888&amp;height=3832 1009w,/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832 1888w"
                          src="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div
                  className="framer-f3m3mz-container"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "translateY(160px)",
                  }}
                >
                  <div
                    className="framer-DctWk framer-irqwcz framer-v-irqwcz floating-device float-anim-device"
                    data-framer-name="Mockup"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <div className="framer-1a59jhm" data-framer-name="Shadow">
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="2292"
                          height="3366"
                          sizes="(min-width: 1200px) max(calc(280px * 1.6186), calc(330px * 1.6186)), (max-width: 809.98px) max(calc(280px * 1.6186), calc(210px * 1.6186)), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 1.6186)"
                          srcset="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=1024&amp;width=2292&amp;height=3366 697w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=2048&amp;width=2292&amp;height=3366 1394w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366 2292w"
                          src="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-b1om7b"
                      data-framer-name="Screen"
                      style={{
                        borderBottomLeftRadius: "22px",
                        borderBottomRightRadius: "22px",
                        borderTopLeftRadius: "22px",
                        borderTopRightRadius: "22px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="533"
                          height="1159"
                          sizes="(min-width: 1200px) calc(330px * 0.9), (max-width: 809.98px) calc(210px * 0.9), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 0.9)"
                          srcset="/assets/pIlD5kYTu2ey3KY8yxH6kuBhQM.jpg?width=533&amp;height=1159 533w"
                          src="/assets/pIlD5kYTu2ey3KY8yxH6kuBhQM.jpg?width=533&amp;height=1159"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-w6ia9i"
                      data-framer-name="iPhone Borders"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="1888"
                          height="3832"
                          sizes="(min-width: 1200px) max(280px, 330px), (max-width: 809.98px) max(280px, 210px), (min-width: 810px) and (max-width: 1199.98px) 280px"
                          srcset="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?scale-down-to=2048&amp;width=1888&amp;height=3832 1009w,/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832 1888w"
                          src="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div
                  className="framer-1fbv9-container"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "translateY(160px)",
                  }}
                >
                  <div
                    className="framer-DctWk framer-irqwcz framer-v-irqwcz floating-device float-anim-device"
                    data-framer-name="Mockup"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <div className="framer-1a59jhm" data-framer-name="Shadow">
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="2292"
                          height="3366"
                          sizes="(min-width: 1200px) max(calc(280px * 1.6186), calc(330px * 1.6186)), (max-width: 809.98px) max(calc(280px * 1.6186), calc(210px * 1.6186)), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 1.6186)"
                          srcset="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=1024&amp;width=2292&amp;height=3366 697w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=2048&amp;width=2292&amp;height=3366 1394w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366 2292w"
                          src="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-b1om7b"
                      data-framer-name="Screen"
                      style={{
                        borderBottomLeftRadius: "22px",
                        borderBottomRightRadius: "22px",
                        borderTopLeftRadius: "22px",
                        borderTopRightRadius: "22px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="533"
                          height="1159"
                          sizes="(min-width: 1200px) calc(280px * 0.9), (max-width: 809.98px) calc(280px * 0.9), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 0.9)"
                          srcset="/assets/e6Q9fCDRVmQMpwsjARolrXLwWk.jpg?width=533&amp;height=1159 533w"
                          src="/assets/e6Q9fCDRVmQMpwsjARolrXLwWk.jpg?width=533&amp;height=1159"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-w6ia9i"
                      data-framer-name="iPhone Borders"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="1888"
                          height="3832"
                          sizes="(min-width: 1200px) max(280px, 330px), (max-width: 809.98px) max(280px, 210px), (min-width: 810px) and (max-width: 1199.98px) 280px"
                          srcset="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?scale-down-to=2048&amp;width=1888&amp;height=3832 1009w,/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832 1888w"
                          src="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div
                  className="framer-17prp16-container"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "translateY(160px)",
                  }}
                >
                  <div
                    className="framer-DctWk framer-irqwcz framer-v-irqwcz floating-device float-anim-device"
                    data-framer-name="Mockup"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <div className="framer-1a59jhm" data-framer-name="Shadow">
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="2292"
                          height="3366"
                          sizes="(min-width: 1200px) max(calc(280px * 1.6186), calc(330px * 1.6186)), (max-width: 809.98px) max(calc(280px * 1.6186), calc(210px * 1.6186)), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 1.6186)"
                          srcset="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=1024&amp;width=2292&amp;height=3366 697w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=2048&amp;width=2292&amp;height=3366 1394w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366 2292w"
                          src="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-b1om7b"
                      data-framer-name="Screen"
                      style={{
                        borderBottomLeftRadius: "22px",
                        borderBottomRightRadius: "22px",
                        borderTopLeftRadius: "22px",
                        borderTopRightRadius: "22px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="533"
                          height="1159"
                          sizes="(min-width: 1200px) calc(280px * 0.9), (max-width: 809.98px) calc(280px * 0.9), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 0.9)"
                          srcset="/assets/tdZxi7gfJIvCdOD845XdvxHEuY0.jpg?width=533&amp;height=1159 533w"
                          src="/assets/tdZxi7gfJIvCdOD845XdvxHEuY0.jpg?width=533&amp;height=1159"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-w6ia9i"
                      data-framer-name="iPhone Borders"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="1888"
                          height="3832"
                          sizes="(min-width: 1200px) max(280px, 330px), (max-width: 809.98px) max(280px, 210px), (min-width: 810px) and (max-width: 1199.98px) 280px"
                          srcset="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?scale-down-to=2048&amp;width=1888&amp;height=3832 1009w,/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832 1888w"
                          src="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          <VideoReel />
          <div className="framer-14tpd38" style={{ marginTop: "80px", marginBottom: "40px", zIndex: 10, position: "relative" }}>
              <div
                className="framer-vbrgil"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <p
                  className="framer-text framer-styles-preset-10l5j05"
                  data-styles-preset="HXlAqNf5X"
                  style={{ "-FramerTextAlignment": "center" }}
                >
                  Addictive Short Series.
                  <br className="framer-text" />
                  For your phone. In your language. Just for you.
                </p>
              </div>
              <div
                className="framer-19s09d4"
                data-framer-name="Buttons"
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <div className="ssr-variant">
                  <div className="framer-1gmdani-container" id="1gmdani">
                    <button
                      className="framer-4H7Cc framer-6ej7s5 framer-v-6ej7s5"
                      data-framer-name="Button"
                      data-highlight="true"
                      data-reset="button"
                      tabindex="0"
                      style={{
                        backgroundColor: "rgb(252, 211, 2)",
                        borderBottomLeftRadius: "16px",
                        borderBottomRightRadius: "16px",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                      }}
                    >
                      <div
                        className="framer-f1yk4y"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--variable-reference-FwI_rhNnE-w7CzHbZao)",
                          "-FramerLinkTextColor": "rgb(0, 153, 255)",
                          "-FramerLinkTextDecoration": "underline",
                          "-VariableReference-FwI_rhNnEW7CzHbZao":
                            "rgb(0, 0, 0)",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItTWVkaXVt",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "15px",
                            "-FramerFontWeight": "500",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerLineHeight": "1.3em",
                            "-FramerTextAlignment": "left",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--variable-reference-FwI_rhNnE-w7CzHbZao))",
                          }}
                        >
                          Available for iOS &amp; Android
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="ssr-variant">
                  <div className="framer-1gmdani-container" id="1gmdani-signup">
                    {!isLoggedIn && (
                    <button
                      className="custom-signup-btn framer-4H7Cc framer-6ej7s5 framer-v-6ej7s5"
                      data-framer-name="Button"
                      data-highlight="true"
                      data-reset="button"
                      tabindex="0"
                      onClick={() => navigate('/signup')}
                      style={{
                        backgroundColor: "rgb(25, 25, 25)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderBottomLeftRadius: "16px",
                        borderBottomRightRadius: "16px",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                        boxShadow: "0 4px 15px rgba(0, 255, 255, 0.15)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 20px rgba(0, 255, 255, 0.3)";
                        e.currentTarget.style.backgroundColor = "#00ffff";
                        e.currentTarget.style.color = "#000";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 15px rgba(0, 255, 255, 0.15)";
                        e.currentTarget.style.backgroundColor =
                          "rgb(25, 25, 25)";
                        e.currentTarget.style.color = "#fff";
                      }}
                    >
                      <div
                        className="framer-f1yk4y"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItTWVkaXVt",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "15px",
                            "-FramerFontWeight": "500",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerLineHeight": "1.3em",
                            "-FramerTextAlignment": "left",
                            color: "inherit",
                          }}
                        >
                          Signup
                        </p>
                      </div>
                    </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="framer-u9i511"
            data-framer-name="Features Section"
          >
            <div className="framer-mw7ss2" data-framer-name="Container">
              <div
                className="framer-thjlo5"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <h2
                  className="framer-text framer-styles-preset-1qehvgj"
                  data-styles-preset="JZCLFGmi6"
                  style={{ "-FramerTextAlignment": "center" }}
                >
                  What is ChaiShots?
                </h2>
              </div>
              <div className="framer-19kb3iv">
                <div className="framer-72vgpt" data-framer-name="Features">
                  <div className="framer-x5s2qd">
                    <div className="framer-lb7l6f" data-framer-name="share">
                      <div className="ssr-variant">
                        <div
                          className="framer-f13yng"
                          data-framer-name="Frame 2147224442"
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1384"
                              height="1280"
                              sizes="(min-width: 1200px) 321px, (max-width: 809.98px) 321px, (min-width: 810px) and (max-width: 1199.98px) 321px"
                              srcset="/assets/A2Te6o71NhQoKmuGizchrqL3XrY.png?scale-down-to=512&amp;width=1384&amp;height=1280 512w,/assets/A2Te6o71NhQoKmuGizchrqL3XrY.png?scale-down-to=1024&amp;width=1384&amp;height=1280 1024w,/assets/A2Te6o71NhQoKmuGizchrqL3XrY.png?width=1384&amp;height=1280 1384w"
                              src="/assets/A2Te6o71NhQoKmuGizchrqL3XrY.png?width=1384&amp;height=1280"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-qbo9xk" data-framer-name="Access">
                      <div className="ssr-variant hidden-6bv0bu">
                        <div
                          className="framer-1wxqsst"
                          data-framer-component-type="RichTextContainer"
                          style={{ transform: "none" }}
                        >
                          <p
                            className="framer-text framer-styles-preset-offl2h"
                            data-styles-preset="BbRiqeyCW"
                          >
                            Since the first story was told, we’ve been chasing
                            the high it gave us – the gasp at a twist, the
                            shiver of a real moment, the thrill of not knowing
                            what comes next.
                          </p>
                          <p
                            className="framer-text framer-styles-preset-offl2h"
                            data-styles-preset="BbRiqeyCW"
                          >
                            <strong className="framer-text">
                              At ChaiShots, we’ve bottled that feeling into a new
                              format:{" "}
                            </strong>
                            Short Series.
                          </p>
                        </div>
                      </div>
                      <div className="ssr-variant hidden-1eu3j9 hidden-xmru3t">
                        <div
                          className="framer-1wxqsst"
                          data-framer-component-type="RichTextContainer"
                          style={{ transform: "none" }}
                        >
                          <p
                            className="framer-text framer-styles-preset-offl2h"
                            data-styles-preset="BbRiqeyCW"
                            style={{ "-FramerTextAlignment": "left" }}
                          >
                            Since the first story was told, we’ve been chasing
                            the high it gave us – the gasp at a twist, the
                            shiver of a real moment, the thrill of not knowing
                            what comes next.
                          </p>
                          <p
                            className="framer-text framer-styles-preset-offl2h"
                            data-styles-preset="BbRiqeyCW"
                            style={{ "-FramerTextAlignment": "left" }}
                          >
                            <strong className="framer-text">
                              At ChaiShots, we’ve bottled that feeling into a new
                              format:{" "}
                            </strong>
                            Short Series.
                          </p>
                        </div>
                      </div>
                      <div className="framer-uj39ap">
                        <div className="ssr-variant">
                          <div
                            className="framer-1rekahh"
                            data-framer-name="Group 39233"
                          >
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                width="1516"
                                height="348"
                                sizes="(min-width: 1200px) 281px, (max-width: 809.98px) 281px, (min-width: 810px) and (max-width: 1199.98px) 281px"
                                srcset="/assets/LVvGw5vfQurpbTOU202F7rgdtg.png?scale-down-to=512&amp;width=1516&amp;height=348 512w,/assets/LVvGw5vfQurpbTOU202F7rgdtg.png?scale-down-to=1024&amp;width=1516&amp;height=348 1024w,/assets/LVvGw5vfQurpbTOU202F7rgdtg.png?width=1516&amp;height=348 1516w"
                                src="/assets/LVvGw5vfQurpbTOU202F7rgdtg.png?width=1516&amp;height=348"
                                alt=""
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="ssr-variant">
                          <div className="framer-12hxt05" data-framer-name="44">
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                width="1516"
                                height="348"
                                sizes="(min-width: 1200px) 281px, (max-width: 809.98px) 281px, (min-width: 810px) and (max-width: 1199.98px) 281px"
                                srcset="/assets/hyWLBZLTLKBDlg8TDTz9Bmsxn4Q.png?scale-down-to=512&amp;width=1516&amp;height=348 512w,/assets/hyWLBZLTLKBDlg8TDTz9Bmsxn4Q.png?scale-down-to=1024&amp;width=1516&amp;height=348 1024w,/assets/hyWLBZLTLKBDlg8TDTz9Bmsxn4Q.png?width=1516&amp;height=348 1516w"
                                src="/assets/hyWLBZLTLKBDlg8TDTz9Bmsxn4Q.png?width=1516&amp;height=348"
                                alt=""
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-3dj2vk">
                        <div className="ssr-variant">
                          <div className="framer-1g755go" data-framer-name="1">
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                width="1516"
                                height="348"
                                sizes="(min-width: 1200px) 281px, (max-width: 809.98px) 279px, (min-width: 810px) and (max-width: 1199.98px) 260px"
                                srcset="/assets/3OTatqgqF2sYdEql1vDcx7Jw18.png?scale-down-to=512&amp;width=1516&amp;height=348 512w,/assets/3OTatqgqF2sYdEql1vDcx7Jw18.png?scale-down-to=1024&amp;width=1516&amp;height=348 1024w,/assets/3OTatqgqF2sYdEql1vDcx7Jw18.png?width=1516&amp;height=348 1516w"
                                src="/assets/3OTatqgqF2sYdEql1vDcx7Jw18.png?width=1516&amp;height=348"
                                alt=""
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="ssr-variant">
                          <div className="framer-1pp18ej" data-framer-name="Ee">
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                width="1516"
                                height="348"
                                sizes="(min-width: 1200px) 280px, (max-width: 809.98px) 280px, (min-width: 810px) and (max-width: 1199.98px) 280px"
                                srcset="/assets/D3RoxUleYVOVXI5g1ZF73dBkgKM.png?scale-down-to=512&amp;width=1516&amp;height=348 512w,/assets/D3RoxUleYVOVXI5g1ZF73dBkgKM.png?scale-down-to=1024&amp;width=1516&amp;height=348 1024w,/assets/D3RoxUleYVOVXI5g1ZF73dBkgKM.png?width=1516&amp;height=348 1516w"
                                src="/assets/D3RoxUleYVOVXI5g1ZF73dBkgKM.png?width=1516&amp;height=348"
                                alt=""
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="framer-10r46mx"
            data-framer-name="Features Section"
          >
            <div className="framer-1aukq34" data-framer-name="Container">
              <div
                className="framer-52wtv3"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <h2
                  className="framer-text framer-styles-preset-1qehvgj"
                  data-styles-preset="JZCLFGmi6"
                  style={{ "-FramerTextAlignment": "center" }}
                >
                  How ChaiShots Works
                </h2>
              </div>
              <div className="framer-elj0ff">
                <div className="framer-1yy1n9f">
                  <div className="ssr-variant">
                    <div
                      className="framer-11i10tf"
                      data-framer-name="Frame 2147224448"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="846"
                          height="332"
                          sizes="(min-width: 1200px) 280px, (max-width: 809.98px) 280px, (min-width: 810px) and (max-width: 1199.98px) 280px"
                          srcset="/assets/mfADGQmwwQtZ0bG3QhHlpPQCiic.png?scale-down-to=512&amp;width=846&amp;height=332 512w,/assets/mfADGQmwwQtZ0bG3QhHlpPQCiic.png?width=846&amp;height=332 846w"
                          src="/assets/mfADGQmwwQtZ0bG3QhHlpPQCiic.png?width=846&amp;height=332"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div className="framer-1g9zft1" data-framer-name="Erwer">
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="846"
                          height="332"
                          sizes="(min-width: 1200px) 285px, (max-width: 809.98px) 285px, (min-width: 810px) and (max-width: 1199.98px) 285px"
                          srcset="/assets/XWwo6KRfH5QJtrPBV4ejhA2pLak.png?scale-down-to=512&amp;width=846&amp;height=332 512w,/assets/XWwo6KRfH5QJtrPBV4ejhA2pLak.png?width=846&amp;height=332 846w"
                          src="/assets/XWwo6KRfH5QJtrPBV4ejhA2pLak.png?width=846&amp;height=332"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div className="framer-61d7nm" data-framer-name="Dgs">
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="846"
                          height="332"
                          sizes="(min-width: 1200px) 283px, (max-width: 809.98px) 283px, (min-width: 810px) and (max-width: 1199.98px) 283px"
                          srcset="/assets/NQMy3dN9oCVIik1X7yznWiiMvg.png?scale-down-to=512&amp;width=846&amp;height=332 512w,/assets/NQMy3dN9oCVIik1X7yznWiiMvg.png?width=846&amp;height=332 846w"
                          src="/assets/NQMy3dN9oCVIik1X7yznWiiMvg.png?width=846&amp;height=332"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="framer-fbvb07 hidden-xmru3t hidden-1eu3j9"
            data-framer-name="Features Section"
          >
            <div
              className="framer-dwvrlw hidden-xmru3t"
              data-framer-name="Header"
            >
              <div className="framer-fes1su" data-framer-name="Quality">
                <div
                  className="framer-jh0ao7"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <h2
                    className="framer-text framer-styles-preset-1qehvgj"
                    data-styles-preset="JZCLFGmi6"
                    style={{ "-FramerTextAlignment": "center" }}
                  >
                    Introducing <br className="framer-text" />
                    Clap 👏🏻
                  </h2>
                </div>
                <div
                  className="framer-1ns37gm"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <p
                    className="framer-text framer-styles-preset-1o3yn0"
                    data-styles-preset="wX3pidG6I"
                    style={{ "-FramerTextAlignment": "center" }}
                  >
                    Watching is fun.{" "}
                    <strong className="framer-text">
                      Appreciating is better.
                    </strong>
                  </p>
                  <p
                    className="framer-text framer-styles-preset-1o3yn0"
                    data-styles-preset="wX3pidG6I"
                    style={{ "-FramerTextAlignment": "center" }}
                  >
                    <strong className="framer-text">
                      Clap lets you send love, notes, and even money directly to
                      creators.
                    </strong>
                  </p>
                </div>
                <div className="framer-8xbw6m">
                  <div className="ssr-variant">
                    <div
                      className="framer-12io3ul"
                      data-framer-name="Group 39217"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="1300"
                          height="400"
                          sizes="(min-width: 1200px) max(304px, 271.5px), (min-width: 810px) and (max-width: 1199.98px) max(304px, 271.5px), (max-width: 809.98px) max(304px, 271.5px)"
                          srcset="/assets/6YNskoJWIU0Tz3yUlRvhKIgcU.png?scale-down-to=512&amp;width=1300&amp;height=400 512w,/assets/6YNskoJWIU0Tz3yUlRvhKIgcU.png?scale-down-to=1024&amp;width=1300&amp;height=400 1024w,/assets/6YNskoJWIU0Tz3yUlRvhKIgcU.png?width=1300&amp;height=400 1300w"
                          src="/assets/6YNskoJWIU0Tz3yUlRvhKIgcU.png?width=1300&amp;height=400"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-7fchuf"
                      data-framer-name="Group 39219"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="1300"
                          height="400"
                          sizes="(min-width: 1200px) max(304px, 271.5px), (min-width: 810px) and (max-width: 1199.98px) max(304px, 271.5px), (max-width: 809.98px) max(304px, 271.5px)"
                          srcset="/assets/yJ7T7jq4ziwZXXA6buf5JYAdyYA.png?scale-down-to=512&amp;width=1300&amp;height=400 512w,/assets/yJ7T7jq4ziwZXXA6buf5JYAdyYA.png?scale-down-to=1024&amp;width=1300&amp;height=400 1024w,/assets/yJ7T7jq4ziwZXXA6buf5JYAdyYA.png?width=1300&amp;height=400 1300w"
                          src="/assets/yJ7T7jq4ziwZXXA6buf5JYAdyYA.png?width=1300&amp;height=400"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-140w1t2"
                      data-framer-name="Group 39218"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="1300"
                          height="400"
                          sizes="(min-width: 1200px) max(304px, 271.5px), (min-width: 810px) and (max-width: 1199.98px) max(304px, 271.5px), (max-width: 809.98px) max(304px, 271.5px)"
                          srcset="/assets/dP3oZxrGrv5IN1vehORQrsWTLpM.png?scale-down-to=512&amp;width=1300&amp;height=400 512w,/assets/dP3oZxrGrv5IN1vehORQrsWTLpM.png?scale-down-to=1024&amp;width=1300&amp;height=400 1024w,/assets/dP3oZxrGrv5IN1vehORQrsWTLpM.png?width=1300&amp;height=400 1300w"
                          src="/assets/dP3oZxrGrv5IN1vehORQrsWTLpM.png?width=1300&amp;height=400"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="framer-a24j14"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <p
                    className="framer-text framer-styles-preset-1o3yn0"
                    data-styles-preset="wX3pidG6I"
                    style={{ "-FramerTextAlignment": "center" }}
                  >
                    Every clap ={" "}
                    <strong className="framer-text">
                      applause + recognition + income
                    </strong>
                    .
                  </p>
                  <p
                    className="framer-text framer-styles-preset-1o3yn0"
                    data-styles-preset="wX3pidG6I"
                    style={{ "-FramerTextAlignment": "center" }}
                  >
                    Stories aren’t built by algorithms. They’re built by people.
                    Clap is how you say thank you.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="framer-dhdvr hidden-6bv0bu"
            data-framer-name="Features Section"
          >
            <div className="framer-q7bzbu" data-framer-name="Header">
              <div className="framer-ip1z28" data-framer-name="Container">
                <div
                  className="framer-cku216"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <h2
                    className="framer-text framer-styles-preset-1qehvgj"
                    data-styles-preset="JZCLFGmi6"
                    style={{ "-FramerTextAlignment": "center" }}
                  >
                    Introducing Clap
                  </h2>
                </div>
                <div
                  className="framer-atmaig"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <p
                    style={{
                      "-FontSelector": "SW50ZXItTWVkaXVt",
                      "-FramerFontSize": "17px",
                      "-FramerFontWeight": "500",
                      "-FramerLetterSpacing": "-0.03em",
                      "-FramerTextAlignment": "center",
                      "-FramerTextColor":
                        "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                    }}
                    className="framer-text"
                  >
                    Watching is fun. Appreciating is better.
                  </p>
                  <p
                    style={{
                      "-FontSelector": "SW50ZXItTWVkaXVt",
                      "-FramerFontSize": "17px",
                      "-FramerFontWeight": "500",
                      "-FramerLetterSpacing": "-0.03em",
                      "-FramerTextAlignment": "center",
                      "-FramerTextColor":
                        "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                    }}
                    className="framer-text"
                  >
                    Clap lets you send love, notes, and even money directly to
                    creators.
                  </p>
                </div>
                <div className="framer-xssu4l">
                  <div className="ssr-variant">
                    <div
                      className="framer-vh302a"
                      data-framer-name="Group 39217"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="1300"
                          height="400"
                          sizes="(min-width: 1200px) max(304px, 271.5px), (min-width: 810px) and (max-width: 1199.98px) max(304px, 271.5px), (max-width: 809.98px) max(304px, 271.5px)"
                          srcset="/assets/6YNskoJWIU0Tz3yUlRvhKIgcU.png?scale-down-to=512&amp;width=1300&amp;height=400 512w,/assets/6YNskoJWIU0Tz3yUlRvhKIgcU.png?scale-down-to=1024&amp;width=1300&amp;height=400 1024w,/assets/6YNskoJWIU0Tz3yUlRvhKIgcU.png?width=1300&amp;height=400 1300w"
                          src="/assets/6YNskoJWIU0Tz3yUlRvhKIgcU.png?width=1300&amp;height=400"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-17g2moz"
                      data-framer-name="Group 39218"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="1300"
                          height="400"
                          sizes="(min-width: 1200px) max(304px, 271.5px), (min-width: 810px) and (max-width: 1199.98px) max(304px, 271.5px), (max-width: 809.98px) max(304px, 271.5px)"
                          srcset="/assets/dP3oZxrGrv5IN1vehORQrsWTLpM.png?scale-down-to=512&amp;width=1300&amp;height=400 512w,/assets/dP3oZxrGrv5IN1vehORQrsWTLpM.png?scale-down-to=1024&amp;width=1300&amp;height=400 1024w,/assets/dP3oZxrGrv5IN1vehORQrsWTLpM.png?width=1300&amp;height=400 1300w"
                          src="/assets/dP3oZxrGrv5IN1vehORQrsWTLpM.png?width=1300&amp;height=400"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-15owvsl"
                      data-framer-name="Group 39219"
                    >
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="1300"
                          height="400"
                          sizes="(min-width: 1200px) max(304px, 271.5px), (min-width: 810px) and (max-width: 1199.98px) max(304px, 271.5px), (max-width: 809.98px) max(304px, 271.5px)"
                          srcset="/assets/yJ7T7jq4ziwZXXA6buf5JYAdyYA.png?scale-down-to=512&amp;width=1300&amp;height=400 512w,/assets/yJ7T7jq4ziwZXXA6buf5JYAdyYA.png?scale-down-to=1024&amp;width=1300&amp;height=400 1024w,/assets/yJ7T7jq4ziwZXXA6buf5JYAdyYA.png?width=1300&amp;height=400 1300w"
                          src="/assets/yJ7T7jq4ziwZXXA6buf5JYAdyYA.png?width=1300&amp;height=400"
                          alt=""
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="framer-1v9hml5"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <p
                    className="framer-text framer-styles-preset-offl2h"
                    data-styles-preset="BbRiqeyCW"
                    style={{ "-FramerTextAlignment": "center" }}
                  >
                    Every clap ={" "}
                    <strong className="framer-text">
                      Applause + Recognition + Income
                    </strong>
                    .
                  </p>
                  <p
                    className="framer-text framer-styles-preset-offl2h"
                    data-styles-preset="BbRiqeyCW"
                    style={{ "-FramerTextAlignment": "center" }}
                  >
                    Stories aren’t built by algorithms. They’re built by people.
                    Clap is how you say thank you.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="framer-aq2y3k hidden-xmru3t hidden-1eu3j9"
            data-framer-name="Features Section"
          >
            <div className="framer-1nmow8x" data-framer-name="Container">
              <div
                className="framer-1n20o5d"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <h2
                  className="framer-text framer-styles-preset-1qehvgj"
                  data-styles-preset="JZCLFGmi6"
                  style={{ "-FramerTextAlignment": "center" }}
                >
                  Why ChaiShots?
                </h2>
              </div>
              <div className="framer-1vve6z7">
                <div className="framer-1gzpvdn" data-framer-name="Features">
                  <div className="framer-13pycqf">
                    <div className="framer-154s0hn" data-framer-name="Quality">
                      <div
                        data-framer-component-type="SVG"
                        data-framer-name="Group 39226"
                        parentsize="0"
                        _constraints="[object Object]"
                        rotation="0"
                        shadows=""
                        className="framer-1f61uei"
                        aria-hidden="true"
                        style={{
                          imageRendering: "pixelated",
                          flexShrink: "0",
                          backgroundSize: "100% 100%",
                          backgroundImage:
                            "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><path d=%22M 35.932 36.375 L 28.546 31.944 L 28.546 40.807 Z%22 fill=%22rgb(255,215,0)%22 /></path><path d=%22M 21.159 21.854 L 21.159 21.602 C 21.159 19.154 23.143 17.17 25.591 17.17 L 37.409 17.17 C 39.857 17.17 41.841 19.154 41.841 21.602 L 41.841 21.854 C 43.562 22.463 44.795 24.104 44.795 26.034 L 44.795 26.286 C 46.517 26.894 47.75 28.536 47.75 30.466 L 47.75 42.284 C 47.75 44.731 45.766 46.716 43.318 46.716 L 19.682 46.716 C 17.234 46.716 15.25 44.731 15.25 42.284 L 15.25 30.466 C 15.25 28.536 16.483 26.894 18.204 26.286 L 18.204 26.034 C 18.204 24.104 19.438 22.463 21.159 21.854 Z M 24.114 21.602 L 38.886 21.602 C 38.886 20.786 38.225 20.125 37.409 20.125 L 25.591 20.125 C 24.775 20.125 24.114 20.786 24.114 21.602 Z M 22.636 24.557 C 21.821 24.557 21.159 25.218 21.159 26.034 L 41.841 26.034 C 41.841 25.218 41.18 24.557 40.364 24.557 Z M 18.204 30.466 L 18.204 42.284 C 18.204 43.1 18.866 43.761 19.682 43.761 L 43.318 43.761 C 44.134 43.761 44.795 43.1 44.795 42.284 L 44.795 30.466 C 44.795 29.65 44.134 28.988 43.318 28.988 L 19.682 28.988 C 18.866 28.988 18.204 29.65 18.204 30.466 Z%22 fill=%22rgb(255,215,0)%22 /></path></svg>')",
                        }}
                      ></div>
                      <div
                        className="framer-uum67k"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-3lytcq"
                          data-styles-preset="AQs51QJpd"
                          style={{ "-FramerTextAlignment": "left" }}
                        >
                          A New Category: The Short Series
                        </p>
                      </div>
                      <div
                        className="framer-1mn3sjs"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-1o3yn0"
                          data-styles-preset="wX3pidG6I"
                          style={{
                            "-FramerTextAlignment": "left",
                            "-FramerTextColor":
                              "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                          }}
                        >
                          Stories told in{" "}
                          <strong className="framer-text">
                            two-minute bursts
                          </strong>
                          , stacked into 10–100 episodes. A whole new way to
                          binge - original, cinematic, addictive.
                        </p>
                      </div>
                    </div>
                    <div className="framer-arr013" data-framer-name="Quality">
                      <div
                        data-framer-component-type="SVG"
                        data-framer-name="Group 39227"
                        parentsize="0"
                        _constraints="[object Object]"
                        rotation="0"
                        shadows=""
                        className="framer-piz0bl"
                        aria-hidden="true"
                        style={{
                          imageRendering: "pixelated",
                          flexShrink: "0",
                          backgroundSize: "100% 100%",
                          backgroundImage:
                            "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><path d=%22M 35.977 26.623 C 38.83 25.377 41.441 28.128 40.139 30.999 C 40.524 31.247 40.914 31.386 41.264 31.707 C 42.312 32.674 42.548 34.167 41.962 35.461 C 41.743 35.951 41.311 36.253 41.133 36.688 C 43.431 37.849 43.608 40.328 41.767 42.093 C 39.038 44.71 35.586 46.959 32.774 49.529 C 32.661 49.631 32.513 49.752 32.454 49.897 C 33.745 49.897 35.053 49.698 36.249 49.202 C 37.605 48.646 38.688 47.661 39.819 46.754 C 42.584 44.541 45.224 42.165 48.007 39.971 C 48.806 39.058 48.202 37.873 46.971 38.079 C 46.633 38.133 46.527 38.417 46.296 38.496 C 45.153 38.858 44.165 37.698 44.769 36.658 C 45.266 35.8 47.356 34.838 47.539 33.944 C 47.628 33.514 47.604 33.007 47.243 32.716 C 46.249 31.912 45.745 33.297 44.869 33.345 C 43.946 33.393 43.282 32.348 43.691 31.495 C 44.029 30.788 45.627 30.087 45.745 29.343 C 45.811 28.92 45.799 28.388 45.438 28.098 C 44.17 27.094 43.265 29.966 41.95 28.521 C 40.707 27.149 43.164 25.661 44.348 25.607 C 46.77 25.492 48.717 28.327 47.474 30.552 C 49.434 31.32 50.298 33.514 49.138 35.388 L 48.469 36.18 C 50.292 37.033 50.997 39.33 49.771 41.023 C 46.385 43.828 43.123 46.929 39.6 49.559 C 37.131 51.403 34.438 52.243 31.347 51.82 C 30.933 51.765 30.086 51.463 29.796 51.475 C 29.571 51.481 28.795 51.868 28.47 51.953 C 22.188 53.591 17.748 50.121 14.527 44.995 C 11.401 40.025 12.674 34.107 16.825 30.274 C 17.553 29.603 20.164 27.348 20.921 27.07 C 23.047 26.302 24.077 27.947 24.598 29.724 C 24.628 29.827 24.539 29.887 24.734 29.857 L 30.844 24.742 C 32.762 23.098 35.556 24.126 35.989 26.629 Z M 32.869 25.915 C 32.543 25.933 32.211 26.254 31.957 26.441 C 28.47 29.011 25.267 32.287 21.75 34.856 C 21.004 35.334 19.968 34.645 19.962 33.78 C 19.956 32.323 22.532 31.852 22.597 30.274 C 22.626 29.579 22.194 28.612 21.419 29.077 C 18.867 31.308 16.096 32.88 15.131 36.41 C 13.906 40.884 16.008 44.166 18.837 47.304 C 22.052 50.865 27.079 51.227 30.903 48.446 C 34.171 46.071 37.185 42.975 40.447 40.557 C 41.708 39.608 40.595 37.825 39.233 38.671 L 34.503 42.607 C 33.236 43.272 32.022 41.742 32.993 40.6 C 35.018 38.768 37.492 37.154 39.458 35.292 C 39.973 34.808 40.393 34.421 40.186 33.629 C 40.015 32.976 39.18 32.674 38.647 33.079 C 36.474 34.82 34.402 36.7 32.223 38.429 C 31.791 38.774 30.933 39.59 30.418 39.638 C 29.091 39.759 28.63 38.048 29.648 37.281 L 38.055 30.359 C 38.978 29.319 38.043 27.693 36.794 28.521 L 28.008 35.8 C 26.522 36.41 25.516 34.82 26.706 33.635 C 28.594 31.749 31.252 30.135 33.218 28.279 C 33.366 28.134 33.662 27.88 33.757 27.723 C 34.195 27.01 33.792 25.855 32.869 25.909 Z M 33.757 12.035 C 31.181 8.825 26.954 12.61 29.151 15.904 L 33.769 20.892 C 33.887 20.91 34.165 20.583 34.254 20.487 C 35.657 18.975 37.125 17.446 38.446 15.904 C 40.571 13.414 37.161 8.885 34.1 11.697 C 33.999 11.787 33.928 12.078 33.751 12.035 Z M 42.933 17.802 C 42.489 18.141 39.949 20.71 39.677 21.127 C 39.103 22.016 40.038 22.947 41.08 22.101 C 41.483 21.774 44.011 19.205 44.165 18.885 C 44.319 18.564 44.384 18.074 44.076 17.79 C 43.721 17.458 43.288 17.53 42.927 17.802 Z M 22.952 19.374 C 23.207 19.743 25.64 22.052 26.031 22.324 C 26.919 22.935 27.771 22.07 27.203 21.224 C 26.865 20.728 24.61 18.606 24.083 18.226 C 23.864 18.068 23.663 17.929 23.384 17.966 C 22.638 18.062 22.567 18.824 22.952 19.38 Z%22 fill=%22rgb(255,215,0)%22 /></path></svg>')",
                        }}
                      ></div>
                      <div
                        className="framer-17caeln"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-3lytcq"
                          data-styles-preset="AQs51QJpd"
                          style={{ "-FramerTextAlignment": "left" }}
                        >
                          India’s First Creator-First OTT
                        </p>
                      </div>
                      <div
                        className="framer-1h6bl2z"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-1o3yn0"
                          data-styles-preset="wX3pidG6I"
                          style={{
                            "-FramerTextAlignment": "left",
                            "-FramerTextColor":
                              "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                          }}
                        >
                          With <strong className="framer-text">Claps</strong>,
                          fans can directly appreciate and support actors,
                          writers, directors, and debutants. Because creators
                          deserve more than credits - they deserve applause.
                        </p>
                      </div>
                    </div>
                    <div className="framer-3ckkeg" data-framer-name="Quality">
                      <div
                        data-framer-component-type="SVG"
                        data-framer-name="Group 39229"
                        parentsize="0"
                        _constraints="[object Object]"
                        rotation="0"
                        shadows=""
                        className="framer-t28h2h"
                        aria-hidden="true"
                        style={{
                          imageRendering: "pixelated",
                          flexShrink: "0",
                          backgroundSize: "100% 100%",
                          backgroundImage:
                            "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><g transform=%22translate(11 11)%22><path d=%22M 0 41 L 0 0 L 41 0 L 41 41 Z%22 fill=%22transparent%22 /></path><path d=%22M 32.505 30.889 C 32.505 33.718 30.427 35.335 27.597 35.335 C 24.162 35.335 21.852 33.314 19.629 27.194 L 21.679 26.356 C 23.238 30.86 24.883 33.227 27.395 33.227 C 29.099 33.227 30.224 32.275 30.224 30.629 C 30.224 29.301 29.33 28.262 28.203 27.453 C 27.482 27.655 26.616 27.8 25.634 27.886 L 25.172 25.837 C 28.781 25.375 29.734 24.595 29.734 23.007 C 29.734 21.737 28.896 20.928 27.337 20.928 C 26.038 20.928 24.797 21.333 23.555 22.083 L 22.805 20.062 C 24.133 19.312 25.634 18.879 27.424 18.879 C 30.715 18.879 32.043 20.813 32.043 23.036 C 32.043 24.537 31.495 25.75 30.196 26.587 L 30.253 26.645 C 31.177 26.876 32.188 26.962 33.083 26.962 C 33.978 26.962 34.931 26.876 35.941 26.616 L 35.941 21.217 L 33.833 21.217 L 33.833 19.167 L 41.282 19.167 L 41.282 21.217 L 38.279 21.217 L 38.279 37.125 L 35.941 37.125 L 35.941 28.752 C 35.161 28.955 34.353 29.012 33.545 29.012 C 33.083 29.012 32.534 28.983 31.986 28.897 C 32.332 29.503 32.505 30.196 32.505 30.889 Z%22 fill=%22rgb(255,215,0)%22 /></path><path d=%22M 10.784 22.778 C 8.956 22.778 7.362 22.575 6.001 22.171 C 4.661 21.747 3.544 21.159 2.65 20.407 C 1.757 19.655 1.087 18.778 0.64 17.775 C 0.213 16.773 0 15.693 0 14.537 C 0 13.149 0.254 11.963 0.762 10.98 C 1.269 9.997 1.95 9.254 2.803 8.753 C 3.676 8.233 4.661 7.972 5.758 7.972 C 6.57 7.972 7.271 8.127 7.86 8.435 C 8.469 8.724 8.936 9.148 9.261 9.707 C 9.606 10.247 9.779 10.893 9.779 11.645 C 9.779 12.416 9.606 13.11 9.261 13.727 C 8.916 14.325 8.398 14.797 7.707 15.144 C 7.017 15.472 6.133 15.635 5.057 15.635 C 4.042 15.635 3.158 15.414 2.407 14.97 C 1.655 14.527 1.076 14.084 0.67 13.64 L 1.401 11.847 C 1.564 12.059 1.787 12.31 2.072 12.599 C 2.376 12.869 2.762 13.11 3.229 13.322 C 3.696 13.515 4.255 13.611 4.905 13.611 C 5.717 13.611 6.326 13.447 6.733 13.12 C 7.159 12.792 7.372 12.339 7.372 11.761 C 7.372 11.201 7.21 10.777 6.885 10.488 C 6.56 10.18 6.133 10.026 5.605 10.026 C 4.651 10.026 3.879 10.401 3.29 11.153 C 2.701 11.905 2.407 12.965 2.407 14.334 L 2.407 14.594 C 2.407 15.578 2.681 16.522 3.229 17.428 C 3.798 18.334 4.691 19.077 5.91 19.655 C 7.149 20.214 8.774 20.494 10.784 20.494 C 13.79 20.494 16.024 19.992 17.486 18.99 C 18.949 17.968 19.68 16.368 19.68 14.19 C 19.68 13.476 19.568 12.821 19.345 12.223 C 19.121 11.606 18.776 11.105 18.309 10.72 C 17.862 10.334 17.283 10.141 16.573 10.141 C 16.105 10.141 15.669 10.295 15.262 10.604 C 14.877 10.893 14.684 11.365 14.684 12.021 C 14.684 12.773 14.948 13.399 15.476 13.9 C 16.004 14.382 16.694 14.758 17.547 15.028 L 17.547 17.11 L 8.134 17.11 L 8.134 14.97 L 14.806 14.97 L 14.531 15.173 C 13.82 14.845 13.262 14.373 12.856 13.756 C 12.47 13.139 12.277 12.426 12.277 11.616 C 12.277 11.038 12.429 10.469 12.734 9.91 C 13.039 9.351 13.516 8.888 14.166 8.522 C 14.836 8.156 15.679 7.972 16.694 7.972 C 17.75 7.972 18.685 8.242 19.497 8.782 C 20.33 9.322 20.99 10.064 21.477 11.009 C 21.965 11.934 22.208 13.004 22.208 14.218 C 22.208 15.664 21.944 16.927 21.416 18.007 C 20.909 19.086 20.157 19.983 19.162 20.696 C 18.187 21.39 16.989 21.91 15.567 22.258 C 14.166 22.605 12.572 22.778 10.784 22.778 Z%22 fill=%22rgb(255,215,0)%22 /></path></g></svg>')",
                        }}
                      ></div>
                      <div
                        className="framer-fj5s01"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-3lytcq"
                          data-styles-preset="AQs51QJpd"
                          style={{ "-FramerTextAlignment": "left" }}
                        >
                          Regional &amp; Culturally Rooted
                        </p>
                      </div>
                      <div
                        className="framer-12iq6ia"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-1o3yn0"
                          data-styles-preset="wX3pidG6I"
                          style={{
                            "-FramerTextAlignment": "left",
                            "-FramerTextColor":
                              "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                          }}
                        >
                          Entertainment in your language, reflecting your world.
                          Clean, genuine stories that feel closer to home than
                          anything dubbed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-10k7tu">
                    <div className="framer-11ugod6" data-framer-name="Quality">
                      <div
                        data-framer-component-type="SVG"
                        data-framer-name="Group 39228"
                        parentsize="0"
                        _constraints="[object Object]"
                        rotation="0"
                        shadows=""
                        className="framer-ojwxlg"
                        aria-hidden="true"
                        style={{
                          imageRendering: "pixelated",
                          flexShrink: "0",
                          backgroundSize: "100% 100%",
                          backgroundImage:
                            "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><path d=%22M 45.761 32.756 C 45.261 31.993 45.261 31.006 45.761 30.242 L 48.263 26.429 C 49.183 25.02 49.246 23.231 48.427 21.757 C 47.601 20.279 46.051 19.434 44.406 19.551 L 39.944 19.868 C 39.05 19.932 38.213 19.439 37.82 18.612 L 35.858 14.478 C 35.13 12.95 33.653 12 31.999 12 C 30.345 12 28.872 12.95 28.145 14.478 L 26.181 18.612 C 25.785 19.439 24.954 19.934 24.057 19.868 L 19.594 19.551 C 17.931 19.434 16.4 20.279 15.576 21.757 C 14.753 23.23 14.817 25.02 15.735 26.429 L 18.238 30.242 C 18.738 31.006 18.738 31.993 18.238 32.756 L 15.74 36.57 C 14.817 37.978 14.753 39.767 15.576 41.242 C 16.4 42.719 17.953 43.564 19.594 43.447 L 24.057 43.13 C 24.956 43.061 25.787 43.559 26.181 44.386 L 28.145 48.52 C 28.87 50.05 30.345 51 31.999 51 C 33.654 51 35.132 50.05 35.858 48.522 L 37.82 44.388 C 38.215 43.56 39.055 43.066 39.944 43.132 L 44.406 43.449 C 46.061 43.566 47.601 42.721 48.427 41.243 C 49.246 39.77 49.183 37.98 48.263 36.571 Z M 38.997 28.098 L 30.945 36.38 C 30.928 36.397 30.92 36.414 30.902 36.433 C 30.697 36.649 30.428 36.752 30.159 36.752 L 30.151 36.752 L 30.146 36.752 C 29.877 36.752 29.608 36.649 29.403 36.433 C 29.387 36.416 29.374 36.399 29.361 36.38 L 25 31.894 C 24.588 31.474 24.588 30.789 24.995 30.364 C 25.406 29.939 26.069 29.939 26.481 30.359 L 30.149 34.134 L 37.513 26.564 C 37.925 26.144 38.587 26.144 38.999 26.569 C 39.409 26.989 39.409 27.677 38.997 28.097 Z%22 fill=%22rgb(255,215,0)%22 /></path></svg>')",
                        }}
                      ></div>
                      <div
                        className="framer-1l88xxm"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-3lytcq"
                          data-styles-preset="AQs51QJpd"
                          style={{ "-FramerTextAlignment": "left" }}
                        >
                          Original Stories. Real Talent
                        </p>
                      </div>
                      <div
                        className="framer-bo373m"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-1o3yn0"
                          data-styles-preset="wX3pidG6I"
                          style={{
                            "-FramerTextAlignment": "left",
                            "-FramerTextColor":
                              "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                          }}
                        >
                          Not recycled content, not shortcuts. Every show is
                          crafted by storytellers with fresh ideas and authentic
                          voices.
                        </p>
                      </div>
                    </div>
                    <div className="framer-12o0qgz" data-framer-name="Quality">
                      <div
                        data-framer-component-type="SVG"
                        data-framer-name="Group 39231"
                        parentsize="0"
                        _constraints="[object Object]"
                        rotation="0"
                        shadows=""
                        className="framer-yatu37"
                        aria-hidden="true"
                        style={{
                          imageRendering: "pixelated",
                          flexShrink: "0",
                          backgroundSize: "100% 100%",
                          backgroundImage:
                            "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><path d=%22M 38.645 13.328 L 42.058 20.625 C 42.144 20.805 42.302 20.922 42.5 20.945 L 50.503 21.93 C 50.981 21.989 51.17 22.574 50.819 22.903 L 44.921 28.395 C 44.773 28.53 44.714 28.719 44.75 28.917 L 46.288 36.822 C 46.378 37.295 45.877 37.655 45.458 37.425 L 38.402 33.527 C 38.226 33.428 38.028 33.428 37.852 33.527 L 30.796 37.425 C 30.376 37.66 29.876 37.295 29.966 36.822 L 31.499 28.917 C 31.535 28.719 31.477 28.534 31.328 28.395 L 25.43 22.903 C 25.079 22.574 25.273 21.989 25.746 21.93 L 33.749 20.945 C 33.947 20.922 34.105 20.805 34.191 20.625 L 37.604 13.328 C 37.807 12.891 38.424 12.891 38.627 13.328 Z M 34.362 48.486 C 34.542 48.297 34.835 48.293 35.025 48.468 C 35.214 48.644 35.219 48.941 35.043 49.13 L 33.402 50.854 C 33.221 51.043 32.928 51.048 32.739 50.872 C 32.55 50.692 32.545 50.399 32.721 50.21 Z M 43.749 38.992 C 43.93 38.807 44.227 38.807 44.412 38.992 C 44.597 39.172 44.597 39.469 44.412 39.654 L 36.391 47.748 C 36.211 47.932 35.913 47.932 35.728 47.748 C 35.543 47.568 35.543 47.271 35.728 47.086 Z M 24.524 50.787 C 24.344 50.602 24.344 50.309 24.524 50.125 L 35.422 39.163 C 35.606 38.983 35.899 38.983 36.084 39.163 C 36.265 39.348 36.265 39.64 36.084 39.825 L 25.187 50.787 C 25.002 50.967 24.709 50.967 24.524 50.787 Z M 36.783 38.438 C 36.594 38.258 36.585 37.966 36.765 37.777 L 38.406 36.052 C 38.587 35.863 38.88 35.854 39.069 36.034 C 39.259 36.214 39.268 36.507 39.087 36.696 L 37.446 38.42 C 37.266 38.609 36.973 38.618 36.783 38.438 Z M 28.208 38.699 C 28.388 38.515 28.686 38.515 28.871 38.699 C 29.055 38.879 29.055 39.177 28.871 39.361 L 20.85 47.455 C 20.669 47.64 20.372 47.64 20.187 47.455 C 20.002 47.275 20.002 46.978 20.187 46.793 Z M 18.821 48.194 C 19.001 48.005 19.294 48 19.483 48.176 C 19.673 48.351 19.677 48.648 19.501 48.837 L 17.86 50.562 C 17.68 50.751 17.387 50.755 17.198 50.58 C 17.008 50.399 17.004 50.107 17.179 49.918 Z M 13.135 45.515 C 12.955 45.331 12.955 45.038 13.135 44.853 L 25.705 32.221 C 25.89 32.041 26.188 32.037 26.368 32.221 C 26.549 32.406 26.549 32.699 26.368 32.883 L 13.798 45.515 C 13.613 45.695 13.32 45.695 13.135 45.515 Z M 27.067 31.497 C 26.878 31.316 26.869 31.024 27.049 30.835 L 28.69 29.111 C 28.871 28.922 29.164 28.913 29.353 29.093 C 29.542 29.273 29.551 29.565 29.371 29.754 L 27.73 31.479 C 27.55 31.668 27.256 31.677 27.067 31.497 Z M 15.142 34.706 C 15.322 34.517 15.615 34.513 15.804 34.688 C 15.994 34.864 15.998 35.161 15.822 35.35 L 14.181 37.074 C 14.001 37.263 13.708 37.268 13.518 37.092 C 13.329 36.917 13.325 36.62 13.5 36.43 Z M 25.191 25.212 C 25.372 25.397 25.372 25.689 25.191 25.874 L 17.17 33.968 C 16.986 34.148 16.693 34.148 16.508 33.968 C 16.327 33.783 16.327 33.491 16.508 33.306 L 24.529 25.212 C 24.713 25.032 25.007 25.032 25.191 25.212 Z%22 fill=%22rgb(255,215,0)%22 /></path></svg>')",
                        }}
                      ></div>
                      <div
                        className="framer-18erv40"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-3lytcq"
                          data-styles-preset="AQs51QJpd"
                          style={{ "-FramerTextAlignment": "left" }}
                        >
                          Platform for Tomorrow’s Stars
                        </p>
                      </div>
                      <div
                        className="framer-sc07gs"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-1o3yn0"
                          data-styles-preset="wX3pidG6I"
                          style={{
                            "-FramerTextAlignment": "left",
                            "-FramerTextColor":
                              "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                          }}
                        >
                          From seasoned actors to debutant writers, ChaiShots is
                          a launchpad where talent is discovered, encouraged,
                          and celebrated.
                        </p>
                      </div>
                    </div>
                    <div className="framer-1bzydsz" data-framer-name="Quality">
                      <div
                        data-framer-component-type="SVG"
                        data-framer-name="Group 39230"
                        parentsize="0"
                        _constraints="[object Object]"
                        rotation="0"
                        shadows=""
                        className="framer-1nvq2gf"
                        aria-hidden="true"
                        style={{
                          imageRendering: "pixelated",
                          flexShrink: "0",
                          backgroundSize: "100% 100%",
                          backgroundImage:
                            "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><path d=%22M 14 20.998 L 14 22.794 L 19.709 22.794 L 17.384 17.349 C 17.344 17.255 17.322 17.159 17.316 17.064 C 15.437 17.4 14 19.039 14 20.998 Z M 31.999 27.693 C 36.11 27.693 39.441 30.997 39.441 35.075 C 39.441 39.153 36.11 42.457 31.999 42.457 C 27.888 42.457 24.557 39.153 24.557 35.075 C 24.557 30.997 27.888 27.693 31.999 27.693 Z M 35.566 35.555 C 36.069 35.235 36.069 34.915 35.566 34.595 L 30.52 31.707 C 29.991 31.436 29.71 31.596 29.682 32.187 L 29.682 37.963 C 29.71 38.554 29.989 38.714 30.52 38.443 L 33.043 36.999 C 33.884 36.517 34.725 36.037 35.566 35.555 Z M 24.652 22.793 L 22.327 17.348 C 22.277 17.235 22.255 17.117 22.255 17 L 19.201 17 L 21.674 22.794 Z M 26.614 22.793 L 29.59 22.793 L 27.265 17.348 C 27.218 17.234 27.193 17.117 27.193 17 L 24.139 17 Z M 34.533 22.793 L 32.208 17.348 C 32.159 17.235 32.136 17.117 32.136 17 L 29.082 17 L 31.555 22.794 Z M 36.496 22.793 L 39.472 22.793 L 37.147 17.348 C 37.097 17.234 37.076 17.117 37.076 17 L 34.022 17 Z M 44.414 22.793 L 42.089 17.348 C 42.04 17.235 42.017 17.117 42.017 17 L 38.963 17 L 41.436 22.794 Z M 46.377 22.793 L 49.998 22.793 L 49.998 20.997 C 49.998 18.798 48.185 17 45.969 17 L 43.903 17 Z M 14 24.595 L 14 42.457 C 14 44.657 15.813 46.455 18.029 46.455 L 45.971 46.455 C 48.187 46.455 50 44.657 50 42.457 L 49.998 24.595 Z%22 fill=%22rgb(255,215,0)%22 /></path></svg>')",
                        }}
                      ></div>
                      <div
                        className="framer-1vc6pj3"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-3lytcq"
                          data-styles-preset="AQs51QJpd"
                          style={{ "-FramerTextAlignment": "left" }}
                        >
                          Entertainment that Fits Your Life
                        </p>
                      </div>
                      <div
                        className="framer-130przf"
                        data-framer-component-type="RichTextContainer"
                        style={{ transform: "none" }}
                      >
                        <p
                          className="framer-text framer-styles-preset-1o3yn0"
                          data-styles-preset="wX3pidG6I"
                          style={{
                            "-FramerTextAlignment": "left",
                            "-FramerTextColor":
                              "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                          }}
                        >
                          Designed for short breaks, chai breaks, cab rides,
                          late nights. Stories that move with you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="framer-7z0njd"
            data-framer-name="Collection Section"
            style={{ height: "auto", minHeight: "auto", paddingBottom: "0px", paddingTop: "80px" }}
          >
            <div
              className="framer-1n8f6vt"
              data-framer-name="Sticky"
              id="sticky"
              style={{ position: "relative", height: "auto", minHeight: "auto" }}
            >
              <motion.div
                className="framer-16i96u5 storytelling-container"
                data-framer-name="A massive collection of shows "
                data-framer-component-type="RichTextContainer"
                initial={{ opacity: 0, y: 80, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: [0.165, 0.84, 0.44, 1] }}
                viewport={{ once: true, margin: "-15%" }}
              >
                <div className="storytelling-glow"></div>
                <h2
                  className="framer-text framer-styles-preset-1qehvgj"
                  data-styles-preset="JZCLFGmi6"
                  style={{ color: "#000000" }}
                >
                  Short-form storytelling is not a trend. It’s a culture.
                </h2>
              </motion.div>
            </div>
          </section>
          <LanguageTickerBlock />
          <div className="ssr-variant hidden-6bv0bu hidden-1eu3j9">
            <div className="framer-4ldeyi-container">
              <div
                className="framer-2kiEZ framer-ro7hij framer-v-ro7hij"
                data-framer-name="Desktop"
                style={{
                  backgroundColor:
                    "var(--token-8e69a887-eee7-4622-8bb4-770a4536d46b, rgb(253, 249, 238))",
                  width: "100%",
                }}
              >
                <div
                  className="framer-109kw9i"
                  data-framer-name="Logo Block"
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    boxShadow: "0px 1px 2px 0px rgba(35, 39, 46, 0.08)",
                  }}
                >
                  <div className="framer-1vfd7km" data-framer-name="Content">
                    <div className="framer-bsjrxk" data-framer-name="Title">
                    </div>
                  </div>
                  <div className="framer-ugzw" data-framer-name="Ticker">
                    <div className="framer-1wahr93-container">
                      <section
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          placeItems: "center",
                          margin: "0",
                          padding: "0px",
                          listStyleType: "none",
                          textIndent: "none",
                          opacity: "0",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          MozMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            placeItems: "center",
                            margin: "0",
                            padding: "0",
                            listStyleType: "none",
                            textIndent: "none",
                            gap: "24px",
                            position: "relative",
                            flexDirection: "column",
                            willChange: "transform",
                            transform: "translateY(-0px)",
                          }}
                        >
                          <li>
                            <div
                              className="framer-c5i6le"
                              data-framer-name="Ticker Wrap"
                              style={{ flexShrink: "0" }}
                            >
                              <div
                                className="framer-1u5cx2g"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-12158fd"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="103"
                                      height="89"
                                      src="/assets/upfMeTXKLLeKEzlqgISL6YzKww.png?width=103&amp;height=89"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1heq407"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1h0qse6"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="132"
                                      height="118"
                                      src="/assets/AMuS9ZF1BvR2qiP0qoqXmdkKmw.png?width=132&amp;height=118"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1xjpnu6"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1qwi2m8"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="145"
                                      height="117"
                                      src="/assets/PNHCVggXhHATlSDtCLacsHlAuok.png?width=145&amp;height=117"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1ezxq7v"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1vk8q00"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="120"
                                      height="97"
                                      src="/assets/BNIklandfRMheMcGyMkHx4hnw.png?width=120&amp;height=97"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="framer-1l1q1ts-container">
                      <section
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          placeItems: "center",
                          margin: "0",
                          padding: "0px",
                          listStyleType: "none",
                          textIndent: "none",
                          opacity: "0",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          MozMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            placeItems: "center",
                            margin: "0",
                            padding: "0",
                            listStyleType: "none",
                            textIndent: "none",
                            gap: "24px",
                            position: "relative",
                            flexDirection: "column",
                            willChange: "transform",
                            transform: "translateY(0px)",
                          }}
                        >
                          <li>
                            <div
                              className="framer-16kv8bc"
                              data-framer-name="Ticker Wrap"
                              style={{ flexShrink: "0" }}
                            >
                              <div
                                className="framer-1ohrfww"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1mbva20"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="108"
                                      height="93"
                                      src="/assets/jsUGMM1ArhIAl4m3ZjZNuOm10EQ.png?width=108&amp;height=93"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-s853d4"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-noqn18"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="125"
                                      height="104"
                                      src="/assets/IrzlvfRcPOVi8oWrkW0zMmBeGg.png?width=125&amp;height=104"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-khoxkp"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-u7f6jo"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="129"
                                      height="109"
                                      src="/assets/4kOzS675dlL2Pd9ecQGWiYqb7Kg.png?width=129&amp;height=109"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-a5cuym"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-15mx5yb"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="147"
                                      height="122"
                                      src="/assets/aoT0mZGSEDmcoo9tcjeCkBBa7s.png?width=147&amp;height=122"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="framer-8w1h1r-container">
                      <section
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          placeItems: "center",
                          margin: "0",
                          padding: "0px",
                          listStyleType: "none",
                          textIndent: "none",
                          opacity: "0",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          MozMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            placeItems: "center",
                            margin: "0",
                            padding: "0",
                            listStyleType: "none",
                            textIndent: "none",
                            gap: "24px",
                            position: "relative",
                            flexDirection: "column",
                            willChange: "transform",
                            transform: "translateY(-0px)",
                          }}
                        >
                          <li>
                            <div
                              className="framer-c5i6le"
                              data-framer-name="Ticker Wrap"
                              style={{ flexShrink: "0" }}
                            >
                              <div
                                className="framer-1u5cx2g"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-12158fd"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="103"
                                      height="89"
                                      src="/assets/upfMeTXKLLeKEzlqgISL6YzKww.png?width=103&amp;height=89"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1heq407"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1h0qse6"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="132"
                                      height="118"
                                      src="/assets/AMuS9ZF1BvR2qiP0qoqXmdkKmw.png?width=132&amp;height=118"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1xjpnu6"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1qwi2m8"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="145"
                                      height="117"
                                      src="/assets/PNHCVggXhHATlSDtCLacsHlAuok.png?width=145&amp;height=117"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1ezxq7v"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1vk8q00"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="120"
                                      height="97"
                                      src="/assets/BNIklandfRMheMcGyMkHx4hnw.png?width=120&amp;height=97"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="framer-xphh0k-container">
                      <section
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          placeItems: "center",
                          margin: "0",
                          padding: "0px",
                          listStyleType: "none",
                          textIndent: "none",
                          opacity: "0",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          MozMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            placeItems: "center",
                            margin: "0",
                            padding: "0",
                            listStyleType: "none",
                            textIndent: "none",
                            gap: "24px",
                            position: "relative",
                            flexDirection: "column",
                            willChange: "transform",
                            transform: "translateY(0px)",
                          }}
                        >
                          <li>
                            <div
                              className="framer-16kv8bc"
                              data-framer-name="Ticker Wrap"
                              style={{ flexShrink: "0" }}
                            >
                              <div
                                className="framer-1ohrfww"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1mbva20"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="108"
                                      height="93"
                                      src="/assets/jsUGMM1ArhIAl4m3ZjZNuOm10EQ.png?width=108&amp;height=93"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-s853d4"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-noqn18"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="125"
                                      height="104"
                                      src="/assets/IrzlvfRcPOVi8oWrkW0zMmBeGg.png?width=125&amp;height=104"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-khoxkp"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-u7f6jo"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="129"
                                      height="109"
                                      src="/assets/4kOzS675dlL2Pd9ecQGWiYqb7Kg.png?width=129&amp;height=109"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-a5cuym"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-15mx5yb"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="147"
                                      height="122"
                                      src="/assets/aoT0mZGSEDmcoo9tcjeCkBBa7s.png?width=147&amp;height=122"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-1eu3j9 hidden-xmru3t">
            <div className="framer-4ldeyi-container">
              <div
                className="framer-2kiEZ framer-ro7hij framer-v-1kn2y7f"
                data-framer-name="Phone"
                style={{
                  backgroundColor:
                    "var(--token-8e69a887-eee7-4622-8bb4-770a4536d46b, rgb(253, 249, 238))",
                  height: "100%",
                  width: "100%",
                }}
              >
                <div
                  className="framer-109kw9i"
                  data-framer-name="Logo Block"
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    boxShadow: "0px 1px 2px 0px rgba(35, 39, 46, 0.08)",
                  }}
                >
                  <div className="framer-1vfd7km" data-framer-name="Content">
                    <div className="framer-bsjrxk" data-framer-name="Title">
                    </div>
                  </div>
                  <div className="framer-ugzw" data-framer-name="Ticker">
                    <div className="framer-1wahr93-container">
                      <section
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          placeItems: "center",
                          margin: "0",
                          padding: "0px",
                          listStyleType: "none",
                          textIndent: "none",
                          opacity: "0",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          MozMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            placeItems: "center",
                            margin: "0",
                            padding: "0",
                            listStyleType: "none",
                            textIndent: "none",
                            gap: "24px",
                            position: "relative",
                            flexDirection: "column",
                            willChange: "transform",
                            transform: "translateY(-0px)",
                          }}
                        >
                          <li>
                            <div
                              className="framer-c5i6le"
                              data-framer-name="Ticker Wrap"
                              style={{ flexShrink: "0" }}
                            >
                              <div
                                className="framer-1u5cx2g"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-12158fd"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="103"
                                      height="89"
                                      src="/assets/upfMeTXKLLeKEzlqgISL6YzKww.png?width=103&amp;height=89"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1heq407"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1h0qse6"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="132"
                                      height="118"
                                      src="/assets/AMuS9ZF1BvR2qiP0qoqXmdkKmw.png?width=132&amp;height=118"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1xjpnu6"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1qwi2m8"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="145"
                                      height="117"
                                      src="/assets/PNHCVggXhHATlSDtCLacsHlAuok.png?width=145&amp;height=117"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1ezxq7v"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1vk8q00"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="120"
                                      height="97"
                                      src="/assets/BNIklandfRMheMcGyMkHx4hnw.png?width=120&amp;height=97"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="framer-1l1q1ts-container">
                      <section
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          placeItems: "center",
                          margin: "0",
                          padding: "0px",
                          listStyleType: "none",
                          textIndent: "none",
                          opacity: "0",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          MozMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            placeItems: "center",
                            margin: "0",
                            padding: "0",
                            listStyleType: "none",
                            textIndent: "none",
                            gap: "24px",
                            position: "relative",
                            flexDirection: "column",
                            willChange: "transform",
                            transform: "translateY(0px)",
                          }}
                        >
                          <li>
                            <div
                              className="framer-16kv8bc"
                              data-framer-name="Ticker Wrap"
                              style={{ flexShrink: "0" }}
                            >
                              <div
                                className="framer-1ohrfww"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1mbva20"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="108"
                                      height="93"
                                      src="/assets/jsUGMM1ArhIAl4m3ZjZNuOm10EQ.png?width=108&amp;height=93"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-s853d4"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-noqn18"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="125"
                                      height="104"
                                      src="/assets/IrzlvfRcPOVi8oWrkW0zMmBeGg.png?width=125&amp;height=104"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-khoxkp"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-u7f6jo"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="129"
                                      height="109"
                                      src="/assets/4kOzS675dlL2Pd9ecQGWiYqb7Kg.png?width=129&amp;height=109"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-a5cuym"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-15mx5yb"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="147"
                                      height="122"
                                      src="/assets/aoT0mZGSEDmcoo9tcjeCkBBa7s.png?width=147&amp;height=122"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="framer-8w1h1r-container">
                      <section
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          placeItems: "center",
                          margin: "0",
                          padding: "0px",
                          listStyleType: "none",
                          textIndent: "none",
                          opacity: "0",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          MozMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            placeItems: "center",
                            margin: "0",
                            padding: "0",
                            listStyleType: "none",
                            textIndent: "none",
                            gap: "24px",
                            position: "relative",
                            flexDirection: "column",
                            willChange: "transform",
                            transform: "translateY(-0px)",
                          }}
                        >
                          <li>
                            <div
                              className="framer-c5i6le"
                              data-framer-name="Ticker Wrap"
                              style={{ flexShrink: "0" }}
                            >
                              <div
                                className="framer-1u5cx2g"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-12158fd"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="103"
                                      height="89"
                                      src="/assets/upfMeTXKLLeKEzlqgISL6YzKww.png?width=103&amp;height=89"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1heq407"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1h0qse6"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="132"
                                      height="118"
                                      src="/assets/AMuS9ZF1BvR2qiP0qoqXmdkKmw.png?width=132&amp;height=118"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1xjpnu6"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1qwi2m8"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="145"
                                      height="117"
                                      src="/assets/PNHCVggXhHATlSDtCLacsHlAuok.png?width=145&amp;height=117"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1ezxq7v"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1vk8q00"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="120"
                                      height="97"
                                      src="/assets/BNIklandfRMheMcGyMkHx4hnw.png?width=120&amp;height=97"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-6bv0bu hidden-xmru3t">
            <div className="framer-4ldeyi-container">
              <div
                className="framer-2kiEZ framer-ro7hij framer-v-1i7egsb"
                data-framer-name="Tablet"
                style={{
                  backgroundColor:
                    "var(--token-8e69a887-eee7-4622-8bb4-770a4536d46b, rgb(253, 249, 238))",
                  width: "100%",
                }}
              >
                <div
                  className="framer-109kw9i"
                  data-framer-name="Logo Block"
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    boxShadow: "0px 1px 2px 0px rgba(35, 39, 46, 0.08)",
                  }}
                >
                  <div className="framer-1vfd7km" data-framer-name="Content">
                    <div className="framer-bsjrxk" data-framer-name="Title">
                    </div>
                  </div>
                  <div className="framer-ugzw" data-framer-name="Ticker">
                    <div className="framer-1wahr93-container">
                      <section
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          placeItems: "center",
                          margin: "0",
                          padding: "0px",
                          listStyleType: "none",
                          textIndent: "none",
                          opacity: "0",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          MozMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            placeItems: "center",
                            margin: "0",
                            padding: "0",
                            listStyleType: "none",
                            textIndent: "none",
                            gap: "24px",
                            position: "relative",
                            flexDirection: "column",
                            willChange: "transform",
                            transform: "translateY(-0px)",
                          }}
                        >
                          <li>
                            <div
                              className="framer-c5i6le"
                              data-framer-name="Ticker Wrap"
                              style={{ flexShrink: "0" }}
                            >
                              <div
                                className="framer-1u5cx2g"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-12158fd"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="103"
                                      height="89"
                                      src="/assets/upfMeTXKLLeKEzlqgISL6YzKww.png?width=103&amp;height=89"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1heq407"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1h0qse6"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="132"
                                      height="118"
                                      src="/assets/AMuS9ZF1BvR2qiP0qoqXmdkKmw.png?width=132&amp;height=118"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1xjpnu6"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1qwi2m8"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="145"
                                      height="117"
                                      src="/assets/PNHCVggXhHATlSDtCLacsHlAuok.png?width=145&amp;height=117"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1ezxq7v"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1vk8q00"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="120"
                                      height="97"
                                      src="/assets/BNIklandfRMheMcGyMkHx4hnw.png?width=120&amp;height=97"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="framer-1l1q1ts-container">
                      <section
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          placeItems: "center",
                          margin: "0",
                          padding: "0px",
                          listStyleType: "none",
                          textIndent: "none",
                          opacity: "0",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          MozMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            placeItems: "center",
                            margin: "0",
                            padding: "0",
                            listStyleType: "none",
                            textIndent: "none",
                            gap: "24px",
                            position: "relative",
                            flexDirection: "column",
                            willChange: "transform",
                            transform: "translateY(0px)",
                          }}
                        >
                          <li>
                            <div
                              className="framer-16kv8bc"
                              data-framer-name="Ticker Wrap"
                              style={{ flexShrink: "0" }}
                            >
                              <div
                                className="framer-1ohrfww"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1mbva20"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="108"
                                      height="93"
                                      src="/assets/jsUGMM1ArhIAl4m3ZjZNuOm10EQ.png?width=108&amp;height=93"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-s853d4"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-noqn18"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="125"
                                      height="104"
                                      src="/assets/IrzlvfRcPOVi8oWrkW0zMmBeGg.png?width=125&amp;height=104"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-khoxkp"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-u7f6jo"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="129"
                                      height="109"
                                      src="/assets/4kOzS675dlL2Pd9ecQGWiYqb7Kg.png?width=129&amp;height=109"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-a5cuym"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-15mx5yb"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="147"
                                      height="122"
                                      src="/assets/aoT0mZGSEDmcoo9tcjeCkBBa7s.png?width=147&amp;height=122"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="framer-8w1h1r-container">
                      <section
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          placeItems: "center",
                          margin: "0",
                          padding: "0px",
                          listStyleType: "none",
                          textIndent: "none",
                          opacity: "0",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          MozMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            placeItems: "center",
                            margin: "0",
                            padding: "0",
                            listStyleType: "none",
                            textIndent: "none",
                            gap: "24px",
                            position: "relative",
                            flexDirection: "column",
                            willChange: "transform",
                            transform: "translateY(-0px)",
                          }}
                        >
                          <li>
                            <div
                              className="framer-c5i6le"
                              data-framer-name="Ticker Wrap"
                              style={{ flexShrink: "0" }}
                            >
                              <div
                                className="framer-1u5cx2g"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-12158fd"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="103"
                                      height="89"
                                      src="/assets/upfMeTXKLLeKEzlqgISL6YzKww.png?width=103&amp;height=89"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1heq407"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1h0qse6"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="132"
                                      height="118"
                                      src="/assets/AMuS9ZF1BvR2qiP0qoqXmdkKmw.png?width=132&amp;height=118"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1xjpnu6"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1qwi2m8"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="145"
                                      height="117"
                                      src="/assets/PNHCVggXhHATlSDtCLacsHlAuok.png?width=145&amp;height=117"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1ezxq7v"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1vk8q00"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="120"
                                      height="97"
                                      src="/assets/BNIklandfRMheMcGyMkHx4hnw.png?width=120&amp;height=97"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="framer-xphh0k-container">
                      <section
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          placeItems: "center",
                          margin: "0",
                          padding: "0px",
                          listStyleType: "none",
                          textIndent: "none",
                          opacity: "0",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          MozMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 98%)",
                          overflow: "hidden",
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            placeItems: "center",
                            margin: "0",
                            padding: "0",
                            listStyleType: "none",
                            textIndent: "none",
                            gap: "24px",
                            position: "relative",
                            flexDirection: "column",
                            willChange: "transform",
                            transform: "translateY(0px)",
                          }}
                        >
                          <li>
                            <div
                              className="framer-16kv8bc"
                              data-framer-name="Ticker Wrap"
                              style={{ flexShrink: "0" }}
                            >
                              <div
                                className="framer-1ohrfww"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-1mbva20"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="108"
                                      height="93"
                                      src="/assets/jsUGMM1ArhIAl4m3ZjZNuOm10EQ.png?width=108&amp;height=93"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-s853d4"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-noqn18"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="125"
                                      height="104"
                                      src="/assets/IrzlvfRcPOVi8oWrkW0zMmBeGg.png?width=125&amp;height=104"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-khoxkp"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-u7f6jo"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="129"
                                      height="109"
                                      src="/assets/4kOzS675dlL2Pd9ecQGWiYqb7Kg.png?width=129&amp;height=109"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-a5cuym"
                                data-framer-name="Logo"
                                style={{
                                  backgroundColor:
                                    "var(--token-3868686b-ba99-44c9-9cde-6d08b1506185, rgb(246, 247, 249))",
                                  borderBottomLeftRadius: "99px",
                                  borderBottomRightRadius: "99px",
                                  borderTopLeftRadius: "99px",
                                  borderTopRightRadius: "99px",
                                }}
                              >
                                <div
                                  className="framer-15mx5yb"
                                  data-framer-name="Image"
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      left: "0",
                                    }}
                                    data-framer-background-image-wrapper="true"
                                  >
                                    <img
                                      decoding="async"
                                      width="147"
                                      height="122"
                                      src="/assets/aoT0mZGSEDmcoo9tcjeCkBBa7s.png?width=147&amp;height=122"
                                      alt=""
                                      style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        cornerShape: "inherit",
                                        objectPosition: "center",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section
            className="framer-1nu35h4 hidden-6bv0bu"
            data-framer-name="Features Section"
            style={{ paddingTop: "20px", marginTop: "-40px" }}
          >
            <div className="framer-k6bxf7" data-framer-name="Container">
              <div
                className="framer-ffh8si"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <h2
                  className="framer-text framer-styles-preset-1qehvgj"
                  data-styles-preset="JZCLFGmi6"
                  style={{ "-FramerTextAlignment": "center" }}
                >
                  Why ChaiShots?
                </h2>
              </div>
              <div className="framer-1bft5rf">
                <div className="framer-5u8we5">
                  <div className="framer-o06dg7" data-framer-name="Quality">
                    <div
                      data-framer-component-type="SVG"
                      data-framer-name="Group 39226"
                      parentsize="0"
                      _constraints="[object Object]"
                      rotation="0"
                      shadows=""
                      className="framer-1l4aczk"
                      aria-hidden="true"
                      style={{
                        imageRendering: "pixelated",
                        flexShrink: "0",
                        backgroundSize: "100% 100%",
                        backgroundImage:
                          "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><path d=%22M 35.932 36.375 L 28.546 31.944 L 28.546 40.807 Z%22 fill=%22rgb(255,215,0)%22 /></path><path d=%22M 21.159 21.854 L 21.159 21.602 C 21.159 19.154 23.143 17.17 25.591 17.17 L 37.409 17.17 C 39.857 17.17 41.841 19.154 41.841 21.602 L 41.841 21.854 C 43.562 22.463 44.795 24.104 44.795 26.034 L 44.795 26.286 C 46.517 26.894 47.75 28.536 47.75 30.466 L 47.75 42.284 C 47.75 44.731 45.766 46.716 43.318 46.716 L 19.682 46.716 C 17.234 46.716 15.25 44.731 15.25 42.284 L 15.25 30.466 C 15.25 28.536 16.483 26.894 18.204 26.286 L 18.204 26.034 C 18.204 24.104 19.438 22.463 21.159 21.854 Z M 24.114 21.602 L 38.886 21.602 C 38.886 20.786 38.225 20.125 37.409 20.125 L 25.591 20.125 C 24.775 20.125 24.114 20.786 24.114 21.602 Z M 22.636 24.557 C 21.821 24.557 21.159 25.218 21.159 26.034 L 41.841 26.034 C 41.841 25.218 41.18 24.557 40.364 24.557 Z M 18.204 30.466 L 18.204 42.284 C 18.204 43.1 18.866 43.761 19.682 43.761 L 43.318 43.761 C 44.134 43.761 44.795 43.1 44.795 42.284 L 44.795 30.466 C 44.795 29.65 44.134 28.988 43.318 28.988 L 19.682 28.988 C 18.866 28.988 18.204 29.65 18.204 30.466 Z%22 fill=%22rgb(255,215,0)%22 /></path></svg>')",
                      }}
                    ></div>
                    <div
                      className="framer-1c0ua1q"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-3lytcq"
                        data-styles-preset="AQs51QJpd"
                      >
                        A New Category: The Short Series
                      </p>
                    </div>
                    <div
                      className="framer-1xa80l4"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-offl2h"
                        data-styles-preset="BbRiqeyCW"
                        style={{
                          "-FramerTextColor":
                            "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        }}
                      >
                        2-minute episodes. 10–100 per series. A whole new way to
                        binge – original, cinematic, addictive.
                      </p>
                    </div>
                  </div>
                  <div className="framer-lit28c" data-framer-name="Quality">
                    <div
                      data-framer-component-type="SVG"
                      data-framer-name="Group 39227"
                      parentsize="0"
                      _constraints="[object Object]"
                      rotation="0"
                      shadows=""
                      className="framer-1kndf8l"
                      aria-hidden="true"
                      style={{
                        imageRendering: "pixelated",
                        flexShrink: "0",
                        backgroundSize: "100% 100%",
                        backgroundImage:
                          "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><path d=%22M 35.977 26.623 C 38.83 25.377 41.441 28.128 40.139 30.999 C 40.524 31.247 40.914 31.386 41.264 31.707 C 42.312 32.674 42.548 34.167 41.962 35.461 C 41.743 35.951 41.311 36.253 41.133 36.688 C 43.431 37.849 43.608 40.328 41.767 42.093 C 39.038 44.71 35.586 46.959 32.774 49.529 C 32.661 49.631 32.513 49.752 32.454 49.897 C 33.745 49.897 35.053 49.698 36.249 49.202 C 37.605 48.646 38.688 47.661 39.819 46.754 C 42.584 44.541 45.224 42.165 48.007 39.971 C 48.806 39.058 48.202 37.873 46.971 38.079 C 46.633 38.133 46.527 38.417 46.296 38.496 C 45.153 38.858 44.165 37.698 44.769 36.658 C 45.266 35.8 47.356 34.838 47.539 33.944 C 47.628 33.514 47.604 33.007 47.243 32.716 C 46.249 31.912 45.745 33.297 44.869 33.345 C 43.946 33.393 43.282 32.348 43.691 31.495 C 44.029 30.788 45.627 30.087 45.745 29.343 C 45.811 28.92 45.799 28.388 45.438 28.098 C 44.17 27.094 43.265 29.966 41.95 28.521 C 40.707 27.149 43.164 25.661 44.348 25.607 C 46.77 25.492 48.717 28.327 47.474 30.552 C 49.434 31.32 50.298 33.514 49.138 35.388 L 48.469 36.18 C 50.292 37.033 50.997 39.33 49.771 41.023 C 46.385 43.828 43.123 46.929 39.6 49.559 C 37.131 51.403 34.438 52.243 31.347 51.82 C 30.933 51.765 30.086 51.463 29.796 51.475 C 29.571 51.481 28.795 51.868 28.47 51.953 C 22.188 53.591 17.748 50.121 14.527 44.995 C 11.401 40.025 12.674 34.107 16.825 30.274 C 17.553 29.603 20.164 27.348 20.921 27.07 C 23.047 26.302 24.077 27.947 24.598 29.724 C 24.628 29.827 24.539 29.887 24.734 29.857 L 30.844 24.742 C 32.762 23.098 35.556 24.126 35.989 26.629 Z M 32.869 25.915 C 32.543 25.933 32.211 26.254 31.957 26.441 C 28.47 29.011 25.267 32.287 21.75 34.856 C 21.004 35.334 19.968 34.645 19.962 33.78 C 19.956 32.323 22.532 31.852 22.597 30.274 C 22.626 29.579 22.194 28.612 21.419 29.077 C 18.867 31.308 16.096 32.88 15.131 36.41 C 13.906 40.884 16.008 44.166 18.837 47.304 C 22.052 50.865 27.079 51.227 30.903 48.446 C 34.171 46.071 37.185 42.975 40.447 40.557 C 41.708 39.608 40.595 37.825 39.233 38.671 L 34.503 42.607 C 33.236 43.272 32.022 41.742 32.993 40.6 C 35.018 38.768 37.492 37.154 39.458 35.292 C 39.973 34.808 40.393 34.421 40.186 33.629 C 40.015 32.976 39.18 32.674 38.647 33.079 C 36.474 34.82 34.402 36.7 32.223 38.429 C 31.791 38.774 30.933 39.59 30.418 39.638 C 29.091 39.759 28.63 38.048 29.648 37.281 L 38.055 30.359 C 38.978 29.319 38.043 27.693 36.794 28.521 L 28.008 35.8 C 26.522 36.41 25.516 34.82 26.706 33.635 C 28.594 31.749 31.252 30.135 33.218 28.279 C 33.366 28.134 33.662 27.88 33.757 27.723 C 34.195 27.01 33.792 25.855 32.869 25.909 Z M 33.757 12.035 C 31.181 8.825 26.954 12.61 29.151 15.904 L 33.769 20.892 C 33.887 20.91 34.165 20.583 34.254 20.487 C 35.657 18.975 37.125 17.446 38.446 15.904 C 40.571 13.414 37.161 8.885 34.1 11.697 C 33.999 11.787 33.928 12.078 33.751 12.035 Z M 42.933 17.802 C 42.489 18.141 39.949 20.71 39.677 21.127 C 39.103 22.016 40.038 22.947 41.08 22.101 C 41.483 21.774 44.011 19.205 44.165 18.885 C 44.319 18.564 44.384 18.074 44.076 17.79 C 43.721 17.458 43.288 17.53 42.927 17.802 Z M 22.952 19.374 C 23.207 19.743 25.64 22.052 26.031 22.324 C 26.919 22.935 27.771 22.07 27.203 21.224 C 26.865 20.728 24.61 18.606 24.083 18.226 C 23.864 18.068 23.663 17.929 23.384 17.966 C 22.638 18.062 22.567 18.824 22.952 19.38 Z%22 fill=%22rgb(255,215,0)%22 /></path></svg>')",
                      }}
                    ></div>
                    <div
                      className="framer-1gh10xc"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-3lytcq"
                        data-styles-preset="AQs51QJpd"
                      >
                        India’s First Creator-First OTT
                      </p>
                    </div>
                    <div
                      className="framer-15gv62u"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-offl2h"
                        data-styles-preset="BbRiqeyCW"
                        style={{
                          "-FramerTextColor":
                            "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        }}
                      >
                        With Claps, fans can directly appreciate and support
                        actors, writers, directors, and debutants. Creators
                        deserve more than credits – they deserve applause.
                      </p>
                    </div>
                  </div>
                  <div className="framer-ooml19" data-framer-name="Quality">
                    <div
                      data-framer-component-type="SVG"
                      data-framer-name="Group 39229"
                      parentsize="0"
                      _constraints="[object Object]"
                      rotation="0"
                      shadows=""
                      className="framer-sacm58"
                      aria-hidden="true"
                      style={{
                        imageRendering: "pixelated",
                        flexShrink: "0",
                        backgroundSize: "100% 100%",
                        backgroundImage:
                          "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><g transform=%22translate(11 11)%22><path d=%22M 0 41 L 0 0 L 41 0 L 41 41 Z%22 fill=%22transparent%22 /></path><path d=%22M 32.505 30.889 C 32.505 33.718 30.427 35.335 27.597 35.335 C 24.162 35.335 21.852 33.314 19.629 27.194 L 21.679 26.356 C 23.238 30.86 24.883 33.227 27.395 33.227 C 29.099 33.227 30.224 32.275 30.224 30.629 C 30.224 29.301 29.33 28.262 28.203 27.453 C 27.482 27.655 26.616 27.8 25.634 27.886 L 25.172 25.837 C 28.781 25.375 29.734 24.595 29.734 23.007 C 29.734 21.737 28.896 20.928 27.337 20.928 C 26.038 20.928 24.797 21.333 23.555 22.083 L 22.805 20.062 C 24.133 19.312 25.634 18.879 27.424 18.879 C 30.715 18.879 32.043 20.813 32.043 23.036 C 32.043 24.537 31.495 25.75 30.196 26.587 L 30.253 26.645 C 31.177 26.876 32.188 26.962 33.083 26.962 C 33.978 26.962 34.931 26.876 35.941 26.616 L 35.941 21.217 L 33.833 21.217 L 33.833 19.167 L 41.282 19.167 L 41.282 21.217 L 38.279 21.217 L 38.279 37.125 L 35.941 37.125 L 35.941 28.752 C 35.161 28.955 34.353 29.012 33.545 29.012 C 33.083 29.012 32.534 28.983 31.986 28.897 C 32.332 29.503 32.505 30.196 32.505 30.889 Z%22 fill=%22rgb(255,215,0)%22 /></path><path d=%22M 10.784 22.778 C 8.956 22.778 7.362 22.575 6.001 22.171 C 4.661 21.747 3.544 21.159 2.65 20.407 C 1.757 19.655 1.087 18.778 0.64 17.775 C 0.213 16.773 0 15.693 0 14.537 C 0 13.149 0.254 11.963 0.762 10.98 C 1.269 9.997 1.95 9.254 2.803 8.753 C 3.676 8.233 4.661 7.972 5.758 7.972 C 6.57 7.972 7.271 8.127 7.86 8.435 C 8.469 8.724 8.936 9.148 9.261 9.707 C 9.606 10.247 9.779 10.893 9.779 11.645 C 9.779 12.416 9.606 13.11 9.261 13.727 C 8.916 14.325 8.398 14.797 7.707 15.144 C 7.017 15.472 6.133 15.635 5.057 15.635 C 4.042 15.635 3.158 15.414 2.407 14.97 C 1.655 14.527 1.076 14.084 0.67 13.64 L 1.401 11.847 C 1.564 12.059 1.787 12.31 2.072 12.599 C 2.376 12.869 2.762 13.11 3.229 13.322 C 3.696 13.515 4.255 13.611 4.905 13.611 C 5.717 13.611 6.326 13.447 6.733 13.12 C 7.159 12.792 7.372 12.339 7.372 11.761 C 7.372 11.201 7.21 10.777 6.885 10.488 C 6.56 10.18 6.133 10.026 5.605 10.026 C 4.651 10.026 3.879 10.401 3.29 11.153 C 2.701 11.905 2.407 12.965 2.407 14.334 L 2.407 14.594 C 2.407 15.578 2.681 16.522 3.229 17.428 C 3.798 18.334 4.691 19.077 5.91 19.655 C 7.149 20.214 8.774 20.494 10.784 20.494 C 13.79 20.494 16.024 19.992 17.486 18.99 C 18.949 17.968 19.68 16.368 19.68 14.19 C 19.68 13.476 19.568 12.821 19.345 12.223 C 19.121 11.606 18.776 11.105 18.309 10.72 C 17.862 10.334 17.283 10.141 16.573 10.141 C 16.105 10.141 15.669 10.295 15.262 10.604 C 14.877 10.893 14.684 11.365 14.684 12.021 C 14.684 12.773 14.948 13.399 15.476 13.9 C 16.004 14.382 16.694 14.758 17.547 15.028 L 17.547 17.11 L 8.134 17.11 L 8.134 14.97 L 14.806 14.97 L 14.531 15.173 C 13.82 14.845 13.262 14.373 12.856 13.756 C 12.47 13.139 12.277 12.426 12.277 11.616 C 12.277 11.038 12.429 10.469 12.734 9.91 C 13.039 9.351 13.516 8.888 14.166 8.522 C 14.836 8.156 15.679 7.972 16.694 7.972 C 17.75 7.972 18.685 8.242 19.497 8.782 C 20.33 9.322 20.99 10.064 21.477 11.009 C 21.965 11.934 22.208 13.004 22.208 14.218 C 22.208 15.664 21.944 16.927 21.416 18.007 C 20.909 19.086 20.157 19.983 19.162 20.696 C 18.187 21.39 16.989 21.91 15.567 22.258 C 14.166 22.605 12.572 22.778 10.784 22.778 Z%22 fill=%22rgb(255,215,0)%22 /></path></g></svg>')",
                      }}
                    ></div>
                    <div
                      className="framer-fqm3gu"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-3lytcq"
                        data-styles-preset="AQs51QJpd"
                      >
                        Regional &amp; Culturally Rooted
                      </p>
                    </div>
                    <div
                      className="framer-14e50ad"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-offl2h"
                        data-styles-preset="BbRiqeyCW"
                        style={{
                          "-FramerTextColor":
                            "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        }}
                      >
                        Entertainment in your language. Clean, genuine stories
                        that feel closer to home than anything dubbed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-xsnrnw">
                  <div className="framer-1qu8nlm" data-framer-name="Quality">
                    <div
                      data-framer-component-type="SVG"
                      data-framer-name="Group 39228"
                      parentsize="0"
                      _constraints="[object Object]"
                      rotation="0"
                      shadows=""
                      className="framer-qwj33m"
                      aria-hidden="true"
                      style={{
                        imageRendering: "pixelated",
                        flexShrink: "0",
                        backgroundSize: "100% 100%",
                        backgroundImage:
                          "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><path d=%22M 45.761 32.756 C 45.261 31.993 45.261 31.006 45.761 30.242 L 48.263 26.429 C 49.183 25.02 49.246 23.231 48.427 21.757 C 47.601 20.279 46.051 19.434 44.406 19.551 L 39.944 19.868 C 39.05 19.932 38.213 19.439 37.82 18.612 L 35.858 14.478 C 35.13 12.95 33.653 12 31.999 12 C 30.345 12 28.872 12.95 28.145 14.478 L 26.181 18.612 C 25.785 19.439 24.954 19.934 24.057 19.868 L 19.594 19.551 C 17.931 19.434 16.4 20.279 15.576 21.757 C 14.753 23.23 14.817 25.02 15.735 26.429 L 18.238 30.242 C 18.738 31.006 18.738 31.993 18.238 32.756 L 15.74 36.57 C 14.817 37.978 14.753 39.767 15.576 41.242 C 16.4 42.719 17.953 43.564 19.594 43.447 L 24.057 43.13 C 24.956 43.061 25.787 43.559 26.181 44.386 L 28.145 48.52 C 28.87 50.05 30.345 51 31.999 51 C 33.654 51 35.132 50.05 35.858 48.522 L 37.82 44.388 C 38.215 43.56 39.055 43.066 39.944 43.132 L 44.406 43.449 C 46.061 43.566 47.601 42.721 48.427 41.243 C 49.246 39.77 49.183 37.98 48.263 36.571 Z M 38.997 28.098 L 30.945 36.38 C 30.928 36.397 30.92 36.414 30.902 36.433 C 30.697 36.649 30.428 36.752 30.159 36.752 L 30.151 36.752 L 30.146 36.752 C 29.877 36.752 29.608 36.649 29.403 36.433 C 29.387 36.416 29.374 36.399 29.361 36.38 L 25 31.894 C 24.588 31.474 24.588 30.789 24.995 30.364 C 25.406 29.939 26.069 29.939 26.481 30.359 L 30.149 34.134 L 37.513 26.564 C 37.925 26.144 38.587 26.144 38.999 26.569 C 39.409 26.989 39.409 27.677 38.997 28.097 Z%22 fill=%22rgb(255,215,0)%22 /></path></svg>')",
                      }}
                    ></div>
                    <div
                      className="framer-122z1jg"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-3lytcq"
                        data-styles-preset="AQs51QJpd"
                      >
                        Original Stories. Real Talent
                      </p>
                    </div>
                    <div
                      className="framer-1buhx5j"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-offl2h"
                        data-styles-preset="BbRiqeyCW"
                        style={{
                          "-FramerTextColor":
                            "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        }}
                      >
                        Not recycled content, not shortcuts. Every show is
                        crafted by storytellers with fresh ideas and authentic
                        voices.
                      </p>
                    </div>
                  </div>
                  <div className="framer-1dlrplt" data-framer-name="Quality">
                    <div
                      data-framer-component-type="SVG"
                      data-framer-name="Group 39231"
                      parentsize="0"
                      _constraints="[object Object]"
                      rotation="0"
                      shadows=""
                      className="framer-9zar7z"
                      aria-hidden="true"
                      style={{
                        imageRendering: "pixelated",
                        flexShrink: "0",
                        backgroundSize: "100% 100%",
                        backgroundImage:
                          "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><path d=%22M 38.645 13.328 L 42.058 20.625 C 42.144 20.805 42.302 20.922 42.5 20.945 L 50.503 21.93 C 50.981 21.989 51.17 22.574 50.819 22.903 L 44.921 28.395 C 44.773 28.53 44.714 28.719 44.75 28.917 L 46.288 36.822 C 46.378 37.295 45.877 37.655 45.458 37.425 L 38.402 33.527 C 38.226 33.428 38.028 33.428 37.852 33.527 L 30.796 37.425 C 30.376 37.66 29.876 37.295 29.966 36.822 L 31.499 28.917 C 31.535 28.719 31.477 28.534 31.328 28.395 L 25.43 22.903 C 25.079 22.574 25.273 21.989 25.746 21.93 L 33.749 20.945 C 33.947 20.922 34.105 20.805 34.191 20.625 L 37.604 13.328 C 37.807 12.891 38.424 12.891 38.627 13.328 Z M 34.362 48.486 C 34.542 48.297 34.835 48.293 35.025 48.468 C 35.214 48.644 35.219 48.941 35.043 49.13 L 33.402 50.854 C 33.221 51.043 32.928 51.048 32.739 50.872 C 32.55 50.692 32.545 50.399 32.721 50.21 Z M 43.749 38.992 C 43.93 38.807 44.227 38.807 44.412 38.992 C 44.597 39.172 44.597 39.469 44.412 39.654 L 36.391 47.748 C 36.211 47.932 35.913 47.932 35.728 47.748 C 35.543 47.568 35.543 47.271 35.728 47.086 Z M 24.524 50.787 C 24.344 50.602 24.344 50.309 24.524 50.125 L 35.422 39.163 C 35.606 38.983 35.899 38.983 36.084 39.163 C 36.265 39.348 36.265 39.64 36.084 39.825 L 25.187 50.787 C 25.002 50.967 24.709 50.967 24.524 50.787 Z M 36.783 38.438 C 36.594 38.258 36.585 37.966 36.765 37.777 L 38.406 36.052 C 38.587 35.863 38.88 35.854 39.069 36.034 C 39.259 36.214 39.268 36.507 39.087 36.696 L 37.446 38.42 C 37.266 38.609 36.973 38.618 36.783 38.438 Z M 28.208 38.699 C 28.388 38.515 28.686 38.515 28.871 38.699 C 29.055 38.879 29.055 39.177 28.871 39.361 L 20.85 47.455 C 20.669 47.64 20.372 47.64 20.187 47.455 C 20.002 47.275 20.002 46.978 20.187 46.793 Z M 18.821 48.194 C 19.001 48.005 19.294 48 19.483 48.176 C 19.673 48.351 19.677 48.648 19.501 48.837 L 17.86 50.562 C 17.68 50.751 17.387 50.755 17.198 50.58 C 17.008 50.399 17.004 50.107 17.179 49.918 Z M 13.135 45.515 C 12.955 45.331 12.955 45.038 13.135 44.853 L 25.705 32.221 C 25.89 32.041 26.188 32.037 26.368 32.221 C 26.549 32.406 26.549 32.699 26.368 32.883 L 13.798 45.515 C 13.613 45.695 13.32 45.695 13.135 45.515 Z M 27.067 31.497 C 26.878 31.316 26.869 31.024 27.049 30.835 L 28.69 29.111 C 28.871 28.922 29.164 28.913 29.353 29.093 C 29.542 29.273 29.551 29.565 29.371 29.754 L 27.73 31.479 C 27.55 31.668 27.256 31.677 27.067 31.497 Z M 15.142 34.706 C 15.322 34.517 15.615 34.513 15.804 34.688 C 15.994 34.864 15.998 35.161 15.822 35.35 L 14.181 37.074 C 14.001 37.263 13.708 37.268 13.518 37.092 C 13.329 36.917 13.325 36.62 13.5 36.43 Z M 25.191 25.212 C 25.372 25.397 25.372 25.689 25.191 25.874 L 17.17 33.968 C 16.986 34.148 16.693 34.148 16.508 33.968 C 16.327 33.783 16.327 33.491 16.508 33.306 L 24.529 25.212 C 24.713 25.032 25.007 25.032 25.191 25.212 Z%22 fill=%22rgb(255,215,0)%22 /></path></svg>')",
                      }}
                    ></div>
                    <div
                      className="framer-1gmqfeu"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-3lytcq"
                        data-styles-preset="AQs51QJpd"
                      >
                        Platform for Tomorrow’s Stars
                      </p>
                    </div>
                    <div
                      className="framer-1aq8yth"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-offl2h"
                        data-styles-preset="BbRiqeyCW"
                        style={{
                          "-FramerTextColor":
                            "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        }}
                      >
                        From seasoned actors to debutant writers, ChaiShots is a
                        launchpad where talent is discovered, encouraged, and
                        celebrated.
                      </p>
                    </div>
                  </div>
                  <div className="framer-13k567l" data-framer-name="Quality">
                    <div
                      data-framer-component-type="SVG"
                      data-framer-name="Group 39230"
                      parentsize="0"
                      _constraints="[object Object]"
                      rotation="0"
                      shadows=""
                      className="framer-1ckpc51"
                      aria-hidden="true"
                      style={{
                        imageRendering: "pixelated",
                        flexShrink: "0",
                        backgroundSize: "100% 100%",
                        backgroundImage:
                          "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 63 63%22><path d=%22M 20 63 C 8.954 63 0 54.046 0 43 L 0 20 C 0 8.954 8.954 0 20 0 L 43 0 C 54.046 0 63 8.954 63 20 L 63 43 C 63 54.046 54.046 63 43 63 Z%22 fill=%22rgb(32,32,32)%22 /></path><path d=%22M 14 20.998 L 14 22.794 L 19.709 22.794 L 17.384 17.349 C 17.344 17.255 17.322 17.159 17.316 17.064 C 15.437 17.4 14 19.039 14 20.998 Z M 31.999 27.693 C 36.11 27.693 39.441 30.997 39.441 35.075 C 39.441 39.153 36.11 42.457 31.999 42.457 C 27.888 42.457 24.557 39.153 24.557 35.075 C 24.557 30.997 27.888 27.693 31.999 27.693 Z M 35.566 35.555 C 36.069 35.235 36.069 34.915 35.566 34.595 L 30.52 31.707 C 29.991 31.436 29.71 31.596 29.682 32.187 L 29.682 37.963 C 29.71 38.554 29.989 38.714 30.52 38.443 L 33.043 36.999 C 33.884 36.517 34.725 36.037 35.566 35.555 Z M 24.652 22.793 L 22.327 17.348 C 22.277 17.235 22.255 17.117 22.255 17 L 19.201 17 L 21.674 22.794 Z M 26.614 22.793 L 29.59 22.793 L 27.265 17.348 C 27.218 17.234 27.193 17.117 27.193 17 L 24.139 17 Z M 34.533 22.793 L 32.208 17.348 C 32.159 17.235 32.136 17.117 32.136 17 L 29.082 17 L 31.555 22.794 Z M 36.496 22.793 L 39.472 22.793 L 37.147 17.348 C 37.097 17.234 37.076 17.117 37.076 17 L 34.022 17 Z M 44.414 22.793 L 42.089 17.348 C 42.04 17.235 42.017 17.117 42.017 17 L 38.963 17 L 41.436 22.794 Z M 46.377 22.793 L 49.998 22.793 L 49.998 20.997 C 49.998 18.798 48.185 17 45.969 17 L 43.903 17 Z M 14 24.595 L 14 42.457 C 14 44.657 15.813 46.455 18.029 46.455 L 45.971 46.455 C 48.187 46.455 50 44.657 50 42.457 L 49.998 24.595 Z%22 fill=%22rgb(255,215,0)%22 /></path></svg>')",
                      }}
                    ></div>
                    <div
                      className="framer-1smw72g"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-3lytcq"
                        data-styles-preset="AQs51QJpd"
                      >
                        Entertainment that Fits Your Life
                      </p>
                    </div>
                    <div
                      className="framer-17wgxkc"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <p
                        className="framer-text framer-styles-preset-offl2h"
                        data-styles-preset="BbRiqeyCW"
                        style={{
                          "-FramerTextColor":
                            "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        }}
                      >
                        Designed for chai breaks, cab rides, and late nights.
                        Stories that move with you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="framer-i2z5zy" data-framer-name="CTA Loop">
            <div className="framer-1c8xbql" data-framer-name="BG">
              <div className="framer-13lw9x9" data-framer-name="Spacer"></div>
              <div
                className="framer-1bwv4az"
                data-framer-name="Circle Wrap"
                style={{ transform: "perspective(1200px)" }}
              >
                <div
                  className="framer-1fl79hv arch-circle-rotate"
                  data-framer-name="Circle"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                  }}
                >
                  <div className="framer-vl7f30" data-framer-name="Arm 1">
                    <div className="ssr-variant">
                      <div className="framer-yw363a-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="960"
                              height="421"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/H6zobOLQrCwF0FwfqTBjfAoBU0.jpg?scale-down-to=512&amp;width=960&amp;height=421 512w,/assets/H6zobOLQrCwF0FwfqTBjfAoBU0.jpg?width=960&amp;height=421 960w"
                              src="/assets/H6zobOLQrCwF0FwfqTBjfAoBU0.jpg?width=960&amp;height=421"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-1s5njb8-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="960"
                              height="421"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/H6zobOLQrCwF0FwfqTBjfAoBU0.jpg?scale-down-to=512&amp;width=960&amp;height=421 512w,/assets/H6zobOLQrCwF0FwfqTBjfAoBU0.jpg?width=960&amp;height=421 960w"
                              src="/assets/H6zobOLQrCwF0FwfqTBjfAoBU0.jpg?width=960&amp;height=421"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-1gb442n"
                    data-framer-name="Arm 2"
                    style={{ transform: "translate(-50%, -50%) rotate(15deg)" }}
                  >
                    <div className="ssr-variant">
                      <div className="framer-1k71u2m-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="2560"
                              height="1440"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/8urQSQvNNoPSr7EyVfZR2qID9s.png?scale-down-to=512&amp;width=2560&amp;height=1440 512w,/assets/8urQSQvNNoPSr7EyVfZR2qID9s.png?scale-down-to=1024&amp;width=2560&amp;height=1440 1024w,/assets/8urQSQvNNoPSr7EyVfZR2qID9s.png?scale-down-to=2048&amp;width=2560&amp;height=1440 2048w,/assets/8urQSQvNNoPSr7EyVfZR2qID9s.png?width=2560&amp;height=1440 2560w"
                              src="/assets/8urQSQvNNoPSr7EyVfZR2qID9s.png?width=2560&amp;height=1440"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-wyx48w-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="2560"
                              height="1440"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/8urQSQvNNoPSr7EyVfZR2qID9s.png?scale-down-to=512&amp;width=2560&amp;height=1440 512w,/assets/8urQSQvNNoPSr7EyVfZR2qID9s.png?scale-down-to=1024&amp;width=2560&amp;height=1440 1024w,/assets/8urQSQvNNoPSr7EyVfZR2qID9s.png?scale-down-to=2048&amp;width=2560&amp;height=1440 2048w,/assets/8urQSQvNNoPSr7EyVfZR2qID9s.png?width=2560&amp;height=1440 2560w"
                              src="/assets/8urQSQvNNoPSr7EyVfZR2qID9s.png?width=2560&amp;height=1440"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-1ggbxgv"
                    data-framer-name="Arm 3"
                    style={{ transform: "translate(-50%, -50%) rotate(30deg)" }}
                  >
                    <div className="ssr-variant">
                      <div className="framer-svvjbf-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1280"
                              height="720"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/ziAqNdmd4fGMfkiaEQxFb8o.png?scale-down-to=512&amp;width=1280&amp;height=720 512w,/assets/ziAqNdmd4fGMfkiaEQxFb8o.png?scale-down-to=1024&amp;width=1280&amp;height=720 1024w,/assets/ziAqNdmd4fGMfkiaEQxFb8o.png?width=1280&amp;height=720 1280w"
                              src="/assets/ziAqNdmd4fGMfkiaEQxFb8o.png?width=1280&amp;height=720"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-9cdyvk-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1280"
                              height="720"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/ziAqNdmd4fGMfkiaEQxFb8o.png?scale-down-to=512&amp;width=1280&amp;height=720 512w,/assets/ziAqNdmd4fGMfkiaEQxFb8o.png?scale-down-to=1024&amp;width=1280&amp;height=720 1024w,/assets/ziAqNdmd4fGMfkiaEQxFb8o.png?width=1280&amp;height=720 1280w"
                              src="/assets/ziAqNdmd4fGMfkiaEQxFb8o.png?width=1280&amp;height=720"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-150jjrq"
                    data-framer-name="Arm 4"
                    style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}
                  >
                    <div className="ssr-variant">
                      <div className="framer-8iny6g-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1280"
                              height="720"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/Xu65x1uz34GD8rMMhmgsAKra9Y.png?scale-down-to=512&amp;width=1280&amp;height=720 512w,/assets/Xu65x1uz34GD8rMMhmgsAKra9Y.png?scale-down-to=1024&amp;width=1280&amp;height=720 1024w,/assets/Xu65x1uz34GD8rMMhmgsAKra9Y.png?width=1280&amp;height=720 1280w"
                              src="/assets/Xu65x1uz34GD8rMMhmgsAKra9Y.png?width=1280&amp;height=720"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-1tf5tab-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1280"
                              height="720"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/Xu65x1uz34GD8rMMhmgsAKra9Y.png?scale-down-to=512&amp;width=1280&amp;height=720 512w,/assets/Xu65x1uz34GD8rMMhmgsAKra9Y.png?scale-down-to=1024&amp;width=1280&amp;height=720 1024w,/assets/Xu65x1uz34GD8rMMhmgsAKra9Y.png?width=1280&amp;height=720 1280w"
                              src="/assets/Xu65x1uz34GD8rMMhmgsAKra9Y.png?width=1280&amp;height=720"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-1gx1hle"
                    data-framer-name="Arm 5"
                    style={{ transform: "translate(-50%, -50%) rotate(60deg)" }}
                  >
                    <div className="ssr-variant">
                      <div className="framer-jkizcl-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1280"
                              height="720"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/77uoMStPiTNjpL03wO0VHnsU.png?scale-down-to=512&amp;width=1280&amp;height=720 512w,/assets/77uoMStPiTNjpL03wO0VHnsU.png?scale-down-to=1024&amp;width=1280&amp;height=720 1024w,/assets/77uoMStPiTNjpL03wO0VHnsU.png?width=1280&amp;height=720 1280w"
                              src="/assets/77uoMStPiTNjpL03wO0VHnsU.png?width=1280&amp;height=720"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-1aioqfm-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1280"
                              height="720"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/77uoMStPiTNjpL03wO0VHnsU.png?scale-down-to=512&amp;width=1280&amp;height=720 512w,/assets/77uoMStPiTNjpL03wO0VHnsU.png?scale-down-to=1024&amp;width=1280&amp;height=720 1024w,/assets/77uoMStPiTNjpL03wO0VHnsU.png?width=1280&amp;height=720 1280w"
                              src="/assets/77uoMStPiTNjpL03wO0VHnsU.png?width=1280&amp;height=720"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-if3ezt"
                    data-framer-name="Arm 6"
                    style={{ transform: "translate(-50%, -50%) rotate(75deg)" }}
                  >
                    <div className="ssr-variant">
                      <div className="framer-1bhgr6a-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1280"
                              height="720"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/JJkd5qpROyeNREQMHVrF954FnIo.png?scale-down-to=512&amp;width=1280&amp;height=720 512w,/assets/JJkd5qpROyeNREQMHVrF954FnIo.png?scale-down-to=1024&amp;width=1280&amp;height=720 1024w,/assets/JJkd5qpROyeNREQMHVrF954FnIo.png?width=1280&amp;height=720 1280w"
                              src="/assets/JJkd5qpROyeNREQMHVrF954FnIo.png?width=1280&amp;height=720"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-tbeud8-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1280"
                              height="720"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/JJkd5qpROyeNREQMHVrF954FnIo.png?scale-down-to=512&amp;width=1280&amp;height=720 512w,/assets/JJkd5qpROyeNREQMHVrF954FnIo.png?scale-down-to=1024&amp;width=1280&amp;height=720 1024w,/assets/JJkd5qpROyeNREQMHVrF954FnIo.png?width=1280&amp;height=720 1280w"
                              src="/assets/JJkd5qpROyeNREQMHVrF954FnIo.png?width=1280&amp;height=720"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-12cbki8"
                    data-framer-name="Arm 7"
                    style={{ transform: "translate(-50%, -50%) rotate(90deg)" }}
                  >
                    <div className="ssr-variant">
                      <div className="framer-ppxr5v-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="720"
                              height="405"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/jpXl4a2pKOJqhRVlZsapoC5Q2A.webp?scale-down-to=512&amp;width=720&amp;height=405 512w,/assets/jpXl4a2pKOJqhRVlZsapoC5Q2A.webp?width=720&amp;height=405 720w"
                              src="/assets/jpXl4a2pKOJqhRVlZsapoC5Q2A.webp?width=720&amp;height=405"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-1kcgsx0-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="720"
                              height="405"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/jpXl4a2pKOJqhRVlZsapoC5Q2A.webp?scale-down-to=512&amp;width=720&amp;height=405 512w,/assets/jpXl4a2pKOJqhRVlZsapoC5Q2A.webp?width=720&amp;height=405 720w"
                              src="/assets/jpXl4a2pKOJqhRVlZsapoC5Q2A.webp?width=720&amp;height=405"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-dhdzbv"
                    data-framer-name="Arm 8"
                    style={{ transform: "translateX(-50%) rotate(105deg)" }}
                  >
                    <div className="ssr-variant">
                      <div className="framer-1pvla87-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="720"
                              height="405"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/g2nR1EpZmedbo8VrWb27ToYNE.webp?scale-down-to=512&amp;width=720&amp;height=405 512w,/assets/g2nR1EpZmedbo8VrWb27ToYNE.webp?width=720&amp;height=405 720w"
                              src="/assets/g2nR1EpZmedbo8VrWb27ToYNE.webp?width=720&amp;height=405"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-csoucv-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="720"
                              height="405"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/g2nR1EpZmedbo8VrWb27ToYNE.webp?scale-down-to=512&amp;width=720&amp;height=405 512w,/assets/g2nR1EpZmedbo8VrWb27ToYNE.webp?width=720&amp;height=405 720w"
                              src="/assets/g2nR1EpZmedbo8VrWb27ToYNE.webp?width=720&amp;height=405"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-1px3laf"
                    data-framer-name="Arm 9"
                    style={{
                      transform: "translate(-50%, -50%) rotate(120deg)",
                    }}
                  >
                    <div className="ssr-variant">
                      <div className="framer-128u2xe-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="720"
                              height="405"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/t5TnSQmrXoDmkExcA7aDSZeLro.webp?scale-down-to=512&amp;width=720&amp;height=405 512w,/assets/t5TnSQmrXoDmkExcA7aDSZeLro.webp?width=720&amp;height=405 720w"
                              src="/assets/t5TnSQmrXoDmkExcA7aDSZeLro.webp?width=720&amp;height=405"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-z7gplv-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1280"
                              height="720"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/jeZyIwC8592AwXArYNYvNqz8Fs.png?scale-down-to=512&amp;width=1280&amp;height=720 512w,/assets/jeZyIwC8592AwXArYNYvNqz8Fs.png?scale-down-to=1024&amp;width=1280&amp;height=720 1024w,/assets/jeZyIwC8592AwXArYNYvNqz8Fs.png?width=1280&amp;height=720 1280w"
                              src="/assets/jeZyIwC8592AwXArYNYvNqz8Fs.png?width=1280&amp;height=720"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-1yinl04"
                    data-framer-name="Arm 10"
                    style={{
                      transform: "translate(-50%, -50%) rotate(135deg)",
                    }}
                  >
                    <div className="ssr-variant">
                      <div className="framer-1nfw0kk-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1280"
                              height="720"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/fc6qH6TaanfJLIYgqhgNyY8Q.png?scale-down-to=512&amp;width=1280&amp;height=720 512w,/assets/fc6qH6TaanfJLIYgqhgNyY8Q.png?scale-down-to=1024&amp;width=1280&amp;height=720 1024w,/assets/fc6qH6TaanfJLIYgqhgNyY8Q.png?width=1280&amp;height=720 1280w"
                              src="/assets/fc6qH6TaanfJLIYgqhgNyY8Q.png?width=1280&amp;height=720"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-jcqhdh-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1280"
                              height="720"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/fc6qH6TaanfJLIYgqhgNyY8Q.png?scale-down-to=512&amp;width=1280&amp;height=720 512w,/assets/fc6qH6TaanfJLIYgqhgNyY8Q.png?scale-down-to=1024&amp;width=1280&amp;height=720 1024w,/assets/fc6qH6TaanfJLIYgqhgNyY8Q.png?width=1280&amp;height=720 1280w"
                              src="/assets/fc6qH6TaanfJLIYgqhgNyY8Q.png?width=1280&amp;height=720"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-1wu7k9u"
                    data-framer-name="Arm 11"
                    style={{
                      transform: "translate(-50%, -50%) rotate(150deg)",
                    }}
                  >
                    <div className="ssr-variant">
                      <div className="framer-z152sq-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1200"
                              height="675"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/L9vTFYDPEcRCBRcPlzGGXTkE.webp?scale-down-to=512&amp;width=1200&amp;height=675 512w,/assets/L9vTFYDPEcRCBRcPlzGGXTkE.webp?scale-down-to=1024&amp;width=1200&amp;height=675 1024w,/assets/L9vTFYDPEcRCBRcPlzGGXTkE.webp?width=1200&amp;height=675 1200w"
                              src="/assets/L9vTFYDPEcRCBRcPlzGGXTkE.webp?width=1200&amp;height=675"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-2cfcxu-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1200"
                              height="675"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/L9vTFYDPEcRCBRcPlzGGXTkE.webp?scale-down-to=512&amp;width=1200&amp;height=675 512w,/assets/L9vTFYDPEcRCBRcPlzGGXTkE.webp?scale-down-to=1024&amp;width=1200&amp;height=675 1024w,/assets/L9vTFYDPEcRCBRcPlzGGXTkE.webp?width=1200&amp;height=675 1200w"
                              src="/assets/L9vTFYDPEcRCBRcPlzGGXTkE.webp?width=1200&amp;height=675"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-ze62rx"
                    data-framer-name="Arm 12"
                    style={{
                      transform: "translate(-50%, -50%) rotate(165deg)",
                    }}
                  >
                    <div className="ssr-variant">
                      <div className="framer-9qp5eu-container">
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1200"
                              height="675"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/fXwBkriHNyrADCEoWaDkTXaFetI.webp?scale-down-to=512&amp;width=1200&amp;height=675 512w,/assets/fXwBkriHNyrADCEoWaDkTXaFetI.webp?scale-down-to=1024&amp;width=1200&amp;height=675 1024w,/assets/fXwBkriHNyrADCEoWaDkTXaFetI.webp?width=1200&amp;height=675 1200w"
                              src="/assets/fXwBkriHNyrADCEoWaDkTXaFetI.webp?width=1200&amp;height=675"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-yi9cmx-container"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div
                          className="framer-R0gi4 framer-eao2ul framer-v-eao2ul arch-image-float"
                          data-framer-name="Desktop"
                          style={{
                            height: "100%",
                            width: "100%",
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1200"
                              height="675"
                              sizes="(min-width: 1200px) 110px, (max-width: 809.98px) 110px, (min-width: 810px) and (max-width: 1199.98px) 110px"
                              srcset="/assets/fXwBkriHNyrADCEoWaDkTXaFetI.webp?scale-down-to=512&amp;width=1200&amp;height=675 512w,/assets/fXwBkriHNyrADCEoWaDkTXaFetI.webp?scale-down-to=1024&amp;width=1200&amp;height=675 1024w,/assets/fXwBkriHNyrADCEoWaDkTXaFetI.webp?width=1200&amp;height=675 1200w"
                              src="/assets/fXwBkriHNyrADCEoWaDkTXaFetI.webp?width=1200&amp;height=675"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div
                            className="framer-q99vds"
                            data-framer-name="Border"
                            style={{
                              background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)",
                              borderBottomLeftRadius: "22px",
                              borderBottomRightRadius: "22px",
                              borderTopLeftRadius: "22px",
                              borderTopRightRadius: "22px",
                              boxShadow:
                                "inset 0px 0.5px 0px 0.5px rgba(255, 255, 255, 0.2)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-vxrjxr" data-framer-name="Content">
              <div className="framer-1esvsf6" data-framer-name="Text + Button">
                <div className="framer-10uole6" data-framer-name="Title + Sub" style={{ position: "relative", zIndex: 20, paddingTop: "220px", paddingBottom: "32px" }}>
                  <div
                    className="framer-yo7df4"
                    data-framer-name="From The House of"
                    data-framer-component-type="RichTextContainer"
                    style={{ transform: "none", width: "100%", textAlign: "center", position: "relative", zIndex: 20 }}
                  >
                    <h3
                      style={{
                        fontFamily: "Sanchez, serif",
                        fontSize: "30px",
                        letterSpacing: "0px",
                        lineHeight: "28px",
                        textAlign: "center",
                        color: "rgb(64, 64, 64)",
                        margin: "0 auto"
                      }}
                      className="framer-text"
                    >
                      From the House of
                    </h3>
                  </div>
                </div>
                <div className="ssr-variant hidden-6bv0bu hidden-1eu3j9">
                  <div className="framer-17ivcae">
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        cornerShape: "inherit",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                      }}
                      data-framer-background-image-wrapper="true"
                    >
                      <img
                        decoding="async"
                        width="381"
                        height="224"
                        src="/assets/zGU5sba3O9VE9yhmNLRMoWx3Ko.png?width=381&amp;height=224"
                        alt=""
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-1eu3j9 hidden-xmru3t">
                  <div className="framer-17ivcae">
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        cornerShape: "inherit",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                      }}
                      data-framer-background-image-wrapper="true"
                    >
                      <img
                        decoding="async"
                        loading="lazy"
                        width="381"
                        height="224"
                        src="/assets/zGU5sba3O9VE9yhmNLRMoWx3Ko.png?width=381&amp;height=224"
                        alt=""
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-6bv0bu hidden-xmru3t">
                  <div className="framer-17ivcae">
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        cornerShape: "inherit",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                      }}
                      data-framer-background-image-wrapper="true"
                    >
                      <img
                        decoding="async"
                        loading="lazy"
                        width="163"
                        height="96"
                        src="/assets/KMSPqgYWpSFBxDRGNcEC6dDTs.png?width=163&amp;height=96"
                        alt=""
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="framer-81b2kr"
                  data-framer-name="From The House of"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <h3
                    style={{
                      "-FontSelector": "R0Y7QWxiZXJ0IFNhbnMtcmVndWxhcg==",
                      "-FramerFontFamily": "&quot",
                      "-FramerFontSize": "22px",
                      "-FramerLetterSpacing": "0px",
                      "-FramerLineHeight": "28px",
                      "-FramerTextAlignment": "center",
                      "-FramerTextColor":
                        "var(--token-22ef1630-be9f-4e13-af29-12d1fd0a0e30, rgb(64, 64, 64))",
                    }}
                    className="framer-text"
                  >
                    Billions of views. Millions of fans.
                    <br className="framer-text" />
                    Now, that tradition continues in a brand-new format.
                  </h3>
                </div>
                <ChaiBisketCarousel />
              </div>
            </div>
          </div>
          <section className="framer-swp1ox" data-framer-name="Situations">
            <div className="framer-2visei" data-framer-name="Container">
              <div
                className="framer-xs64ef"
                data-framer-name="Container + Padding"
              >
                <div
                  className="framer-1vaboiv"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <h2
                    className="framer-text framer-styles-preset-1qehvgj"
                    data-styles-preset="JZCLFGmi6"
                  >
                    {content.homeHeroTitle}
                  </h2>
                </div>
                <div className="framer-rh4fgm" data-framer-name="Layout">
                  <div
                    className="framer-1gy52hf hidden-6bv0bu"
                    data-framer-name="Heading Content"
                  ></div>
                  <div
                    className="framer-4i0nx"
                    data-framer-name="Base / Pricing Cards-zk"
                  >
                    <div className="framer-1btj94i" data-framer-name="Scenes">
                      <div className="ssr-variant hidden-6bv0bu">
                        <div
                          className="framer-1wmmf4c"
                          data-border="true"
                          data-framer-name="scene 1"
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1312"
                              height="736"
                              sizes="(min-width: 1200px) calc(min(max(min(100vw - 48px, 1000px), 1px), 1100px) - 80px), (max-width: 809.98px) calc(min(100vw - 48px, (100vw - 48px) * 2.5641) - 40px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw - 48px, 1000px) * 0.9 - 80px)"
                              srcset="/assets/p9sBGGgDMbrYPtwPPf4Dhi2QTc.png?scale-down-to=512&amp;width=1312&amp;height=736 512w,/assets/p9sBGGgDMbrYPtwPPf4Dhi2QTc.png?scale-down-to=1024&amp;width=1312&amp;height=736 1024w,/assets/p9sBGGgDMbrYPtwPPf4Dhi2QTc.png?width=1312&amp;height=736 1312w"
                              src="/assets/p9sBGGgDMbrYPtwPPf4Dhi2QTc.png?width=1312&amp;height=736"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>

                        </div>
                      </div>
                      <div className="ssr-variant hidden-1eu3j9 hidden-xmru3t">
                        <div
                          className="framer-1wmmf4c"
                          data-border="true"
                          data-framer-name="scene 1"
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1312"
                              height="736"
                              sizes="(min-width: 1200px) calc(min(max(min(100vw - 48px, 1000px), 1px), 1100px) - 80px), (max-width: 809.98px) calc(min(100vw - 48px, (100vw - 48px) * 2.5641) - 40px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw - 48px, 1000px) * 0.9 - 80px)"
                              srcset="/assets/p9sBGGgDMbrYPtwPPf4Dhi2QTc.png?scale-down-to=512&amp;width=1312&amp;height=736 512w,/assets/p9sBGGgDMbrYPtwPPf4Dhi2QTc.png?scale-down-to=1024&amp;width=1312&amp;height=736 1024w,/assets/p9sBGGgDMbrYPtwPPf4Dhi2QTc.png?width=1312&amp;height=736 1312w"
                              src="/assets/p9sBGGgDMbrYPtwPPf4Dhi2QTc.png?width=1312&amp;height=736"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>

                        </div>
                      </div>
                      <div className="ssr-variant hidden-6bv0bu">
                        <div
                          className="framer-145uqvo"
                          data-border="true"
                          data-framer-name="scene 2"
                          style={{
                            willChange: "transform",
                            opacity: "1",
                            transform: "none",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1312"
                              height="736"
                              sizes="(min-width: 1200px) calc(min(max(min(100vw - 48px, 1000px), 1px), 1100px) - 80px), (max-width: 809.98px) calc(min(100vw - 48px, (100vw - 48px) * 2.5641) - 40px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw - 48px, 1000px) * 0.9 - 80px)"
                              srcset="/assets/6r2nI6vQGloKfLH2fg3ApxFNKc.png?scale-down-to=512&amp;width=1312&amp;height=736 512w,/assets/6r2nI6vQGloKfLH2fg3ApxFNKc.png?scale-down-to=1024&amp;width=1312&amp;height=736 1024w,/assets/6r2nI6vQGloKfLH2fg3ApxFNKc.png?width=1312&amp;height=736 1312w"
                              src="/assets/6r2nI6vQGloKfLH2fg3ApxFNKc.png?width=1312&amp;height=736"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>

                        </div>
                      </div>
                      <div className="ssr-variant hidden-1eu3j9 hidden-xmru3t">
                        <div
                          className="framer-145uqvo"
                          data-border="true"
                          data-framer-name="scene 2"
                          style={{
                            willChange: "transform",
                            opacity: "1",
                            transform: "none",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1312"
                              height="736"
                              sizes="(min-width: 1200px) calc(min(max(min(100vw - 48px, 1000px), 1px), 1100px) - 80px), (max-width: 809.98px) calc(min(100vw - 48px, (100vw - 48px) * 2.5641) - 40px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw - 48px, 1000px) * 0.9 - 80px)"
                              srcset="/assets/6r2nI6vQGloKfLH2fg3ApxFNKc.png?scale-down-to=512&amp;width=1312&amp;height=736 512w,/assets/6r2nI6vQGloKfLH2fg3ApxFNKc.png?scale-down-to=1024&amp;width=1312&amp;height=736 1024w,/assets/6r2nI6vQGloKfLH2fg3ApxFNKc.png?width=1312&amp;height=736 1312w"
                              src="/assets/6r2nI6vQGloKfLH2fg3ApxFNKc.png?width=1312&amp;height=736"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>

                        </div>
                      </div>
                      <div className="ssr-variant hidden-6bv0bu">
                        <div
                          className="framer-llwrsn"
                          data-border="true"
                          data-framer-name="scene 3"
                          style={{
                            willChange: "transform",
                            opacity: "1",
                            transform: "none",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1312"
                              height="736"
                              sizes="(min-width: 1200px) calc(min(max(min(100vw - 48px, 1000px), 1px), 1100px) - 80px), (max-width: 809.98px) calc(min(100vw - 48px, (100vw - 48px) * 2.5641) - 40px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw - 48px, 1000px) * 0.9 - 80px)"
                              srcset="/assets/sREnx3JL74OVwjP8dHU8xA0hthI.png?scale-down-to=512&amp;width=1312&amp;height=736 512w,/assets/sREnx3JL74OVwjP8dHU8xA0hthI.png?scale-down-to=1024&amp;width=1312&amp;height=736 1024w,/assets/sREnx3JL74OVwjP8dHU8xA0hthI.png?width=1312&amp;height=736 1312w"
                              src="/assets/sREnx3JL74OVwjP8dHU8xA0hthI.png?width=1312&amp;height=736"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>

                        </div>
                      </div>
                      <div className="ssr-variant hidden-1eu3j9 hidden-xmru3t">
                        <div
                          className="framer-llwrsn"
                          data-border="true"
                          data-framer-name="scene 3"
                          style={{
                            willChange: "transform",
                            opacity: "1",
                            transform: "none",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1312"
                              height="736"
                              sizes="(min-width: 1200px) calc(min(max(min(100vw - 48px, 1000px), 1px), 1100px) - 80px), (max-width: 809.98px) calc(min(100vw - 48px, (100vw - 48px) * 2.5641) - 40px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw - 48px, 1000px) * 0.9 - 80px)"
                              srcset="/assets/sREnx3JL74OVwjP8dHU8xA0hthI.png?scale-down-to=512&amp;width=1312&amp;height=736 512w,/assets/sREnx3JL74OVwjP8dHU8xA0hthI.png?scale-down-to=1024&amp;width=1312&amp;height=736 1024w,/assets/sREnx3JL74OVwjP8dHU8xA0hthI.png?width=1312&amp;height=736 1312w"
                              src="/assets/sREnx3JL74OVwjP8dHU8xA0hthI.png?width=1312&amp;height=736"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>

                        </div>
                      </div>
                      <div className="ssr-variant">
                        <div
                          className="framer-1b9w71t hidden-6bv0bu"
                          data-border="true"
                          data-framer-name="scene 4"
                          style={{
                            willChange: "transform",
                            opacity: "1",
                            transform: "none",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1312"
                              height="736"
                              sizes="(min-width: 1200px) calc(min(max(min(100vw - 48px, 1000px), 1px), 1100px) - 80px), (max-width: 809.98px) calc(min(max(min(100vw - 48px, 1000px), 1px), 1100px) - 80px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw - 48px, 1000px) * 0.9 - 80px)"
                              srcset="/assets/wJIjojdkuOkyWjZyD5Jm7rY6tg.png?scale-down-to=512&amp;width=1312&amp;height=736 512w,/assets/wJIjojdkuOkyWjZyD5Jm7rY6tg.png?scale-down-to=1024&amp;width=1312&amp;height=736 1024w,/assets/wJIjojdkuOkyWjZyD5Jm7rY6tg.png?width=1312&amp;height=736 1312w"
                              src="/assets/wJIjojdkuOkyWjZyD5Jm7rY6tg.png?width=1312&amp;height=736"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>

                        </div>
                      </div>
                      <div className="ssr-variant">
                        <div
                          className="framer-dlqyqu hidden-6bv0bu"
                          data-border="true"
                          data-framer-name="scene 5"
                          style={{
                            willChange: "transform",
                            opacity: "1",
                            transform: "none",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1312"
                              height="736"
                              sizes="(min-width: 1200px) calc(min(max(min(100vw - 48px, 1000px), 1px), 1100px) - 80px), (max-width: 809.98px) calc(min(max(min(100vw - 48px, 1000px), 1px), 1100px) - 80px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw - 48px, 1000px) * 0.9 - 80px)"
                              srcset="/assets/bm5WPl54eDyiLCuXRbSgrpwTUU.png?scale-down-to=512&amp;width=1312&amp;height=736 512w,/assets/bm5WPl54eDyiLCuXRbSgrpwTUU.png?scale-down-to=1024&amp;width=1312&amp;height=736 1024w,/assets/bm5WPl54eDyiLCuXRbSgrpwTUU.png?width=1312&amp;height=736 1312w"
                              src="/assets/bm5WPl54eDyiLCuXRbSgrpwTUU.png?width=1312&amp;height=736"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="framer-pizgd7" data-framer-name="Final CTA" style={{ paddingBottom: "300px", position: "relative", zIndex: 999, overflow: "visible" }}>
            <div className="framer-b2ghed" data-framer-name="Container" style={{ overflow: "visible" }}>
              <div className="framer-1qttjwu" data-framer-name="CTA">
                <div className="framer-1jdj2d5">
                  <div className="ssr-variant">
                    <div className="framer-dkyysv" data-framer-name="Logo">
                      <div
                        style={{
                          position: "absolute",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          left: "0",
                        }}
                        data-framer-background-image-wrapper="true"
                      >
                        <img
                          decoding="async"
                          width="750"
                          height="750"
                          sizes="(min-width: 1200px) max(80px, 32px), (max-width: 809.98px) max(68px, 32px), (min-width: 810px) and (max-width: 1199.98px) max(80px, 32px)"
                          srcset="/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?scale-down-to=512&amp;width=750&amp;height=750 512w,/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?width=750&amp;height=750 750w"
                          src="/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?width=750&amp;height=750"
                          alt="App logo"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px', zIndex: 20 }}>
                    <button 
                      onClick={() => navigate('/faqs')}
                      style={{
                        padding: '12px 32px',
                        backgroundColor: '#FCD10A',
                        color: '#000',
                        border: 'none',
                        borderRadius: '30px',
                        fontSize: '18px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(252, 209, 10, 0.3)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#E5BD09';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#FCD10A';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      FAQs
                    </button>
                  </div>
                  <div className="ssr-variant hidden-6bv0bu hidden-1eu3j9">
                    <div
                      className="framer-ptl4mj"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <h2
                        className="framer-text framer-styles-preset-1qehvgj"
                        data-styles-preset="JZCLFGmi6"
                        style={{ "-FramerTextAlignment": "left" }}
                      >
                        Get the Drama your Day Deserves.
                      </h2>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1eu3j9 hidden-xmru3t">
                    <div
                      className="framer-ptl4mj"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <h2
                        className="framer-text framer-styles-preset-1qehvgj"
                        data-styles-preset="JZCLFGmi6"
                        style={{ "-FramerTextAlignment": "center" }}
                      >
                        Get the Drama your Day Deserves.
                      </h2>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-6bv0bu hidden-xmru3t">
                    <div
                      className="framer-ptl4mj"
                      data-framer-component-type="RichTextContainer"
                      style={{ transform: "none" }}
                    >
                      <h3
                        className="framer-text framer-styles-preset-1oqllk"
                        data-styles-preset="WnP80BsCd"
                        style={{ "-FramerTextAlignment": "left" }}
                      >
                        Snackable. Fictional. Emotional. Real.
                        <br className="framer-text" />
                        Welcome to ChaiShots
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="framer-1mcisg7" data-framer-name="Buttons">
                  <div className="ssr-variant">
                    <div className="framer-1u394ac-container" id="1u394ac">
                      <button
                        className="framer-4H7Cc framer-6ej7s5 framer-v-6ej7s5"
                        data-framer-name="Button"
                        data-highlight="true"
                        data-reset="button"
                        tabindex="0"
                        style={{
                          backgroundColor: "rgb(252, 211, 2)",
                          borderBottomLeftRadius: "16px",
                          borderBottomRightRadius: "16px",
                          borderTopLeftRadius: "16px",
                          borderTopRightRadius: "16px",
                        }}
                      >
                        <div
                          className="framer-f1yk4y"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            "-ExtractedR6o4lv":
                              "var(--variable-reference-FwI_rhNnE-w7CzHbZao)",
                            "-FramerLinkTextColor": "rgb(0, 153, 255)",
                            "-FramerLinkTextDecoration": "underline",
                            "-VariableReference-FwI_rhNnEW7CzHbZao":
                              "var(--token-60754397-54d7-4e9a-a3a7-bea824d65188, rgba(18, 19, 22, 0.8))",
                            transform: "none",
                          }}
                        >
                          <p
                            className="framer-text"
                            style={{
                              "-FontSelector": "SW50ZXItTWVkaXVt",
                              "-FramerFontFamily": "&quot",
                              "-FramerFontSize": "15px",
                              "-FramerFontWeight": "500",
                              "-FramerLetterSpacing": "-0.03em",
                              "-FramerLineHeight": "1.3em",
                              "-FramerTextAlignment": "left",
                              "-FramerTextColor":
                                "var(--extracted-r6o4lv, var(--variable-reference-FwI_rhNnE-w7CzHbZao))",
                            }}
                          >
                            Available for iOS &amp; Android
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {!isLoggedIn && (
                <div
                  className="framer-1u765xh hidden-6bv0bu"
                  data-framer-name="Devices"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "translateY(80px)",
                  }}
                >
                  <div className="ssr-variant">
                    <div
                      className="framer-c8xddt-container"
                      style={{
                        willChange: "transform",
                        opacity: "1",
                        transform: "translateY(160px)",
                      }}
                    >
                      <div
                        className="framer-DctWk framer-irqwcz framer-v-irqwcz floating-device float-anim-device"
                        data-framer-name="Mockup"
                        style={{ height: "100%", width: "100%" }}
                      >
                        <div className="framer-1a59jhm" data-framer-name="Shadow">
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="2292"
                              height="3366"
                              sizes="(min-width: 1200px) max(calc(280px * 1.6186), calc(330px * 1.6186)), (max-width: 809.98px) max(calc(280px * 1.6186), calc(210px * 1.6186)), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 1.6186)"
                              srcset="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=1024&amp;width=2292&amp;height=3366 697w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?scale-down-to=2048&amp;width=2292&amp;height=3366 1394w,/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366 2292w"
                              src="/assets/a9gc2DlbpkkZlsKZRlBfRklZyY.png?width=2292&amp;height=3366"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "fill",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-b1om7b"
                          data-framer-name="Screen"
                          style={{
                            borderBottomLeftRadius: "22px",
                            borderBottomRightRadius: "22px",
                            borderTopLeftRadius: "22px",
                            borderTopRightRadius: "22px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="711"
                              height="1544"
                              sizes="(min-width: 1200px) calc(280px * 0.9), (max-width: 809.98px) calc(280px * 0.9), (min-width: 810px) and (max-width: 1199.98px) calc(280px * 0.9)"
                              srcset="/assets/otWoGIEuXHRBuGwWCw4BOwtPo.png?width=711&amp;height=1544 711w"
                              src="/assets/otWoGIEuXHRBuGwWCw4BOwtPo.png?width=711&amp;height=1544"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="framer-w6ia9i"
                          data-framer-name="iPhone Borders"
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="1888"
                              height="3832"
                              sizes="(min-width: 1200px) max(280px, 330px), (max-width: 809.98px) max(280px, 210px), (min-width: 810px) and (max-width: 1199.98px) 280px"
                              srcset="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?scale-down-to=2048&amp;width=1888&amp;height=3832 1009w,/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832 1888w"
                              src="/assets/H2xOBKfRU2M06U4j9LF5WN8z6pA.png?width=1888&amp;height=3832"
                              alt=""
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center",
                                objectFit: "fill",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
          <div className="ssr-variant hidden-6bv0bu hidden-1eu3j9">
            <div className="framer-14h7s5w-container">
              <footer
                className="framer-s2m5x framer-SeWpH framer-8tCFC framer-od7661 framer-v-od7661"
                data-framer-name="Desktop"
                style={{
                  backgroundColor:
                    "var(--token-a1f53698-a178-4eb8-9899-2999dea13655, rgb(245, 245, 247))",
                  maxWidth: "100%",
                  width: "100%",
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                }}
              >
                <div className="framer-1tt2bnp">
                  <div
                    className="framer-62hs1g"
                    data-framer-name="Logo"
                    style={{
                      borderBottomLeftRadius: "8px",
                      borderBottomRightRadius: "8px",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        cornerShape: "inherit",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                      }}
                      data-framer-background-image-wrapper="true"
                    >
                      <img
                        decoding="async"
                        width="750"
                        height="750"
                        sizes="(min-width: 1200px) max(80px, 32px), (max-width: 809.98px) max(68px, 32px), (min-width: 810px) and (max-width: 1199.98px) max(80px, 32px)"
                        srcset="/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?scale-down-to=512&amp;width=750&amp;height=750 512w,/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?width=750&amp;height=750 750w"
                        src="/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?width=750&amp;height=750"
                        alt="App logo"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <div className="framer-nnwbcg">
                    <div
                      className="framer-1se2w8c"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                        }}
                      >
                        ChaiShots
                      </p>
                    </div>
                    <div
                      className="framer-d54vlw"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "12px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "left",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Made with ❤️ in Hyderabad
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-1pvzhg8">
                  <div className="framer-9xpkxb" data-framer-name="Pages">
                    <div
                      className="framer-fyudxl"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Pages
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-3 mt-4">
  <a href="/" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" data-framer-page-link-current="true">
    Home
  </a>

  <a href="/careers" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors">
    Careers
  </a>

  <a href="/privacy-policy" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" target="_blank">
    Privacy Policy
  </a>

  <a href="/terms-conditions" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" target="_blank">
    Terms and Conditions
  </a>

  <a href="/account-deletion" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" target="_blank">
    Account Deletion
  </a>

  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('openCookieModal'));
    }}
    className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors text-left"
  >
    Cookie Preferences
  </a>
</div>
                  </div>
                  <div className="framer-1yrm9lh" data-framer-name="Install">
                    <div
                      className="framer-1nfwp78"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Install
                      </p>
                    </div>
                    <div className="framer-1t6uayl">
                      <div
                        className="framer-2c90kr"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-1veg3uv"
                            data-styles-preset="usLKCTepC"
                            href="https://apps.apple.com/in/app/chai-shots/id6741884665"
                            target="_blank"
                            rel="noopener"
                          >
                            App Store
                          </a>
                        </p>
                      </div>
                      <div
                        className="framer-1lvi6e9"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-1veg3uv"
                            data-styles-preset="usLKCTepC"
                            href="https://play.google.com/store/apps/details?id=com.chaiShots&amp;pcampaignid=web_share"
                            target="_blank"
                            rel="noopener"
                          >
                            Google Play
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-11knyfw" data-framer-name="Follow us">
                    <div
                      className="framer-1mucuu7"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Follow us
                      </p>
                    </div>
                    <div className="framer-1kxjtfa">
                      <div
                        className="framer-uc07ax"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="https://www.youtube.com/@ChaiShotsApp"
                            target="_blank"
                            rel="noopener"
                          >
                            Youtube
                          </a>
                        </p>
                      </div>
                      <div
                        className="framer-fmciy7"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="https://www.instagram.com/chaishotsapp"
                            target="_blank"
                            rel="noopener"
                          >
                            Instagram
                          </a>
                        </p>
                      </div>
                      <div
                        className="framer-219ko4"
                        data-framer-name="Linkedin"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="https://www.linkedin.com/company/chaishotsapp/"
                            target="_blank"
                            rel="noopener"
                          >
                            Linkedin
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-hgw87h" data-framer-name="Support">
                    <div
                      className="framer-qjl3vs"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Contact
                      </p>
                    </div>
                    <div className="framer-5jmkfs">
                      <div
                        className="framer-torp62"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="mailto:support@chaishots.in"
                            target="_blank"
                            rel="noopener"
                          >
                            Email
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1i5q0po" data-framer-name="Made by">
                    <div className="framer-1sr3qjn"></div>
                  </div>
                </div>
                <div className="framer-u8c9mx">
                  <div className="framer-s0wme" data-framer-name="Made by">
                    <div className="framer-1pbg0yq"></div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <div className="ssr-variant hidden-1eu3j9 hidden-xmru3t">
            <div className="framer-14h7s5w-container">
              <footer
                className="framer-s2m5x framer-SeWpH framer-8tCFC framer-od7661 framer-v-11krapm"
                data-framer-name="Phone"
                style={{
                  backgroundColor:
                    "var(--token-a1f53698-a178-4eb8-9899-2999dea13655, rgb(245, 245, 247))",
                  maxWidth: "100%",
                  width: "100%",
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                }}
              >
                <div className="framer-1tt2bnp">
                  <div
                    className="framer-62hs1g"
                    data-framer-name="Logo"
                    style={{
                      borderBottomLeftRadius: "8px",
                      borderBottomRightRadius: "8px",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        cornerShape: "inherit",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                      }}
                      data-framer-background-image-wrapper="true"
                    >
                      <img
                        decoding="async"
                        width="750"
                        height="750"
                        sizes="(min-width: 1200px) max(80px, 32px), (max-width: 809.98px) max(68px, 32px), (min-width: 810px) and (max-width: 1199.98px) max(80px, 32px)"
                        srcset="/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?scale-down-to=512&amp;width=750&amp;height=750 512w,/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?width=750&amp;height=750 750w"
                        src="/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?width=750&amp;height=750"
                        alt="App logo"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <div className="framer-nnwbcg">
                    <div
                      className="framer-1se2w8c"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                        }}
                      >
                        ChaiShots
                      </p>
                    </div>
                    <div
                      className="framer-d54vlw"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "12px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "left",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Made with ❤️ in Hyderabad
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-1pvzhg8">
                  <div className="framer-9xpkxb" data-framer-name="Pages">
                    <div
                      className="framer-fyudxl"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Pages
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-3 mt-4">
  <a href="/" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" data-framer-page-link-current="true">
    Home
  </a>

  <a href="/careers" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors">
    Careers
  </a>

  <a href="/privacy-policy" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" target="_blank">
    Privacy Policy
  </a>

  <a href="/terms-conditions" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" target="_blank">
    Terms and Conditions
  </a>

  <a href="/account-deletion" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" target="_blank">
    Account Deletion
  </a>

  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('openCookieModal'));
    }}
    className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors text-left"
  >
    Cookie Preferences
  </a>
</div>
                  </div>
                  <div className="framer-1yrm9lh" data-framer-name="Install">
                    <div
                      className="framer-1nfwp78"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Install
                      </p>
                    </div>
                    <div className="framer-1t6uayl">
                      <div
                        className="framer-2c90kr"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-1veg3uv"
                            data-styles-preset="usLKCTepC"
                            href="https://apps.apple.com/in/app/chai-shots/id6741884665"
                            target="_blank"
                            rel="noopener"
                          >
                            App Store
                          </a>
                        </p>
                      </div>
                      <div
                        className="framer-1lvi6e9"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-1veg3uv"
                            data-styles-preset="usLKCTepC"
                            href="https://play.google.com/store/apps/details?id=com.chaiShots&amp;pcampaignid=web_share"
                            target="_blank"
                            rel="noopener"
                          >
                            Google Play
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-11knyfw" data-framer-name="Follow us">
                    <div
                      className="framer-1mucuu7"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Follow us
                      </p>
                    </div>
                    <div className="framer-1kxjtfa">
                      <div
                        className="framer-uc07ax"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="https://www.youtube.com/@ChaiShotsApp"
                            target="_blank"
                            rel="noopener"
                          >
                            Youtube
                          </a>
                        </p>
                      </div>
                      <div
                        className="framer-fmciy7"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="https://www.instagram.com/chaishotsapp"
                            target="_blank"
                            rel="noopener"
                          >
                            Instagram
                          </a>
                        </p>
                      </div>
                      <div
                        className="framer-219ko4"
                        data-framer-name="Linkedin"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="https://www.linkedin.com/company/chaishotsapp/"
                            target="_blank"
                            rel="noopener"
                          >
                            Linkedin
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-hgw87h" data-framer-name="Support">
                    <div
                      className="framer-qjl3vs"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Contact
                      </p>
                    </div>
                    <div className="framer-5jmkfs">
                      <div
                        className="framer-torp62"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="mailto:support@chaishots.in"
                            target="_blank"
                            rel="noopener"
                          >
                            Email
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1i5q0po" data-framer-name="Made by">
                    <div className="framer-1sr3qjn"></div>
                  </div>
                </div>
                <div className="framer-u8c9mx">
                  <div className="framer-s0wme" data-framer-name="Made by">
                    <div className="framer-1pbg0yq"></div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <div className="ssr-variant hidden-6bv0bu hidden-xmru3t">
            <div className="framer-14h7s5w-container">
              <footer
                className="framer-s2m5x framer-SeWpH framer-8tCFC framer-od7661 framer-v-12d1n71"
                data-framer-name="Tablet"
                style={{
                  backgroundColor:
                    "var(--token-a1f53698-a178-4eb8-9899-2999dea13655, rgb(245, 245, 247))",
                  maxWidth: "100%",
                  width: "100%",
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                }}
              >
                <div className="framer-1tt2bnp">
                  <div
                    className="framer-62hs1g"
                    data-framer-name="Logo"
                    style={{
                      borderBottomLeftRadius: "8px",
                      borderBottomRightRadius: "8px",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        cornerShape: "inherit",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                      }}
                      data-framer-background-image-wrapper="true"
                    >
                      <img
                        decoding="async"
                        width="750"
                        height="750"
                        sizes="(min-width: 1200px) max(80px, 32px), (max-width: 809.98px) max(68px, 32px), (min-width: 810px) and (max-width: 1199.98px) max(80px, 32px)"
                        srcset="/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?scale-down-to=512&amp;width=750&amp;height=750 512w,/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?width=750&amp;height=750 750w"
                        src="/assets/rSaflFY3i7l8Ot0x5p40VCRuQP8.jpg?width=750&amp;height=750"
                        alt="App logo"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <div className="framer-nnwbcg">
                    <div
                      className="framer-1se2w8c"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                        }}
                      >
                        ChaiShots
                      </p>
                    </div>
                    <div
                      className="framer-d54vlw"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "12px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "left",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Made with ❤️ in Hyderabad
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-1pvzhg8">
                  <div className="framer-9xpkxb" data-framer-name="Pages">
                    <div
                      className="framer-fyudxl"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Pages
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-3 mt-4">
  <a href="/" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" data-framer-page-link-current="true">
    Home
  </a>

  <a href="/careers" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors">
    Careers
  </a>

  <a href="/privacy-policy" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" target="_blank">
    Privacy Policy
  </a>

  <a href="/terms-conditions" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" target="_blank">
    Terms and Conditions
  </a>

  <a href="/account-deletion" className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors" target="_blank">
    Account Deletion
  </a>

  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('openCookieModal'));
    }}
    className="text-[13px] font-normal whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors text-left"
  >
    Cookie Preferences
  </a>
</div>
                  </div>
                  <div className="framer-1yrm9lh" data-framer-name="Install">
                    <div
                      className="framer-1nfwp78"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Install
                      </p>
                    </div>
                    <div className="framer-1t6uayl">
                      <div
                        className="framer-2c90kr"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-1veg3uv"
                            data-styles-preset="usLKCTepC"
                            href="https://apps.apple.com/in/app/chai-shots/id6741884665"
                            target="_blank"
                            rel="noopener"
                          >
                            App Store
                          </a>
                        </p>
                      </div>
                      <div
                        className="framer-1lvi6e9"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-1veg3uv"
                            data-styles-preset="usLKCTepC"
                            href="https://play.google.com/store/apps/details?id=com.chaiShots&amp;pcampaignid=web_share"
                            target="_blank"
                            rel="noopener"
                          >
                            Google Play
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-11knyfw" data-framer-name="Follow us">
                    <div
                      className="framer-1mucuu7"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Follow us
                      </p>
                    </div>
                    <div className="framer-1kxjtfa">
                      <div
                        className="framer-uc07ax"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="https://www.youtube.com/@ChaiShotsApp"
                            target="_blank"
                            rel="noopener"
                          >
                            Youtube
                          </a>
                        </p>
                      </div>
                      <div
                        className="framer-fmciy7"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="https://www.instagram.com/chaishotsapp"
                            target="_blank"
                            rel="noopener"
                          >
                            Instagram
                          </a>
                        </p>
                      </div>
                      <div
                        className="framer-219ko4"
                        data-framer-name="Linkedin"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="https://www.linkedin.com/company/chaishotsapp/"
                            target="_blank"
                            rel="noopener"
                          >
                            Linkedin
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-hgw87h" data-framer-name="Support">
                    <div
                      className="framer-qjl3vs"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "-ExtractedR6o4lv":
                          "var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115))",
                        "-FramerLinkTextColor": "rgb(0, 153, 255)",
                        "-FramerLinkTextDecoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text"
                        style={{
                          "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                          "-FramerFontFamily": "&quot",
                          "-FramerFontSize": "13px",
                          "-FramerFontWeight": "600",
                          "-FramerLetterSpacing": "-0.03em",
                          "-FramerTextAlignment": "center",
                          "-FramerTextColor":
                            "var(--extracted-r6o4lv, var(--token-66acd1d2-52d6-4a61-bf7e-f53145f51819, rgb(110, 110, 115)))",
                        }}
                      >
                        Contact
                      </p>
                    </div>
                    <div className="framer-5jmkfs">
                      <div
                        className="framer-torp62"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="mailto:support@chaishots.in"
                            target="_blank"
                            rel="noopener"
                          >
                            Email
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1i5q0po" data-framer-name="Made by">
                    <div className="framer-1sr3qjn"></div>
                  </div>
                </div>
                <div className="framer-u8c9mx">
                  <div className="framer-s0wme" data-framer-name="Made by">
                    <div className="framer-1pbg0yq"></div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
