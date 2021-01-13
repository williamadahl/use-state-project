import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
    const tmp = 0;
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('default user');
    /*
    const getUser = async () =>{
        const response = await fetch(url);
        if(response.status >= 200 && response.status <= 299){
            const user = await response.json();
            const {id, login, name} = user;
            setUser(user.login);
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setIsError(true);
            throw new Error(response.statusText);
        }
    };


    useEffect(() => {
        getUser();
    }, [tmp]);
    */
    useEffect(()=> {
        fetch(url)
            .then((resp) => {
                if (resp.status >= 200 && resp.status <= 299) {
                    return resp.json();
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(resp.statusText);
                }
            }).then((user) => {
            const {login} = user;
            setUser(login);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    },[]);

    if(isLoading){
        return (<> <h1>Loading...</h1> </>);
    }
    if(isError){
        return (<> <h1>Error...</h1> </>);
    }
    return (
        <>
            <h1>{user}</h1>
        </>
    );
}
export default MultipleReturns;