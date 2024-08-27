/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                primary: '#f97316',
                secondary :{
                    first :"#2E90FA",
                    second:"#53B1FD"
                }
            }

        },
	},
	plugins: [],
}
