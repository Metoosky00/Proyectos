
export const apiGet=(url)=>()=>fetch(url).then(res=>res.json())

export const apiPut=(url,id,obj)=>()=>fetch(`${url}/${id}`,{
method:'PUT',
body:JSON.stringify(obj),
headers:new Headers({'Content-type':'application/json'}) //aplica el tipo json para que el tipo de envio sea conocido
}).then(v=>v.json())

export const apiPost=(url,obj)=>()=>fetch(`${url}`,{
    method:'POST',
    body:JSON.stringify(obj),
    headers:new Headers({'Content-type':'application/json'}) //aplica el tipo json para que el tipo de envio sea conocido
    }).then(v=>v.json())

    export const apiDelete=(url,id)=>()=>fetch(`${url}/${id}`,{
        method:'DELETE',
        headers:new Headers({'Content-type':'application/json'}) //aplica el tipo json para que el tipo de envio sea conocido
        }).then(v=>v.json())