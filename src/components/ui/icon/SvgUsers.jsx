import React from "react";

function SvgUsers({ className = "" }) {
  return (
    <svg
      className={`${className}`}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.24408 11.1038C8.99798 10.6019 9.57034 9.87067 9.87653 9.01832C10.1827 8.16597 10.2065 7.23771 9.94432 6.37081C9.68214 5.50391 9.14795 4.74439 8.42073 4.20457C7.69351 3.66475 6.81187 3.37329 5.90619 3.37329C5.00051 3.37329 4.11888 3.66475 3.39166 4.20457C2.66444 4.74439 2.13024 5.50391 1.86807 6.37081C1.6059 7.23771 1.62966 8.16597 1.93586 9.01832C2.24205 9.87067 2.81441 10.6019 3.5683 11.1038C2.20459 11.6064 1.03994 12.5365 0.248146 13.7552C0.206533 13.8171 0.177627 13.8866 0.163111 13.9597C0.148595 14.0328 0.148758 14.1081 0.16359 14.1812C0.178421 14.2542 0.207626 14.3236 0.249507 14.3853C0.291387 14.4469 0.345108 14.4997 0.407547 14.5404C0.469985 14.5811 0.539896 14.609 0.613215 14.6225C0.686534 14.636 0.761799 14.6347 0.834634 14.6188C0.90747 14.603 0.976424 14.5728 1.03749 14.53C1.09855 14.4873 1.15051 14.4328 1.19033 14.3698C1.70108 13.5842 2.39996 12.9387 3.22352 12.4918C4.04707 12.045 4.96921 11.8109 5.90619 11.8109C6.84317 11.8109 7.76531 12.045 8.58887 12.4918C9.41243 12.9387 10.1113 13.5842 10.6221 14.3698C10.7046 14.4924 10.832 14.5776 10.9768 14.607C11.1217 14.6364 11.2723 14.6076 11.396 14.5269C11.5198 14.4462 11.6069 14.32 11.6383 14.1756C11.6698 14.0312 11.6432 13.8802 11.5642 13.7552C10.7724 12.5365 9.6078 11.6064 8.24408 11.1038ZM2.81244 7.59375C2.81244 6.98187 2.99389 6.38372 3.33383 5.87496C3.67378 5.36619 4.15696 4.96966 4.72227 4.7355C5.28758 4.50134 5.90963 4.44008 6.50975 4.55945C7.10988 4.67882 7.66114 4.97347 8.09381 5.40614C8.52647 5.83881 8.82112 6.39006 8.9405 6.99019C9.05987 7.59032 8.9986 8.21237 8.76445 8.77768C8.53029 9.34299 8.13375 9.82617 7.62499 10.1661C7.11622 10.5061 6.51808 10.6875 5.90619 10.6875C5.08597 10.6866 4.2996 10.3603 3.71961 9.78034C3.13962 9.20035 2.81337 8.41398 2.81244 7.59375ZM17.5879 14.5336C17.463 14.6151 17.3108 14.6436 17.1648 14.6129C17.0188 14.5821 16.8911 14.4947 16.8096 14.3698C16.2994 13.5838 15.6006 12.938 14.7769 12.4913C13.9532 12.0446 13.0307 11.8112 12.0937 11.8125C11.9445 11.8125 11.8014 11.7532 11.6959 11.6478C11.5905 11.5423 11.5312 11.3992 11.5312 11.25C11.5312 11.1008 11.5905 10.9577 11.6959 10.8523C11.8014 10.7468 11.9445 10.6875 12.0937 10.6875C12.5493 10.6871 12.9992 10.586 13.4112 10.3916C13.8232 10.1971 14.1872 9.91406 14.4772 9.56262C14.7671 9.21119 14.9759 8.80006 15.0885 8.3586C15.2011 7.91713 15.2149 7.45624 15.1287 7.00886C15.0426 6.56147 14.8587 6.13863 14.5902 5.77055C14.3217 5.40246 13.9752 5.09823 13.5755 4.87957C13.1758 4.66092 12.7328 4.53324 12.278 4.50567C11.8232 4.4781 11.368 4.55132 10.9448 4.72008C10.8758 4.74991 10.8015 4.7656 10.7263 4.76624C10.6512 4.76688 10.5766 4.75244 10.5071 4.72378C10.4376 4.69512 10.3746 4.65283 10.3217 4.59939C10.2689 4.54595 10.2272 4.48246 10.1993 4.41267C10.1714 4.34287 10.1578 4.26819 10.1592 4.19303C10.1606 4.11787 10.1771 4.04377 10.2077 3.97509C10.2382 3.90641 10.2822 3.84455 10.3371 3.79317C10.392 3.74179 10.4566 3.70193 10.5271 3.67594C11.4957 3.28968 12.5729 3.27578 13.5511 3.63692C14.5293 3.99806 15.339 4.70866 15.8242 5.63162C16.3094 6.55459 16.4355 7.62452 16.1784 8.63502C15.9212 9.64552 15.2989 10.525 14.4316 11.1038C15.7953 11.6064 16.9599 12.5365 17.7517 13.7552C17.8332 13.8802 17.8617 14.0324 17.831 14.1783C17.8003 14.3243 17.7128 14.4521 17.5879 14.5336Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUsers;