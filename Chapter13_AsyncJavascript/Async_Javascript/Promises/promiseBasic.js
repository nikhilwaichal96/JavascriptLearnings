function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
}

