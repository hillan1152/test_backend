if(!process.env.DB_ENV || process.env.DB_ENV === "testing"){
    require('dotenv').config();
  };
  
  // IMPORT DEPENDENCIES
  const express = require('express');
  const cors = require('cors');
//   const helmet = require('helmet');

  
  const server = express();
//   server.use(helmet());
  server.use(cors());;


  
  
  // SET UP BASIC ENDPOINTS
    server.get('/', (req, res) => {
      res.status(200).json(`Server is running on ${process.env.PORT}`)
    });
    
     
    module.exports = server;