const url = "https://yabjrjyoyjxzuyxpeeno.supabase.co/rest/v1/";
const apiKey = "sb_publishable_DnJhJTUZLNEhHRgFoGJqBw_3WtAeIEx";

export default async function request(path = "/", method = "GET", data = null) {
    const options = {
        headers: {
            apiKey,
        }
    };
    if (method !== "GET") {
        options.method = method;
    }
    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${url}${path}`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if (response.status === 204) {
        return null;
    }
    return await response.json();
}