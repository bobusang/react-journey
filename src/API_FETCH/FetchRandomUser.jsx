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
        <div className="">
            <div>
                {loading || !person ? (
                <div className="">
                    loading...
                </div>):(

                //when data is taken from 
                <div className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pt-40 h-64" >

                    <div className="mx-4 sm:mx-auto  sm:w-1/3 grid place-items-center bg-white shadow-xl rounded-2xl">
                        
                        <img className="-mt-24 mx-auto border-4 border-white shadow-lg rounded-full mb-8" src={person.picture.large} />
                        
                        <div className="mx-auto font-bold md:text-4xl">
                            {person.name.first}
                            <span className="font-medium text-lg text-gray-200 ">( {person.dob.age} )</span>
                        </div>

                        <div className=" flex flex-wrap items-center justify-center border-t py-2 px-4">
                            <div className="flex flex-col items-center justify-center px-4 mx-4">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    5 Mins
                                </div>
                            </div>
                            <div className="flex flex-col items-center border-l border-r justify-center px-8 mx-4">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div>
                                    Message
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center px-4 mx-4">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    5 Mins
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}

            </div>
        </div>
    )
}

export default FetchRandomUser
