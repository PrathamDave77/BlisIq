import React from 'react'
import '../theme.css';
import blisiq_logo from '../../public/Logo.png';

const Sidebar = () => {

  const general = [
    {
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 15V17M12 11V17M16 7V17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>,
      description: "Dashboard"
    },
    {
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.5 13L7.28446 14.5689C7.54995 15.0999 7.68269 15.3654 7.86003 15.5954C8.01739 15.7996 8.20041 15.9826 8.40455 16.14C8.63462 16.3173 8.9001 16.4501 9.43108 16.7155L11 17.5L9.43108 18.2845C8.9001 18.5499 8.63462 18.6827 8.40455 18.86C8.20041 19.0174 8.01739 19.2004 7.86003 19.4046C7.68269 19.6346 7.54995 19.9001 7.28446 20.4311L6.5 22L5.71554 20.4311C5.45005 19.9001 5.31731 19.6346 5.13997 19.4046C4.98261 19.2004 4.79959 19.0174 4.59545 18.86C4.36538 18.6827 4.0999 18.5499 3.56892 18.2845L2 17.5L3.56892 16.7155C4.0999 16.4501 4.36538 16.3173 4.59545 16.14C4.79959 15.9826 4.98261 15.7996 5.13997 15.5954C5.31731 15.3654 5.45005 15.0999 5.71554 14.5689L6.5 13Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 2L16.1786 5.06442C16.4606 5.79765 16.6016 6.16426 16.8209 6.47264C17.0153 6.74595 17.254 6.98475 17.5274 7.17909C17.8357 7.39836 18.2024 7.53937 18.9356 7.82138L22 9L18.9356 10.1786C18.2024 10.4606 17.8357 10.6016 17.5274 10.8209C17.254 11.0153 17.0153 11.254 16.8209 11.5274C16.6016 11.8357 16.4606 12.2024 16.1786 12.9356L15 16L13.8214 12.9356C13.5394 12.2024 13.3984 11.8357 13.1791 11.5274C12.9847 11.254 12.746 11.0153 12.4726 10.8209C12.1643 10.6016 11.7976 10.4606 11.0644 10.1786L8 9L11.0644 7.82138C11.7976 7.53937 12.1643 7.39836 12.4726 7.17909C12.746 6.98475 12.9847 6.74595 13.1791 6.47264C13.3984 6.16426 13.5394 5.79765 13.8214 5.06442L15 2Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      , description: "My content"
    },
    {
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 20H5.2C4.07989 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V7.2C2 6.07989 2 5.51984 2.21799 5.09202C2.40973 4.71569 2.71569 4.40973 3.09202 4.21799C3.51984 4 4.07989 4 5.2 4H5.6C7.84021 4 8.96031 4 9.81596 4.43597C10.5686 4.81947 11.1805 5.43139 11.564 6.18404C12 7.03968 12 8.15979 12 10.4M12 20V10.4M12 20H18.8C19.9201 20 20.4802 20 20.908 19.782C21.2843 19.5903 21.5903 19.2843 21.782 18.908C22 18.4802 22 17.9201 22 16.8V7.2C22 6.07989 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H18.4C16.1598 4 15.0397 4 14.184 4.43597C13.4314 4.81947 12.8195 5.43139 12.436 6.18404C12 7.03968 12 8.15979 12 10.4"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      , description: "Learning"
    },
    {
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 10.0001V16.0112C5 16.3702 5 16.5496 5.05465 16.7081C5.10299 16.8482 5.18187 16.9759 5.28558 17.0817C5.40287 17.2015 5.5634 17.2818 5.88446 17.4423L11.2845 20.1423C11.5468 20.2735 11.678 20.3391 11.8156 20.3649C11.9375 20.3877 12.0625 20.3877 12.1844 20.3649C12.322 20.3391 12.4532 20.2735 12.7155 20.1423L18.1155 17.4423C18.4366 17.2818 18.5971 17.2015 18.7144 17.0817C18.8181 16.9759 18.897 16.8482 18.9453 16.7081C19 16.5496 19 16.3702 19 16.0112V10.0001M2 8.50006L11.6422 3.67895C11.7734 3.61336 11.839 3.58056 11.9078 3.56766C11.9687 3.55622 12.0313 3.55622 12.0922 3.56766C12.161 3.58056 12.2266 3.61336 12.3578 3.67895L22 8.50006L12.3578 13.3212C12.2266 13.3868 12.161 13.4196 12.0922 13.4325C12.0313 13.4439 11.9687 13.4439 11.9078 13.4325C11.839 13.4196 11.7734 13.3868 11.6422 13.3212L2 8.50006Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      , description: "Explore"
    }
  ]

  const Users = [
    {
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      , desc: "Users"
    },
    {
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      , desc: "Groups"
    },
    {
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2.50011V21.5001M20 12.0001C20 16.9086 14.646 20.4785 12.698 21.615C12.4766 21.7442 12.3659 21.8087 12.2097 21.8422C12.0884 21.8682 11.9116 21.8682 11.7903 21.8422C11.6341 21.8087 11.5234 21.7442 11.302 21.615C9.35396 20.4785 4 16.9086 4 12.0001V7.21772C4 6.4182 4 6.01845 4.13076 5.67482C4.24627 5.37126 4.43398 5.10039 4.67766 4.88564C4.9535 4.64255 5.3278 4.50219 6.0764 4.22146L11.4382 2.21079C11.6461 2.13283 11.75 2.09385 11.857 2.07839C11.9518 2.06469 12.0482 2.06469 12.143 2.07839C12.25 2.09385 12.3539 2.13283 12.5618 2.21079L17.9236 4.22146C18.6722 4.50219 19.0465 4.64255 19.3223 4.88564C19.566 5.10039 19.7537 5.37126 19.8692 5.67482C20 6.01845 20 6.4182 20 7.21772V12.0001Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      , desc: "Roles"
    },
    {
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 14.2864C3.14864 15.1031 2 16.2412 2 17.5C2 19.9853 6.47715 22 12 22C17.5228 22 22 19.9853 22 17.5C22 16.2412 20.8514 15.1031 19 14.2864M18 8C18 12.0637 13.5 14 12 17C10.5 14 6 12.0637 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      , desc: "Sites"
    }
  ]

  return (
    <div className="flex flex-col bg-bg-primary rounded-none space-non w-[284px] justify-between">
      <div id="profile" className="flex flex-col gap-4xl pt-2xl text-text-secondary">
        <div className='flex w-[284px] justify-between py-none px-2xl items-center self-stetch'>
          <div id="title" className="flex flex-row items-center gap-sm">
            <img src={blisiq_logo} alt="This is an image" className="w-[24px] h-[24px]" />
            <span className="font-bold text-lg">BlissIq</span>
          </div>
          <span className="text-text-quaternary text-sm font-family-body font-semibold leading-sm">
            v3.0
          </span>
        </div>
        <div className="flex flex-col items-start self-stretch">
          <div className="flex w-[284px] pr-2xl pb-xs pl-2xl font-family-body font-semibold text-xs text-text-quaternary">
            GENERAL
          </div>
          <div className="flex flex-col pr-xl pb-2xl pl-xl pt-0">
            {general.map((item, index) => (
              <div key={index} className="flex pt-xxs pb-xxs gap-2 ">
                <div className="flex flex-row rounded-sm pt-md pr-lg pb-md pl-lg gap-lg items-center self-stretch">
                  <span>{item.icon}</span>
                  <span className="text-text-secondary font-family-body font-semibold text-md">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex pt-0 pr-2xl pl-2xl pb-xs self-stretch items-start font-family-body font-semibold leading-xs text-xs text-text-quaternary">USERS</div>
          <div className="flex flex-col pt-0 pl-xl pr-xl pb-2xl ">
            {Users.map((item, index) => (
              <div key={index} className="flex pt-xxs pb-xxs gap-2 items-center">
                <div className="flex flex-row rounded-sm pt-md pr-lg pb-md pl-lg gap-lg items-center self-stretch">
                  <span>{item.icon}</span>
                  <span className="text-text-secondary font-family-body font-semibold text-md">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="settings" className="flex flex-col pt-0 pl-xl pr-xl pb-xl gap-xl items-start self-stretch">
        <div className="flex flex-col gap-lg">
          <div className="flex flex-col pt-xxs pb-xxs pl-0 pr-0 items-start self-stretch gap-2">
            <button className="flex pt-md pb-md pl-lg pr-lg items-center gap-sm self-stretch text-text-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Settings</span>
            </button>
          </div>
          <div className="flex flex-col pt-xxs pb-xxs pl-0 pr-0 items-start self-stretch gap-2">
            <button className="flex pt-md pb-md pl-lg pr-lg items-center gap-sm self-stretch text-text-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Support</span>
            </button>
          </div>
        </div>
        <div className="flex rounded-md gap-xxs bg-bg-secondary items-center text-text-secondary">
          <button className="flex px-lg py-md items-center cursor-pointer" onClick={() => document.documentElement.classList.remove("theme-dark")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_32345_12817)">
                <path d="M8.00004 1.3335V2.66683M8.00004 13.3335V14.6668M2.66671 8.00016H1.33337M4.20945 4.20957L3.26664 3.26676M11.7906 4.20957L12.7334 3.26676M4.20945 11.7935L3.26664 12.7363M11.7906 11.7935L12.7334 12.7363M14.6667 8.00016H13.3334M11.3334 8.00016C11.3334 9.84111 9.84099 11.3335 8.00004 11.3335C6.15909 11.3335 4.66671 9.84111 4.66671 8.00016C4.66671 6.15921 6.15909 4.66683 8.00004 4.66683C9.84099 4.66683 11.3334 6.15921 11.3334 8.00016Z" stroke="#A4A7AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_32345_12817">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Light
          </button>
          <button className="flex items-center px-lg py-md cursor-pointer" onClick={() => document.documentElement.classList.add('theme-dark')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15" fill="none">
              <path d="M14.0833 9.97948C13.2077 10.3755 12.2358 10.5959 11.2123 10.5959C7.36019 10.5959 4.23744 7.47314 4.23744 3.62102C4.23744 2.59757 4.45787 1.6256 4.85385 0.75C2.43384 1.84442 0.75 4.2798 0.75 7.10846C0.75 10.9606 3.87276 14.0833 7.72487 14.0833C10.5535 14.0833 12.9889 12.3995 14.0833 9.97948Z" stroke="#A4A7AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Dark
          </button>
        </div>
        <div className="flex p-lg gap-xl self-stretch border border-border-secondary bg-bg-primary rounded-xl">
          <div className="flex flex-row gap-md">
            <div className="flex justify-center items-center ">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.00002 21.8174C4.6026 22 5.41649 22 6.8 22H17.2C18.5835 22 19.3974 22 20 21.8174M4.00002 21.8174C3.87082 21.7783 3.75133 21.7308 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V6.8C2 5.11984 2 4.27976 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.27976 2 5.11984 2 6.8 2H17.2C18.8802 2 19.7202 2 20.362 2.32698C20.9265 2.6146 21.3854 3.07354 21.673 3.63803C22 4.27976 22 5.11984 22 6.8V17.2C22 18.8802 22 19.7202 21.673 20.362C21.3854 20.9265 20.9265 21.3854 20.362 21.673C20.2487 21.7308 20.1292 21.7783 20 21.8174M4.00002 21.8174C4.00035 21.0081 4.00521 20.5799 4.07686 20.2196C4.39249 18.6329 5.63288 17.3925 7.21964 17.0769C7.60603 17 8.07069 17 9 17H15C15.9293 17 16.394 17 16.7804 17.0769C18.3671 17.3925 19.6075 18.6329 19.9231 20.2196C19.9948 20.5799 19.9996 21.0081 20 21.8174M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-between">
              <div className="self-stretch text-text-primary font-family-body text-sm font-semibold leading-sm ">Jacob Jones</div>
              <div className="text-sm font-semibold leading-sm text-text-tertiary">jacob@diacto.com</div>
              
            </div>
            <div className="items-center p-sm gap-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 15L12 20L17 15M7 9L12 4L17 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
