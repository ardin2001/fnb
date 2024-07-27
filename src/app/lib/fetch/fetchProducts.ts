export const getProducts = async ({page,order,sort} :any) => {
    try {
        const res = await fetch("/api/products?page="+(page || 1)+"&order="+(order || "")+"&sort="+(sort || ""))
        const {status, data, message} = await res.json()
        return {status, data, message}
    } catch (e) {
        return {status: false, data: null, message: e}
    }
}