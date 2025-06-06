import { useEffect, useState } from 'react';

/*
Krok 1: V tomto úkolu použijeme Harry Potter API: https://hp-api.onrender.com. Dobře si prohlédněte,
  co vrací endpoint https://hp-api.onrender.com/api/character/ca3827f0-375a-4891-aaa5-f5e8a5bad225
Krok 2: Vytvořte v této komponentě efekt, který se spustí při prvním zobrazení komponenty. V tomto
  efektu vytvořte funkci `fetchCharacter`, která pomocí funkce `fetch` stáhne postavu z výše
  uvedeného endpointu. Objekt s postavou uložte do stavu `postava`.
Krok 3: Pokud je stav `postava` `null`, nechte zobrazen text `Načítám…`. Pokud je stav `postava`
  jiný, zobrazte jméno postavy, herce, který postavu hraje a její fotografii.
*/

export const Ukol5 = () => {
  const [postava, setPostava] = useState(null);
  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch("https://hp-api.onrender.com/api/character/ca3827f0-375a-4891-aaa5-f5e8a5bad225");
      const responseData = await response.json();
      console.log(responseData[0].name);
      setPostava(responseData[0]);
          };
    fetchCharacter();
  }, []); 


  return (
    <>
    {(postava === null) ?
      (
        <p>Načítám…</p>
        ) : (
        <>
          <p>{postava.name}</p>
          <p>{postava.actor}</p>
          <img src={postava.image}/>
        </>
      )}
    </>
  );
};
