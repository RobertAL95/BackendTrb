const success = (req, res, message, status) => {
    res.status(status || 200).json({ error: '', message });
  };
  
  const error = (req, res, message, status) => {
    res.status(status || 500).json({ error: message, message: '' });
  };
  
  module.exports = { success, error };
  