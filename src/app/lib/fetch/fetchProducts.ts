export const getProducts = async () => {
    try {
        const res = await fetch("/api/products")
        const {status, data, message} = await res.json()
        return {status, data, message}
    } catch (e) {
        return {status: false, data: null, message: e}
    }
}