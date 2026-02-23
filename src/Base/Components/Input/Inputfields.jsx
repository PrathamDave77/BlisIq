
import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";

const inputfieldsStyles = cva(
  `flex items-center gap-md py-md pl-lg pr-md w-full rounded-md text-md font-normal leading-md shadow-xs outline-none transition text-placeholder bg-primary border border-border-primary focus-visible:border-[2px] focus-visible:border-border-brand focus-visible:text-text-primary disabled:cursor-not-allowed disabled:bg-bg-disabled-subtle `,
  {
    variants: {
      variant: {
        Email: "flex-1 ",
        PhoneNumber: "flex items-start self-stretch disabled:text-disabled",
        SaleAmount: "",
        WebsiteUrl: "",
        CardNumber: "",
        Users: "",
        WebsiteCopy: "border-r-1",
      },
      size: {
        md: "gap-sm py-[10px] pl-[12px] pr-[14px]",
      },
      isError: {
        true: "border border-border-error-subtle focus-visible:border-border-error-subtle focus-visible:text-text-error-primary",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  },
);

export function Inputfields({
  label,
  text,
  variant,
  hint,
  isError,
  Email = false,
  PhoneNumber = false,
  SaleAmount = false,
  WebsiteUrl = false,
  CardNumber = false,
  Users = false,
  WebsiteCopy = false,
  children,
  size,
  state = "default",
  ...props
}) {
  const normalIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clip-path="url(#clip0_32958_108)">
        <path
          d="M6.06004 6C6.21678 5.55444 6.52614 5.17873 6.93334 4.93942C7.34055 4.7001 7.8193 4.61262 8.28483 4.69247C8.75035 4.77232 9.17259 5.01434 9.47676 5.37568C9.78093 5.73702 9.94741 6.19434 9.94671 6.66666C9.94671 8 7.94671 8.66666 7.94671 8.66666M8.00004 11.3333H8.00671M14.6667 8C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8C1.33337 4.3181 4.31814 1.33333 8.00004 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z"
          stroke="#A4A7AE"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_32958_108">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const errorIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clip-path="url(#clip0_31162_26537)">
        <path
          d="M8.00004 5.33333V8M8.00004 10.6667H8.00671M14.6667 8C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8C1.33337 4.3181 4.31814 1.33333 8.00004 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z"
          stroke="#F04438"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_31162_26537">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className="flex flex-col gap-sm w-full">
      {/* Label */}
      {label && (
        <div className="flex items-center gap-xxs">
          <label className="text-text-secondary text-lg font-family-body font-semibold leading-sm ">
            {label}
          </label>
          <span className="text-brand-tertiary">*</span>
        </div>
      )}

      {/* Input */}
      {(PhoneNumber === true && (
        <div
          tabIndex={0}
          className={cn(
            inputfieldsStyles({ variant: PhoneNumber, size, isError }),
          )}
        >
          <div className="flex gap-xxs py-md pl-lg items-center self-stretch cursor-pointer">
            <select className="items-center text-text-tertiary appearance-none">
              <option>US</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#A4A7AE"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="flex py-md px-lg items-center gap-md flex-1 "
          >
            {text}
          </div>
          <div>{isError === true ? errorIcon : normalIcon}</div>
        </div>
      )) ||
        (Email && (
          <div
            tabIndex={0}
            className={cn(inputfieldsStyles({ variant: Email, size, isError }))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M1.66663 5.83333L8.47072 10.5962C9.0217 10.9819 9.29719 11.1747 9.59685 11.2494C9.86154 11.3154 10.1384 11.3154 10.4031 11.2494C10.7027 11.1747 10.9782 10.9819 11.5292 10.5962L18.3333 5.83333M5.66663 16.6667H14.3333C15.7334 16.6667 16.4335 16.6667 16.9683 16.3942C17.4387 16.1545 17.8211 15.772 18.0608 15.3016C18.3333 14.7669 18.3333 14.0668 18.3333 12.6667V7.33333C18.3333 5.9332 18.3333 5.23313 18.0608 4.69835C17.8211 4.22795 17.4387 3.8455 16.9683 3.60581C16.4335 3.33333 15.7334 3.33333 14.3333 3.33333H5.66663C4.26649 3.33333 3.56643 3.33333 3.03165 3.60581C2.56124 3.8455 2.17879 4.22795 1.93911 4.69835C1.66663 5.23313 1.66663 5.9332 1.66663 7.33333V12.6667C1.66663 14.0668 1.66663 14.7669 1.93911 15.3016C2.17879 15.772 2.56124 16.1545 3.03165 16.3942C3.56643 16.6667 4.26649 16.6667 5.66663 16.6667Z"
                stroke="#A4A7AE"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {text}
            <div>{isError === true ? errorIcon : normalIcon}</div>
          </div>
        )) ||
        (SaleAmount && (
          <div
            tabIndex={0}
            className={cn(
              inputfieldsStyles({ variant: SaleAmount, size, isError }),
            )}
          >
            <div className="flex items-center flex-1 gap-md">
              $<div className="flex-1 leading-md">{text}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_32930_99)">
                  <path
                    d="M6.05998 6C6.21672 5.55444 6.52608 5.17873 6.93328 4.93942C7.34048 4.7001 7.81924 4.61262 8.28476 4.69247C8.75028 4.77232 9.17252 5.01434 9.4767 5.37568C9.78087 5.73702 9.94735 6.19434 9.94665 6.66666C9.94665 8 7.94665 8.66666 7.94665 8.66666M7.99998 11.3333H8.00665M14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8Z"
                    stroke="#A4A7AE"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_32930_99">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex gap-xxs items-center self-stretch cursor-pointer">
              <select className="items-center text-text-tertiary appearance-none">
                <option>US</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#A4A7AE"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>{isError === true ? errorIcon : normalIcon}</div>
          </div>
        )) ||
        (WebsiteUrl && (
          <div className="flex flex-start self-stretch border border-border-primary rounded-md bg-bg-primary shadow-xs">
            <div className="flex items-center text-text-tertiary font-family-body text-md font-normal leading-md py-md px-lg border-r border-r-border-primary">
              http://
            </div>
            <div
              tabIndex={0}
              className={cn(
                inputfieldsStyles({ variant: WebsiteUrl, size, isError }),
                "border-0 shadow-none",
              )}
            >
              <div className=" flex-1 font-family-body text-md ">{text}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_32930_80)">
                  <path
                    d="M6.06 6C6.21673 5.55444 6.5261 5.17873 6.9333 4.93942C7.3405 4.7001 7.81926 4.61262 8.28478 4.69247C8.7503 4.77232 9.17254 5.01434 9.47671 5.37568C9.78089 5.73702 9.94737 6.19434 9.94666 6.66666C9.94666 8 7.94666 8.66666 7.94666 8.66666M8 11.3333H8.00666M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z"
                    stroke="#A4A7AE"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_32930_80">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>{isError === true ? errorIcon : normalIcon}</div>
            </div>
          </div>
        )) ||
        (CardNumber && (
          <div
            tabIndex={0}
            className={cn(
              inputfieldsStyles({ variant: CardNumber, size, isError }),
            )}
          >
            <div className="flex items-center flex-1 gap-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="24"
                viewBox="0 0 34 24"
                fill="none"
              >
                <path
                  d="M4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4C0.5 2.067 2.067 0.5 4 0.5Z"
                  fill="white"
                />
                <path
                  d="M4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4C0.5 2.067 2.067 0.5 4 0.5Z"
                  stroke="#E9EAEB"
                />
                <path
                  d="M21.5771 5.02997C25.322 5.02997 28.3584 8.02986 28.3584 11.7302C28.3583 15.4304 25.322 18.4304 21.5771 18.4304C19.8982 18.4303 18.3629 17.8256 17.1787 16.8268C15.9945 17.8254 14.4591 18.4304 12.7803 18.4304C9.03566 18.4301 6.00011 15.4302 6 11.7302C6 8.02999 9.03559 5.03019 12.7803 5.02997C14.459 5.02997 15.9945 5.63405 17.1787 6.63251C18.3629 5.63391 19.8983 5.03 21.5771 5.02997Z"
                  fill="#ED0006"
                />
                <path
                  d="M21.5774 5.02997C25.3222 5.03005 28.3577 8.02991 28.3577 11.7302C28.3576 15.4303 25.3221 18.4303 21.5774 18.4304C19.8985 18.4304 18.3632 17.8255 17.179 16.8268C18.6361 15.598 19.5617 13.7714 19.5618 11.7302C19.5618 9.68867 18.6363 7.8614 17.179 6.63251C18.3632 5.63397 19.8986 5.02997 21.5774 5.02997Z"
                  fill="#F9A000"
                />
                <path
                  d="M17.1785 6.63249C18.636 7.86139 19.5613 9.68851 19.5613 11.7301C19.5612 13.7716 18.6358 15.598 17.1785 16.8268C15.7215 15.598 14.7967 13.7713 14.7966 11.7301C14.7966 9.68881 15.7213 7.86139 17.1785 6.63249Z"
                  fill="#FF5E00"
                />
              </svg>
              <div
                tabIndex={0}
                className="flex-1 text-placeholder focus-visible:text-text-primary font-family-body text-md font-normal leading-md"
              >
                {text}
              </div>
            </div>
            <div className="flex gap-xxs items-center self-stretch cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_32940_194)">
                  <path
                    d="M6.06 6C6.21673 5.55444 6.5261 5.17873 6.9333 4.93942C7.3405 4.7001 7.81926 4.61262 8.28478 4.69247C8.7503 4.77232 9.17254 5.01434 9.47671 5.37568C9.78089 5.73702 9.94737 6.19434 9.94666 6.66666C9.94666 8 7.94666 8.66666 7.94666 8.66666M8 11.3333H8.00666M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z"
                    stroke="#A4A7AE"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_32940_194">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>{isError === true ? errorIcon : normalIcon}</div>
          </div>
        )) ||
        (Users && (
          <div
            tabIndex={0}
            className={cn(inputfieldsStyles({ variant: Users, size, isError }))}
          >
            <div className="flex-1 text-placeholder font-family-body text-md font-normal leading-md focus-visible:text-text-primary">
              {text}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_32944_342)">
                  <path
                    d="M6.05998 6C6.21672 5.55444 6.52608 5.17873 6.93328 4.93942C7.34048 4.7001 7.81924 4.61262 8.28476 4.69247C8.75028 4.77232 9.17252 5.01434 9.4767 5.37568C9.78087 5.73702 9.94735 6.19434 9.94665 6.66666C9.94665 8 7.94665 8.66666 7.94665 8.66666M7.99998 11.3333H8.00665M14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8Z"
                    stroke="#A4A7AE"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_32944_342">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>{isError === true ? errorIcon : normalIcon}</div>
          </div>
        )) ||
        (WebsiteCopy && (
          <div className="flex items-center self-stretch rounded-md bg-bg-primary">
            <div
              tabIndex={0}
              className={cn(
                inputfieldsStyles({ variant: Users, size, isError }),
                "rounded-tl rounded-bl rounded-tr-none rounded-br-none",
              )}
            >
              <div
                tabIndex={0}
                className="flex-1 text-placeholder font-family-body text-md font-normal leading-md focus-visible:text-text-primary"
              >
                {text}
              </div>
              <div>{isError === true ? errorIcon : normalIcon}</div>
            </div>
            <button className="flex items-center py-[10px] px-[14px] items-center justify-center gap-xs border-l border-l-border-primary text-text-secondary font-semibold rounded-tr rounded-br rounded-tl-none rounded-bl-none border border-border-primary cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_32948_269)">
                  <path
                    d="M4.16669 12.5C3.39012 12.5 3.00183 12.5 2.69555 12.3731C2.28717 12.204 1.96271 11.8795 1.79355 11.4711C1.66669 11.1649 1.66669 10.7766 1.66669 10V4.33334C1.66669 3.39992 1.66669 2.93321 1.84834 2.57669C2.00813 2.26308 2.2631 2.00812 2.5767 1.84833C2.93322 1.66667 3.39993 1.66667 4.33335 1.66667H10C10.7766 1.66667 11.1649 1.66667 11.4712 1.79354C11.8795 1.9627 12.204 2.28715 12.3732 2.69553C12.5 3.00182 12.5 3.3901 12.5 4.16667M10.1667 18.3333H15.6667C16.6001 18.3333 17.0668 18.3333 17.4233 18.1517C17.7369 17.9919 17.9919 17.7369 18.1517 17.4233C18.3334 17.0668 18.3334 16.6001 18.3334 15.6667V10.1667C18.3334 9.23325 18.3334 8.76654 18.1517 8.41002C17.9919 8.09642 17.7369 7.84145 17.4233 7.68166C17.0668 7.50001 16.6001 7.5 15.6667 7.5H10.1667C9.23327 7.5 8.76656 7.50001 8.41004 7.68166C8.09643 7.84145 7.84147 8.09642 7.68168 8.41002C7.50002 8.76654 7.50002 9.23325 7.50002 10.1667V15.6667C7.50002 16.6001 7.50002 17.0668 7.68168 17.4233C7.84147 17.7369 8.09643 17.9919 8.41004 18.1517C8.76656 18.3333 9.23327 18.3333 10.1667 18.3333Z"
                    stroke="#A4A7AE"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_32948_269">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div
                tabindex={0}
                className="px-xxs font-family-body text-sm leading-sm"
              >
                Copy
              </div>
            </button>
          </div>
        ))}

      {/* Hint */}
      {hint && (
        <p
          className={cn(
            "text-lg ",
            isError ? "text-text-error-primary" : "text-text-tertiary",
          )}
        >
          {hint}
        </p>
      )}
    </div>
  );
}
