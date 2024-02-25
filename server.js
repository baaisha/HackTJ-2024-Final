console.log('by bye');

            const express = require('express');
            console.log('hello 2');
            const app = express();
            const mssql = require("mssql");

            console.log('hello 2');
            // Configure your database credentials
            const config = {
                port: 3306,
                user: 'root',
                password: 'TookuPaara1',
                server: 'localhost',
                database: 'math_help'
            };

            console.log('hello 3');

            // Connect to your database
            mssql.connect(config, function (err) {
                if (err) console.log(err);

                // Create Request object to perform query operation
                let request = new mssql.Request();

                // Query the database and get the records
                request.query('SELECT * FROM unit1', function (err, records) {
                    if (err) console.log(err);
                    // Send records as a response to the browser
                    //res.send(records);
                    console.log("my records")
                    console.log(records);
                });
            });

            // console.log('hello 4');
            // let server = app.listen(5000, function () {
            //     console.log('Server is listening at port 5000...');
            // });