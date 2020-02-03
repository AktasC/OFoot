# Using Insomnia with O'Foot

## El Famoso `JWT Token`

### Request your JWT :

- Create a new Request
- Select `POST` as method and `JSON` as content-type
    - With your `username` and `password` credentials :
    ```json
    {
        "username": "test@gmail.com",
        "password": "lolilolilolilol"
    }
    ```
- Enter `https://localhost:8000/api/login_check` in the URL field
- Send your request
- Copy the token in the Response

### Add the token in Insomnia as bearer

- Next to POST you'll see a tab named `Auth`
- Click on `Auth`'s dropdown menu and select `Bearer Token`
- Paste your previously copied token without the `""` in the `token` field
- Leave the `prefix` field empty and `enabled` checked

### Enjoy our API
  - Get back in the `POST` tab
  - Structure your JSON request
  - Voilà !
