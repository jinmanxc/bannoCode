let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs'); 

axios.get('https://banno.com/')
    .then((response) => {
        if(response.status === 200) {
        const html = response.data;
            const $ = cheerio.load(html); 
            let bannoList = [];
            $('.footer-column').each(function(i, elem) {
                bannoList[i] = {
                    title: $(this).find('li').text().trim(),
                    url: $(this).children('a').attr('href'),
                    tags: $(this).find('.tags').text().split('#')
                          .map(tag =>tag.trim())
                          .filter(function(n){ return n != "" })
                }
            console.log(html)
            console.log(bannoList[0])
            });          
    }
    }, (error) => console.log(err) );

