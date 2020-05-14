module.exports= {
    db:'mongodb+srv://Radek:hJOCjawvMtaW8jeV@cluster0-ofbud.mongodb.net/test1?retryWrites=true&w=majority',
    //to jest mo adres do połaczenia z baza danych !!! TU BYŁ GŁUPI BŁĄD
    keySession: ['TwojKlucz'],// ta wartosc powinna byc unikatowa na kazdy projekt
    maxAgeSession: 24*60*60*1000
}