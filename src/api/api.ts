export const endpoints = {
    fetchAll: 'http://188.166.76.128:8888/api/task/getAll',
    create: 'http://188.166.76.128:8888/api/task/save',
}

export const fetcher = (url: string) => fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
}).then(r => r.json())
