/**

if(message.content==="gms"){
    main();
}

client.commands.get('Words').execute(message, args, contentss, Embed);

}

async function main(){
let response =await fetch('https://www.alfa.srolatino-servers.com/')
html = await response.text();

let $ = cheerio.load(html)
let x = ($ ('div.fortress').text())

console.log(x);
message.channel.send(x);
//console.log($ ('div.fortress') )

} 
 */