const apiUrl: string = "http://192.168.117.152:5000";

export async function getEmployees(): Promise<any> {
    try {
        const response = await fetch(apiUrl + '/employees');
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
        console.log(response)
        const data = await response.json();
        return data.carts;
    } catch (error) {
        console.error("Failed to fetch carts:", error);
        return []
    }
}

export async function getLostMops(): Promise<any> {
    try {
        const response = await fetch(apiUrl + '/lost_mops');
        const data = await response.json();
        console.log(data)
        return data.lost_mops;
    } catch (error) {
        console.error("Failed to fetch lost mops:", error);
        return [];
    }
}
