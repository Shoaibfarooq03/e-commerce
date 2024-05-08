import "./contact.scss";

const Contact = () => {

  return (
    <>
      <div className="contact">
        <div className="headerImg">
          <img src="/shopimg1.png" alt="" />
          <h2>Contact</h2>
          <div className="breadcrumb">
            <span className="bold">Home</span>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hifen"
            >
              <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
            </svg>
            <span className="normal">Contact</span>
          </div>
        </div>
       <div className="info">
          <span> Get In Touch With Us</span>
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br />
            An Email. Our Staff Always Be There To Help You Out. Do Not
            Hesitate!
          </p>
          </div>
          <div className="fullcontact">
          <div className="contactinfo">
            <div className="address">
              <svg
                width="22"
                height="28"
                viewBox="0 0 22 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg1"
              >
                <path
                  d="M11 0.120087C8.08369 0.123477 5.28779 1.26659 3.22564 3.29867C1.16348 5.33075 0.00345217 8.08587 1.17029e-05 10.9597C-0.00348119 13.3081 0.774992 15.5929 2.21601 17.4634C2.21601 17.4634 2.51601 17.8527 2.56501 17.9088L11 27.7118L19.439 17.9039C19.483 17.8517 19.784 17.4634 19.784 17.4634L19.785 17.4605C21.2253 15.5907 22.0034 13.3071 22 10.9597C21.9966 8.08587 20.8365 5.33075 18.7744 3.29867C16.7122 1.26659 13.9163 0.123477 11 0.120087ZM11 14.9013C10.2089 14.9013 9.43553 14.6702 8.77773 14.237C8.11993 13.8039 7.60724 13.1883 7.30449 12.4681C7.00174 11.7478 6.92253 10.9553 7.07687 10.1907C7.23121 9.42608 7.61217 8.72374 8.17158 8.17249C8.73099 7.62124 9.44373 7.24583 10.2197 7.09374C10.9956 6.94165 11.7998 7.01971 12.5307 7.31804C13.2616 7.61638 13.8864 8.12159 14.3259 8.7698C14.7654 9.418 15 10.1801 15 10.9597C14.9987 12.0047 14.5768 13.0065 13.827 13.7454C13.0771 14.4843 12.0605 14.9 11 14.9013Z"
                  fill="black"
                />
              </svg>
              <h3>Address</h3>
              <p>
                236 5th SE Avenue, New <br />
                York NY10000, United <br />
                States{" "}
              </p>
            </div>
            <div className="phone">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg2"
              >
                <path
                  d="M22.6091 18.425L17.5279 13.805C17.2877 13.5867 16.972 13.4703 16.6476 13.4803C16.3232 13.4903 16.0154 13.626 15.7891 13.8587L12.7979 16.935C12.0779 16.7975 10.6304 16.3462 9.14035 14.86C7.65035 13.3687 7.1991 11.9175 7.06535 11.2025L10.1391 8.20999C10.3721 7.9839 10.508 7.67602 10.5181 7.3515C10.5281 7.02698 10.4115 6.71129 10.1929 6.47124L5.5741 1.39124C5.35541 1.15044 5.05145 1.00437 4.72679 0.984068C4.40214 0.963762 4.08235 1.07082 3.83535 1.28249L1.12285 3.60874C0.906741 3.82564 0.777752 4.11431 0.760352 4.41999C0.741602 4.73249 0.384103 12.135 6.1241 17.8775C11.1316 22.8837 17.4041 23.25 19.1316 23.25C19.3841 23.25 19.5391 23.2425 19.5804 23.24C19.886 23.2229 20.1745 23.0933 20.3904 22.8762L22.7154 20.1625C22.9279 19.9163 23.0357 19.5968 23.0159 19.2721C22.996 18.9475 22.85 18.6435 22.6091 18.425Z"
                  fill="black"
                />
              </svg>
              <h3>Phone</h3>
              <p>
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
            <div className="worktime">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5ZM11.5 5.03125C11.5 4.84063 11.4243 4.65781 11.2895 4.52302C11.1547 4.38823 10.9719 4.3125 10.7812 4.3125C10.5906 4.3125 10.4078 4.38823 10.273 4.52302C10.1382 4.65781 10.0625 4.84063 10.0625 5.03125V12.9375C10.0625 13.0642 10.0961 13.1886 10.1597 13.2982C10.2233 13.4077 10.3147 13.4985 10.4247 13.5614L15.456 16.4364C15.6211 16.5256 15.8146 16.5467 15.995 16.4952C16.1755 16.4437 16.3287 16.3236 16.4218 16.1607C16.5149 15.9977 16.5406 15.8048 16.4933 15.6232C16.4461 15.4415 16.3297 15.2856 16.169 15.1886L11.5 12.5206V5.03125Z"
                  fill="black"
                />
              </svg>
              <h3>Work Time</h3>
              <p>
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
          <div className="contactdetail">
            <div className="fields">
              <div className="input-fields">
                <label htmlFor="Name">Your Full Name</label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  style={{ width: "466px", height: "75px" }}
                />
              </div>
            </div>
            <div className="fields">
              <div className="input-fields">
                <label htmlFor="Name">Email Address</label>
                <input
                  type="text"
                  id="address"
                  name="Name"
                  style={{ width: "466px", height: "75px" }}
                />
              </div>
            </div>
            <div className="fields">
              <div className="input-fields">
                <label htmlFor="Name">Contact Subject</label>
                <input
                  type="text"
                  id="address"
                  name="Name"
                  style={{ width: "466px", height: "75px" }}
                />
              </div>
            </div>
            <div className="fields">
              <div className="input-fields">
                <label htmlFor="Name">Any Message</label>
                <input
                  type="text"
                  id="address"
                  name="Name"
               
                  style={{ width: "466px", height: "75px" }}
                />
              </div>
            </div>
            <button>Submit</button>
            
          </div>
        </div>

        <div className="supportcontainer">
          <div className="support-item1">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.3546 3.51562C48.0743 3.51562 46.8741 3.86121 45.8389 4.46156V1.75781C45.8389 0.787031 45.0519 0 44.0811 0H15.9561C14.9852 0 14.1982 0.787031 14.1982 1.75781V4.48301C13.1549 3.8693 11.9409 3.51562 10.6454 3.51562C6.7684 3.51562 3.61418 6.66984 3.61418 10.5469C3.61418 13.5041 4.49051 16.3615 6.14836 18.8102C8.97071 22.9789 12.4511 24.0607 15.3309 25.2127C16.9915 29.348 20.3495 32.6252 24.5384 34.1769L23.2421 42.4219H22.9874C20.0796 42.4219 17.7139 44.7875 17.7139 47.6953V56.4844H15.9561C14.9854 56.4844 14.1983 57.2714 14.1983 58.2422C14.1983 59.213 14.9854 60 15.9561 60H44.0811C45.0519 60 45.8389 59.213 45.8389 58.2422C45.8389 57.2714 45.0519 56.4844 44.0811 56.4844H42.3233V47.6953C42.3233 44.7875 39.9577 42.4219 37.0499 42.4219H36.7951L35.499 34.177C39.694 32.623 43.0557 29.3386 44.7138 25.1948C47.4343 24.1066 51.0005 23.0217 53.8518 18.8102C55.5096 16.3615 56.3859 13.504 56.3859 10.5469C56.3858 6.66984 53.2316 3.51562 49.3546 3.51562ZM14.1852 20.968C9.89918 19.2536 7.12981 15.1631 7.12981 10.5469C7.12981 8.60836 8.70692 7.03125 10.6454 7.03125C12.5839 7.03125 14.1611 8.60836 14.1611 10.5469C14.1611 10.6705 14.1741 10.791 14.1983 10.9073V19.3359C14.1983 19.9009 14.2287 20.4588 14.2868 21.0087L14.1852 20.968ZM38.8077 56.4844H21.2296V52.9688H38.8077V56.4844ZM37.0499 45.9375C38.0191 45.9375 38.8077 46.7261 38.8077 47.6953V49.4531H21.2296V47.6953C21.2296 46.7261 22.0181 45.9375 22.9874 45.9375C23.9411 45.9375 34.8134 45.9375 37.0499 45.9375ZM26.8009 42.4219L27.9641 35.023C28.6368 35.1107 29.3224 35.1562 30.0186 35.1562C30.7148 35.1562 31.4005 35.1105 32.0732 35.023L33.2364 42.4219H26.8009ZM42.3233 19.3359C42.3233 26.1207 36.8034 31.6406 30.0186 31.6406C23.2338 31.6406 17.7139 26.1207 17.7139 19.3359V10.5469H42.3233V19.3359ZM42.3233 7.03125H17.7139V3.51562H42.3233V7.03125ZM45.8147 20.968L45.7522 20.993C45.8092 20.4483 45.8388 19.8955 45.8388 19.3359V10.5469C45.8389 8.60836 47.4161 7.03125 49.3546 7.03125C51.2931 7.03125 52.8702 8.60836 52.8702 10.5469C52.8702 15.1631 50.1008 19.2537 45.8147 20.968Z"
                fill="#242424"
              />
            </svg>

            <div className="support-text">
              <div className="title">High Quality</div>
              <h3>crafted from top materials</h3>
            </div>
          </div>
          <div className="support-item2">
            <svg
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_117_621)">
                <path
                  d="M57.1194 21.2612C56.3276 18.8097 56.6651 15.1296 54.6073 12.2882C52.5333 9.42438 48.9262 8.61039 46.8894 7.1207C44.874 5.64672 42.999 2.43918 39.6089 1.33293C36.3144 0.257852 32.9455 1.71672 30.3333 1.71672C27.7216 1.71672 24.3529 0.2575 21.0578 1.33281C17.6683 2.43883 15.7918 5.64707 13.7777 7.12035C11.7431 8.60828 8.13323 9.42449 6.05959 12.2879C4.00354 15.127 4.33764 18.8154 3.54733 21.2611C2.79522 23.5888 0.333344 26.3825 0.333344 30.0003C0.333344 33.6203 2.79241 36.4032 3.54733 38.7393C4.33905 41.1909 4.00155 44.8709 6.05936 47.7123C8.13323 50.5763 11.7403 51.3902 13.7773 52.88C15.7924 54.3537 17.6677 57.5615 21.0578 58.6676C24.3501 59.742 27.7243 58.2838 30.3333 58.2838C32.9388 58.2838 36.3208 59.7405 39.6089 58.6677C42.9985 57.5617 44.8739 54.3542 46.889 52.8802C48.9236 51.3923 52.5335 50.5761 54.6071 47.7127C56.6633 44.8735 56.3289 41.1854 57.1194 38.7394C57.8715 36.4116 60.3333 33.618 60.3333 30.0003C60.3333 26.3805 57.8749 23.5984 57.1194 21.2612ZM52.6591 37.298C51.7362 40.1545 51.978 43.3512 50.8108 44.963C49.6279 46.5962 46.5202 47.3423 44.1222 49.0963C41.7505 50.8308 40.0882 53.5804 38.1548 54.2112C36.3257 54.8082 33.3449 53.5961 30.3335 53.5961C27.2999 53.5961 24.3499 54.8107 22.512 54.2112C20.5789 53.5804 18.9189 50.8327 16.5446 49.0962C14.1608 47.3528 11.0354 46.5914 9.85588 44.9628C8.69245 43.3564 8.92506 40.1375 8.00784 37.2981C7.10877 34.5162 5.02084 32.1074 5.02084 30.0003C5.02084 27.891 7.1069 25.4905 8.0076 22.7025C8.93045 19.8462 8.68869 16.6492 9.85588 15.0375C11.0381 13.4054 14.1481 12.6569 16.5446 10.9042C18.9239 9.1641 20.5757 6.42109 22.5118 5.78934C24.3393 5.19309 27.3298 6.40445 30.3332 6.40445C33.3722 6.40445 36.3149 5.18898 38.1547 5.78934C40.0876 6.42004 41.7489 9.16879 44.1222 10.9043C46.5057 12.6477 49.6313 13.4091 50.8108 15.0377C51.9745 16.6444 51.7406 19.86 52.6589 22.7023V22.7024C53.5579 25.4843 55.6458 27.8931 55.6458 30.0003C55.6458 32.1095 53.5598 34.51 52.6591 37.298ZM41.1314 22.4774C42.0467 23.3928 42.0467 24.8767 41.1314 25.792L29.4002 37.5231C28.4848 38.4385 27.0008 38.4384 26.0855 37.5231L19.5355 30.973C18.6201 30.0577 18.62 28.5737 19.5353 27.6585C20.4507 26.7433 21.9349 26.7432 22.8499 27.6585L27.7428 32.5513L37.8166 22.4775C38.7319 21.5622 40.216 21.5622 41.1314 22.4774Z"
                  fill="#242424"
                />
              </g>
              <defs>
                <clipPath id="clip0_117_621">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(0.333344)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="support-text">
              <div className="title">Warranty Protection</div>
              <h3>Over 2 years</h3>
            </div>
          </div>
          <div className="support-item3">
            <svg
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_117_629)">
                <path
                  d="M56.0146 31.1019V3.77964C56.0146 2.80489 55.2243 2.01465 54.2496 2.01465H6.96174C5.98699 2.01465 5.19675 2.80489 5.19675 3.77964V33.28C4.34531 33.404 3.51295 33.7346 2.77659 34.2812C0.455278 35.9273 -0.0937517 39.6109 1.85068 41.8827L9.80055 51.5204C14.7216 57.2798 19.9491 57.9854 27.7205 57.9854C34.3894 57.9854 37.371 58.0148 43.1831 56.6905L48.8426 55.3369C49.7603 56.6184 51.2171 57.4485 52.8549 57.4485H55.6429C58.4129 57.4485 60.6666 55.0744 60.6666 52.1561V36.3784C60.6667 33.592 58.6116 31.3031 56.0146 31.1019ZM48.0813 34.7326L45.7296 33.5382C41.863 31.5865 37.3925 31.5142 33.4648 33.3403C32.3932 33.7618 30.056 35.1759 28.8437 35.1286H20.6834C17.9766 35.1286 15.7743 37.3307 15.7743 40.0376V41.3247C15.7591 41.3087 15.7433 41.2936 15.7283 41.2773L9.90091 34.9519C9.54827 34.5692 9.15209 34.2489 8.72684 33.9919V16.481H23.1707V22.951C23.1707 23.9257 23.9609 24.7159 24.9357 24.7159H36.0729C37.0476 24.7159 37.8379 23.9257 37.8379 22.951V16.481H52.4847V31.1018C50.4225 31.2611 48.7029 32.7364 48.0813 34.7326ZM26.7006 16.481H34.3078V21.186H26.7006V16.481ZM52.4846 12.951H37.8379V5.54463H52.4847V12.951H52.4846ZM34.3079 5.54463V12.9511H26.7007V5.54463H34.3079ZM23.1706 5.54463V12.9511H8.72673V5.54463H23.1706ZM42.3639 53.2568C36.9948 54.4865 33.7612 54.4367 27.7838 54.4367C20.4885 54.4367 16.9636 54.3188 12.5238 49.274L4.57394 39.6363C3.19113 37.8357 5.69577 35.7101 7.30473 37.3435L13.1321 43.669C14.6723 45.2941 16.6103 46.1885 18.9991 46.2411H35.1556C36.1303 46.2411 36.9206 45.4508 36.9206 44.4761C36.9206 43.5013 36.1303 42.7111 35.1556 42.7111H19.3042V40.0373C19.3042 39.277 19.9228 38.6583 20.6832 38.6583H28.8436C30.682 38.79 33.3355 37.2549 34.9529 36.541C37.8946 35.1733 41.2429 35.2274 44.135 36.6872L47.8314 38.5646V51.9489L42.3639 53.2568ZM57.1367 52.156C57.1367 53.1278 56.4666 53.9184 55.643 53.9184H52.855C52.0313 53.9184 51.3613 53.1278 51.3613 52.156V36.3784C51.3613 35.4066 52.0315 34.6159 52.855 34.6159H55.643C56.4666 34.6159 57.1367 35.4065 57.1367 36.3784V52.156Z"
                  fill="#242424"
                />
              </g>
              <defs>
                <clipPath id="clip0_117_629">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(0.666687)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="support-text">
              <div className="title">Free Shipping</div>
              <h3>Order over 150$ </h3>
            </div>
          </div>
          <div className="support-item4">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_117_635)">
                <path
                  d="M54.6936 23.9628C54.2992 10.6825 43.3742 0 29.9999 0C16.6257 0 5.70065 10.6825 5.30618 23.9628L3.52936 25.7396V37.7898L5.29406 39.5545V47.7647C5.29406 52.5652 9.19948 56.4706 13.9999 56.4706H16.1858C16.9143 58.5246 18.8758 60 21.1764 60H24.7058C27.0079 60 28.9705 58.5225 29.6978 56.4664C29.7987 56.4681 29.8997 56.4706 29.9999 56.4706C38.5221 56.4706 45.6527 50.3981 47.2922 42.3529H51.9074L56.4705 37.7898V25.7396L54.6936 23.9628ZM29.9999 3.52941C40.4742 3.52941 49.1954 11.174 50.8807 21.1765H47.2922C45.6527 13.1313 38.5221 7.05882 29.9999 7.05882C21.4778 7.05882 14.3472 13.1313 12.7077 21.1765H9.11924C10.8045 11.174 19.5257 3.52941 29.9999 3.52941ZM43.6709 21.1765C37.9663 21.1594 33.9369 21.5068 30.6148 16.6506L29.0016 14.2926L27.6152 16.7907C25.5952 20.4306 22.8749 21.1765 19.4117 21.1765H16.329C17.9002 15.0944 23.4337 10.5882 29.9999 10.5882C36.5662 10.5882 42.0997 15.0944 43.6709 21.1765ZM12.3529 38.8235H9.55442L7.05877 36.3279V27.2015L9.55442 24.7059H12.3529V38.8235ZM8.82348 47.7647V42.3529H12.7043C13.3687 45.6441 14.9582 48.6652 17.313 51.0916C16.8194 51.6191 16.4322 52.2467 16.1858 52.9412H13.9999C11.1456 52.9412 8.82348 50.6191 8.82348 47.7647ZM24.7058 56.4706H21.1764C20.2032 56.4706 19.4117 55.6791 19.4117 54.7059C19.4117 53.7328 20.2032 52.9412 21.1764 52.9412H24.7058C25.6789 52.9412 26.4705 53.7328 26.4705 54.7059C26.4705 55.6791 25.6789 56.4706 24.7058 56.4706ZM44.1176 38.8235C44.1176 46.608 37.7844 52.9412 29.9999 52.9412C29.8988 52.9412 29.7968 52.9392 29.6949 52.9368C28.9652 50.8851 27.0048 49.4118 24.7058 49.4118C21.0823 49.4198 21.1401 49.3936 20.6884 49.4352C17.6247 46.7498 15.8823 42.9248 15.8823 38.8235V24.7059H19.4117C22.5349 24.7059 26.3384 24.1909 29.2827 20.6076C33.1674 24.6786 37.9147 24.7059 42.1762 24.7059H44.1176V38.8235ZM52.9411 36.3279L50.4455 38.8235H47.647V24.7059H50.4455L52.9411 27.2015V36.3279Z"
                  fill="#242424"
                />
              </g>
              <defs>
                <clipPath id="clip0_117_635">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="support-text">
              <div className="title">24 / 7 Support</div>
              <h3>Dedicated Support</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
