var flatiron = require('flatiron'),
      app = flatiron.app;
  
app.use(flatiron.plugins.http, {
// HTTP options
});


function benchmark() {
    var dust = require('dustjs-linkedin');
    var fs = require('fs');
    
    var layout, howItWorks, html; 
    
    layout = fs.readFileSync('/data/Framework-Tests/node/layout.dustc', 'utf8');
    
    howItWorks = fs.readFileSync('/data/Framework-Tests/node/howItWorks.dustc', 'utf8');

    // console.log(layout);
        // console.log(howItWorks);

    
    //var compiledLayout = dust.compile(layout, 'layout');
    //var compiledHowItWorks = dust.compile(howItWorks, 'howItWorks');
    
    dust.loadSource(layout);
    dust.loadSource(howItWorks);
    
    dust.render('howItWorks.html', {host: 'justin.flipkey.net'}, function(err, output) {
        if(err) {
            console.log(err);
        }
        html = output;
    });
    
    this.res.end(html);
}

//
// app.router is now available. app[HTTP-VERB] is also available
// as a shortcut for creating routes
//
app.router.get('/benchmark', benchmark);

app.start(8888);