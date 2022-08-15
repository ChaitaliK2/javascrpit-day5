const xhr=new XMLHttpRequest;
xhr.open("GET","Assign1.json");
xhr.onload = ()=>{
    const data = JSON.parse(xhr.response);
    let hold = document.getElementById("output");
    let out = ""
    for (let ele of data){
        out+=`
        <tr>
                <td>${ele.id}</td>
                <td>${ele.name}</td>
                <td>${ele.username}</td>
                <td>${ele.email}</td>
        </tr>  
        `
    }
    hold.innerHTML=out
}

xhr.send()
