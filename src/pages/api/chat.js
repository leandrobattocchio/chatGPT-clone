export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end()

    const { promp } = req.body

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.API_IA_KEY}`
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: `Responde como si fueras la inteligencia artificial conversacional ChatGPT. El usuario te escribe un prompt y tú debes contestar de forma natural, sin corregir errores ortograficos. El prompt es:\n\n${promp}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        })
    })


    if (!response.ok) res.status(500).json({ error: 'OpenAI error' })

    const text = await response.json()
    return res.status(200).json({ response: text.choices[0].text.trim() })

}
