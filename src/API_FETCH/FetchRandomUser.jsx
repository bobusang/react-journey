import { useEffect, useState, setState } from "react";

function FetchRandomUser() {
    const [loading, setLoading] = useState(true);
    const [person, setPerson] = useState(null)

     useEffect (() => {
         (async () => {
             const url = "https://api.randomuser.me/";
             const response = await fetch(url);
             const data = await response.json();
            setPerson(data.results[0]);
            setLoading(false);
            console.log(person)

         }) ()
    }, []) 

    return (
        <div className="pt-20 grid place-items-center">
            {loading || !person ? (
            <div className="">
                loading...
            </div>):(
            <div>
                <img src={person.picture.large} />
                
                {person.name.first}
            </div>
            )}
        </div>
    )
}

export default FetchRandomUser
