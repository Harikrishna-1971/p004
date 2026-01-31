export const APIURL = "https://jsonplaceholder.typicode.com/users";

export function callApi(reqMethod, url, data, responseHandler)
    {
       let options;
         if (reqMethod === "GET" || reqMethod === "DELETE")
            options = {method: reqMethod , headers:{'Content-Type':'application/json'}};
        else 
            options = {method: reqMethod , headers:{'Content-Type':'application/json'}, body: data};

        fetch(url, options)
        //get and delete  don't carry any input information
        //
            // send request in async
            .then((response)=> {
                if(!response.ok)
                    throw new Error(response.status +'-'+ response.statusText);
                return response.json();
            })
            //resive response
            .then((res)=>responseHandler(res))
            //handle error(network related errors)
            .catch((err)=> alert(err));
    }
