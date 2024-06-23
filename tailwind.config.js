/** @type {import("tailwindcss").Config} */
module.exports = {
    darkMode: "selector",
    content: [
        "./src/**/*.tsx",
    ],
    theme: {
        extend: {
            colors: {
                prm: {
                    "0": "var(--color-prm-0)",
                    "5": "var(--color-prm-5)",
                    "10": "var(--color-prm-10)",
                    "15": "var(--color-prm-15)",
                    "20": "var(--color-prm-20)",
                    "25": "var(--color-prm-25)",
                    "30": "var(--color-prm-30)",
                    "35": "var(--color-prm-35)",
                    "40": "var(--color-prm-40)",
                    "50": "var(--color-prm-50)",
                    "60": "var(--color-prm-60)",
                    "70": "var(--color-prm-70)",
                    "80": "var(--color-prm-80)",
                    "90": "var(--color-prm-90)",
                    "95": "var(--color-prm-95)",
                    "98": "var(--color-prm-98)",
                    "99": "var(--color-prm-99)",
                    "100": "var(--color-prm-100)",
                },
                sec: {
                    "0": "var(--color-sec-0)",
                    "5": "var(--color-sec-5)",
                    "10": "var(--color-sec-10)",
                    "15": "var(--color-sec-15)",
                    "20": "var(--color-sec-20)",
                    "25": "var(--color-sec-25)",
                    "30": "var(--color-sec-30)",
                    "35": "var(--color-sec-35)",
                    "40": "var(--color-sec-40)",
                    "50": "var(--color-sec-50)",
                    "60": "var(--color-sec-60)",
                    "70": "var(--color-sec-70)",
                    "80": "var(--color-sec-80)",
                    "90": "var(--color-sec-90)",
                    "95": "var(--color-sec-95)",
                    "98": "var(--color-sec-98)",
                    "99": "var(--color-sec-99)",
                    "100": "var(--color-sec-100)",
                },
                ter: {
                    "0": "var(--color-ter-0)",
                    "5": "var(--color-ter-5)",
                    "10": "var(--color-ter-10)",
                    "15": "var(--color-ter-15)",
                    "20": "var(--color-ter-20)",
                    "25": "var(--color-ter-25)",
                    "30": "var(--color-ter-30)",
                    "35": "var(--color-ter-35)",
                    "40": "var(--color-ter-40)",
                    "50": "var(--color-ter-50)",
                    "60": "var(--color-ter-60)",
                    "70": "var(--color-ter-70)",
                    "80": "var(--color-ter-80)",
                    "90": "var(--color-ter-90)",
                    "95": "var(--color-ter-95)",
                    "98": "var(--color-ter-98)",
                    "99": "var(--color-ter-99)",
                    "100": "var(--color-ter-100)",
                },
            },
            width: {
                "200": "50rem"
            },
            maxWidth: {
                "200": "50rem"
            },
            minWidth: {
                "200": "50rem"
            }
        },
    },
    variants: {
        imageRendering: ["responsive"],
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-image-rendering")()
    ],
};
