const dberr = (error, res) => {
  if(error.code === "ECONNREFUSED" && error.port === 5432){
    console.log('send db error')
    res.status(500).json({
      status: 'error',
      error: error,
      message: "Failed to connect to database"
    });
  }
}

module.exports = dberr
