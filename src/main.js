import axios from "axios"

const fs = require("fs")
var name = "JozianeNascimento"

async function buscaInfoRepo() {

    const response = await axios.get("https://api.github.com/users/"+name+"/repos")
    //console.log(response.data)
    var dados = response.data

    fs.writeFile("./base_repo.json", JSON.stringify(dados,["id","name","full_name","size","languages_url","language"], 2 ),"utf-8", (error, result)=>{
        if(error){
            console.error(error)
            return
        }
    });
    
}

async function leJson(){
    fs.readFile("./base_repo.json", "utf-8", (error, data) => {
        try{
            const repos = JSON.parse(data)
            console.log(repos)
        } catch (e){
            console.log(e)
        }
    }
)}


buscaInfoRepo()
leJson()
