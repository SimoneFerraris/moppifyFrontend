const apiUrl: string = "http://192.168.150.152:5000";

export async function getEmployees(): Promise<any> {
    try {
        const response = await fetch(apiUrl + '/employees');
        if (!response.ok) {
            return []
        }
        const data = await response.json();
        return data.employees;
    } catch (error) {
        console.error("Failed to fetch employees:", error);
        return [];
    }
}

export async function getCarts(): Promise<any> {
    try {
        const response = await fetch(apiUrl + '/carts');
        if (!response.ok) {
            return []
        }
        const data = await response.json();
        return data.carts;
    } catch (error) {
        console.error("Failed to fetch carts:", error);
        return []
    }
}
