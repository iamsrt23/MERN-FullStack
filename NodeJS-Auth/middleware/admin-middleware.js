const isAdminUser = (req,res,next) =>{
  if(req.userInfo.role !== 'admin'){
    return res.status(403).json({message: 'Access Denied ! Admin rights required.'})
  }
  next()
}

module.exports = isAdminUser;