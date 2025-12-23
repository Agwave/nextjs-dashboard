import localFont from 'next/font/local'

// 配置 Inter 本地字体
export const inter = localFont({
    src: [
        {
            path: '../fonts/Inter-VariableFont_opsz,wght.ttf',
            style: 'normal',
        },
        {
            path: '../fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
            style: 'italic',
        },
    ],
    // 如果是可变字体，通常不需要指定 weight，
    // 或者指定一个范围（例如 '100 900'）
    variable: '--font-inter',
})

export const lusitana = localFont({
    src: [
        {
            path: '../fonts/Lusitana-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Lusitana-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    // 如果是可变字体，通常不需要指定 weight，
    // 或者指定一个范围（例如 '100 900'）
    variable: '--font-lusitana',
})