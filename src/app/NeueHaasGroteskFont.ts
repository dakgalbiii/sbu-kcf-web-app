import localFont from "@next/font/local";

const NeueHaasGrotesk = localFont({
    src: [
        {
            path: "../../public/fonts/NeueHaasDisplayBlack.ttf",
            weight: "900",
            style: "normal"
        },
        {
            path: "../../public/fonts/NeueHaasDisplayBold.ttf",
            weight: "800",
            style: "normal"
        },
        {
            path: "../../public/fonts/NeueHaasDisplayMediu.ttf",
            weight: "700",
            style: "normal"
        },
        {
            path: "../../public/fonts/NeueHaasDisplayRoman.ttf",
            weight: "500",
            style: "normal"
        },
        {
            path: "../../public/fonts/NeueHaasDisplayLight.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../../public/fonts/NeueHaasDisplayThin.ttf",
            weight: "300",
            style: "normal"
        },
        {
            path: "../../public/fonts/NeueHaasDisplayXThin.ttf",
            weight: "200",
            style: "normal"
        },
        {
            path: "../../public/fonts/NeueHaasDisplayXXThin.ttf",
            weight: "100",
            style: "normal"
        },
    ],
    variable: "--font-neueHaasGrotesk"
})

export default NeueHaasGrotesk;