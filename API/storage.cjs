const {Blockchain1} = require('./blockchain.cjs');

//connect to database
class Database {
	constructor(options = {}) {
		this._host = options.hasOwnProperty('host') ? 
			options.host : "localhost";
		this._name = options.hasOwnProperty('name') ? 
			options.name : "Blockchain";
		this._url = options.hasOwnProperty('url') ? 
			options.url : `mongodb://${this._host}/${this._name}`

		this._connectingOperation = null;
		this._isConnecting = false;
		this._isConnected = false;
	}

	async close() {
		return this._db.close();
	}

	async connect(url = this._url) {
		if(this._isConnected) {
			return Promise.resolve(this._db);
		}
		if(this._isConnecting) {
			return this._connectingOperation;
		}

		this._isConnecting = true;

		this._connectingOperation = mongoose.createConnection(url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false,
			}).then(db => {
				this._db = db;
				this.blockModel = 
				this._db.model('Block', Blockchain1, 'blocks');
				this._isConnected = true;
				this._isConnecting = false;
				return Promise.resolve(this);
			}).catch(err => {
				this._isConnected = false;
				this._isConnecting = false;
				return Promise.reject(err);
			});
        }
    }

    module.exports = Database;