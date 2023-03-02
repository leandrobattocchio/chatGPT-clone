export const getAnswerFromIa = async ({ promp }) => {

    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ promp })
    })

    const json = await response.json()
    return json.response
}

