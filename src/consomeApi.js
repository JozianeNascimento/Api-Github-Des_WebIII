const axios = require('axios');
const { send } = require('process');
var nome, url, linguagens, tamanho;


module.exports = {

    async consomeApiGitHub(req,res){
        const {name} = req.params;
        
        await axios.get('https://api.github.com/users/'+name+'/repos').then(function(resposta){
            var dados = resposta.data;

            nome = JSON.stringify(dados,["name"]);
            url = dados.languages_url;
            linguagens = dados.language;
            tamanho = dados.size;

            console.log(nome);
            const fs = require("fs");
            fs.writeFile("./base_repo.json", JSON.stringify(dados,["id","name","full_name","size","languages_url","language"], 2 ),"utf-8", (error, result)=>{
                if(error){
                    console.error(error)
                    return
                }
            });
        return res.send('<html><head><body><h1>' + nome + '</h1></body></head></html>');


        }).catch((err)=> {
            res.json({msg: "Perfil não encontrado!" + err})
        })
        
    }
}