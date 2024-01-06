const apikey = '123'

function getAnswer() {
    fetch('https://api.openai.com/v1/chat/completions', {
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
                        'content': 'Escribe el nombre de la estrella del sistema solar, usando solo tres letras, solo escribe el nombre'
                    }
                ],
                'temperature': 0.1,
                'max_tokens': 10
            }
        )

    })
}