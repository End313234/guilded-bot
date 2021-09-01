# Guilded bot

## Running
For running the project, make a `POST` request into `https://www.guilded.gg/api/login` with a JSON body like this:
```json
{
    "email": "your-email-on-guilded",
    "password": "your-password on guilded" 
}
```
Then, you have to get the value of two cookies: the `hmac_signed_session` and `guildedClientId`.
With these values, make a `.env` on your environment and insert the following information on it:
```env
TOKEN="the 'hmac_signed_session'"
GUILDED_CLIENT_ID="the 'guildedClientId'"
``` 

After this, you can simply run by typing:
```batch
yarn dev
```
On the terminal.

If the bot runs successfully, you'll receive a message on your terminal like this:
```
WS openned
```