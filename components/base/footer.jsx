import React from "react";

export default function footer() {
  return (
    <footer className="container mx-auto">
      <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
        <div className="mr-auto flex flex-col items-center sm:flex-row">
          <p className="pt-5 font-bold font-light text-primary dark:text-white sm:pt-0">
            ©2022 Muhamadzain. Built ❤️ Next.JS and TailwindCSS
          </p>
        </div>
        <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
          <a
            rel="noreferrer"
            href="https://github.com/Zainal21 "
            target="_blank"
          >
            <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-zainal-arifin/ "
            target="_blank"
            rel="noreferrer"
          >
            <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
