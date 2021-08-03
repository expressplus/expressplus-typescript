const { Service,Router,ExpressPlusDebug } = require('@ulvimemmeedov/expressjsplus');

class App {

    private _port = process.env.PORT || 3000;

    StartApp = () => {

        Router.route('/').get((req,res,next) => res.json({ message:"Hello Express +" }));
    
        ExpressPlusDebug.default.Start(Service);

        Service.use(Router).listen(this._port,()=> console.log(`app running port ${this._port}`));

    }

}

const app = new App();

app.StartApp();