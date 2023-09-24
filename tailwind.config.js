/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "active-bids": "var(--active-bids)",
        "background-table": "var(--background-table)",
        "closed-bids": "var(--closed-bids)",
        "daybreak-blue-blue-8": "var(--daybreak-blue-blue-8)",
        "grey-grey-1": "var(--grey-grey-1)",
        "grey-grey-6": "var(--grey-grey-6)",
        "icons-stroke": "var(--icons-stroke)",
        "open-bids": "var(--open-bids)",
        "polar-green-green-7": "var(--polar-green-green-7)",
        "primary-cta-background": "var(--primary-cta-background)",
        "primary-cta-text": "var(--primary-cta-text)",
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        "x333333-dark-grey": "var(--x333333-dark-grey)",
      },
      fontFamily: {
        "inter-bold-14px": "var(--inter-bold-14px-font-family)",
        "inter-bold-16px": "var(--inter-bold-16px-font-family)",
        "inter-bold-18px": "var(--inter-bold-18px-font-family)",
        "inter-bold-22px": "var(--inter-bold-22px-font-family)",
        "inter-bold-24px": "var(--inter-bold-24px-font-family)",
        "inter-bold-36px": "var(--inter-bold-36px-font-family)",
        "inter-regular-12px": "var(--inter-regular-12px-font-family)",
        "inter-regular-14px": "var(--inter-regular-14px-font-family)",
        "inter-regular-16px": "var(--inter-regular-16px-font-family)",
        "inter-regular-18px": "var(--inter-regular-18px-font-family)",
        "inter-regular-22px": "var(--inter-regular-22px-font-family)",
      },
    },
  },
  plugins: [],
};
