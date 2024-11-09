const apiUrl: string = "http://localhost:5000";

export async function getEmployees(): Promise<any> {
    try {
        const response = await fetch(apiUrl + '/employees', { mode:  'no-cors' });
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
        const response = await fetch(apiUrl + '/carts', { mode:  'no-cors' });
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

export async function getLostMops(): Promise<any> {
    try {
        const response = await fetch(apiUrl + '/lost_mops', { mode:  'no-cors' });
        if (!response.ok) {
            return []
        }
        const data = await response.json();
        return data.lost_mops;
    } catch (error) {
        console.error("Failed to fetch lost mops:", error);
        return [];
    }
}
