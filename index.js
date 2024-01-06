const apikey = ''

function getAnswer() {
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apikey
        },
        body: JSON.stringify(

            {
                'model': 'gpt-3.5-turbo',
                'messages': [
                    {
                        'role': 'user',
                        'content': 'Escribe el nombre del animal insignia de Colombia, solo escribe el nombre'
                    }
                ],
                'temperature': 0.1,
                'max_tokens': 10
            }
        )

    })
    .then(response=>response.json())
    .then(data=>console.log('La Respuesta de ChatGPT es: ' + data.choices[0].message.content))
}

getAnswer();