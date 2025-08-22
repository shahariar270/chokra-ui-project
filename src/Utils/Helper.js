export const minifyText = (text, maxLength = 100) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}

export const blogData = async () => {
    const res = await fetch('https://dummyjson.com/posts');
    const data = await res.json();
    return data.posts;
};

export const RandomId = (length = 8) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export const makeRequest = async (url, fromData, method) => {
    const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fromData),
    })
    const data = await res.json()
    return data;
}
