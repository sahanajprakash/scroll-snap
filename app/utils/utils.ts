export function debounce(cb: (...args: any[]) => void, delay = 100) {
    let timeout: string | number | NodeJS.Timeout | undefined

    return (...args: any) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}